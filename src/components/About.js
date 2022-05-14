import React from "react";

function About(props) {
    return (
        <>
            <div className="container" style={props.mode == "dark" ? { backgroundColor: "rgb(25 28 32)", color: "white" } : { backgroundColor: "white", color: "black" }}>
                <h1>About</h1>
            </div>
        </>
    );
}


export default About;
