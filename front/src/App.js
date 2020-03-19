import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Users from "./components/pages/Users/Users";
import CreateUser from "./components/pages/CreateUser/CreateUser";
import UserPage from "./components/pages/UserPage/UserPage";
import ChangeUser from "./components/pages/ChangeUser/ChangeUser";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/create' component={CreateUser} />
        <Route path='/userPage' component={UserPage} />
        <Route path='/change' component={ChangeUser} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;