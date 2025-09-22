import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function View() {

    const [userData, setUserData] = useState([]);

    const navigate = useNavigate();

    const handleDelete = async (id) => {

        try {
            const response = await axios.delete(`http://localhost:5000/delete/${id}`)

            if (response?.data?.message) {
                alert(response.data.message);
            } else{
                console.log("Error");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const resonse = await axios.get("http://localhost:5000/view");
            if (resonse) {
                setUserData(resonse.data);
            } else {
                console.log("Error");
            }
        }

        fetchData();
    }, [handleDelete]);

    return (
        <div>
            <h1>User Data</h1>
            {userData.map((user, index) => (
                <div key={index}>
                    <li><b>Full Name: </b> {user.fullName}</li>
                    <li><b>Email: </b> {user.email}</li>
                    <li><b>Password: </b> {user.password}</li>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                    <br />
                    <br />
                </div>
            ))}

            <br />
            <button onClick={() => navigate('/student')}> Student </button>
        </div>
    )
}

export default View;