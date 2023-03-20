import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import PrivateComponent  from './components/PrivateComponents';
import Login from './components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateComponent from './components/UpdateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}/> 
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateComponent/>}/>
        <Route path="/logout" element={<h1> Logout Component</h1>}/>
        <Route path="/profile" element={<h1> Profile Component</h1>}/>
        </Route>    {/*it is a closing tag for route private component, we want to make all the route private which comes under this route */}
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
// 
export default App;
