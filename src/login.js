import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("email",form.email)
        localStorage.setItem("password",form.password)
        const queryParams = new URLSearchParams({
            email: form.email,
            password: form.password
        });
        navigate(`/home?${queryParams.toString()}`); // Use template literal correctly to include query parameters
        setForm({
            email: '',
            password: ''
        });
    };

    return (
        <>
            <div className='Page'>
                <form onSubmit={handleSubmit}>
                    <h1>Login Page</h1>
                    <div className='card'>
                        <div>
                            <label>Email:</label>
                            <input 
                                type="email" 
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input  
                                type="text" 
                                name='password' 
                                value={form.password} 
                                onChange={handleChange}
                            />
                        </div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
