
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
<SupplierList></SupplierList>
    </>
  );
}

export default App;
