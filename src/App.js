import {BrowserRouter as Router , Route , Switch} from "react-router-dom"

import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
     <Router>
        <Header/>
       <Switch>
         <Route path="/" exact component={ProductList} />
         <Route path="/product/:productId" component ={ProductDetails}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
