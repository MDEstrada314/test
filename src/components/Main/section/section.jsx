import React, {useState, useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";


import NewBook from "./children-components/NewBook.jsx";
import Authors from "./children-components/Authors.jsx";
import Recents from "./children-components/Recents.jsx";
import Tips from "./children-components/Tips";
import Last from "./children-components/Last";
import Statistics from "./children-components/Statistics.jsx";

export default function Section(){

    return(
        <div className="container flexible">
            <div className="main-content">
                <NewBook></NewBook>
                <div className="information">
                    <Authors/>
                    <Recents/>
                </div>
                <Tips/>
        
            </div>
                <Last />
        </div>
    )
}