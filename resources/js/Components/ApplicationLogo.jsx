import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Logo from "../../img/Tawarin.png";

export default function ApplicationLogo({ className }) {
    return (
        <a href="/">
            {/* <span className="sr-only">Workflow</span> */}
            <img className="w-8 h-8" alt="logo" aria-label="applogo" src={Logo} />
        </a>
    );
}
