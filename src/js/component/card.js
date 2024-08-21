import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export function ContactCard({ name, address, phone, email, id }) {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
  
    const userValues = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      id: id,
    };
  
    const handleCLick = () => {
      actions.deleteContac(id);
      console.log(id + " eliminado correctamente");
      alert('ContactoEliminado')
    };
  
    const handleEditing = () => {
      actions.setCurrentEdit(userValues);
      navigate('/edit');
    };
    
    return(
        <div className="card p-3 shadow-sm">
            <div className="d-flex align-items-center">
                <div className="col-3 text-center">
                    <img src="https://picsum.photos/id/237/200/300" alt="Profile of Mike Anamendolla" className="img-fluid rounded-circle mx-auto" style={{ width: '150px', height: '150px', objectFit: 'cover'}}/>
                </div>
                <div className="col-6">
                    <h2 className="h5">{name}</h2>
                    <p className="text-muted"><i className="fa-solid fa-location-dot me-2"></i>{address}</p>
                    <p className="text-muted"><i className="fa-solid fa-phone me-2"></i>{phone}</p>
                    <p className="text-muted"><i className="fa-solid fa-envelope me-2"></i>{email}</p>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <button className="btn btn-black me-2" style={{border: 'none'}}>
                        <i className="fa-solid fa-pen-to-square" onClick={handleEditing}></i>
                    </button>
                    <button className="btn btn-black" style={{border: 'none'}} onClick={handleCLick}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}