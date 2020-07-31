import React from "react";


const HeaderProfile = (props)=>{



    return(
        <div>
            <h2>PROFILE</h2>
            <div>
                <div>UserName - </div>
                <span>{props.name}</span>
                <div>UserPhoto</div>

            </div>
            <button onClick={props.logaut}>logaut</button>

        </div>
    )
}

export default HeaderProfile