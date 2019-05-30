import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Header from './components/Header.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="AppBody">
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
