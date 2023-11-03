import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosInstance } from "../helpers/axiosInstance";
import { useDispatch } from "react-redux";
import { message, Col, Row } from "antd";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import { useParams } from "react-router-dom";
import SeatSelection from "../component/SeatSelection";

function BookNow() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const perams = useParams();
  const dispatch = useDispatch();
  const [bus, setBus] = useState(null);

  const getBus = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/buses/get-bus-by-id", {
        _id: perams.id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        setBus(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  
const bookNow =async()=>{
    try {
      dispatch(ShowLoading());
      const response=await axiosInstance.post('/api/bookings/book-seat',{
        bus:bus._id,
        seats:selectedSeats,
      });
      dispatch(HideLoading());
      if(response.data.success){
        message.success(response.data.message);
      }else{
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }

  useEffect(() => {
    getBus();
  }, []);

  return (
    <div>
      {bus && (
        <Row className="mt-3" gutter={300}>
          <Col lg={12} xs={24} sm={24}>
            <h1 className="text-xl text-secondary">{bus.name}</h1>
            <h1 className="text-md">
              {bus.from} - {bus.to}{" "}
            </h1>
            <hr />

            <div className="flex flex-col gap-1">
              <h1 className="text-lg">
                <b>Journey Date: </b> {bus.journeyDate}
              </h1>
              <h1 className="text-lg">
                <b>Price: </b> ${bus.fare} /-
              </h1>
              <h1 className="text-lg">
                <b>Departure Time: </b> {bus.departure}
              </h1>
              <h1 className="text-lg">
                <b>Arrival Time: </b> {bus.arrival}
              </h1>
              <h1 className="text-lg">
                <b>Capacity: </b> {bus.capacity}
              </h1>
              <h1 className="text-lg">
                <b>Seats Left: </b> {bus.capacity-bus.seatsBooked.length}
              </h1>
            </div>
            <hr />

            <div className="flex flex-col gap-2">
              <h1 className="text-2xl">
                Selected Seats : {selectedSeats.join(", ")}
              </h1>
              <h1 className="text-2xl mt-2">Price : $ {bus.fare*selectedSeats.length}/-</h1>
              <button className={`btn btn-primary ${
                    selectedSeats.length === 0 && "disabled-btn"
                  }`} onClick={bookNow} 
                  disabled={selectedSeats.length===0}>Book Now</button>
            </div>
          </Col>
          <Col lg={12} xs={24} sm={24}>
            <SeatSelection
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              bus={bus}
            />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default BookNow;
