import React from 'react';
import { Form } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/alertsSlice';

function Register() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/users/register", values);
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                navigate('/login');
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <div className='h-screen d-flex justify-content-center align-items-center'>
            <div className='w-400 card p-3'>
                <h1 className='text-lg'>Express Bus - Register</h1><hr />
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Name' name='name'>
                        <input type='text'></input>
                    </Form.Item>
                    <Form.Item label='Email' name='email'>
                        <input type='text'></input>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <input type="password"></input>
                    </Form.Item>

                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to="/login">Click here to Login</Link>
                        <button className='secondary-btn' type="submit">Register</button>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default Register;