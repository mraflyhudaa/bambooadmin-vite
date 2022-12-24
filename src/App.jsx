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

          <PrivateRoute exact path='/'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />
              <Home />
            </div>
          </PrivateRoute>
          <PrivateRoute path='/users'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />

              <UserList />
            </div>
          </PrivateRoute>
          <PrivateRoute path='/user/:userId'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />

              <User />
            </div>
          </PrivateRoute>
          <PrivateRoute path='/newuser'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />

              <NewUser />
            </div>
          </PrivateRoute>
          <PrivateRoute path='/products'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />

              <ProductList />
            </div>
          </PrivateRoute>
          <PrivateRoute path='/product/:productId'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />

              <Product />
            </div>
          </PrivateRoute>
          <PrivateRoute path='/newproduct'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />

              <NewProduct />
            </div>
          </PrivateRoute>
          <PrivateRoute path='/transactions'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />

              <TransactionList />
            </div>
          </PrivateRoute>
          <PrivateRoute path='/transaction/:transactionId'>
            <Topbar />
            <div className='flex mt-[10px]'>
              <Sidebar />
              <Transaction />
            </div>
          </PrivateRoute>
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
