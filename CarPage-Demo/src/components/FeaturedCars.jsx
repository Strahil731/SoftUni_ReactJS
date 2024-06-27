import "../styles/FeaturedCars.css"
import audi from "../images/audi.webp";

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
                            <img src={audi} alt="AUDI" />
                            <p>Model:2019<br /> Power:3.0TDI 240HP</p>
                        </div>
                    </div>
                    <h2>AUDI A6</h2>
                    <h5>167,500лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.</p>
                </div>
            </div>
        </div>
    );
}