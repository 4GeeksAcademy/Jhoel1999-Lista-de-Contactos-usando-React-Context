import React, { useState } from "react";
import { Link } from "react-router-dom";

export function AddContact() {
    const [contacts, setContacts] = useState([]);
    const [inputName, setInputName]= useState("");
    const [inputemail, setInputEmail]= useState("");
    const [inputPhone, setInputPhone]= useState("");
    const [inputAddress, setInputAddress]= useState("");

    const handlerCreateContact = () =>{
        fetch('https://playground.4geeks.com/contact/agendas/Jhoel/contacts', {method: 'POST'})
        .then ( response => response.json())
        .then (data => {

        }

        )
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Add a new contact</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Full Name" onChange={(e) => setInputName(e.target.value)} value={inputName}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => setInputEmail(e.target.value)} value={inputemail}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter phone" onChange={(e) => setInputPhone(e.target.value)} value={inputPhone}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" onChange={(e) => setInputAddress(e.target.value)} value={inputAddress}/>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={handlerCreateContact}>Save</button>
            </form>
            <Link to="/" className="d-block text-center mt-3">or get back to contacts</Link>
        </div>
    );
}
