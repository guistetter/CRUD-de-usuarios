import React from "react";
import { Switch, Route, Redirect } from "react-router";

//switch rotas, route é a rota em si, redirect url redireciona para a home
import Home from "../components/template/home/Home";
import UserCrud from "../components/user/UserCrud";
export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UserCrud} />
    <Redirect from="*" to="/" />
  </Switch>
);
