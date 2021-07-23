import React, {Component} from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import NotFoundPage from './pages/NotFoundPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import './App.css'

class App extends Component {
  render(){
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <div id="page-body">
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/about" component={About} />
                        <Route path="/article/:name" component={ArticlePage}  />
                        <Route path="/article-list" component={ArticleListPage}  />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </Router>
      );
  }
}

export default App;
