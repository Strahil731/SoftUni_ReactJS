import "../styles/FeaturedCars.css"
import audi from "../images/audi.webp";
import vw from "../images/vw.png";
import porsche from "../images/porsche.webp";

export default function NewCar() {
    return (
        <div className="featuredCars_container">
            <h1>Featured Cars</h1>
            <hr />
            <div className="cars_container">
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={audi} alt="AUDI" />
                            <p>Model:2019<br /> Power:3.0TDI 240HP</p>
                        </div>
                    </div>
                    <h2>AUDI A6</h2>
                    <h5>167,500лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</p>
                </div>
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={vw} alt="VW" />
                            <p>Model:2021<br /> Power:2.0TDI 174HP</p>
                        </div>
                    </div>
                    <h2>VW PASSAT</h2>
                    <h5>121,000лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</p>
                </div>
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={porsche} alt="PORSCHE" />
                            <p>Model:2025<br /> Power:ELECTRIC 938HP</p>
                        </div>
                    </div>
                    <h2>PORSCHE TAYCAN</h2>
                    <h5>500,000лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</p>
                </div>
            </div>
        </div>
    );
}