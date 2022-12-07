import { useState, useEffect } from "react";
import { Tweets } from "./Tweets";
import { Header } from "./Header";
import { NewTweet } from "./NewTweet";

export const Home = ( {accounts, currAcc} ) => {
  const [tweets, setTweets] = useState([])
  
  useEffect(() => {
    const getTweets = async () => {
      const tweetsFromServer = await fetchTweets()
      setTweets(tweetsFromServer)
    }
    getTweets()
  }, [])

  const fetchTweets = async () => {
    const res = await fetch('http://localhost:8000/Tweets')
    const data = await res.json()
    // console.log(data)
    return data
  }

  const newTweet = async (tweet) => {
    const res = await fetch('http://localhost:8000/tweets', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tweet)
    })

    const data = await res.json()

    setTweets([...tweets, data])
  }

    return (
    <div className="content">
        <Header />
        <NewTweet onTweet={newTweet} currAcc={currAcc} />
        <Tweets tweets={tweets} accounts={accounts} onLike />
    </div>
  )
}
