import * as styles from "../styles/Pricing.module.css";
import { plans } from "../constants";
import { Card } from ".";
const Pricing = () => {
	return (
		<div className={`${styles.pricingContainer} backgroundLightGray`}>
			<h1>Choose Your Plan</h1>
			<p className={`textGray`}>
				{
					"Let's choose the package that is best for you and explore it happily and \n cheerfully."
				}
			</p>
			{/* Cards */}
			<div className={`container row ${styles.cardsContainer}`}>
				<Card cardInfo={plans["Free Plan"]} title={"Free Plan"} />
				<Card
					cardInfo={plans["Standard Plan"]}
					title={"Standard Plan"}
				/>
				<Card
					cardInfo={plans["Premium Plan"]}
					title={"Premium Plan"}
					isActive
				/>
			</div>
		</div>
	);
};

export default Pricing;
