
import { Outlet } from "react-router-dom";
import EffectSample from "./examples/effectSample/EffectSample";
import CategoryList from "./examples/fetchSample/CategoryList";
import ProductList from "./examples/fetchSample/ProductList";
import SupplierList from "./examples/fetchSample/SupplierList";
import StateSample2 from "./examples/stateSample/StateSample2";
import StateSample3 from "./examples/stateSample/StateSample3";




function App() {
 
  let newProduct = {
    name : "IPhone",
    price : 5000,
    country : 'USA'
  }

  let newUsers = ['Çağatay','Bruce','Steve','Berkay'];

  
  return (
    <>
<h1>Site Header</h1>
    <Outlet></Outlet>
<h3>Site Footer</h3>
    </>
  );
}

export default App;
