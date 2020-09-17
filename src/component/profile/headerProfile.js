import React from "react";


const HeaderProfile = (props)=>{

    return(
        <div>
            <h2>PROFILE</h2>
            <div>
                <div>UserName - </div>
                <span>{props.name}</span>

                {/* eslint-disable-next-line no-undef */}
                <div>User photo:
                    <img src={props.avatar}/>
                    </div>

            </div>
            <button onClick={props.logaut}>logaut</button>

        </div>
    )
}

export default HeaderProfile