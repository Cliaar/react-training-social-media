import { useState } from "react"

export const NewTweet = ( {onTweet, currAcc} ) => {
  const [tweet, setTweet] = useState('')
  const [userId, setUserId] = useState(currAcc.id)
  const likes = 0

  const onSubmit = (e) => {
    e.preventDefault()

    if(!tweet) {
      alert('Please add a tweet')
      return
    }
    console.log({userId})
    onTweet({userId, tweet, likes})
    setTweet('')
  }

  return (
    <div className="newTweet">
        <form className="newTweetForm" onSubmit={onSubmit}>
          <div>
            <textarea className="inputTweet" placeholder="New Tweet..." value={tweet} onChange={(e) => setTweet(e.target.value)} required></textarea>
          </div>
          <div className="tweetBtnDiv">
            <button className="tweetBtn" type="submit"><h3>Tweet</h3></button>
          </div>
        </form>
    </div>
  )
}