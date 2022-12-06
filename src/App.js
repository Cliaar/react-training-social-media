import { SideNav } from "./Components/SideNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { useState, useEffect } from "react";

function App() {
  const [tweets, setTweets] = useState([])
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const getTweets = async () => {
      const tweetsFromServer = await fetchTweets()
      setTweets(tweetsFromServer)
    }
    const getAccounts = async () => {
      const accFromServer = await fetchAccounts()
      setAccounts(accFromServer)
    }

    getAccounts()
    getTweets()
  }, [])

  const fetchTweets = async () => {
    const res = await fetch('http://localhost:8000/Tweets')
    const data = await res.json()
    console.log(data)
    return data
  }

  const fetchAccounts = async () => {
    const res = await fetch('http://localhost:8000/Account')
    const data = await res.json()
    console.log(data)
    return data
  }

  return (
    <Router>
      <div className="app">
        <SideNav />
        <Home tweets={tweets} accounts={accounts} />
      </div>
    </Router>
  );
}

export default App;
