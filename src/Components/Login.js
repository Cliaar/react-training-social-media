import './login.css'
import { useState } from 'react'

export const Login = ( { checkLogin } ) => {
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        
        checkLogin({username, password})

        setUsername('')
        setPassword('')
    }

  return (
    <div className='login-wrapper'>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <label>
                <p>Username</p>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
    </div>
  )
}
