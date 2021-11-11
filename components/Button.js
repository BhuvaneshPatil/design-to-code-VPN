import * as styles from "../styles/Button.module.css";
const Button = ({ onClick, outlined, LabelComponent, borderRadiusType }) => {
	const outlined_classname = outlined ? "borderRed" : "backGroundRed";
	return (
		<button
			className={`${styles.btn} ${outlined_classname} ${borderRadiusType}`}
		>
			{LabelComponent}
		</button>
	);
};

export default Button;
