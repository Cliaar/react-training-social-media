import { Tweets } from "./Tweets";
import { Header } from "./Header";
import { NewTweet } from "./NewTweet";

export const Home = ( {tweets, accounts} ) => {
  return (
    <div className="content">
        <Header />
        <NewTweet />
        <Tweets tweets={tweets} accounts={accounts} />
    </div>
  )
}
