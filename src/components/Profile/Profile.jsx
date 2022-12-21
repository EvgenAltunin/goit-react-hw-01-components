import PropTypes from 'prop-types';
import css from "components/Profile/Profile.module.css";



export const Profile = ({ username, tag, location, avatar, stats }) => {

    return (
        <section className="section">
            <div className={`container ${css.containerProfile}`}>
                <div className={css.description}>
                    <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                    />
                    <p className="name">{username}</p>
                    <p className={css.tag}>@{tag}</p>
                    <p className={css.location}>{location}</p>
                </div>

                <ul className={css.stats}>
                    <li className={css.item}>
                        <span className="label">Followers</span>
                        <span className="quantity">{stats.followers}</span>
                    </li>
                    <li className={css.item}>
                        <span className="label">Views</span>
                        <span className="quantity">{stats.views}</span>
                    </li>
                    <li className={css.item}>
                        <span className="label">Likes</span>
                        <span className="quantity">{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

Profile.propTypes = {
    user: PropTypes.arrayOf(PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: {
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        }
    }))
}