import { TiTick } from "react-icons/ti";
import { Button } from ".";
import * as styles from "../styles/Card.module.css";
const Card = ({ isActive, cardInfo, title }) => {
	return (
		<div className={`${styles.cardBody} ${isActive ? "borderRed" : ""}`}>
			{/* Image */}
			<img src={cardInfo.image} className={`${styles.planImage}`} />
			{/* Heading */}
			<h3 className={`${styles.cardHeading}`}>{title}</h3>
			<ul>
				{cardInfo.features.map((item, index) => {
					return (
						<li
							style={{ display: "flex", alignItems: "center" }}
							key={index}
						>
							<TiTick
								style={{
									color: "#2fab73",
									display: "inline",
									scale: "1.3",
								}}
							/>
							<p className={`textGray`}>{item}</p>
						</li>
					);
				})}
			</ul>
			{/* Pricing */}
			<div className={`${styles.pricing}`}>
				<h3
					className={`textDark`}
					style={{ fontSize: "1.6rem", textAlign: "center" }}
				>
					{cardInfo.price === 0 ? "Free" : `\$${cardInfo.price} `}
					<span
						style={{ display: cardInfo.price ? "inline" : "none" }}
						className={`textGray`}
					>
						/mo
					</span>
				</h3>
				<Button
					borderRadiusType="roundedBorder"
					outlined={!isActive}
					extraStyles={{
						border: isActive ? "none" : "",
						marginTop: "1rem",
					}}
					LabelComponent={
						<h3 className={`${isActive ? "textWhite" : "textRed"}`}>
							Select
						</h3>
					}
					boxshadowEnabled={isActive}
				/>
			</div>
		</div>
	);
};

export default Card;
