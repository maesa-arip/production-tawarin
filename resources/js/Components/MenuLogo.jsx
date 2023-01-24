import React from "react";
import Logo from "../../img/Tawarin.png";

export default function MenuLogo({ className }) {
    return (
        <div>
            {/* <span className="sr-only">Workflow</span> */}
            <img className="inline-block h-6 mb-1" alt="logo" src={Logo} />
        </div>
    );
}
