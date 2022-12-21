import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendList/FriendListItem";

import css from "components/FriendList/FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
        <section className="section">
            <div className="container">
                <ul className={css.list}>
                    {friends.map(({avatar, name, isOnline, id}) => {
                        return <FriendListItem
                            key={id}
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}>
                        </FriendListItem>
                    })}
                </ul>
            </div>
        </section>
    )};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.PropTypes.bool.isRequired
    }))
}