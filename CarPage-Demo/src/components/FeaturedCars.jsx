import "../styles/FeaturedCars.css"
import audi from "../images/audi.webp";
import vw from "../images/vw.png";
import porsche from "../images/porsche.webp";
import bmw from "../images/bmw.png";
import mercedes from "../images/mercedes.png";
import mazda from "../images/mazda.png";

export default function NewCar() {
    return (
        <div className="featuredCars_container">
            <h1>Featured Cars</h1>
            <hr/>
            <div className="cars_container">
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={audi} alt="AUDI"/>
                            <p>Model:2019<br/> Power:3.0TDI 240HP</p>
                        </div>
                    </div>
                    <h2>AUDI A6</h2>
                    <h5>167,500лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                        quia non.</p>
                </div>
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={vw} alt="VW"/>
                            <p>Model:2021<br/> Power:2.0TDI 174HP</p>
                        </div>
                    </div>
                    <h2>VW PASSAT</h2>
                    <h5>121,000лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                        quia non.</p>
                </div>
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={porsche} alt="PORSCHE"/>
                            <p>Model:2025<br/> Power:ELECTRIC 938HP</p>
                        </div>
                    </div>
                    <h2>PORSCHE TAYCAN</h2>
                    <h5>500,000лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                        quia non.</p>
                </div>
            </div>
            <div className="cars_container">
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={bmw} alt="BMW"/>
                            <p>Model:2017<br/> Power:530Xi 252HP</p>
                        </div>
                    </div>
                    <h2>BMW 530</h2>
                    <h5>95,000лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                        quia non.</p>
                </div>
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={mercedes} alt="MERCEDES"/>
                            <p>Model:2020<br/> Power:2.0TDI 194HP</p>
                        </div>
                    </div>
                    <h2>MERCEDES</h2>
                    <h5>79,000лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                        quia non.</p>
                </div>
                <div className="more_info">
                    <div className="current_car">
                        <div className="car_info">
                            <img src={mazda} alt="MAZDA"/>
                            <p>Model:2020<br/> Power:2.5i 250HP</p>
                        </div>
                    </div>
                    <h2>MAZDA 6</h2>
                    <h5>65,000лв.</h5>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                        quia non.</p>
                </div>
            </div>
        </div>
    );
}