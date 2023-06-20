import "../Styles/homepage.css"
export const Homepage = () => {
  return <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="Css.css" />
  <title>Document</title>
  <header className="header">
    <div className="leftHeader">
      <div className="Logo headerDiv">
        <img src="../Logos/paw-5892565.svg" alt="logo" width={60} />
        <h2>Pawsome Places</h2>
      </div>
      <div className="ButtonsHeader headerDiv">
        <button>Parchi</button>
        <button>Negozi</button>
        <button>Veterinari</button>
        <button>Toilettatura</button>
        <button>Cerca</button>
      </div>
    </div>
    <div className="rightHeader">
      <div className="Blog headerDiv">
        <button>Blog</button>
        <button>Forum</button>
      </div>
      <div className="Login headerDiv">
        <button>
          login/register
          <img src="./paw-5892565.svg" alt="logo" width={20} />
        </button>
      </div>
    </div>
  </header>
  <div>
    <h1 className="center">PawSome Places</h1>
    <h3 className="cente">ciao</h3>
  </div>
  <footer>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">lorem ipsum</a>
              </li>
              <li>
                <a href="#">lorem ipsum</a>
              </li>
              <li>
                <a href="#">lorem ipsum</a>
              </li>
              <li>
                <a href="#">lorem ipsum</a>
              </li>
              <li>
                <a href="#">lorem ipsum</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <a href="#">parchi</a>
              </li>
              <li>
                <a href="#">veterinari</a>
              </li>
              <li>
                <a href="#">toilettatura</a>
              </li>
              <li>
                <a href="#">negozi</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links"></div>
          </div>
        </div>
      </div>
    </footer>
  </footer>
</>

}