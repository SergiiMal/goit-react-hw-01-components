import friends from '../data/friends.json';
import data from '../data/data.json';
import user from '../data/user.json';
import { FriendsList } from './friends/FriendsList';
import { Statistics } from './statistics/Statictics';
import { Profile } from './profile/Profile';
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
      <FriendsList friends={friends} />;
    </>
  );
};
