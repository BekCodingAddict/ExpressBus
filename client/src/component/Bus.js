import React from "react";
import {useNavigate} from "react-router-dom";

function Bus({ bus }) {
    const navigate=useNavigate();
    return (
        <div className="bus-card p-2 ">
            <h1 className="text-lg">{bus.name}</h1><hr />
            <div className="d-flex justify-content-between gap-3" >
                <div>
                    <p className="text-sm">From: {bus.from}</p>
                </div>
                <div>
                    <p className="text-sm">To: {bus.to}</p>
                </div>
                <div>
                    <p className="text-sm">Price: ${bus.fare}/-</p>
                </div>
                <div>
                    <p className="text-sm">Journey Date: {bus.journeyDate}/-</p>
                </div>
            </div>
            <div className="d-flex justify-content-between align-item-end">
                <h1 className="text-lg underline" onClick={()=>{
                    navigate(`/book-now/${bus._id}`)
                }}>Book Now</h1>
            </div>
        </div>

    )
}
export default Bus;