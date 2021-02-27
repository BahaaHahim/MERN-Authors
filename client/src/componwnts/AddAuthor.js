import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AddAuthor = () => {
    const[name, setName]= useState("")
    const[errors, setErrors] = useState([])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/addAuthor', {
            name:name
        })
        .then(() =>navigate("/"))
        // .then(res=>console.log(res))

        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })           
    }




    return (
        <div>
            <h2>Favorite Authors</h2>
            <p> <Link to="/">Home</Link></p>
            <h4>Add a new author:</h4><br/>
            <p>
                
                        {
                            errors.map((err, index) => <p key={index} style={{color:"red"}}> {err}</p>)
                        }
            </p>
            <form onSubmit={ onSubmitHandler }>
                <label>Name:</label> 
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} /><br/>
                <input type="submit" value="Add"/>
                <button onClick={()=>navigate("/")}> Cancel</button>
            </form>
            
        </div>
    )
}

export default AddAuthor
