import React, { useEffect, useState } from 'react';
import PageTitle from '../component/PageTitle';
import BusForm from '../component/BusForm';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import { Modal, Table, message } from 'antd';
import { axiosInstance } from '../helpers/axiosInstance';
import moment from 'moment';

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

    return (
        <div>
            <PageTitle title="Bookings" />
            <Table dataSource={bookings} columns={columns} />
            {showPrintModal && <Modal title='Print Ticket'
                onCancel={
                    () => {
                        setShowPrintModal(false);
                        setSelectedBooking(null);
                    }}
                visible={showPrintModal}
            >
                <div className='d-flex flex-column'>
                    <p>Bus: {selectedBooking.name}</p>
                    <p>{selectedBooking.from} - {selectedBooking.to}</p><hr />
                    <p>
                        <span >Journey Date: </span>{" "}
                        {moment(selectedBooking.journeyDate).format("DD-MM-YYYY")}
                    </p>
                    <p>
                        <span>Journey Time: </span>{" "}
                        {selectedBooking.departure}
                    </p><hr />
                    <p>
                        <span>Seats Numbers: </span>{" "}<br />
                        {selectedBooking.seats}
                    </p><hr />
                    <p>
                        <span>Total Amount:  $</span>{" "}
                        {selectedBooking.fare * selectedBooking.seats.length} /-
                    </p>
                </div>
            </Modal>}
        </div>
    )
}

export default Bookings;