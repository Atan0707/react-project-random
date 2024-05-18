import { useEffect, useState } from "react";
import './backend.css';


const TestBackend = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/user/')
        .then(res => res.json())
        .then(data => setData(data)) // set the fetched data to your state
        .catch(err => console.log(err))
    }, []);


    return (
        <div className="test-backend">
            <h1>Test Backend</h1>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.phone}</td>
                            <td>{d.email}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
      );
}
 
export default TestBackend;