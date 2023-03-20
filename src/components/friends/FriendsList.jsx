import PropTypes from 'prop-types';
import {
  FriendList,
  Item,
  Status,
  Avatar,
  NameUser,
  Thumb,
} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status statLine={friend.isOnline}>{friend.isOnline}</Status>
          <Thumb>
            <Avatar src={friend.avatar} alt="User avatar" width="48" />
          </Thumb>
          <NameUser>{friend.name}</NameUser>
        </Item>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
