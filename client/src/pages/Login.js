import React from 'react';
import { Form } from 'antd';
import { Link } from "react-router-dom";

function Login() {

    const onFinish = (values) => {
        console.log(values);
    }
    return (
        <div className='h-screen d-flex justify-content-center align-items-center'>
            <div className='w-400 card p-3'>
                <h1 className='text-lg'>Express Bus - Login</h1><hr />

                <Form layout='vertical' onFinish={onFinish}>

                    <Form.Item label='Email' name='email'>
                        <input type='text'></input>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <input type="password"></input>
                    </Form.Item>

                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to="/register">Click here to Register</Link>
                        <button className='secondary-btn' type="submit">Login</button>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default Login;