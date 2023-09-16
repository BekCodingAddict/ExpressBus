import React from 'react';
import { Form } from 'antd';

function Register() {
    return (
        <div className='h-screen d-flex justify-content-center align-items-center'>
            <div className='w-300 '>
                <Form layout='vertical'>
                    <Form.Item label='Name'>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item label='Email'>
                        <input type='text' />
                    </Form.Item>
                    <Form.Item label='Password'>
                        <input type="password" />
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Register;