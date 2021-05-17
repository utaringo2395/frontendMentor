import React, { Component } from 'react';

import stylesLand from './styles/Landing.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Alert from './components/Alert'; 
import Logo from './components/imgs/logo.svg'



class App extends Component {
  render (){
    return(
      <section className={stylesLand.landing}>
        <div className={stylesLand.nav1}>
          <nav className="navbar navbar-expand-md navbar-dark" aria-label="Fourth navbar example" >
            <div className="container">
                <a className="navbar-brand" href="/#">
                <img src={Logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item dropdown ml-5">
                    <a className="nav-link dropdown-toggle" href="/#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Product</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown04">
                        <li><a className="dropdown-item" href="/#">Section 1</a></li>
                        <li><a className="dropdown-item" href="/#">Section 2</a></li>
                        <li><a className="dropdown-item" href="/#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item dropdown ml-5">
                      <a className="nav-link dropdown-toggle" href="/#" id="dropdown05" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                      <ul className="dropdown-menu" aria-labelledby="dropdown05">
                          <li><a className="dropdown-item" href="/#">Section 1</a></li>
                          <li><a className="dropdown-item" href="/#">Section 2</a></li>
                          <li><a className="dropdown-item" href="/#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown ml-5">
                      <a className="nav-link dropdown-toggle" href="/#" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">Connect</a>
                      <ul className="dropdown-menu" aria-labelledby="dropdown06">
                          <li><a className="dropdown-item" href="/#">Section 1</a></li>
                          <li><a className="dropdown-item" href="/#">Section 2</a></li>
                          <li><a className="dropdown-item" href="/#">Something else here</a></li>
                      </ul>
                    </li>
                </ul>
                <a className="nav-link" href="/#">Login</a>
                <a className="nav-link" href="/#">Sign Up</a>
                </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 justify-content-center">
              <div className={stylesLand.initWrapper}>
                <h1 className={stylesLand.title}>A modern publishing platform</h1>
                <p className={stylesLand.desc}>Grow your audience and build your online brand</p>
              </div>
              <div className={stylesLand.ctaWrapper}>
                <button className={stylesLand.btnSolid}>Start for Free</button>
                <button className={stylesLand.btnLine}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default App;

