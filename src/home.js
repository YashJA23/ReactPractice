import React from 'react';
import { useState } from 'react';


function Home(){
    const [text , setText]=useState('');

    const handleChange=()=>{
        setText()
    }
    return (
        <>
        <div className='holePage'>
            <h3>Welcome </h3>
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
        </div>
        </>
    )

}

export default Home;