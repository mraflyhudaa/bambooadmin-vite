import { useEffect, useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import UserList from './pages/UserList';
import User from './pages/User';
import NewUser from './pages/NewUser';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';
import { toast, ToastContainer } from 'react-toastify';
import TransactionList from './pages/TransactionList';

function App() {
  const admin = () => {
    if (
      JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
        .currentUser.isAdmin
    ) {
      return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
        .currentUser.isAdmin;
    } else {
      return null;
    }
  };
  // console.log(
  //   JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
  //     .currentUser?.isAdmin
  // );

  return (
    <Router>
      <Switch>
        <Route path='/login'>{admin ? <Redirect to={'/'} /> : <Login />}</Route>
        {admin ? (
          <>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />
              <ToastContainer />
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:userId'>
                <User />
              </Route>
              <Route path='/newuser'>
                <NewUser />
              </Route>
              <Route path='/products'>
                <ProductList />
              </Route>
              <Route path='/product/:productId'>
                <Product />
              </Route>
              <Route path='/newproduct'>
                <NewProduct />
              </Route>
              <Route path='/transactions'>
                <TransactionList />
              </Route>
            </div>
          </>
        ) : (
          <Redirect to={'/login'} />
        )}
      </Switch>
    </Router>
  );
}

export default App;
