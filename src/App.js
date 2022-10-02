import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Protected from './components/Protected';
function App() {
  return (
    <div className="App">
      <Router>
      {/* <Header /> */}
        <Routes>
          <Route path='/add' element={<Protected Component={AddProduct}/>} />
          <Route path='/update' element={<Protected Component={UpdateProduct}/>} />
          <Route path='/' element={<Registration/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
