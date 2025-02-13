import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function LoginPage() {
    const navigate = useNavigate();
    async function handleLogin(e) {
        try {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            const resp = await fetch(import.meta.env.VITE_BACKEND_URL+"/api/v1/login", {
                method: "POST",
                credentials: 'include',
                body: JSON.stringify({
                    email, password
                }),
                headers: {
                    'Content-Type': "application/json"
                }
            });
            const respObject = await resp.json();
            console.log(respObject);
            // if(respObject.status=='success'){
            //     navigate('/success')
            // }
        } catch (err) {
            alert(err.name);
        }


    }
    return (
        <div>LoginPage
            <form onSubmit={handleLogin}>
                <div>
                    <input type='email' name='email' />
                </div>
                <div>
                    <input type='password' name='password' />
                </div>
                <div>
                    <button >Login</button>
                </div>
            </form>
            <Link to='/sign-up'>Sign-up</Link>
        </div>
    )
}

export default LoginPage