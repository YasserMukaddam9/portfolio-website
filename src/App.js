import "./App.css";
import yasserimg from "./img/yasser-img.jpeg";
import html from "./img/html.png";
import css from "./img/css.png";
import javascript from "./img/javascript.png";
import sass from "./img/sass.png";
import react from "./img/react.png";
import bootstrap from "./img/bootstrap.png";
import nat8 from "./img/nat-8.jpg";
import nat9 from "./img/nat-9.jpg";
import video1 from "./img/video.mp4";
import video2 from "./img/video.webm";
import logogreen2 from "./img/logo_transparent.png";

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="css/icon-font.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="shortcut icon" type="image/png" href="img/favicon.png" />

        <title>Portfolio website</title>
      </head>
      <body>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#am" className="navigation__link">
                  <span>01</span>About Me
                </a>
              </li>
              <li className="navigation__item">
                <a href="#s" className="navigation__link">
                  <span>02</span>Skills
                </a>
              </li>
              <li className="navigation__item">
                <a href="#mp" className="navigation__link">
                  <span>03</span>My Projects
                </a>
              </li>
              <li className="navigation__item">
                <a href="#t" className="navigation__link">
                  <span>04</span>Testimonials
                </a>
              </li>
              <li className="navigation__item">
                <a href="#cf" className="navigation__link">
                  <span>05</span>Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <header className="header">
          <div className="header__logo-box">
            <img src={logogreen2} alt="Logo" className="header__logo" />
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Yasser Mukadam</span>
              <span className="heading-primary--sub">
                FrontEnd Web Developer
              </span>
            </h1>
            <a href="#cf" className="btn btn--white btn--animated">
              Contact Me
            </a>
          </div>
        </header>
        <main>
          <section className="section-about" id="am">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">About Me</h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Yasser Mukadam
                </h3>
                <p className="paragraph">
                  Hello, my name is Yasser, and I am a junior front-end web
                  developer with a Bachelor's Degree in Computer Science and a
                  Master's Degree in Information Technology. Over the past two
                  years, I have gained valuable experience working at Amazon as
                  a Seller Support Associate, where I honed my problem solving
                  and communication skills. In addition, I completed a
                  three-month internship with Pixel companies as a junior
                  front-end web developer, where I gained hands-on experience
                  working with HTML, CSS, JavaScript, and React. I am now
                  looking for opportunities to further develop my skills and
                  contribute to innovative web development projects. As a
                  creative problem solver and a team player, I am passionate
                  about delivering exceptional user experiences through
                  intuitive and visually appealing web interfaces. I am always
                  eager to learn new technologies and approaches to enhance my
                  skills and stay up-to-date with industry trends. Outside of
                  work, I enjoy watching football and reading books.My long-term
                  goal is to become a leading expert in the front-end web
                  development field and contribute to cutting-edge projects that
                  make a difference in people's lives.
                </p>
                <a
                  href="https://drive.google.com/file/d/11DA-dl3frjxJtooU0f-LNHBNXnZuSChM/view?usp=sharing"
                  className="btn-text"
                  target="__blank"
                >
                  View CV &rarr;
                </a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src={yasserimg}
                    alt="photo of me"
                    className="composition__photo"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section-features" id="s">
            <div className="row">
              <div className="col-1-of-3">
                <div className="feature-box">
                  <img src={html} alt="html" className="feature-box__icon " />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    HTML
                  </h3>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="feature-box">
                  <img src={css} alt="css" className="feature-box__icon " />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    CSS
                  </h3>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="feature-box">
                  <img
                    src={javascript}
                    alt="javascript"
                    className="feature-box__icon "
                  />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Javascript
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="feature-box">
                  <img src={react} alt="react" className="feature-box__icon " />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    React
                  </h3>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="feature-box">
                  <img src={sass} alt="sass" className="feature-box__icon " />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    SASS
                  </h3>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="feature-box">
                  <img
                    src={bootstrap}
                    alt="javascript"
                    className="feature-box__icon "
                  />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Bootstrap
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <section className="section-tours" id="mp">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">My Projects</h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">
                        Portfolio Website
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>Technology used:-</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>REACT</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <a
                        href="https://portfolio-website-yasser.netlify.app/"
                        target="_blank"
                        className="btn btn--white u-margin-bottom-medium"
                      >
                        View Project
                      </a>
                      <a href="#" className="btn btn--white">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">
                        Crypto Website
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>Technology used:-</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>REACT</li>
                        <li>ANT DESIGN</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <a
                        href="https://crypto-website-yasser.netlify.app/"
                        target="_blank"
                        className="btn btn--white u-margin-bottom-medium"
                      >
                        View Project
                      </a>
                      <a
                        href="https://github.com/YasserMukaddam9/crypto-website"
                        target="__blank"
                        className="btn btn--white"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        Football Quiz Website
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>Technology used:-</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>REACT</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <a
                        href="https://football-quiz-yasser.netlify.app/"
                        target="_blank"
                        className="btn btn--white u-margin-bottom-medium"
                      >
                        View Project
                      </a>
                      <a
                        href="https://github.com/YasserMukaddam9/quiz-website"
                        target="_blank"
                        className="btn btn--white"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a href="#cf" className="btn btn--green">
                Contact Me
              </a>
            </div>
          </section>
          <section className="section-stories" id="t">
            <div className="bg-video">
              <video className="bg-video__content" autoPlay muted loop>
                <source src={video1} type="video/mp4" />
                <source src={video2} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Nice Things People Have Said
              </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img src={nat9} alt="Person" className="story__img" />
                  <figcaption className="story__caption">
                    Ayaan Farooqui (Engineer-Metasky)
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    A hard working guy
                  </h3>
                  <p>
                    Yasser is a dedicated individual who thrives on tackling
                    challenges. He consistently demonstrates a strong work ethic
                    and is always willing to go the extra mile to achieve his
                    goals. With a can-do attitude and a passion for learning,
                    Yasser approaches every task with enthusiasm and a
                    commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img src={nat9} alt="Person" className="story__img" />
                  <figcaption className="story__caption">
                    Badre Alam (ReactNative-Viamagus)
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    A curious and driven individual
                  </h3>
                  <p>
                    Yasser is a curious and driven individual who is always
                    eager to expand his skill set. He actively seeks out new
                    opportunities to grow and approaches every challenge as a
                    chance to gain experience. With a growth mindset, Yasser is
                    constantly pushing himself to new heights in his
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-huge">
              <a href="#cf" className="btn-text">
                Contact Me &rarr;
              </a>
            </div>
          </section>
          <section className="section-book" id="cf">
            <div className="row">
              <div className="book">
                <div className="book__form">
                  <form
                    action="https://formspree.io/f/xeqbowvb"
                    method="POST"
                    className="form"
                  >
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">Contact Me</h2>
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Message"
                        required
                        id="name"
                        name="message"
                      />
                      <label htmlFor="name" className="form__label">
                        Message
                      </label>
                    </div>
                    <div className="form__group">
                      <input
                        type="email"
                        className="form__input"
                        placeholder="Email address"
                        required
                        id="email"
                        name="email"
                      />
                      <label htmlFor="email" className="form__label">
                        Email address
                      </label>
                    </div>
                    <div className="form__group">
                      <button className="btn btn--green">
                        Contact Me &rarr;
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__logo-box">
            <img src={logogreen2} alt="Logo" className="footer__img" />
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <footer className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#am" className="footer__link">
                      About Me
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#s" className="footer__link">
                      Skills
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#mp" className="footer__link">
                      My Projects
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#t" className="footer__link">
                      Testimonials
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#cf" className="footer__link">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
            <div className="col-1-of-2"></div>
          </div>
        </footer>

        {/*
        <section className="grid-test">
          <div className="row">
            <div className="col-1-of-2">Col 1 of 2</div>
            <div className="col-1-of-2">Col 1 of 2</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-1-of-3">Col 1 of 3</div>
          </div>
          <div className="row">
            <div className="col-1-of-3">Col 1 of 3</div>
            <div className="col-2-of-3">Col 2 of 3</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-2-of-4">Col 2 of 4</div>
          </div>
          <div className="row">
            <div className="col-1-of-4">Col 1 of 4</div>
            <div className="col-3-of-4">Col 3 of 4</div>
          </div>
        </section>
        */}
      </body>
    </div>
  );
}

export default App;
