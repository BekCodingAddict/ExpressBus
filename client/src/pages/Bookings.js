import React, { useEffect, useState } from 'react';
import PageTitle from '../component/PageTitle';
import BusForm from '../component/BusForm';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import { Table, message } from 'antd';
import { axiosInstance } from '../helpers/axiosInstance';

function Bookings() {
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
            render:(text,record)=>(

                <div>
                    <h1 className='text-md underline'>Print Ticket</h1>
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
        </div>
    )
}

export default Bookings;