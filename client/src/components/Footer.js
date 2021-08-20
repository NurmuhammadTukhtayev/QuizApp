import React from "react";

function Footer(){
    return(
        <footer className="footer">
            <hr/>
            <h5> &copy;{new Date().getFullYear()} QUIZ APP | All right reserved | Terms Of Service | Privacy</h5>
        </footer>
    )
}

export default Footer