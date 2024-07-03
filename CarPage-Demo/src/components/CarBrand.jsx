import "../styles/CarBrand.css";
import audiLogo from "../images/audi-logo.png";
import vwLogo from "../images/vw-logo.png";
import bmwLogo from "../images/bmw-logo.png";

export default function CarBrand() {
    return (
        <div className="car_brand_container">
            <div className="current_car_brand">
                <img src={audiLogo} alt="audi-logo" />
            </div>
            <div className="current_car_brand">
                <img src={vwLogo} alt="vw-logo" />
            </div>
            <div className="current_car_brand">
                <img src={bmwLogo} alt="bmw-logo" />
            </div>
            <div className="current_car_brand">
                <img src={audiLogo} alt="audi-logo" />
            </div>
            <div className="current_car_brand">
                <img src={audiLogo} alt="audi-logo" />
            </div>
            <div className="current_car_brand">
                <img src={audiLogo} alt="audi-logo" />
            </div>
        </div>
    );
}