import { Button } from ".";
import Image from "next/image";
import * as styles from "../styles/Hero.module.css";
import { images } from "../constants";
const Hero = () => {
	return (
		<div className={`${styles.heroContainer} row `}>
			{/* Details */}
			<div className={`${styles.detailsDiv}`}>
				{/* Title */}
				<div className={`${styles.titleDiv}`}>
					<h2 className={`${styles.heroTitle} textDark`}>
						Want anything to be easy with
					</h2>
					<h1 className={`${styles.brandName} textDark`}>
						{" "}
						LaslesVPN.
					</h1>
				</div>
				{/* subtitle */}
				<p className={`${styles.subtitle} textGray`}>
					Provide a network for all your needs with ease and fun using
					<strong> LaslesVPN</strong> discover interesting features
					from us.
				</p>
				{/* CTA */}
				<Button
					LabelComponent={<h4 className={"textWhite"}>Sign Up</h4>}
					borderRadiusType="softBorder"
					outlined={false}
					extraStyles={{ border: "none", width: "30%" }}
					boxshadowEnabled
				/>
			</div>
			{/* Image */}
			<div className={`${styles.imageDiv}`}>
				<img
					src={images.hero_image}
					alt=""
					className={`${styles.heroImage}`}
				/>
			</div>
		</div>
	);
};

export default Hero;
