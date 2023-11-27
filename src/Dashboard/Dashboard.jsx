import React, { useState } from 'react'
import DashboardChild from './DashboardChild';

const Dashboard = () => {
    const [button, setbutton] = useState(true);
    const [list, setList] = useState([]);
    const [data, setData] = useState({})

    const [mail, setMail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");




    const handleAdd = () => {
        if (!button) {
            document.getElementsByClassName("formdata")[0].style.display = "none";
        }
        else {
            document.getElementsByClassName("formdata")[0].style.display = "flex";
        }
        setbutton(!button);
    }

    console.log(data)

    const handleForm = (e) => {
        e.preventDefault();
        setData({ mail, fname, lname, age });
        setList([...list, data])
    }

    return (
        <div>
            <button onClick={handleAdd}>Add</button>
            <form className='formdata' onClick={handleForm}>
                <input placeholder='Enter your Email' value={mail} onChange={(e) => setMail(e.target.value)} />
                <input placeholder='Enter First Name' value={fname} onChange={(e) => setFname(e.target.value)} />
                <input placeholder='Enter Last Name' value={lname} onChange={(e) => setLname(e.target.value)} />
                <input placeholder='Enter your Age' value={age} onChange={(e) => setAge(e.target.value)} />
                <button>Submit</button>
            </form>
            <ul>
                {list?.map((elem, ind) => (
                    <DashboardChild elements={elem} />
                ))}
            </ul>
        </div>
    )
}

export default Dashboard