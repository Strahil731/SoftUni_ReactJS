import "../styles/PeopleEvalution.css";
import human1 from "../images/human1.jpg";
import human2 from "../images/human2.jpg";
import human3 from "../images/human3.jpg";

export default function PeopleEvalution() {
    return (
        <div className="people_evalution">
            <h1>WHAT PEOPLE SAY</h1>
            <hr />
            <div className="people_container">
                <div className="current_human">
                    <img src={human1} alt="human1" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem earum
                        exercitationem explicabo laborum nemo nihil nisi totam voluptate voluptatem! Consectetur
                        corporis labore molestias nam non omnis quae quisquam vero?
                    </p>
                    <h2>Galena Simeonova</h2>
                </div>
                <div className="current_human">
                    <img src={human2} alt="human2" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem earum
                        exercitationem explicabo laborum nemo nihil nisi totam voluptate voluptatem! Consectetur
                        corporis labore molestias nam non omnis quae quisquam vero?
                    </p>
                    <h2>Ivan Ivanov</h2>
                </div>
                <div className="current_human">
                    <img src={human3} alt="human3" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem earum
                        exercitationem explicabo laborum nemo nihil nisi totam voluptate voluptatem! Consectetur
                        corporis labore molestias nam non omnis quae quisquam vero?
                    </p>
                    <h2>Silverster Georgiev</h2>
                </div>
            </div>
        </div>
    );
}