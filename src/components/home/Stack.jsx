import "../../assets/css/Hero.css";

export default function Stack() {
    return (
        <div className="icons__container flex flex-wrap justify-center align-center">
            <div className="icon__wrapper text-center">
                <img src="images/icons/html.png" className="icon__img" />
                <h4>HTML5</h4>
            </div>
            <div className="icon__wrapper text-center">
                <img src="images/icons/css.png" className="icon__img" />
                <h4>CSS3</h4>
            </div>
            <div className="icon__wrapper text-center">
                <img src="images/icons/js.png" className="icon__img" />
                <h4>JavaScript</h4>
            </div>
            <div className="icon__wrapper text-center">
                <img src="images/icons/nodejs.png" className="icon__img" />
                <h4>Node.js</h4>
            </div>
            <div className="icon__wrapper text-center">
                <img src="images/icons/reactjs.png" className="icon__img" />
                <h4>React.js</h4>
            </div>
        </div>
    );
}
