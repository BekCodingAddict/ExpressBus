import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../component/PageTitle';
import BusForm from '../component/BusForm';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import { Modal, Table, message } from 'antd';
import { axiosInstance } from '../helpers/axiosInstance';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';

function Bookings() {
    const [showPrintModal, setShowPrintModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [bookings, setBookings] = useState([]);
    const dispatch = useDispatch();
    const getBookings = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axiosInstance.post('/api/bookings/get-bookings-by-user-id', {});
            dispatch(HideLoading());
            if (response.data.success) {
                const mappedData = response.data.data.map((booking) => {
                    return {
                        ...booking,
                        ...booking.bus,
                        key: booking._id,
                    }
                })
                setBookings(mappedData);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    const columns = [
        {
            title: "Bus Name",
            dataIndex: 'name',
            key: 'bus',
        },
        {
            title: "Bus Number",
            dataIndex: "number",
            key: 'bus',
        },
        {
            title: "Journey Date",
            dataIndex: 'journeyDate',
        },
        {
            title: "Journey Time",
            dataIndex: 'departure',
        }, {
            title: "Seats",
            dataIndex: 'seats',
            render: (seats)=>{
                return seats.join(", ");
            }
        }, {
            title: "Action",
            dataIndex: 'action',
            render: (text, record) => (

                <div>
                    <h1 className='text-md underline'
                        onClick={() => {
                            setSelectedBooking(record);
                            setShowPrintModal(true);
                        }}
                    >Print Ticket</h1>
                </div>
            )
        }
    ]

    useEffect(() => {
        getBookings();
    }, []);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <PageTitle title="Bookings" />
            <div className='mt-2'>
                <Table dataSource={bookings} columns={columns} />
            </div>
            {showPrintModal && <Modal title='Print Ticket' width={1020}
                onCancel={
                    () => {
                        setShowPrintModal(false);
                        setSelectedBooking(null);
                    }}
                visible={showPrintModal}
                okText="Print"
                onOk={handlePrint}
            >
         <div className="d-flex flex-column p-5" ref={componentRef}>
            <p>Bus : {selectedBooking.name}</p>
            <p>
              {selectedBooking.from} - {selectedBooking.to}
            </p>
            <hr />
            <p>
              <span>Journey Date:</span>{" "}
              {moment(selectedBooking.journeyDate).format("DD-MM-YYYY")}
            </p>
            <p>
              <span>Journey Time:</span> {selectedBooking.departure}
            </p>
            <hr />
            <p>
              <span>Seat Numbers:</span> <br />
              {selectedBooking.seats}
            </p>
            <hr />
            <p>
              <span>Total Amount:</span>{" "}
              {selectedBooking.fare * selectedBooking.seats.length} /-
            </p>
          </div>
                {/* <div className='ticket'>
                    <div className='left-side'>
                        <h1>BUS<br />TICKET</h1>
                        <p>BUS Name: </p><hr />
                        <p>Bus Number:</p>
                        <p>Departure Time: </p>
                        <p>Arrival Time: </p>
                        <p>Seat Number: </p>
                        <p>From: </p>
                        <p>To:</p>
                    </div>
                    <div className='right-side'>
                        <h1>BUS TICKET</h1>
                        <p>The Terminal Company: </p>
                        <table >
                            <tr>
                                <td>From: </td>
                                <td>To: </td>
                            </tr>
                            <tr>
                                <td>Departure Time: </td>
                                <td>Arrival Time:</td>
                            </tr>
                            <tr>
                                <td>Price :</td>
                                <td>$ /-</td>
                            </tr>
                        </table>
                    </div>
                </div> */}
                <div className="d-flex">

                </div>
            </Modal>}
        </div>
    )
}

export default Bookings;