import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavBar from './components/navbar';
import TodoApp from './components/todo-app';
import About from './pages/about';


const App: React.FC = () => {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={TodoApp} path="/" exact />
          <Route component={About} path="/about" exact />
        </Switch>
      </BrowserRouter>
  );
};

export default App;
