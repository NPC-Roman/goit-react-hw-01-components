import css from "./friends.module.css"
import PropTypes from 'prop-types'; 

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
    <div className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </div>)
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
    