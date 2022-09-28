import "./App.css";
import Home from "./main/home-page/Home";
import Cart from "./main/cart-page/Cart";
import Detail from "./main/detail-page/Detail";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./main/redux-page/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          {/* <Route path="cart" element={<Cart />} ></Route> */}
          <Route path="detail" element={<Detail />} ></Route>

        </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
