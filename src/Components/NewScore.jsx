import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const newForm = {
    name: "",
    clicks: "",
    time: "",
    completion: ""
}

const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_SCORES
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/chickener-scores `

export default function NewScore() {
    const [ input, setInput ] = useState(newForm)


    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prevInput)=> ({
            ...prevInput,
            [name]: value,
        }));
    };

    const postScore = async(e) =>{
        e.preventDefault()
        console.log(input)
        const resScore = await axios.post(URL, { fields: input}, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
        console.log(resScore)
    }

    return (
        
        <form onSubmit={postScore}>
            <input name="name" value={input.name} onChange={handleChange}/>
            <input name="clicks" value={input.clicks} onChange={handleChange}/>
            <input name="time" value={input.time} onChange={handleChange}/>
            <input name="completion" valie={input.completion} onChange={handleChange}/>
            <button>Submit Score</button>
        </form>
    )
}
