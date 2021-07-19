import axios from "axios"
import { useState } from "react"

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
        setCompletion(props.completion)
        setTime(props.time)
    };

    const postScore = async(e) =>{
        e.preventDefault()
        await axios.post(URL, { fields: input}, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
    }

    // https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
    function refreshPage() {
        window.location.reload(false);
    }

    if(props.time === 0) {
        return (
            <form>
            <p>Game was not started, try again.</p>
            <button onClick={refreshPage}>Try Again</button>
        </form> 
        )
    }
    return (
        <form onSubmit={postScore}>
            <p>Enter username for highscore submission.</p>
            <input name="name" value={input.name} onChange={handleChange}/>
            <br />
            <button >Submit</button>
            <br />
            <button onClick={refreshPage}>Play Again</button>
        </form>
    )
}