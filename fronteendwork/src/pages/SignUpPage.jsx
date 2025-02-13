import { useState } from "react"
import { Link } from 'react-router-dom'

function SignUpPage() {
    const [isotpSent, setIsOtpSent] = useState(false);
    const [email, setEmail] = useState();

    async function handleSendOtp(e) {
        e.preventDefault();
        console.log("Inside handleOtp");
        //const email= e.target.email.value; // new way without state
        console.log("Hii:" + email)
        if (!isotpSent) {

            const resp = await fetch(import.meta.env.VITE_BACKEND_URL+"/api/v1/otps", {
                method: "POST",
                body: JSON.stringify({ email: email }),
                headers: {
                    'content-type': "application/json"
                }
            });
            const resObj = await resp.json();
            if (resObj.status == 'success') {
                setIsOtpSent(true);
            }
            else {
                alert(resObj.message);
            }
        } else {
            
            //
        }

    }
    return (
        <div>

            <div>
                <label>Email:</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            {
                !isotpSent ? (<button onClick={handleSendOtp}>Send OTP</button>) :
                    (
                        <div><div>
                            <label>OTP:</label>
                            <input type="text"></input>
                        </div>
                            <div>
                                <label>Password:</label>
                                <input type="password"></input>
                            </div>
                            <div>
                                <label>Confirmed Password:</label>
                                <input type="password"></input>
                            </div>
                            <div>
                              
                                <input type="button">Register</input>
                            </div>
                        </div>
                    )
            }

<Link to='/login'>Login Page</Link>
        </div>
    )
}

export default SignUpPage