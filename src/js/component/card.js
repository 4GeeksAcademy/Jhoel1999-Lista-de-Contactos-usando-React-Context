import React from "react";

export function ContactCard() {
    return(
        <div className="card p-3 shadow-sm">
            <div className="d-flex align-items-center">
                <div className="col-3 text-center">
                    <img src="https://picsum.photos/id/237/200/300" alt="Profile of Mike Anamendolla" className="img-fluid rounded-circle mx-auto" style={{ width: '150px', height: '150px', objectFit: 'cover'}}/>
                </div>
                <div className="col-6">
                    <h2 className="h5">Mike Anamendolla</h2>
                    <p className="text-muted"><i className="fa-solid fa-location-dot me-2"></i>5842 Hillcrest Rd</p>
                    <p className="text-muted"><i className="fa-solid fa-phone me-2"></i>(870) 288-4149</p>
                    <p className="text-muted"><i className="fa-solid fa-envelope me-2"></i>mike.ana@example.com</p>
                </div>
                <div className="col-3 d-flex justify-content-center">
                    <button className="btn btn-black me-2" style={{border: 'none'}}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="btn btn-black" style={{border: 'none'}}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
