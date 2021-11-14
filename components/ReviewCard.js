import { AiFillStar } from "react-icons/ai";
import * as styles from "../styles/ReviewCard.module.css";
const ReviewCard = ({ isActive, reviewData }) => {
	return (
		<div
			className={`roundedBorder ${styles.cardContainer} ${
				isActive ? "borderRed" : "borderGray"
			}`}
		>
			{/* Person */}
			<div className={`row alignCenter`}>
				{/* image and name */}

				<img src={reviewData.image} />
				<div style={{ marginLeft: "0.6rem" }}>
					<h4>{reviewData.name}</h4>
					<p className={`textGray`}>{reviewData.subtitle}</p>
				</div>

				<div
					style={{ marginLeft: "auto" }}
					className={`row alignCenter textDark`}
				>
					<p>{reviewData.rating}</p>
					<AiFillStar style={{ marginLeft: 5, color: "#FEA250" }} />
				</div>

				{/* reviews */}
			</div>
			<p
				style={{ marginTop: "1rem", lineHeight: 1.5 }}
				className={`textGray`}
			>
				{reviewData.description}
			</p>
		</div>
	);
};

export default ReviewCard;
