import { SideNav } from "./Components/SideNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { useState, useEffect } from "react";
import { Login } from "./Components/Login";

function App() {
  const [accounts, setAccounts] = useState([])
  const [token, setToken] = useState(false)
  const [currAcc, setCurAcc] = useState([])

  useEffect(() => {
    const getAccounts = async () => {
      const accFromServer = await fetchAccounts()
      setAccounts(accFromServer)
    }

    getAccounts()
  }, [])

  const fetchAccounts = async () => {
    const res = await fetch('http://localhost:8000/Account')
    const data = await res.json()
    // console.log(data)
    return data
  }

  const checkLogin = (cred) => {
    // console.log(cred)
    const checkUsername = accounts.some(el => el.accName === cred.username)
    const checkPassword = accounts.some(el => el.password === cred.password)
    // console.log(checkUsername)
    // console.log(checkPassword)

    if(checkUsername && checkPassword){
      setToken(true)
      const loginAcc = accounts.find(acc => acc.accName === cred.username)
      setCurAcc(loginAcc)
      console.log(loginAcc)
    }

  }

  if(!token) {
    return <Login checkLogin={checkLogin} />
  }

  return (
    <Router>
      <div className="app">
      <SideNav currAcc={currAcc} />
      <Routes>    
        <Route path="/home" element={<Home accounts={accounts} currAcc={currAcc} />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
