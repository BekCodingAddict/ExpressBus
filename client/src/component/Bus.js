import React from "react";

function Bus({ bus }) {
    return (
        <div className="bus-card p-2 ">
            <h1 className="text-lg">{bus.name}</h1><hr />
            <div className="d-flex justify-content-between">
                <div>
                    <p className="text-sm">From: {bus.from}</p>
                </div>
                <div>
                    <p className="text-sm">Price: ${bus.fare}/-</p>
                </div>
                <div>
                <p className="text-sm">To: {bus.to}</p>
                </div>
            </div>
        </div>

    )
}
export default Bus;