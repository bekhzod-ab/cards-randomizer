//we need two react hooks and one npm module to call an API(axios)
import React, {useState, useEffect} from 'react'
import axios from "axios"


export const Randomizer = () => {

    // creating default useState
    const [imgSrc, setImgSrc] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [eMail, setEMail] = useState("")

   
    //handler to call an api and set the values according the response onject
    const handler = (e) => {
        e.preventDefault()

        //reaching out and API and wait for response
        axios.get('https://randomuser.me/api/')
        //once api is called then we get response, which is an object
            .then((res) => {
                //an array inside the response object that we need
                console.log(res.data.results[0])
                //we assign object values to our states accordingly
                //full name could be wrapped in one variable by using spread operator, but I kept getting strange errors, so I went ahead with lazy solution, which is two vars ;) 
                setfirstName(res.data.results[0].name.first)
                setlastName(res.data.results[0].name.last)
                setEMail(res.data.results[0].email)
                setImgSrc(res.data.results[0].picture.large)
            })

        // display the error message in case if something goes wrong    
            .catch(err => console.log(err.message))           
    }

     //we need useEffect to prevent displaying empty values on first load or when page is refreshed 
     useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then((res) => {
            setfirstName(res.data.results[0].name.first)
            setlastName(res.data.results[0].name.last)
            setEMail(res.data.results[0].email)
            setImgSrc(res.data.results[0].picture.large)
        })
        .catch(err => console.log(err.message))    
    }, [])// <-- empty dependency that trigers our function once page is loaded or refreshed

    return (
        <div>
            <div className="main">
                <h1>Here is my data Randomizer</h1>
                <div className="container">
                    {/* providing an image source taken from api response */}
                    <img src={imgSrc} alt="" />
                    {/* displaying our variables that have the set value from api call */}
                    <p>Full name: <span className="names">{firstName} {lastName}</span></p>
                    <p>email: <i>{eMail}</i></p>
                    {/* assign on click event to our button where we call our axios function  */}
                    <button onClick={handler} type="button">Click me</button>
                </div>
            </div>
        </div>
    )
}
