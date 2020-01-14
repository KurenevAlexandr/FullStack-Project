import React from 'react';
import './App.css';
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Broadsheet from "./Components/Broadsheet/Broadsheet";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WorkSpace from "./Components/Workspace/Workspace";

const login_word = "Войти";
const register_word = "Зарегистрироваться";

function App() {
  return (
      <Router>
          <div>
              <Header />
              <Route path="/" exact component={Broadsheet} />
              <Route path="/workspace" component={WorkSpace} />
              <Route path="/register" render={(props) => <Form{...props} form_action = {register_word} />} />
              <Route path="/login" render={(props) => <Form{...props} form_action = {login_word} />} />
          </div>
      </Router>
  );
}

export default App;
