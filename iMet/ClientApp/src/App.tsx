import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, MainPage } from "./App/Components";
import { SecondPage } from "./App/Components/Body/MainPage/SecondPage";
import { ThirdPage } from "./App/Components/Body/MainPage/ThirdPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/page2" element={<SecondPage />} />
          <Route path="/page3" element={<ThirdPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
