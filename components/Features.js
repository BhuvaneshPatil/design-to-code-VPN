import { images, fe } from "../constants/images";
import * as styles from "../styles/Features.module.css";
import { TiTick } from "react-icons/ti";
const featureList = [
	"Powerfull online protection.",
	"Internet without borders.",
	"Supercharged VPN",
	"No specific time limits.",
];
const Features = () => {
	return (
		<div className={`row ${styles.featureContainer}`}>
			{/* Image */}
			<img src={images.feature_image} className={``} />
			{/* Text Area */}
			<div className={`${styles.featureTextSide}`}>
				<h1 className={`textDark`}>
					We Provide Many Features You Can Use
				</h1>
				<p className="textGray">
					You can explore the features that we provide with fun and
					have their own functions each feature.
				</p>
				<ul className={`${styles.featureList}`}>
					{featureList.map((item, index) => {
						return (
							<li className={`${styles.feature}`}>
								{/* icon */}
								<div className={`${styles.tickContainerStyle}`}>
									<TiTick style={{ color: "#fff" }} />
								</div>
								<p className={`textGray`}>{item}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Features;
