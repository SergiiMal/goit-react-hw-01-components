import transactions from '../data/transactions.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
import user from '../data/user.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import { FriendsList } from './friends/FriendsList';
import { Statistics } from './statistics/Statictics';
import { Profile } from './profile/Profile';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
      <GlobalStyle />
    </>
  );
};
