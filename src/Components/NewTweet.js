export const NewTweet = () => {
  return (
    <div className="newTweet">
        <form className="newTweetForm">
          <div>
            <textarea className="inputTweet" placeholder="New Tweet..." required></textarea>
          </div>
          <div className="tweetBtnDiv">
            <button className="tweetBtn"><h3>Tweet</h3></button>
          </div>
        </form>
    </div>
  )
}
