import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const newForm = {
    name: "",
}


const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_SCORES
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/chickener-scores `

export default function NewScore(props) {

    const [ input, setInput ] = useState(newForm)
    const [ clicks, setClicks ] = useState("")
    const [ time, setTime ] = useState('')
    const [ completion, setCompletion ] = useState("yes")

    const propsForm ={ 
        clicks: clicks,
        time: time,
        completion: completion
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prevInput)=> ({
            ...prevInput,
            [name]: value,
            ...propsForm
        }));
        setClicks(props.clicks)
    };

    const postScore = async(e) =>{
        e.preventDefault()
        console.log(input)
        const resScore = await axios.post(URL, { fields: input}, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
        console.log(resScore)
    }
    console.log(propsForm)
    return (
        
        <form onSubmit={postScore}>
            <p>Enter username for highscore submission.</p>
            <input name="name" value={input.name} onChange={handleChange}/>
            {/* <input name="clicks" defaultValue={props.clicks}/> */}
            {/* <input name="time" value={input.time} onChange={handleChange}/>
            <input name="completion" valie={input.completion} onChange={handleChange}/> */}
            <br />
            <button>Submit</button>
        </form>
    )
}
