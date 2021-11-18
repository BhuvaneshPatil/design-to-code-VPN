import * as styles from "../styles/Reviews.module.css";
const ScrollButton = ({ onClickHandle, isDisabled, innerComponent }) => {
	return (
		<div
			className={`${styles.scollButtonContainer} ${
				isDisabled ? "backgroundWhite" : "backgroundRed"
			} borderRed`}
			onClick={onClickHandle}
		>
			{innerComponent}
		</div>
	);
};

export default ScrollButton;
