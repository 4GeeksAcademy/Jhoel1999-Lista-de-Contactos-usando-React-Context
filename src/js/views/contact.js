import React from "react";
import { Navbar } from "../component/navbar";
import { ContactCard } from "../component/card";

export function Contact() {
    return (
        <>
            <Navbar/>
            <div className="px-5">
                <ContactCard/>
            </div>
            
        </>
        
    );
}