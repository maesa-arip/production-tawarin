import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import RadioCard from "@/Components/RadioCard";
import Hero from "@/Components/Hero";
import HideScrollBar from "@/Components/HideScrollBar";
import Feature from "@/Components/Feature";
import CTA from "@/Components/CTA";
import Feature2 from "@/Components/Feature2";
import SocialShare from "@/Components/SocialShare";
import Footer from "@/Components/Footer";

export default function Home() {
    return (
        <div>
            <Head title="Home" />
            
            {/* <RadioCard/> */}
            <Container>
            <Hero />
            <CTA />
            <Feature />
            <Feature2 />
            <Footer/>
                <HideScrollBar />

            </Container>
            
        </div>
    );
}

Home.layout = (page) => <App children={page}></App>;
