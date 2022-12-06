import { Tweets } from "./Components/Tweets";
import { Header } from "./Components/Header";
import { NewTweet } from "./Components/NewTweet";

export const Home = ( {tweets, accounts} ) => {
  return (
    <div className="content">
        <Header />
        <NewTweet />
        <Tweets tweets={tweets} accounts={accounts} />
    </div>
  )
}
