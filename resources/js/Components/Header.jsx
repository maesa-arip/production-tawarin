import React from "react";
import Container from "./Container";

export default function Header({ title, description }) {
    return (
        <div className="py-4 mx-2 my-2 bg-white border rounded-lg md:mx-6">
            <Container>
                <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
                <div className="text-lg leading-relaxed text-gray-500">
                    {description}
                </div>
            </Container>
        </div>
    );
}
