import * as styles from "../styles/Reviews.module.css";

const Dot = ({ isActive, clickHandler }) => {
	return (
		<div
			className={`${styles.dot} ${
				isActive
					? `backgroundRed ${styles.dotExtended}`
					: "backgroundDarkGray"
			}`}
			onClick={clickHandler}
		></div>
	);
};

export default Dot;
