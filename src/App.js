import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Error from './pages/404';
import PrivateRoute from './pages/PrivateRoute'
import AuthWrapper from './pages/AuthWrapper';

function App() {
  return (
   <AuthWrapper>
      <BrowserRouter> 
    <Switch>
      <PrivateRoute path="/"  exact>
        <Dashboard/>
        </PrivateRoute>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="*"  exact>
          <Error/>
        </Route>

    </Switch>
    </BrowserRouter>
   </AuthWrapper>
  );
}

export default App;
