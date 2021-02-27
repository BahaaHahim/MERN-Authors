import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from './DeleteButton';



const ShowAuthors = () => {
    const [authors, setAuthors]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/allAuthors')
            .then(res=>{
                setAuthors(res.data);
            });
    },[])

    const removeFromDom = authorId =>{
        setAuthors(authors.filter(authors => authors._id != authorId));

    }
    

    return (
        <div>
            <h4><Link to="/new">Add an Author</Link></h4>
            <h4>We have quotes by:</h4>
            <center>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
                {authors.length >0 && authors.map((item,index) =>
                {
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td><button onClick={()=>navigate("/edit/"+ item._id)}>Edit</button>
                            <DeleteButton authorId={item._id} removeFromDom={() => removeFromDom(item._id)}/>
                            </td>
                        </tr>

                    )
                }
                
                )}
            
            </table>
            </center>

            
        </div>
    )
}

export default ShowAuthors
