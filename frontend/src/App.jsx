import { GlobalProvider } from "./context/GlobalContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import CreateAccount from "./pages/User/CreateAccount.jsx";
import SignIn from "./pages/User/SignIn.jsx";
import Home from "./pages/Home/Home.jsx";
import LostItemForm from "./pages/Home/LostItemForm.jsx";


function App() {

  return (
    <GlobalProvider>
      <UserProvider>
        <Routes>
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/create-account"
            element={<CreateAccount />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/lost-item-report"
            element={<LostItemForm />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserProvider>
    </GlobalProvider>

  );
}

export default App;
