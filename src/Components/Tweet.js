export const Tweet = ( { tweet, accounts }) => {
    const user = accounts.find(o => o.id === tweet.userId)
    // console.log(user)

  return (
    <div className="tweet">
        <div className="acc">
            <p style={{fontWeight: 'bold', fontSize: 'large', marginRight: '5px'}} >{user.displayName}</p>
            <p style={{color: 'darkgray'}}>@{user.accName}</p>
        </div>
        <div>
            <p style={{marginTop: '5px'}}>{tweet.tweet}</p>
        </div>
        <div className="likes">
            <button className="like">Like</button>
            <p style={{fontSize: 'small'}}>{tweet.likes}</p>
        </div>
    </div>
  )
  
}
