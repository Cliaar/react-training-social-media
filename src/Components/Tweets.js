import { Tweet } from "./Tweet"

export const Tweets = ( {tweets,accounts} ) => {
  return (
    <>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} accounts={accounts} />
      ))}
    </>
  )
}
