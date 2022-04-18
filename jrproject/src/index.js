import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./routes/InitialPage/initialPage.js";
import LoginPage from "./routes/LoginPage/loginPage.js";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<InitialPage />} />
      <Route path='LoginPage' element={<LoginPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
