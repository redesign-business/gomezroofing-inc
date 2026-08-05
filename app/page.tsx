const services = [
  {
    title: "Roof repair",
    text: "Targeted repairs for leaks, damaged shingles, flashing, and everyday wear.",
    image: "/images/6a205d7f08c28ee985696153-093edaee95.jpg",
  },
  {
    title: "Roof replacement",
    text: "Complete replacement systems built to protect Northern Nevada properties.",
    image: "/images/6a205d7fac6660124ee9e76f-88ed7b6e2b.jpg",
  },
  {
    title: "Storm damage",
    text: "Inspection, documentation, and a clear repair or replacement recommendation.",
    image: "/images/6a205d7fac6660124ee9e779-f654fd8f7c.jpg",
  },
];

const projects = [
  {
    label: "Roof installation",
    image: "/images/6a205d79a499696d31da48d2-68aed1054c.webp",
  },
  {
    label: "Roof repair",
    image: "/images/6a205d7985f563c78d7e78b1-7098cfc83d.webp",
  },
  {
    label: "Roof replacement",
    image: "/images/6a205d79b75a113972d8b2d7-4008db002d.webp",
  },
  {
    label: "New roofs",
    image: "/images/6a205d79a499696d31da48d6-a19079eed5.webp",
  },
];

const faqs = [
  {
    question: "How do I know whether I need a repair or replacement?",
    answer:
      "We inspect the roof, explain what we find, and recommend the practical path based on its condition, age, and extent of damage.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Gomez Roofing provides fast, free estimates with a clear assessment and no-pressure recommendations.",
  },
  {
    question: "Can you help after a storm?",
    answer:
      "Yes. We inspect storm damage, document the affected areas, and help clarify whether repair or replacement is appropriate.",
  },
  {
    question: "Where do you work?",
    answer:
      "We serve Reno, Sparks, Carson City, Minden, Fernley, Silver Springs, Yerington, Gardnerville, Dayton, and nearby areas.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="topline">
        <span>Licensed Nevada Contractor · LC NV #0094769</span>
        <span>Mon–Fri, 8:00 AM–5:00 PM</span>
      </div>

      <nav aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Gomez Roofing home">
          <img
            src="/images/6a205d7dac6660124ee9e738-b6e227fcd6.png"
            alt="Gomez Roofing Inc."
          />
        </a>
        <div className="navlinks">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="button button-small" href="#estimate">
          Get a Free Estimate
        </a>
      </nav>

      <header className="hero" id="top">
        <img
          className="hero-image"
          src="/images/6a205d7f96f578c49457e020-67fc45d7fc.jpg"
          alt="A completed Gomez Roofing project in Northern Nevada"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Northern Nevada’s local roofing team</p>
          <h1>Built to weather<br />what comes next.</h1>
          <p className="hero-copy">
            Professional roof repair, replacement, and installation backed by
            more than 25 years of hands-on experience.
          </p>
          <a className="button" href="#estimate">
            Get a Free Estimate <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-note">
          <span>Residential</span>
          <i />
          <span>Commercial</span>
          <i />
          <span>Emergency repair</span>
        </div>
      </header>

      <section className="proofbar" aria-label="Gomez Roofing at a glance">
        <div><strong>100+</strong><span>projects completed</span></div>
        <div><strong>25+</strong><span>years of experience</span></div>
        <div><strong>5.0</strong><span>Angi rating · 32 reviews</span></div>
      </section>

      <section className="intro shell" id="services">
        <div className="section-heading">
          <p className="eyebrow dark">Roofing done with purpose</p>
          <h2>Clear advice.<br />Quality work.</h2>
          <p>
            From the first inspection to the final cleanup, our local team
            brings professional service and proven roofing experience to every
            property.
          </p>
          <a className="text-link" href="#estimate">Get a Free Estimate →</a>
        </div>
        <img
          className="intro-image"
          src="/images/6a205d7da499696d31da4951-047947080f.jpg"
          alt="Gomez Roofing specialist at work"
        />
        <div className="stamp"><b>99%</b><span>quality work</span></div>
      </section>

      <section className="services shell">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="image-wrap">
              <img src={service.image} alt={`${service.title} by Gomez Roofing`} />
              <span>0{index + 1}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </section>

      <section className="work" id="work">
        <div className="shell work-heading">
          <div>
            <p className="eyebrow">Proof is in the roof</p>
            <h2>Recently completed<br />across Reno.</h2>
          </div>
          <p>
            Real residential and commercial projects, completed by our local
            roofing team.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <figure key={project.label}>
              <img src={project.image} alt={`Completed ${project.label.toLowerCase()} project`} />
              <figcaption><span>{project.label}</span><span>View project ↗</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="reviews shell" id="reviews">
        <div className="review-visual">
          <img
            src="/images/6a205d7908c28ee9856960a1-e89212ebb3.webp"
            alt="Completed storm-damage roofing work"
          />
          <div className="rating-card">
            <span>★★★★★</span>
            <strong>5.0 on Angi</strong>
            <small>Reviews from real customers</small>
          </div>
        </div>
        <div className="review-copy">
          <p className="eyebrow dark">Trusted close to home</p>
          <h2>32 reasons to feel confident.</h2>
          <blockquote>
            “Gomez Roofing has earned a 5-star rating from 32 customer reviews,
            built one careful project at a time.”
          </blockquote>
          <div className="mini-proof">
            <span><b>4.8★</b> customer rating</span>
            <span><b>Certified</b> local team</span>
          </div>
        </div>
      </section>

      <section className="coverage">
        <img
          src="/images/6a205d795cd41fa7c6a2910f-05c40b50b0.webp"
          alt="Gutter installation completed by Gomez Roofing"
        />
        <div className="coverage-panel">
          <p className="eyebrow">One local team, eight core services</p>
          <h2>Protection from the roofline down.</h2>
          <div className="service-list">
            <span>Roof installation</span><span>Roof inspection</span>
            <span>Roof repair</span><span>Storm damage</span>
            <span>Roof replacement</span><span>Emergency repair</span>
            <span>Gutter installation</span><span>Commercial roofing</span>
          </div>
          <p className="areas">
            Serving Reno, Sparks, Carson City, Minden, Fernley, Silver Springs,
            Yerington, Gardnerville, and Dayton.
          </p>
          <a className="button" href="#estimate">Get a Free Estimate →</a>
        </div>
      </section>

      <section className="faq shell" id="faq">
        <div className="faq-image">
          <img
            src="/images/6a205d7bac6660124ee9e717-e60108b0e6.webp"
            alt="Roof inspection after a Northern Nevada storm"
          />
          <p>After strong weather, damage is not always visible from the ground.</p>
        </div>
        <div className="faq-copy">
          <p className="eyebrow dark">Good questions, straight answers</p>
          <h2>Before we get on the roof.</h2>
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<span>+</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="estimate" id="estimate">
        <img
          src="/images/6a19982b80841a99db826eef-248f09ac67.jpg"
          alt="Contact Gomez Roofing in Reno, Nevada"
        />
        <div className="estimate-shade" />
        <div className="estimate-copy">
          <p className="eyebrow">A stronger roof starts here</p>
          <h2>Let’s take a look.</h2>
          <p>Fast assessment. Clear recommendations. No pressure.</p>
          <a className="button light" href="tel:7752204668">Get a Free Estimate →</a>
          <span>Call 775-220-4668</span>
        </div>
      </section>

      <footer>
        <div className="footer-brand">GOMEZ <span>ROOFING INC.</span></div>
        <div><b>Reno, Nevada</b><span>Serving Northern Nevada</span></div>
        <div><b>775-220-4668</b><span>info@gomezroofing-inc.com</span></div>
        <div><b>LC NV #0094769</b><span>Licensed contractor</span></div>
      </footer>

      <style>{`
        :root { --ink:#17201e; --cream:#f4f0e7; --orange:#e8582a; --sage:#899487; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--cream); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; text-decoration:none; }
        img { display:block; width:100%; object-fit:cover; }
        .shell { width:min(1180px, calc(100% - 48px)); margin-inline:auto; }
        .topline { min-height:34px; padding:8px 4vw; display:flex; justify-content:space-between; background:var(--ink); color:#d8ddd7; font-size:11px; letter-spacing:.12em; text-transform:uppercase; }
        nav { height:92px; padding:0 4vw; display:flex; align-items:center; justify-content:space-between; background:#faf8f2; }
        .brand img { width:150px; height:68px; object-fit:contain; }
        .navlinks { display:flex; gap:32px; font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; }
        .navlinks a:hover, .text-link:hover { color:var(--orange); }
        .button { display:inline-flex; gap:22px; align-items:center; justify-content:center; padding:17px 22px; background:var(--orange); color:white; border:1px solid var(--orange); font-size:12px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; transition:.2s ease; }
        .button:hover { background:#c8431c; border-color:#c8431c; }
        .button-small { padding:13px 17px; }
        .hero { min-height:680px; position:relative; display:flex; align-items:center; overflow:hidden; color:white; }
        .hero-image, .hero-shade { position:absolute; inset:0; height:100%; }
        .hero-image { object-position:center 62%; }
        .hero-shade { background:linear-gradient(90deg,rgba(11,18,16,.9) 0%,rgba(11,18,16,.55) 48%,rgba(11,18,16,.06) 78%); }
        .hero-content { position:relative; z-index:1; width:min(1180px, calc(100% - 48px)); margin:auto; padding-bottom:50px; }
        .eyebrow { margin:0 0 18px; color:#f2b49f; font-size:11px; font-weight:800; letter-spacing:.19em; text-transform:uppercase; }
        .eyebrow.dark { color:var(--orange); }
        h1,h2 { margin:0; font-family:Georgia, 'Times New Roman', serif; font-weight:400; letter-spacing:-.045em; line-height:.93; }
        h1 { max-width:800px; font-size:clamp(62px,8.4vw,118px); }
        h2 { font-size:clamp(44px,5.5vw,76px); }
        .hero-copy { max-width:560px; margin:26px 0 30px; color:#e4e6e1; font-family:Georgia,serif; font-size:19px; line-height:1.55; }
        .hero-note { position:absolute; right:4vw; bottom:27px; display:flex; align-items:center; gap:14px; font-size:10px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; }
        .hero-note i { width:4px; height:4px; border-radius:50%; background:var(--orange); }
        .proofbar { min-height:130px; display:grid; grid-template-columns:repeat(3,1fr); background:var(--orange); color:white; }
        .proofbar div { padding:27px 6vw; display:flex; align-items:center; gap:18px; border-right:1px solid rgba(255,255,255,.25); }
        .proofbar strong { font-family:Georgia,serif; font-size:46px; font-weight:400; }
        .proofbar span { max-width:110px; font-size:11px; line-height:1.45; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
        .intro { position:relative; padding:130px 0 70px; display:grid; grid-template-columns:.8fr 1.2fr; align-items:center; gap:9vw; }
        .section-heading > p:not(.eyebrow) { max-width:410px; margin:28px 0; color:#56605b; font-family:Georgia,serif; font-size:17px; line-height:1.65; }
        .text-link { padding-bottom:6px; border-bottom:1px solid; font-size:11px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        .intro-image { height:520px; filter:saturate(.75); }
        .stamp { position:absolute; right:39%; bottom:35px; width:150px; height:150px; border-radius:50%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:var(--ink); color:white; transform:rotate(-8deg); }
        .stamp b { font-family:Georgia,serif; font-size:42px; font-weight:400; }
        .stamp span { font-size:9px; letter-spacing:.14em; text-transform:uppercase; }
        .services { padding:60px 0 140px; display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .image-wrap { position:relative; overflow:hidden; }
        .image-wrap img { height:330px; transition:transform .5s ease; }
        .service-card:hover img { transform:scale(1.03); }
        .image-wrap span { position:absolute; right:0; bottom:0; padding:12px 15px; background:var(--cream); font-family:Georgia,serif; }
        .service-card h3 { margin:22px 0 10px; font-family:Georgia,serif; font-size:28px; font-weight:400; text-transform:capitalize; }
        .service-card p { margin:0; color:#66706b; font-size:14px; line-height:1.6; }
        .work { padding:120px 0 0; background:var(--ink); color:white; }
        .work-heading { padding-bottom:65px; display:flex; align-items:end; justify-content:space-between; }
        .work-heading > p { max-width:330px; margin:0; color:#aeb6b0; line-height:1.6; }
        .project-grid { display:grid; grid-template-columns:repeat(4,1fr); }
        figure { margin:0; position:relative; overflow:hidden; }
        figure img { height:480px; filter:saturate(.7) brightness(.88); transition:.4s; }
        figure:hover img { transform:scale(1.025); filter:saturate(1); }
        figcaption { position:absolute; inset:auto 0 0; padding:60px 22px 22px; display:flex; justify-content:space-between; align-items:end; background:linear-gradient(transparent,rgba(0,0,0,.82)); font-size:10px; letter-spacing:.1em; text-transform:uppercase; }
        figcaption span:first-child { font-family:Georgia,serif; font-size:20px; letter-spacing:0; text-transform:none; }
        .reviews { padding:140px 0; display:grid; grid-template-columns:1fr 1fr; gap:9vw; align-items:center; }
        .review-visual { position:relative; }
        .review-visual > img { height:560px; }
        .rating-card { position:absolute; right:-40px; bottom:35px; width:245px; padding:25px; display:flex; flex-direction:column; background:var(--orange); color:white; }
        .rating-card > span { letter-spacing:.15em; }
        .rating-card strong { margin:13px 0 5px; font-family:Georgia,serif; font-size:24px; font-weight:400; }
        .rating-card small { text-transform:uppercase; letter-spacing:.08em; }
        .review-copy blockquote { margin:34px 0; padding-left:25px; border-left:2px solid var(--orange); color:#4e5853; font-family:Georgia,serif; font-size:20px; line-height:1.6; }
        .mini-proof { display:flex; gap:30px; }
        .mini-proof span { display:flex; flex-direction:column; gap:5px; color:#6a736f; font-size:11px; text-transform:uppercase; letter-spacing:.08em; }
        .mini-proof b { color:var(--ink); font-family:Georgia,serif; font-size:21px; font-weight:400; text-transform:none; }
        .coverage { display:grid; grid-template-columns:1fr 1fr; min-height:680px; }
        .coverage > img { height:100%; min-height:680px; }
        .coverage-panel { padding:90px max(5vw,45px); background:#46504b; color:white; }
        .service-list { margin:45px 0 35px; display:grid; grid-template-columns:1fr 1fr; border-top:1px solid #717a76; }
        .service-list span { padding:16px 0; border-bottom:1px solid #717a76; font-size:12px; text-transform:uppercase; letter-spacing:.08em; }
        .areas { max-width:570px; color:#c5cac6; font-family:Georgia,serif; line-height:1.6; }
        .coverage .button { margin-top:18px; }
        .faq { padding:140px 0; display:grid; grid-template-columns:.8fr 1.2fr; gap:9vw; }
        .faq-image img { height:520px; }
        .faq-image p { margin:18px 0; color:#69726e; font-family:Georgia,serif; font-style:italic; line-height:1.5; }
        .faq-copy h2 { margin-bottom:45px; }
        details { border-top:1px solid #c9c8c0; }
        details:last-child { border-bottom:1px solid #c9c8c0; }
        summary { padding:22px 0; display:flex; justify-content:space-between; gap:20px; cursor:pointer; list-style:none; font-family:Georgia,serif; font-size:18px; }
        summary::-webkit-details-marker { display:none; }
        summary span { color:var(--orange); font-family:Arial,sans-serif; }
        details p { margin:0 35px 23px 0; color:#626b67; font-size:14px; line-height:1.7; }
        .estimate { min-height:580px; position:relative; display:grid; place-items:center; text-align:center; color:white; overflow:hidden; }
        .estimate > img, .estimate-shade { position:absolute; inset:0; height:100%; }
        .estimate > img { object-position:center 58%; }
        .estimate-shade { background:rgba(13,22,19,.75); }
        .estimate-copy { position:relative; z-index:1; padding:70px 24px; }
        .estimate-copy h2 { font-size:clamp(60px,8vw,100px); }
        .estimate-copy > p:not(.eyebrow) { margin:24px 0 30px; font-family:Georgia,serif; font-size:18px; }
        .button.light { background:white; border-color:white; color:var(--ink); }
        .button.light:hover { background:var(--orange); border-color:var(--orange); color:white; }
        .estimate-copy > span { display:block; margin-top:18px; font-size:11px; letter-spacing:.1em; text-transform:uppercase; }
        footer { padding:45px 4vw; display:grid; grid-template-columns:1.5fr repeat(3,1fr); gap:35px; align-items:center; background:#111816; color:white; }
        footer > div:not(.footer-brand) { display:flex; flex-direction:column; gap:7px; font-size:12px; }
        footer b { font-weight:600; }
        footer span { color:#8f9a94; font-size:10px; letter-spacing:.08em; text-transform:uppercase; }
        .footer-brand { font-family:Georgia,serif; font-size:23px; }
        .footer-brand span { display:block; color:var(--orange); }
        @media (max-width: 800px) {
          .shell { width:min(100% - 32px, 620px); }
          .topline span:last-child, .navlinks { display:none; }
          nav { height:76px; padding:0 16px; }
          .brand img { width:115px; height:55px; }
          .button-small { padding:11px; font-size:10px; }
          .hero { min-height:650px; }
          .hero-content { width:calc(100% - 32px); }
          h1 { font-size:58px; }
          .hero-note { left:16px; right:auto; gap:9px; }
          .proofbar { grid-template-columns:1fr; padding:8px 20px; }
          .proofbar div { padding:16px 0; border-right:0; border-bottom:1px solid rgba(255,255,255,.25); }
          .proofbar div:last-child { border:0; }
          .proofbar strong { min-width:85px; font-size:38px; }
          .proofbar span { max-width:none; }
          .intro, .reviews, .faq, .coverage { grid-template-columns:1fr; }
          .intro { padding-top:90px; gap:45px; }
          .intro-image { height:420px; }
          .stamp { right:8px; bottom:30px; width:120px; height:120px; }
          .services { padding:20px 0 90px; grid-template-columns:1fr; gap:45px; }
          .image-wrap img { height:300px; }
          .work { padding-top:85px; }
          .work-heading { align-items:start; flex-direction:column; gap:30px; }
          .project-grid { grid-template-columns:1fr 1fr; }
          figure img { height:330px; }
          figcaption span:last-child { display:none; }
          .reviews { padding:90px 0; gap:70px; }
          .review-visual > img { height:430px; }
          .rating-card { right:-8px; }
          .coverage > img { min-height:400px; height:400px; }
          .coverage-panel { padding:75px 24px; }
          .faq { padding:90px 0; }
          .faq-image img { height:360px; }
          footer { grid-template-columns:1fr 1fr; }
        }
        @media (max-width: 480px) {
          .hero { min-height:610px; }
          h1 { font-size:49px; }
          .hero-copy { font-size:16px; }
          h2 { font-size:43px; }
          .project-grid { grid-template-columns:1fr; }
          figure img { height:380px; }
          .service-list { grid-template-columns:1fr; }
          .service-list span:nth-child(odd) { padding-bottom:8px; border-bottom:0; }
          footer { grid-template-columns:1fr; }
        }
      `}</style>
    </main>
  );
}
