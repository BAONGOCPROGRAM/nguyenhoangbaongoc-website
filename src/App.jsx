import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./contact-channels.css";
import { useEditorialMotion } from "./useEditorialMotion.js";
import {
  ArrowRight,
  AppleLogo,
  BookOpenText,
  BracketsCurly,
  CheckCircle,
  Church,
  GithubLogo,
  Globe,
  GraduationCap,
  LinkedinLogo,
  List,
  LockKey,
  Envelope,
  Phone,
  Quotes,
  ShieldCheck,
  Sparkle,
  StarFour,
  Student,
  YoutubeLogo,
  X,
} from "@phosphor-icons/react";

const LINKS = {
  book: "https://hanhtrinhcanve.com/#/mua-sach",
  website: "https://hanhtrinhcanve.com/",
  ios: "https://apps.apple.com/vn/app/h%C3%A0nh-tr%C3%ACnh-canv%C3%AA/id6757658530",
  android: "https://play.google.com/store/apps/details?id=com.hanhtrinhcanve.app&hl=vi",
  github: "https://github.com/BAONGOCPROGRAM",
  linkedin: "https://www.linkedin.com/in/nguyenhoangbaongoc/",
  email: "mailto:baongocmobile@gmail.com",
};

const credentials = [
  {
    organization: "Google",
    title: "Google Cybersecurity Professional Certificate",
    translation: "Chứng chỉ Chuyên gia An ninh mạng của Google",
    detail: "Nền tảng bảo mật, Linux và phân tích tấn công",
    href: "https://www.credly.com/badges/81871c27-a290-482e-88b3-59e45cec3da6/public_url",
    logo: "/assets/credential-logos/google-g.svg",
    logoClass: "google",
  },
  {
    organization: "IBM",
    title: "IBM DevOps and Software Engineering Professional Certificate",
    translation: "Chứng chỉ Chuyên nghiệp về DevOps và Kỹ thuật phần mềm của IBM",
    detail: "CI/CD, Docker, Kubernetes, Python và cloud native",
    href: "https://www.credly.com/badges/13e8d3c7-96fb-4cf3-9641-19824a5f100c/public_url",
    logo: "/assets/credential-logos/ibm.svg",
    logoClass: "ibm",
  },
  {
    organization: "IBM",
    title: "IBM iOS and Android Mobile App Developer Professional Certificate",
    translation: "Chứng chỉ Chuyên nghiệp Phát triển ứng dụng di động iOS và Android của IBM",
    detail: "Swift, React Native, Flutter, Firebase và phát hành ứng dụng",
    href: "https://www.credly.com/badges/8bfb0ee8-5bf4-4a0b-a92c-49d6931f34df/public_url",
    logo: "/assets/credential-logos/ibm.svg",
    logoClass: "ibm",
  },
  {
    organization: "Yale University",
    title: "A Journey through Western Christianity",
    translation: "Chứng chỉ hoàn thành khóa học Lịch sử Kitô giáo phương Tây của Yale University",
    detail: "Khảo cứu lịch sử Kitô giáo phương Tây",
    href: "https://coursera.org/share/493dff8f34bf69f29b07d3738aa3f118",
    logo: "/assets/credential-logos/yale.svg",
    logoClass: "yale",
  },
];

const expertise = [
  {
    eyebrow: "01 · SẢN PHẨM DI ĐỘNG",
    title: "iOS & Android",
    body: "Tôi phát triển ứng dụng iOS, Android và đa nền tảng bằng Swift, React Native, Flutter và Firebase, từ lúc còn là một ý tưởng đến khi có thể đến tay người dùng.",
    icon: Phone,
  },
  {
    eyebrow: "02 · HỆ THỐNG",
    title: "DevOps & Cloud",
    body: "Tôi xây dựng quy trình CI/CD, làm việc với Docker, Kubernetes và các nền tảng đám mây để việc phát hành, vận hành và cập nhật phần mềm bớt phụ thuộc vào những thao tác thủ công.",
    icon: BracketsCurly,
  },
  {
    eyebrow: "03 · AN TOÀN SỐ",
    title: "Cybersecurity",
    body: "Tôi chưa xem bảo mật là một huy hiệu đã có, mà là một thói quen cần học suốt đời. Trong mỗi dự án, tôi cố gắng đặt thêm một câu hỏi: điều gì có thể sai, và mình có thể chuẩn bị tử tế hơn ở đâu?",
    icon: LockKey,
  },
];

function ExternalLink({ href, className = "", children, label }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>;
}

function Monogram() {
  return <span className="monogram" aria-hidden="true">NB</span>;
}

function Header({ variant }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const basePath = variant === 1 ? "/phuong-an-1" : "/phuong-an-2";
  const nav = variant === 1
    ? [
        ["Giới thiệu", "gioi-thieu"],
        ["Chứng nhận", "chung-nhan"],
        ["Tác phẩm", "tac-pham"],
        ["Dự định", "du-dinh"],
        ["Liên hệ", "lien-he"],
      ]
    : [
        ["Giới thiệu", "gioi-thieu"],
        ["Công nghệ", "cong-nghe"],
        ["Dự định", "du-dinh"],
        ["Tác phẩm", "tac-pham"],
        ["Chứng nhận", "chung-nhan"],
        ["Liên hệ", "lien-he"],
      ];

  return (
    <header className="site-header">
      <a className="brand" href={`${basePath}#top`} aria-label="Về đầu trang">
        <Monogram />
        <span>
          <strong>Nguyễn Hoàng Bảo Ngọc</strong>
          {variant === 2 && <small>Kỹ sư phần mềm · Tác giả · Người nghiên cứu Kitô giáo</small>}
        </span>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Điều hướng chính">
        {nav.map(([label, id]) => <a key={id} href={`${basePath}#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      {variant === 2 && (
        <div className="header-socials" aria-label="Liên kết nghề nghiệp">
          <ExternalLink href={LINKS.github} label="GitHub"><GithubLogo /></ExternalLink>
          <ExternalLink href={LINKS.linkedin} label="LinkedIn"><LinkedinLogo /></ExternalLink>
          <a href={LINKS.email} aria-label="Email"><Envelope /></a>
        </div>
      )}
      <button className="menu-button" type="button" aria-expanded={open} aria-label={open ? "Đóng menu" : "Mở menu"} onClick={() => setOpen((value) => !value)}>
        {open ? <X /> : <List />}
      </button>
    </header>
  );
}

function Hero({ variant }) {
  return (
    <section className="hero" id="gioi-thieu">
      <div className="hero-copy">
        <p className="eyebrow">Tác giả · Người nghiên cứu Kitô giáo · Kỹ sư phần mềm</p>
        <span className="short-rule" aria-hidden="true" />
        {variant === 1
          ? <h1>Tôi viết sách, làm ứng dụng và kể những câu chuyện đức tin theo cách <em>gần với đời thường.</em></h1>
          : <h1>Một đời làm hai việc: xây sản phẩm hữu ích và kể những câu chuyện có khả năng ở lại.</h1>}
        <p className="hero-lead">
          {variant === 1
            ? "Tôi là một kĩ sư phát triển phần mềm, đồng thời cũng dành thời gian viết sách và thực hiện các dự án Công giáo. ECCE HOMO và App Hành Trình CanVê là hai chặng đường đầu tiên tôi đã hoàn thành năm 2025 và hiện giờ tôi vẫn đang học và thiết kế để xây dựng nên nhiều App Công Giáo tốt hơn mỗi ngày."
            : "Từ ứng dụng iOS, Android và hạ tầng DevOps đến ECCE HOMO — mọi dự án đều bắt đầu từ mong muốn đưa điều khó hiểu trở nên gần gũi."}
        </p>
        {variant === 2 && <><div className="hero-actions">
          <a className="button primary" href="#hanh-trinh">Xin mời đọc tiếp <ArrowRight /></a>
          <a className="button secondary" href="#chung-nhan">Một vài dấu mốc học hỏi <ArrowRight /></a>
        </div>
        <p className="bestseller-line"><BookOpenText /> ECCE HOMO · Bestseller Sách Tôn giáo trên Fahasa, 02/2026</p></>}
      </div>
      <figure className="portrait-frame">
        <img src="/assets/nguyen-hoang-bao-ngoc.jpg" alt="Chân dung Nguyễn Hoàng Bảo Ngọc" />
        {variant === 2 && <figcaption>Nguyễn Hoàng Bảo Ngọc</figcaption>}
      </figure>
    </section>
  );
}

function ProofRail() {
  const items = [
    [Phone, "iOS & Android", "Sản phẩm di động"],
    [BracketsCurly, "DevOps", "CI/CD · Docker · Kubernetes"],
    [ShieldCheck, "Cybersecurity", "Bảo mật hệ thống & dữ liệu"],
    [GraduationCap, "Yale University", "Lịch sử Kitô giáo phương Tây"],
  ];
  return (
    <section className="proof-rail" aria-label="Năng lực tiêu biểu">
      <p className="proof-title">Nền tảng · Kinh nghiệm · Giá trị cốt lõi</p>
      <div className="proof-grid">
        {items.map(([Icon, title, body]) => (
          <div className="proof-item" key={title}>
            <span className="proof-icon"><Icon /></span>
            <span><strong>{title}</strong><small>{body}</small></span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journey({ variant }) {
  if (variant === 1) {
    return (
      <section className="journey journey-cinematic section" id="hanh-trinh" data-nav-id="gioi-thieu">
        <figure className="journey-scene" aria-hidden="true">
          <img src="/assets/upcoming-dong-song-duc-tin-v1.webp" alt="" />
        </figure>
        <div className="journey-narrative">
          <p className="eyebrow">Dòng sáng liên tục</p>
          <h2>Hai công việc khác nhau, nhưng cùng bắt đầu từ một mong muốn giản dị.</h2>
          <span className="short-rule" aria-hidden="true" />
          <p>Tôi chỉ mong những gì mình biết về công nghệ có thể trở thành một công cụ hữu ích, và những gì mình học trong đức tin có thể được kể lại bằng lời gần gũi. Nếu hai điều ấy gặp nhau ở đâu, có lẽ đó là ở mong muốn phục vụ con người.</p>
        </div>
        <blockquote>
          <Quotes aria-hidden="true" />
          “Công nghệ giúp tôi làm ra một điều; đức tin nhắc tôi nhớ vì sao điều ấy đáng làm.”
        </blockquote>
      </section>
    );
  }

  return (
    <section className="journey section" id="hanh-trinh" data-nav-id="gioi-thieu">
      <div className="section-heading journey-heading">
        <p className="eyebrow">Hai dòng chảy, một hành trình</p>
        <h2>{variant === 1 ? "Công nghệ và đức tin gặp nhau ở mong muốn phụng sự con người." : "Không phải hai con đường. Chỉ là hai cách phụng sự con người."}</h2>
      </div>
      <div className="journey-map" aria-label="Hai lĩnh vực cùng gặp nhau tại Hành Trình CanVê">
        <article>
          <span className="journey-icon"><BracketsCurly /></span>
          <p className="eyebrow">Công nghệ</p>
          <h3>Xây điều có thể sử dụng</h3>
          <p>Biến ý tưởng thành ứng dụng, hệ thống và trải nghiệm số có ích trong đời sống thật.</p>
        </article>
        <div className="journey-center" aria-hidden="true"><Sparkle /><span>Hành Trình<br />CanVê</span></div>
        <article>
          <span className="journey-icon"><BookOpenText /></span>
          <p className="eyebrow">Đức tin & tác phẩm</p>
          <h3>Kể điều có thể ở lại</h3>
          <p>Đưa lịch sử và thần học Kitô giáo ra khỏi tháp ngà bằng ngôn ngữ gần với người Việt.</p>
        </article>
      </div>
      <blockquote>
        <Quotes aria-hidden="true" />
        “Tôi không xem công nghệ và đức tin là hai thế giới tách biệt. Một bên giúp ý tưởng vận hành; bên kia giúp con người biết mình đang đi về đâu.”
      </blockquote>
    </section>
  );
}

function Expertise() {
  return (
    <section className="expertise section" id="cong-nghe">
      <div className="section-heading split-heading">
        <div><p className="eyebrow">Năng lực công nghệ</p><h2>Tôi học nghề bằng cách đi cùng sản phẩm đến những chặng cuối.</h2></div>
        <p>Mỗi dự án cho tôi thêm một bài học về trải nghiệm di động, hệ thống vận hành và an toàn dữ liệu. Tôi gom những bài học ấy lại, từng chút một, để lần sau có thể làm tốt hơn lần trước.</p>
      </div>
      <div className="expertise-list">
        {expertise.map(({ eyebrow, title, body, icon: Icon }) => (
          <article key={title}>
            <Icon /><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{body}</p>
          </article>
        ))}
      </div>
      <ExternalLink className="text-link" href={LINKS.github}>Một số dự án được chia sẻ công khai <ArrowRight /></ExternalLink>
    </section>
  );
}

function AppShowcase({ navId }) {
  return (
    <section className="app-showcase section" id="san-pham" data-nav-id={navId}>
      <div className="app-copy">
        <div className="app-title-row">
          <img src="/assets/hanh-trinh-can-ve-icon.jpg" alt="Biểu tượng ứng dụng Hành Trình CanVê" />
          <div><p className="eyebrow">Sản phẩm nổi bật</p><h2>Hành Trình CanVê</h2></div>
        </div>
        <p className="large-copy">Hành Trình CanVê là một cố gắng còn nhỏ: đưa câu chuyện về ba năm cuối của Đức Giêsu vào một trải nghiệm nghe và đọc gần gũi trên điện thoại. Tôi mong ứng dụng có thể đồng hành với ai đó trong một buổi sáng yên hoặc một tối cần được lắng lại.</p>
        <ul className="check-list">
          <li><CheckCircle /> Nghe và đọc thuận tiện trên iOS và Android</li>
          <li><CheckCircle /> Nội dung tiếng Việt được sắp theo sách, chương và từng chặng</li>
          <li><CheckCircle /> Hình ảnh và âm thanh được chuẩn bị để tải ổn định hơn</li>
        </ul>
        <div className="store-actions">
          <ExternalLink className="store-button" href={LINKS.ios}><AppleLogo weight="fill" /><span><small>Tải về trên</small>App Store</span></ExternalLink>
          <ExternalLink className="store-button" href={LINKS.android}><Globe /><span><small>Tải về từ</small>Google Play</span></ExternalLink>
        </div>
        <p className="store-note">Có mặt trên iOS và Android</p>
      </div>
      <div className="phone-gallery" aria-label="Ảnh chụp ứng dụng Hành Trình CanVê">
        <img src="/assets/app-screen-2.webp" alt="Màn hình các sách của Hành Trình CanVê" />
        <img className="featured-phone" src="/assets/app-screen-3.webp" alt="Màn hình nghe sách nói của Hành Trình CanVê" />
        <img src="/assets/app-screen-4.webp" alt="Màn hình mục lục chương của Hành Trình CanVê" />
      </div>
    </section>
  );
}

function UpcomingProjects({ id = "sap-ra-mat" }) {
  const projects = [
    {
      number: "01",
      title: "Dòng Sông Đức Tin",
      subtitle: "Bách Khoa Toàn Thư 2000 năm Hội Thánh",
      body: "Lịch sử Hội Thánh giống một dòng sông dài: có những đoạn trong trẻo, cũng có những khúc quanh nhiều thử thách. Ứng dụng được hình dung như một tấm bản đồ nhỏ để người đọc có thể đi dọc dòng chảy ấy mà không thấy mình đứng ngoài câu chuyện.",
      image: "/assets/upcoming-dong-song-duc-tin-v1.webp",
      imageAlt: "Minh họa dòng sông xuyên qua các thời kỳ trong lịch sử Hội Thánh",
      icon: Church,
      tone: "river",
    },
    {
      number: "02",
      title: "Những Vì Sao Sáng",
      subtitle: "Các thánh bổn mạng trong lòng người Việt",
      body: "Mỗi tên thánh ta mang đều từng thuộc về một con người đã sống, đã yếu đuối và đã chọn bước về phía ánh sáng. Tôi muốn kể lại những cuộc đời ấy để tên gọi quen thuộc có thêm một khuôn mặt, một câu chuyện và một lời nhắc dịu dàng.",
      image: "/assets/upcoming-nhung-vi-sao-sang-v1.webp",
      imageAlt: "Minh họa những câu chuyện về các thánh bổn mạng trong đời sống Công giáo Việt Nam",
      icon: StarFour,
      tone: "stars",
    },
  ];

  return (
    <section className="upcoming-projects section" id={id}>
      <div className="section-heading split-heading">
        <div><p className="eyebrow">Dự án sắp ra mắt</p><h2>Còn nhiều điều tôi muốn học để kể cho gần hơn.</h2></div>
        <p>Hai ứng dụng mới vẫn đang ở trên bàn làm việc. Tôi mong từng dự án có thể góp một lối vào giản dị, để người Việt dễ tìm hiểu lịch sử Hội Thánh và những cuộc đời thánh thiện đã trở nên thân quen trong đức tin.</p>
      </div>
      <div className="upcoming-grid">
        {projects.map(({ number, title, subtitle, body, image, imageAlt, icon: Icon, tone }) => (
          <article className={`upcoming-card ${tone}`} key={title}>
            <figure className="upcoming-visual"><img src={image} alt={imageAlt} /></figure>
            <div className="upcoming-card-content">
              <div className="upcoming-card-top"><span>{number}</span><Icon /></div>
              <p className="upcoming-status">Đang phát triển</p>
              <h3>{title}</h3>
              <p className="upcoming-subtitle">{subtitle}</p>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FuturePlans({ id = "du-dinh", navId }) {
  return (
    <section className="future-plans section" id={id} data-nav-id={navId}>
      <div className="future-plans-heading">
        <div>
          <p className="eyebrow">Dự định sắp tới</p>
          <h2>Tôi được nhiều người chỉ dẫn, nên cũng mong có ngày được chỉ lại cho người đến sau.</h2>
        </div>
        <p>Những dự định này vẫn còn ở bước đầu. Tôi muốn làm từ điều vừa sức: chia sẻ kiến thức lập trình miễn phí trên mạng và, khi đủ điều kiện, cùng người trẻ địa phương học thêm về nghề lẫn đức tin.</p>
      </div>

      <div className="future-paths">
        <article className="future-card future-youtube">
          <div className="future-card-top">
            <span className="future-number">01</span>
            <span className="future-icon"><YoutubeLogo weight="fill" /></span>
          </div>
          <p className="future-status">Kênh YouTube · Hoàn toàn miễn phí</p>
          <h3>Một góc học nhỏ dành cho người bắt đầu.</h3>
          <p>Không phải ai muốn học lập trình cũng có sẵn một người để hỏi. Tôi mong kênh YouTube này có thể ngồi bên cạnh các bạn trong những bước đầu tiên, giải thích chậm, làm thật và cùng sửa những lỗi rất bình thường.</p>
          <div className="future-note"><Phone /><span>Học qua bài giảng và dự án thực hành</span></div>
        </article>

        <article className="future-card future-community">
          <div className="future-card-top">
            <span className="future-number">02</span>
            <span className="future-icon"><Student /></span>
          </div>
          <p className="future-status">Lớp học dành cho người trẻ</p>
          <h3>Một căn phòng nhỏ để cùng nhau học.</h3>
          <p>Dự định của tôi không bắt đầu từ một chương trình lớn, mà từ vài buổi học vừa sức dành cho người trẻ Giáo hạt Phương Lâm. Ở đó, tôi có thể chia sẻ điều mình biết về lập trình và cùng các bạn tìm hiểu thêm về thần học Công giáo.</p>
          <div className="future-note"><Church /><span>Giáo hạt Phương Lâm · Giáo phận Xuân Lộc</span></div>
        </article>
      </div>

      <div className="future-closing">
        <span className="future-closing-line" aria-hidden="true" />
        <p>Tôi chưa biết những dự định này sẽ đi được bao xa; trước mắt, tôi chỉ mong bắt đầu cho tử tế và đi cùng các bạn từng bước một.</p>
      </div>
    </section>
  );
}

function BookShowcase() {
  return (
    <section className="book-showcase section" id="tac-pham">
      <div className="book-art"><img src="/assets/ecce-homo-cover.jpg" alt="Bìa sách ECCE HOMO của Nguyễn Hoàng Bảo Ngọc" /></div>
      <div className="book-copy">
        <p className="eyebrow">Tác phẩm sử thi Công giáo</p>
        <h2>ECCE HOMO</h2>
        <p className="book-subtitle">Sử thi về ba năm cuối cùng của Đức Giêsu thành Nazarét</p>
        <p className="large-copy">ECCE HOMO không phải là câu trả lời cuối cùng về một câu chuyện quá lớn. Đó là phần tìm hiểu và suy ngẫm của tôi về ba năm cuối của Đức Giêsu, được viết lại bằng lời bình dị với mong muốn người đọc dễ bước vào câu chuyện hơn.</p>
        <blockquote>“Nếu cuốn sách giúp một người đến gần Tin Mừng hơn một bước, phần việc của tôi đã được nhận lại quá nhiều.”</blockquote>
        <dl className="book-facts">
          <div><dt>Hình thức</dt><dd>Bìa cứng</dd></div>
          <div><dt>Dung lượng</dt><dd>550 trang · in 4 màu</dd></div>
          <div><dt>Dấu mốc</dt><dd>Bestseller Sách Tôn giáo · Fahasa 02/2026</dd></div>
        </dl>
        <div className="book-actions">
          <ExternalLink className="button primary" href={LINKS.book}>Đọc thêm về ECCE HOMO <ArrowRight /></ExternalLink>
          <ExternalLink className="text-link" href={LINKS.website}>Thăm hanhtrinhcanve.com <ArrowRight /></ExternalLink>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="credentials section" id="chung-nhan">
      <div className="section-heading split-heading">
        <div><h2>Một vài dấu mốc trên con đường còn dài.</h2></div>
        <p>Tôi xin giới thiệu những chương trình mình đã hoàn thành như một phần của quá trình học hỏi. Điều quan trọng hơn các chứng nhận, với tôi, vẫn là cách những kiến thức ấy được dùng trong công việc và trong việc phục vụ người khác.</p>
      </div>
      <article className="featured-certificate">
        <a
          className="certificate-preview"
          href="/assets/ibm-ios-android-professional-certificate.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Mở ảnh chứng chỉ IBM iOS và Android ở kích thước lớn"
        >
          <img
            src="/assets/ibm-ios-android-professional-certificate.png"
            alt="Chứng chỉ IBM iOS and Android Mobile App Developer của Nguyễn Hoàng Bảo Ngọc"
          />
        </a>
        <div className="certificate-story">
          <p className="eyebrow">Chứng chỉ tiêu biểu</p>
          <h3>IBM iOS and Android Mobile App Developer</h3>
          <p className="certificate-translation">Chứng chỉ Chuyên nghiệp Phát triển ứng dụng di động iOS và Android của IBM</p>
          <p>Chứng chỉ này ghi lại một chặng học gồm 14 khóa. Nó giúp tôi nhìn rõ hơn những phần mình đã biết, đồng thời nhận ra còn nhiều điều phải tiếp tục rèn luyện khi xây dựng ứng dụng cho iOS, Android và đa nền tảng.</p>
        </div>
      </article>
      <div className="credential-list">
        {credentials.map(({ organization, title, translation, detail, href, logo, logoClass }) => (
          <ExternalLink className="credential-row" href={href} key={title}>
            <span className={`credential-logo credential-logo-${logoClass}`} aria-hidden="true">
              <img src={logo} alt="" />
            </span>
            <span className="credential-copy">
              <small>{organization}</small>
              <strong>{title}</strong>
              <span className="credential-translation">{translation}</span>
              <span className="credential-detail">{detail}</span>
            </span>
            <ArrowRight className="credential-arrow" />
          </ExternalLink>
        ))}
      </div>
    </section>
  );
}

function ContactChannels() {
  const dialogRef = useRef(null);
  const [qrOpen, setQrOpen] = useState(false);

  useEffect(() => {
    if (!qrOpen) return;
    const previousOverflow = document.body.style.overflow;
    dialogRef.current.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [qrOpen]);

  return <>
    <div className="contact-icons" role="group" aria-label="Các kênh liên hệ">
      <a className="contact-icon-link" href={LINKS.email} aria-label="Gửi email" title="Email"><Envelope aria-hidden="true" /></a>
      <ExternalLink className="contact-icon-link" href={LINKS.linkedin} label="Mở LinkedIn"><LinkedinLogo aria-hidden="true" /></ExternalLink>
      <ExternalLink className="contact-icon-link" href={LINKS.github} label="Mở GitHub"><GithubLogo aria-hidden="true" /></ExternalLink>
      <button className="contact-icon-link" type="button" aria-label="Mở mã QR Zalo" title="Zalo" aria-haspopup="dialog" onClick={() => setQrOpen(true)}>
        <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 8h32v25H23L12 41v-8H8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><text x="24" y="25" textAnchor="middle" fill="currentColor" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12">Zalo</text></svg>
      </button>
    </div>
    {createPortal(<dialog className="zalo-dialog" ref={dialogRef} aria-labelledby="zalo-dialog-title" onClose={() => setQrOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close(); }}>
      <div className="zalo-dialog-content">
        <div className="zalo-dialog-heading"><h2 id="zalo-dialog-title">Kết nối qua Zalo</h2><button type="button" aria-label="Đóng mã QR Zalo" autoFocus onClick={() => dialogRef.current.close()}><X /></button></div>
        <img src="/assets/zalo-contact-qr.jpg" alt="Mã QR liên hệ Zalo của Bảo Ngọc" width="1260" height="1920" />
        <p>Mở Zalo để quét mã. Nếu đang dùng điện thoại, anh chị có thể lưu ảnh rồi chọn ảnh trong trình quét QR của Zalo.</p>
        <a href="/assets/zalo-contact-qr.jpg" download="Bao-Ngoc-Zalo.jpg">Lưu ảnh mã QR <ArrowRight aria-hidden="true" /></a>
      </div>
    </dialog>, document.body)}
  </>;
}

function Contact({ variant }) {
  if (variant === 1) {
    return (
      <section className="contact contact-editorial section" id="lien-he">
        <div className="contact-editorial-shell">
          <div className="contact-editorial-heading">
            <div>
              <p className="eyebrow">Khi cần, anh chị cứ để lại một lời nhắn</p>
              <h2>Một cuộc trò chuyện tử tế có thể bắt đầu từ vài dòng ngắn.</h2>
            </div>
            <p>Anh chị có thể liên hệ nếu muốn trao đổi về sách, công nghệ hay một việc có ích cho cộng đồng. Nếu đó là điều tôi biết, tôi xin được chia sẻ; nếu chưa biết, tôi cũng xin được cùng học hỏi.</p>
          </div>

          <ContactChannels />
        </div>
      </section>
    );
  }

  return (
    <section className="contact section" id="lien-he">
      <div>
        <p className="eyebrow">Cùng bắt đầu một cuộc trò chuyện</p>
        <p>Anh chị có thể liên hệ nếu muốn trao đổi về sách, công nghệ hay một việc có ích cho cộng đồng. Nếu đó là điều tôi biết, tôi xin được chia sẻ; nếu chưa biết, tôi cũng xin được cùng học hỏi.</p>
      </div>
      <ContactChannels />
    </section>
  );
}

function Footer({ variant }) {
  return (
    <footer>
      <div className="footer-brand"><Monogram /><span><strong>Nguyễn Hoàng Bảo Ngọc</strong><small>Những việc đã làm · Những điều còn học</small></span></div>
      <p>© 2026 Nguyễn Hoàng Bảo Ngọc. Nội dung và hình ảnh được bảo lưu.</p>
      {variant === 2 && <a className="variant-link" href="/phuong-an-1">Xem phương án 01 <ArrowRight /></a>}
    </footer>
  );
}

function VariantPage({ variant }) {
  const siteRef = useRef(null);
  useEditorialMotion(siteRef, variant);
  useEffect(() => {
    document.title = `Nguyễn Hoàng Bảo Ngọc — Phương án ${variant}`;

    if (variant !== 1) return undefined;

    const site = document.querySelector(".variant-1");
    const header = site?.querySelector(".site-header");
    const sectionTargets = site?.querySelectorAll("main > section[id]") ?? [];
    const navLinks = site?.querySelectorAll(".nav-links a") ?? [];

    const updateActiveSection = () => {
      const activationPoint = window.scrollY + Math.min(window.innerHeight * 0.34, 320);
      const active = [...sectionTargets].reduce((current, section) => (
        section.offsetTop <= activationPoint ? section : current
      ), sectionTargets[0]);
      if (!active) return;
      const activeNavId = active.dataset.navId || active.id;
      navLinks.forEach((link) => {
        const selected = link.getAttribute("href")?.endsWith(`#${activeNavId}`);
        link.classList.toggle("is-active", Boolean(selected));
        if (selected) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      site?.style.setProperty("--page-progress", String(progress));
      header?.classList.toggle("is-scrolled", window.scrollY > 36);
      updateActiveSection();
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // On a cold load React mounts after the browser's initial anchor lookup.
    let disposed = false;
    document.fonts.ready.then(() => {
      if (disposed || window.scrollY > 0 || !window.location.hash) return;
      const target = document.getElementById(window.location.hash.slice(1));
      if (target && site?.contains(target)) target.scrollIntoView({ behavior: "instant" });
    });

    return () => {
      disposed = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [variant]);

  return (
    <div className={`site variant-${variant}`} id="top" ref={siteRef}>
      <a className="skip-link" href="#main">Bỏ qua điều hướng</a>
      {variant === 1 && <div className="page-progress" aria-hidden="true"><span /></div>}
      <Header variant={variant} />
      <main id="main">
        <Hero variant={variant} />
        <ProofRail />
        <Journey variant={variant} />
        {variant === 1 ? (
          <>
            <Credentials />
            <BookShowcase />
            <AppShowcase navId="tac-pham" />
            <UpcomingProjects id="du-dinh" />
            <FuturePlans id="du-dinh-chia-se" navId="du-dinh" />
          </>
        ) : (
          <>
            <Expertise />
            <AppShowcase />
            <UpcomingProjects />
            <FuturePlans />
            <BookShowcase />
            <Credentials />
          </>
        )}
        <Contact variant={variant} />
      </main>
      <Footer variant={variant} />
    </div>
  );
}

function ChoicePage() {
  return (
    <main className="choice-page">
      <Monogram />
      <p className="eyebrow">Nguyễn Hoàng Bảo Ngọc · Hồ sơ cá nhân</p>
      <h1>Hai cách kể cùng một hành trình.</h1>
      <p>Chọn một phương án để xem bản landing page hoàn chỉnh. Anh có thể chuyển qua lại ở cuối mỗi trang.</p>
      <div className="choice-grid">
        <a href="/phuong-an-1"><span>01</span><strong>Sử thi đương đại</strong><ArrowRight /><small>Nền xanh đen, vàng đồng, mạnh mẽ và giàu chiều sâu.</small></a>
        <a href="/phuong-an-2"><span>02</span><strong>Hồ sơ biên tập sáng</strong><ArrowRight /><small>Nền giấy ngà, đỏ rượu, gần gũi và giàu tính tác giả.</small></a>
      </div>
    </main>
  );
}

export function App() {
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "" || path === "/phuong-an-1") return <VariantPage variant={1} />;
  if (path === "/phuong-an-2") return <VariantPage variant={2} />;
  return <ChoicePage />;
}
