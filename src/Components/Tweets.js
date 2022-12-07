import { Tweet } from "./Tweet"

export const Tweets = ( {tweets,accounts} ) => {
  return (
    <>
      {tweets.slice(0).reverse().map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} accounts={accounts} />
      ))}
    </>
  )
}
