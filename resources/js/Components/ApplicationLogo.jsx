import React from "react";
import Logo from "../../img/Tawarin.png";

export default function ApplicationLogo({ className }) {
    return (
        <a href="/">
            {/* <span className="sr-only">Workflow</span> */}
            <img className="w-auto h-8 sm:h-10" src={Logo} />
        </a>
    );
}
