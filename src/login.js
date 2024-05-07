
import { useState } from 'react';
import { useNavigate } from 'react-router';
function Login(){
    const navigate =useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
      });
    const handleChange=(event)=>{
        const {name, value}=event.target;
        setForm({
            ...form,
            [name]: value
        } );
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("submited data",form);
        navigate('/home')
        setForm({
            email:'',
            password:''
        })
    };
    return(
        <>
        <div className='Page'>
            <form onSubmit={handleSubmit}>
            <h1> Login Page </h1>
            <div  className='card'>
                <div><label>Email :</label>
                <input type="email" 
                       name='email'
                       value={form.email}
                       onChange={handleChange}>
                </input>
                
            </div>
            <div>
                <label>Password :
                <input  type="text" 
                        name='password' 
                        value={form.password} 
                        onChange={handleChange}>
                </input></label>
                </div>
                <button type='submit' >Submit</button>
            </div>
            </form>
            <div>
            <p>{form.email}</p>
            <p>{form.password}</p>
        </div>
        </div>
        </>
    );
}
export default Login;