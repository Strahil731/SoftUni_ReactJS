import "../styles/CarBrand.css";
import br1 from "../images/br1.png";
import br2 from "../images/br2.png";
import br3 from "../images/br3.png";
import br4 from "../images/br4.png";
import br5 from "../images/br5.png";
import br6 from "../images/br6.png";

export default function CarBrand() {
    return (
        <div className="car_brand_container">
            <div className="current_car_brand">
                <img src={br1} alt="br1" />
            </div>
            <div className="current_car_brand">
                <img src={br2} alt="br2" />
            </div>
            <div className="current_car_brand">
                <img src={br3} alt="br3" />
            </div>
            <div className="current_car_brand">
                <img src={br4} alt="br4" />
            </div>
            <div className="current_car_brand">
                <img src={br5} alt="br5" />
            </div>
            <div className="current_car_brand">
                <img src={br6} alt="br6" />
            </div>
        </div>
    );
}