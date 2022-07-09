import { useEffect, useState } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';
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
import TransactionList from './pages/TransactionList';
import Transaction from './pages/Transaction';

function App() {
  // let admin;
  // if (localStorage.getItem('persist:root') != null) {
  //   admin = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
  //     .currentUser?.isAdmin;
  // }
  // console.log(
  //   JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
  //     .currentUser?.isAdmin
  // );
  const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const isAdmin = currentUser?.isAdmin;
  // const isAdmin = localStorage.getItem('isAdmin');

  return (
    <>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          {isAdmin && (
            <>
              <Topbar />
              <div className='flex mt-[10px]'>
                <Sidebar />
                <PrivateRoute exact path='/'>
                  <Home />
                </PrivateRoute>
                <PrivateRoute path='/users'>
                  <UserList />
                </PrivateRoute>
                <PrivateRoute path='/user/:userId'>
                  <User />
                </PrivateRoute>
                <PrivateRoute path='/newuser'>
                  <NewUser />
                </PrivateRoute>
                <PrivateRoute path='/products'>
                  <ProductList />
                </PrivateRoute>
                <PrivateRoute path='/product/:productId'>
                  <Product />
                </PrivateRoute>
                <PrivateRoute path='/newproduct'>
                  <NewProduct />
                </PrivateRoute>
                <PrivateRoute path='/transactions'>
                  <TransactionList />
                </PrivateRoute>
                <PrivateRoute path='/transaction/:transactionId'>
                  <Transaction />
                </PrivateRoute>
              </div>
            </>
          )}
        </Switch>
      </Router>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}

export default App;

function PrivateRoute({ children, ...rest }) {
  const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const isAdmin = currentUser?.isAdmin;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
