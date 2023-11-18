import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { axiosInstance } from '../helpers/axiosInstance';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';
import { useDispatch } from 'react-redux';
import { message,Col,Row } from 'antd';
import Bus from "../component/Bus"

function Home(){
    const {user}=useSelector(state=>state.users)
    const dispatch = useDispatch();
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

    useEffect(() => {
        getBuses();
    }, []);

    return (
        <div className='p-0'>
            <div>

            </div>
            <div>
                <Row>
                    {buses.filter((bus)=>bus.status==="Yet To Start").map((bus)=>(
                        <Col lg={12} xs={24} sm={24}>
                        <Bus bus={bus}/>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Home;