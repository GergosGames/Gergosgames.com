import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Shapetoss from "./pages/Shapetoss";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="games" element={<Games />} />
      <Route path="games/shapetoss" element={<Shapetoss />} />
      
    </Routes>
  </BrowserRouter>,
  rootElement
);

//<Route path="games/shapetoss" element={<Shapetoss/>} />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//hi
reportWebVitals();
