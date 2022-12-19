import PropTypes from 'prop-types';

import { FriendListItem } from "./FriendListItem";


export const FriendList = ({ friends }) => {

    return (
    <ul class="friend-list">
        {friends.map(({avatar, name, isOnline, id}) => {
            return <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}>
            </FriendListItem>
        })}
    </ul>
    )};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    }))
}