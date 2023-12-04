import "../../assets/css/Overview.css";

export default function Overview() {
    return (
        <div className="container--fluid bg-light">
            <div className="overview__container container flex justify-between">
                <div className="card box-shadow">
                    <div className="card__icon__wrapper flex">
                        <i className="fa-solid fa-crosshairs card__icon" />
                    </div>
                    <h4 className="card__heading text-center">UX / UI</h4>
                    <p className="card__text text-center">
                        I create designs that are visually appealing, fully
                        responsive and accessible. Ensuring a great user
                        experience is a top priority for me, I implement high
                        accessibility standards to make my designs inclusive and
                        user-friendly.
                    </p>
                </div>
                <div className="card card--highlight box-shadow">
                    <div className="card__icon__wrapper flex">
                        <i className="fa-solid fa-code card__icon" />
                    </div>
                    <h4 className="card__heading text-center">Development</h4>
                    <p className="card__text text-center">
                        I specialize in working with TypeScript, ReactJS, and
                        ExpressJS. These technologies allow me to build dynamic
                        and efficient web applications. Additionally, I have
                        experience working with jQuery, Flask, and Django.
                    </p>
                </div>
                <div className="card box-shadow">
                    <div className="card__icon__wrapper flex">
                        <i className="fa-solid fa-rocket card__icon" />
                    </div>
                    <h4 className="card__heading text-center">Performance</h4>
                    <p className="card__text text-center">
                        I place great importance on writing code that delivers
                        high performance. While optimizing for speed and
                        efficiency, I also prioritize code readability and
                        maintainability. By staying up to date with the latest
                        technologies and best practices, I ensure to be aligned
                        with industry standards.
                    </p>
                </div>
            </div>
        </div>
    );
}
