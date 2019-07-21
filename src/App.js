import React from 'react'
import './App.scss'
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import 'antd/dist/antd.css'
import Header from './components/Header.js'
import routes from './routes.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="AppBody">
          <Router>
            <Switch>
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
              <Redirect to={routes[0].path} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
  
export default App
