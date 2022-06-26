
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import './App.css';
import StartHome from './pages/LetsStart/StartHome';
import Home from "./pages/Home"
import Encomenda from "./pages/Encomenda"
import LogSign from './pages/LogSign';
import Consult from "./pages/Consult";
import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';
import HeroLogin from "./components/HeroLogSign/HeroLogin";
import Subs from "./components/HeroSignUp/Subs";
import HeroSign from "./components/HeroSignUp/HeroSign";
import Cart from "./components/Encomenda/Cart";
import UserProfile from "./pages/UserProfile";
import AddClinicFilePage from "./pages/AddClinicFile";

import React from "react";


const Private = ({ Item }) =>{
  const {signed} =useAuth();

  return signed > 0 ? <Item/> : <LogSign/>; 

}

const App = () => {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Fragment>
            <Routes>
              <Route path="/" exact element={<StartHome/>} />
              <Route path="/LogSign" exact element={<HeroLogin/>}></Route>
              <Route path="/SignUp" exact element={<HeroSign/>}></Route>
              <Route path="/home" exact element={<Private Item={Home}/>}/>
              <Route path="/Encomenda" exact element={<Encomenda/>}/>
              <Route path="/userProfile" exact element={<UserProfile/>}/>
              <Route path="/addClinicFile" exact element={<AddClinicFilePage/>}/>
              <Route path="*" element={<HeroLogin />} />
              <Route path="/Consult" exact element={<Consult/>}/>
              <Route path="/Subs" exact element={<Subs/>}/>
              <Route path="/Cart" exact element={<Cart/>}/>
           </Routes>
          </Fragment>
       </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
