import { useEffect, useState } from "react";
import './backend.css';

const TestBackend = () => {


    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const endpoint = 'http://localhost:8081/user';



    useEffect(() => {
        fetch(endpoint)
        .then(res => res.json())
        .then(data => setData(data)) // set the fetched data to your state
        .catch(err => console.log(err))
    }, []);

    const handleSubmit = (e) => {
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, phone, email})
        })
        .then(res => res.json())
        .then(data => {
            setData([...data, data])
            setName('');
            setPhone('');
            setEmail('');
        })
        .catch(err => console.log(err))
    }

    const handleClick = (id) => {
        fetch(`http://localhost:8081/user/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(console.log("deleted"))
        .then(res => res.json())
        .then(data => {
            setData(prevData => prevData.filter(user => user.id !== id));
            console.log('deleted')
        })
        .catch(err => console.error(err));
    }


    return (
        <div className="test-backend">
            <h1>Test Backend</h1>
            <p>dont forget to run apache and mysql server first on xampp ♪(^∇^*)</p>
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.phone}</td>
                            <td>{d.email}</td><button onClick={() => handleClick(d.id)}>Delete</button>
                        </tr>

                    ))}
                </tbody>
            </table>
            <div className="form">
                <h2>Insert Data</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} placeholder="name" onChange={e => setName(e.target.value)}></input>
                    <input type="text" value={phone} placeholder="phone" onChange={e => setPhone(e.target.value)} ></input>
                    <input type="text" value={email} placeholder="email" onChange={e => setEmail(e.target.value)}></input>
                    <button>Submit</button>
                </form>
            </div>
        </div>
      );
}
 
export default TestBackend;