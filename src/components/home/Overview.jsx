import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";

import "../../assets/css/Overview.css";

export default function Overview() {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="container--fluid bg-light">
            <div className="overview__container container flex justify-between">
                <div className="card box-shadow">
                    <div className="card__icon__wrapper flex">
                        <i className="fa-solid fa-crosshairs card__icon" />
                    </div>
                    <h4 className="card__heading text-center">
                        {texts.overview.uxUi.heading}
                    </h4>
                    <p className="card__text text-center">
                        {texts.overview.uxUi.paragraph}
                    </p>
                </div>
                <div className="card card--highlight box-shadow">
                    <div className="card__icon__wrapper flex">
                        <i className="fa-solid fa-code card__icon" />
                    </div>
                    <h4 className="card__heading text-center">
                        {texts.overview.development.heading}
                    </h4>
                    <p className="card__text text-center">
                        {texts.overview.development.paragraph}
                    </p>
                </div>
                <div className="card box-shadow">
                    <div className="card__icon__wrapper flex">
                        <i className="fa-solid fa-rocket card__icon" />
                    </div>
                    <h4 className="card__heading text-center">
                        {texts.overview.performance.heading}
                    </h4>
                    <p className="card__text text-center">
                        {texts.overview.performance.paragraph}
                    </p>
                </div>
            </div>
        </div>
    );
}
