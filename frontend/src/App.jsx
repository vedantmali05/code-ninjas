import { GlobalProvider } from "./context/GlobalContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import CreateAccount from "./pages/auth/CreateAccount.jsx";
import SignIn from "./pages/auth/SignIn.jsx";


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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </UserProvider>
    </GlobalProvider>

  );
}

export default App;
