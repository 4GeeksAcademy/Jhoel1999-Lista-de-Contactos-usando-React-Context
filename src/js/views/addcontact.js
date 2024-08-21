import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export function AddContact() {
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  
    const handleInput = (e) => {
      setContact({ ...contact, [e.target.name]: e.target.value });
    };
    console.log(contact);
  
    const handleClick = () => {
      actions.makeContact(contact);
      setContact({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
      navigate("/");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Add a new contact</h1>
            <form onSubmit={(event) => event.preventDefault()}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" name='name' placeholder="Full Name" value={contact.name} onInput={handleInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='email' placeholder="Enter email" value={contact.email} onInput={handleInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" name='phone' placeholder="Enter phone" value={contact.phone} onInput={handleInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name='address' placeholder="Enter address" value={contact.address} onInput={handleInput}/>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={handleClick}>Save</button>
            </form>
            <Link to="/" className="d-block text-center mt-3">or get back to contacts</Link>
        </div>
    );
}
