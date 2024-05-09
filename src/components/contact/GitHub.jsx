import { Link } from "react-router-dom";
import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";

import useGithubStats from "react-github-user-stats";

import { formatDate } from "../../functions/formatDate";
import LoadingSpinner from "../template/LoadingSpinner";

export default function GitHub() {
    const { texts } = useContext(LanguageContext);
    const { error, loading, userData } = useGithubStats("ricocatford");

    if (loading || !userData) return <LoadingSpinner />;
    if (error)
        return <h3 className="subheading text-center">ERROR: {error}</h3>;

    return (
        <div className="contact__tab">
            <div className="github__container flex align-center justify-between">
                <Link to={userData.url} target="_blank">
                    <img
                        className="github__avatar"
                        src={userData.avatar_url}
                        alt={userData.name}
                    />
                </Link>
                <h5 className="github__name">
                    {userData.name}
                    <span className="github__username">
                        @{userData.username}
                    </span>
                </h5>
                <p className="github__account__date flex align-center">
                    <span>Joined on:</span>
                    {formatDate(userData.created_at)}
                </p>
                <ul className="github__stats__list flex flex-wrap align-center justify-center">
                    <li className="github__stats__item flex align-center">
                        <span>{userData.followers}</span>Followers
                    </li>
                    <li className="github__stats__item flex align-center">
                        <span>{userData.following}</span>Following
                    </li>
                    <li className="github__stats__item flex align-center">
                        <span>{userData.public_repos}</span>Repos
                    </li>
                    <li className="github__stats__item flex align-center">
                        <span>{userData.total_stars}</span>Stars
                    </li>
                    <li className="github__stats__item flex align-center">
                        <span>{userData.total_forks}</span>Forks
                    </li>
                </ul>
                <ul className="github__info__list">
                    <li className="github__info__item">
                        <span>
                            <i className="fa-solid fa-bolt github__info__icon" />
                        </span>
                        {userData.bio}
                    </li>
                    <li className="github__info__item">
                        <span>
                            <i className="fa-solid fa-location-dot github__info__icon" />
                        </span>
                        {userData.location}
                    </li>
                </ul>
                <Link
                    to={userData.url}
                    target="_blank"
                    className="btn btn--primary"
                >
                    {texts.contact.github.link}
                    <i className="fa-solid fa-arrow-up-right-from-square btn__icon" />
                </Link>
            </div>
        </div>
    );
}
