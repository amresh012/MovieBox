import { Suspense } from "react";
import HomePage from "./Pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourites from "./Pages/Favourites";
import { Provider } from "react-redux";
import store from "./store/Store";

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Favourite" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App
