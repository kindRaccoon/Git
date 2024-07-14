import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Transaction from "./pages/transation/Transaction";
import Feedback from './pages/feedback/Feedback'
import Mail from './pages/mail/Mail'
import Messages from "./pages/messages/Messages";
import Sales from './pages/sales/Sales';
import Analytics from './pages/analytics/Analytics';
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Fragment } from "react";


function App() {
  // const admin = useSelector((state) => state.user.currentUser?.IsAdmin); 
  const admin = true;

  return (
    <Router>
      {admin ? (
        <>
          <Fragment>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newproduct" element={<NewProduct />} />
                <Route path="/transactions" element={<Transaction />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/mail" element={<Mail />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/analytics" element={<Analytics />} />
              </Routes>
            </div>
          </Fragment>
        </>
      )
        :
        (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        )
      }
    </Router>
  );
}

export default App;
