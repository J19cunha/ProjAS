import React, {useState} from "react"
import Logo from "./Logo"
import cart from "../assests/shopping-cart.png"
import { Link } from 'react-router-dom';
import "./NavBar.css"



export default function NavBar({ setShow, size }) {
  
   
    return (
      <nav className="nav">
        <div className="icon">
          <Link className="logoflex-row" to={"/home"}>
              <Logo icon="icon-park-solid" color="black" width="20" height="20" />
          </Link>
        </div>
        
        <ul className="nav__menu">
          <li className="nav__item">
            <a href="/encomenda" className="nav__link">
              Encomenda de produtos
            </a>
          </li>
          <li className="nav__item">
            <a href="/Consult" className="nav__link">
              Marcação de consultas
            </a>
          </li>
          <li className="nav__item">
          <a href="/userProfile" className="nav__link">
              A minha conta
            </a>
          </li>
          <li className="cart" onClick={() => setShow(false)}>
            <a className="nav__link">
              <img src={cart} width="35" height="39"></img>
            </a>
            <span>{size}</span>
          </li>


        </ul>
  
      </nav>
    );
  }