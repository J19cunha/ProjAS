import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "./home.png";
import "./herosection.css";
import { Text, View, StyleSheet, Pressable} from 'react-native';

import LogSign from "../../pages/LogSign";
import ButtonLogOut from "../ButtonLogOut"
import useAuth from "../../hooks/useAuth" 
import { useNavigate } from "react-router-dom";



const button2 = {
        alignItems: 'center',
        display: "table",
        paddingVertical: 12,
        width: 150,
        paddingHorizontal: 14,
        borderRadius: 10,
        marginRight: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor:"black",
        float: 'left',
}

const text2 ={
    fontSize: 16,
    lineHeight: 3,
    marginLeft:45,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
}
const button1 = {
    alignItems: 'center',
    display: "table",
    paddingVertical: 12,
    width: 150,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: 'black',
    float: 'left',
  }

  const text= {
    fontSize: 16,
    lineHeight: 3,
    marginLeft: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }


const HerosectionAfter = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  

  return (
    <div className="home" >
      <div className="headerContainer">
        <h1> HelPet </h1>
        <p> A preferência certa para um 
        dono de um animal de estimação.</p>
        <p className= "a">HelPet a mudar vidas.</p>
        <div className="buttom">
            <ButtonLogOut Text="Sair" onClick={() => [signout(), navigate("/")]}>
                Sair da conta
            </ButtonLogOut>
      </div>
      </div>
      <div className="column">
          <img src={BannerImage} alt ="home" width="630" height="500"></img>
      </div>
      
      
    </div>
  );
}

export default HerosectionAfter;