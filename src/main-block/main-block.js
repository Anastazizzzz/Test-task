import React from "react";
import CircleMask from "./script-main-block.js"
import './main-block.css';
import Bed from "./bed.png"

function MainBlock(){
    return(
            <div className="Content">
                <div>
                    <div className="Content_background-text">
                        <h1 className="Circle-block__header">DOCTOR SLEEP</h1>
                    </div>
                    <CircleMask />
                </div>

            
            <div className="Bed-img">
                <img src={Bed} className="Bed" alt="Bed"/>
            </div>
        </div>

        
    )
}

export default MainBlock;