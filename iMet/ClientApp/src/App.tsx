import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, MainPage } from "./App/Components";
import { AddInteractionPage } from "./App/Components/Body/MainPage/AddInteraction";
import { LoginPage } from "./App/Components/Body/UserManagerPage/LoginPage";
import { RegistrationPage } from "./App/Components/Body/UserManagerPage/RegistrationPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/addInteraction" element={<AddInteractionPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
