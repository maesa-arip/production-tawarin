import React from "react";
import Container from "./Container";

export default function Header({ title, description }) {
    return (
        <div className="py-16 mb-12 -mt-12 bg-white border-b rounded shadow-sm">
            <Container>
                <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
                <div className="text-lg leading-relaxed text-gray-500">
                    {description}
                </div>
            </Container>
        </div>
    );
}
