import React, {useState, useEffect} from 'react'
import axios from 'axios';


const DeleteButton = (props) => {
    const {authorId, removeFromDom} =props;


    const deleteauthor= (e) => {
        axios.delete('http://localhost:8000/api/deleteAuthor/' + authorId)
            .then(res => {
                removeFromDom()
            })
    }

    return (
        <div>
            <p>
                <button onClick={deleteauthor}>
                    Delete
                </button>
            </p>
        </div>
    )
}

export default DeleteButton
