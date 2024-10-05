import React, { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ResetEmail from "../../pages/resetEmail/resetEmail";
import OTP from "../../pages/otp/otp";
import ForgotPassword from "../../pages/forgotPassword/forgotPassword";

const Login = lazy(() =>
  import("../../pages/login/login")
);
const Protected = lazy(() =>
  import("../../components/protected/protected")
);
const MainScreen = lazy(() =>
  import("../../screens/mainScreen")
);

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login page */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Reset Email Page */}
          <Route
            path="/reset-email"
            element={<ResetEmail />}
          />

          {/* OTP Page */}
          <Route path="/otp" element={<OTP />} />

          {/* Forgot Password */}
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          {/* Main Screen */}
          <Route
            path="/*"
            element={
              <Protected
                Component={MainScreen}
                allowedRoles={["admin"]}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
