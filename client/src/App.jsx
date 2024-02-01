import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Application from "./pages/Application";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import PrivatUser from "./components/PrivatUser";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivatUser />}>
          <Route path="/user-profile" element={<Profile />} />
          <Route path="/application" element={<Application />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
