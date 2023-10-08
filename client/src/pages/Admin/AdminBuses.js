import React, { useEffect, useState } from 'react';
import PageTitle from '../../component/PageTitle';
import BusForm from '../../component/BusForm';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/alertsSlice';
import { Table, message } from 'antd';
import { axiosInstance } from '../../helpers/axiosInstance';
import moment from 'moment';

function AdminBuses() {
    const dispatch = useDispatch();
    const [showBusForm, setShowBusForm] = React.useState(false);
    const [buses, setBuses] = useState([]);

    const getBuses = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axiosInstance.post('/api/buses/get-all-buses', {});
            dispatch(HideLoading());
            if (response.data.success) {
                setBuses(response.data.data);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    const colums = [
        {
            title: "Name",
            dataIndex: 'name',
        },
        {
            title: "Number",
            dataIndex: 'number',
        },
        {
            title: 'From',
            dataIndex: 'from',
        },
        {
            title: 'To',
            dataIndex: 'to',
        },
        {
            title: 'Juorney Date',
            dataIndex: 'journeyDate',
            render: (journeyDate) => moment(journeyDate).format('YYYY-MM-DD')
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (action, record) => (
                <div className='d-flex gap-3'>
                    <i class="ri-pencil-line"></i>
                    <i class="ri-delete-bin-line"></i>
                </div>
            )
        },
    ];
    useEffect(() => {
        getBuses();
    }, []);
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <PageTitle title='Buses' />
                <button className='primary-btn'
                    onClick={() => setShowBusForm(true)}
                >Add Bus</button>
            </div>

            <Table columns={colums} dataSource={buses} />

            {showBusForm && <BusForm showBusForm={showBusForm}
                setShowBusForm={setShowBusForm} type='add' />}
        </div>
    )
}

export default AdminBuses;