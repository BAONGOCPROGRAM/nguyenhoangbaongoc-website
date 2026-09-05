import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// The reading pace belongs to the visitor: no scroll locking, pinning or snapping.
export function useEditorialMotion(scope, variant) {
  useGSAP(() => {
    if (variant !== 1) return;
    const site = scope.current;
    const media = gsap.matchMedia();
    media.add({
      desktop: "(min-width: 821px)",
      mobile: "(max-width: 820px)",
      reduced: "(prefers-reduced-motion: reduce)",
    }, ({ conditions }) => {
      if (conditions.reduced) return;
      const desktop = conditions.desktop;
      const select = (query) => [...site.querySelectorAll(query)];
      const splits = [];
      const seams = [];
      const animations = new Map();
      let disposed = false;
      const trigger = (element) => ({
        trigger: element,
        start: "top 94%",
        toggleActions: "play none none none",
      });
      const remember = (element, animation) => {
        animations.set(element, animation);
        return animation;
      };

      // Split only headlines. Vietnamese accents and nested emphasis stay intact;
      // autoSplit recalculates actual lines when fonts load or the width changes.
      select("h1, h2, h3").forEach((heading) => {
        const hero = heading.tagName === "H1";
        const split = SplitText.create(heading, {
          type: "lines", mask: "lines", linesClass: "editorial-line", autoSplit: true,
          onSplit(self) {
            return remember(heading, gsap.from(self.lines, {
              yPercent: desktop ? 88 : 55, opacity: 0,
              duration: desktop ? 1.05 : 0.72,
              stagger: { each: desktop ? 0.095 : 0.065, amount: Math.min(self.lines.length * 0.09, 0.48) },
              ease: "power3.out", delay: hero ? 0.16 : 0.06,
              scrollTrigger: trigger(heading),
            }));
          },
        });
        splits.push(split);
      });

      select("main p, main blockquote, .check-list li, .book-facts > div, .future-note, .future-card-top, .upcoming-card-top, .hero-actions, .store-actions, .book-actions, .contact-icons, .credential-row, footer > *").forEach((element) => {
        if (element.closest(".proof-rail") || element.closest("blockquote") !== (element.matches("blockquote") ? element : null)) return;
        const small = element.matches(".eyebrow, .upcoming-status, .future-status");
        remember(element, gsap.from(element, {
          opacity: 0, y: small ? 10 : desktop ? 24 : 14,
          duration: small ? 0.65 : 0.85,
          delay: small ? 0 : 0.12, ease: "power2.out",
          scrollTrigger: trigger(element), clearProps: "opacity,transform",
        }));
      });

      // Images have their own reveal, independent of nearby paragraphs.
      select(".portrait-frame, .journey-scene, .book-art, .certificate-preview, .upcoming-visual, .phone-gallery img, .app-title-row > img").forEach((frame) => {
        const documentImage = frame.matches(".certificate-preview");
        const phone = frame.matches(".phone-gallery img");
        const phoneDelay = phone ? [...frame.parentElement.children].indexOf(frame) * 0.12 : 0;
        const timeline = gsap.timeline({ scrollTrigger: trigger(frame) });
        timeline.from(frame, {
          opacity: 0, y: phone ? 46 : 22,
          duration: desktop ? 1.35 : 0.9, delay: phoneDelay, ease: "power3.out", clearProps: "opacity,transform",
          ...(!documentImage && !phone ? { clipPath: "inset(5% 0% 7% 0%)" } : {}),
        });
        if (!documentImage && !phone) {
          timeline.to(frame, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.35, ease: "power3.out", clearProps: "clipPath" }, 0);
        }
        remember(frame, timeline);
      });

      select(".short-rule").forEach((rule) => {
        gsap.from(rule, { scaleX: 0, transformOrigin: "left", duration: 1.1, ease: "power2.inOut", scrollTrigger: trigger(rule) });
      });
      select("main > section:not(.hero):not(.proof-rail)").forEach((section) => {
        const seam = document.createElement("span");
        seam.className = "chapter-seam";
        seam.setAttribute("aria-hidden", "true");
        section.prepend(seam);
        seams.push(seam);
        gsap.from(seam, { scaleX: 0, opacity: 0, duration: 1.6, ease: "power2.inOut", scrollTrigger: trigger(section) });
      });

      // Small transform-only depth inside clipped image frames; touch keeps still.
      if (desktop) {
        select(".journey-scene img, .upcoming-visual img").forEach((image) => {
          gsap.fromTo(image, { scale: 1.10, yPercent: -2 }, {
            scale: 1.03, yPercent: 2, ease: "none",
            scrollTrigger: { trigger: image.parentElement, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        });
      }

      // Keyboard navigation must never land on an invisible link or heading.
      const revealFocus = (event) => {
        animations.forEach((animation, element) => {
          if (element === event.target || element.contains(event.target)) animation.progress(1);
        });
      };
      site.addEventListener("focusin", revealFocus);
      const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
      document.fonts.ready.then(refresh);
      const images = select("img").filter((image) => !image.complete);
      images.forEach((image) => image.addEventListener("load", refresh, { once: true }));
      ScrollTrigger.refresh();
      return () => {
        disposed = true;
        site.removeEventListener("focusin", revealFocus);
        images.forEach((image) => image.removeEventListener("load", refresh));
        splits.forEach((split) => split.revert());
        seams.forEach((seam) => seam.remove());
      };
    }, site);
    return () => media.revert();
  }, { scope, dependencies: [variant], revertOnUpdate: true });
}
