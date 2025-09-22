import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Student() {

    const [fullName, setfullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [UfullName, setUfullName] = useState('');
    const [Uemail, setUEmail] = useState('');
    const [Upassword, setUPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/ragister', { fullName, email, password });

            if (response?.data?.message) {
                alert(response.data.message);
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/update', { UfullName, Uemail, Upassword });

            if (response?.data?.message) {
                alert(response.data.message);
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>
                    Student Registration Form
                </h2>

                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setfullName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                >
                    Register
                </button>
            </form>

            <form onSubmit={handleSubmitUpdate}>
                <h2>
                    Student Registration Updation Form
                </h2>

                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={UfullName}
                        onChange={(e) => setUfullName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={Uemail}
                        onChange={(e) => setUEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={Upassword}
                        onChange={(e) => setUPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                >
                    Update
                </button>
            </form>

            <br />
            <br />
            <button onClick={() => navigate('/view')}> View </button>
        </>
    )
}

export default Student;