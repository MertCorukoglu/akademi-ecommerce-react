import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CategoryList from './examples/fetchSample/CategoryList';
import SupplierList from './examples/fetchSample/SupplierList';
import ProductList from './examples/fetchSample/ProductList';
import NotFound from './examples/routerSample/NotFound';
import SupplierDetail from './examples/fetchSample/SupplierDetail';


ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<ProductList />} />
      <Route path="/categories" element={<CategoryList/>}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


