import React from 'react';
/*import Todolist from './Todolist';
import Product from './Product';*/
import {Outlet} from 'react-router-dom';
import Header from './Header';
/*import Header1 from './Header1';
import Home1 from './Home1';
import Footer1 from './Footer';
import Middle from './Middle';*/

function App() {
  return (
  <div>
    <Header></Header>
    <Outlet></Outlet>
</div>
);
}
export default App;