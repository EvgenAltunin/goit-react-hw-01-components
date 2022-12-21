import PropTypes from 'prop-types';
import css from "components/FriendList/FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className={css.item} key={id}>
            <span className={`${css.status} ${css[isOnline]}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}