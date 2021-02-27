import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const UpdateAuthor = (props) => {
    const {id} =props;
    const  [name , setName] = useState("")
    const[errors, setErrors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
                .then(res => {
                setName(res.data.name);
            })
    }, [])
    

    const onupdateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/editAuthor/' + id, {
            name,
        })
        .then(() => navigate ("/"))
        .catch(err=> {
            //to show Validation messages
            const errorResponse = err.response.data.errors;
            const errorArray = [];
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArray.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArray);
        })
    }



    return (
        <div>
            <h2>Favorite Authors</h2>
            <p> <Link to="/">Home</Link></p>
            <h4>Edit an author:</h4><br/>

            <p>
                
                {
                    errors.map((err, index) => <p key={index} style={{color:"red"}}> {err}</p>)
                }
            </p>
            <form onSubmit={ onupdateAuthor }>
                <label>Name:</label> 
                <input type="text" onChange={(e)=> setName (e.target.value)} value={name} /><br/>
                <input type="submit" value="update"/>
                <button onClick={()=>navigate("/")}> Cancel</button>
            </form>
        </div>
    )
}

export default UpdateAuthor
