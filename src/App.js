import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'antd/dist/antd.css';
import Header from './components/Header.js';
import routes from './routes.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="AppBody">
          <Router>
          {
            routes.map((routes) => (
              <Route
                key={routes.key}
                exact={routes.exact}
                path={routes.path}
                component={routes.component}
              />
            ))
          }
          </Router>
          <img src={logo} className="Applogo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Applink"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <DatePicker />
            Learn React
          </a>
        </div>
      </div>
    );
  }
}
  
export default App;
