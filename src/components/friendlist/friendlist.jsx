import { FriendListItem } from "./friendlistitem"
import css from "./friends.module.css"
import PropTypes from 'prop-types'; 

export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem 
            isOnline = {friend.isOnline}
            avatar = {friend.avatar}
            name = {friend.name} />
          </li>
        ))}
      </ul>
    );
  };

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
}