import { useState } from "react"

export default function SignUpForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        //prevent the normal behavior
        e.preventDefault();
        console.log("Hello!")
    }
    return(
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                  Username:  
                  <input 
                    value={username} 
                    onChange={(e) => {setUsername(e.target.value)}}
                  />
                </label>
                <br/>
                <label>
                 Password:  
                 <input 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}}
                 />
                </label>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}