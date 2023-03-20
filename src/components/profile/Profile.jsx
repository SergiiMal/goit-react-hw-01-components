import PropTypes from 'prop-types';
import {
  ProfileWrap,
  Description,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsItem,
  Label,
  Quantity,
  AvatarWrap,
  Avatar,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrap>
      <Description>
        <AvatarWrap>
          <Avatar src={avatar} alt="User avatar" width="250" />{' '}
        </AvatarWrap>
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <ProfileStats>
        <ProfileStatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileWrap>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
