import "../styles/PeopleEvalution.css";
import human1 from "../images/human1.jpg";

export default function PeopleEvalution() {
    return (
        <div className="people_evalution">
            <h1>WHAT PEOPLE SAY</h1>
            <hr/>
            <div className="people_container">
                <div className="current_human">
                    <img src={human1} alt="human1"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem earum
                        exercitationem explicabo laborum nemo nihil nisi totam voluptate voluptatem! Consectetur
                        corporis labore molestias nam non omnis quae quisquam vero?
                    </p>
                    <h2>Galena Simeonova</h2>
                </div>
            </div>
        </div>
    );
}