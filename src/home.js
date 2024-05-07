import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Home(){
    const Location=useLocation();
    const queryParams=new URLSearchParams(Location.search);
    const email=queryParams.get('email');
    const password=queryParams.get('password');
    console.log(email);
    console.log(password)
    const [text , setText]=useState('');

    const handleChange=()=>{
        setText()
    }
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    console.log(localEmail);
    console.log(localPassword);
    return (
        <>
        <div className='holePage'>
            <h3>Welcome {localEmail}</h3>
            <div className='left' >
                <div >
                     <h1>DMN Table:</h1>
                     <div className='container'>
                     <textarea value={text} onChange={handleChange} placeHolder=""rows={10} cols={50}></textarea>
                     </div>
                     <button type="button" className='primary'>Prase</button>
                     <button type="button" className='primary'>Feedback</button>
                </div>
            </div>
            <div className='right'>
                    <h1>Unit Tests:</h1>
                    <div className='lift-links'>
                        <ul>
                            <li>Singular rules</li>
                            <li>Calc rules</li>
                            <li>Rule book Tests</li>
                        </ul>
                    </div>
                    
            </div>
             <div>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
        </div>
        </>
    )

}

export default Home;