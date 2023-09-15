import { useState } from "react"

export default function SignUpForm({setToken}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    function handleUsernameChange(e){
        if(e.target.value.length < 8){
            setError("Username too short")
        }
        if(error && e.target.value.length >= 8){
            setError("");
        }
        if(e.target.value.length > 20){
            setError("Username too long")
        }
        if(error && e.target.value.length <= 20){
            setError("")
        }
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        if(e.target.value.length < 8){
            setError("password must be 8 characters")
        }
        if(error && e.target.value.length >=8){
            setError("")
        }
        if(e.target.value.length > 15){
            setError("Password must be less than 15 characters")
        }
        if(error && e.target.value.length <= 15){
            setError("")
        }
        setPassword(e.target.value);
    }
    async function handleSubmit(e){
        //prevent the normal behavior
        e.preventDefault();
       try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
                method: "POST",
                data: JSON.stringify({username,password})
            })
            const data = await response.json();
            console.log(data);
            setToken(data.token)
       }catch(error){
            setError(error.message)
       }
    }
    return(
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                  Username:{" "}
                  <input 
                    value={username} 
                    onChange={handleUsernameChange}
                  />
                </label>
                <br/>
                <br/>
                <label>
                 Password:{" "}
                 <input 
                    value={password} 
                    onChange={handlePasswordChange}
                 />
                </label>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}