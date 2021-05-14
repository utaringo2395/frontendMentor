import React, { Component } from 'react';

import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Alert from './components/Alert'; 

class App extends Component {
  render (){
    return(
      <section id="landing">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={require('./logo.svg')} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown04">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form>
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1>hola</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default App;

