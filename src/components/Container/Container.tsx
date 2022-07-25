import Employees from "../Employees/Employees";
import "./Container.scss";

const Container = () => {
    return (
        <div className="container">
            <div className="container__left-gradient"></div>
            <div className="container__wrapper">
                <div className="container__content">
                    <div className="container__element">E</div>
                </div>
                <Employees />
            </div>
            <div className="container__right-gradient"></div>
        </div>
    );
}

export default Container;