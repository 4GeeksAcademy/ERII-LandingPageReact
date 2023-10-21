import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer"

//create your first component
const Home = () => {
	return (
		<div id="main">
			<div>
				<Navbar />
				<div className="d-flex justify-content-center m-3">
					<div id="Container" className="container d-flex justify-content-center m-3">
						<div className="row justify-content-between">
							<Jumbotron />
							<Card
								img="https://cdn.thecollector.com/wp-content/uploads/2022/12/Seneca-Death-oiloncanvas-painting.jpg?width=1400&quality=55"
								title="Courage"
								description="Courage is the ability to act in situations where we feel fear. Courage is not the absence of fear, it is the ability to act despite fear, despite being in danger. The history of Stoicism is full of different examples of courage."
								button="Click here!" />
							<Card
								img="https://cdn.thecollector.com/wp-content/uploads/2022/12/Epictetus-portrait-print.jpg?width=1200&quality=55"
								title="Temperance"
								description="Temperance can be a difficult word and virtue to understand for modern readers. In one sense it means moderation, but probably what it is closest to is self-discipline or self-control."
								button="Click here!" />
							<Card
								img="https://cdn.thecollector.com/wp-content/uploads/2022/12/Justice-woman-sketch-brownink-paper.jpg?width=1400&quality=55"
								title="Justice"
								description="There is an argument between Stoics about which is the most important virtue. For Marcus Aurelius it was justice. Cicero too argued that justice was the source of all the other virtues."
								button="Click here!" />
							<Card
								img="https://cdn.thecollector.com/wp-content/uploads/2022/12/wisdom-battle-engraving.jpg?width=1200&quality=55"
								title="Courage"
								description="It is perhaps wisdom though, that stands out as the virtue around which all the other cardinal virtues revolve. Like Aristotle, the Stoics were concerned with applying virtue in real life, and without wisdom that was difficult."
								button="Click here!" />

						</div>

					</div>


				</div>
				<Footer />
			</div>








		</div>


	);
};

export default Home;
