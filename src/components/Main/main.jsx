import React from "react";
import "./section/section"
import Navbar from "./navbar/navbar";
import Section from "./section/section";

export default function Main(){
    return(
        <div className="main">
           <Navbar/>
           <Section/>
        </div>
    )
}