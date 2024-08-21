import React, { useContext, useEffect } from "react";
import { Navbar } from "../component/navbar";
import { ContactCard } from "../component/card";
import { Context } from "../store/appContext";

export function Contact() {
    const { actions, store } = useContext(Context);

    useEffect(() => {
      actions.getAgendas();
    }, []);

    return (
        <>
            <Navbar/>
            <div className="px-5">
                {store.contacts &&
                store.contacts.length > 0 &&
                store.contacts.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        name={contact.name}
                        address={contact.address}
                        phone={contact.phone}
                        email={contact.email}
                        id={contact.id}
                    />
                ))}
            </div>
            
        </>
        
    );
}