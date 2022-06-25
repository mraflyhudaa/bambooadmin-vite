import { useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Topbar />
      <div className='flex mt-[10px]'>
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId'>
            <User />
          </Route>
          <Route path='/newUser'>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
