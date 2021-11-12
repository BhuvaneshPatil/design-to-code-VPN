import * as styles from "../styles/Button.module.css";
const Button = ({
	onClick,
	outlined,
	LabelComponent,
	borderRadiusType,
	extraStyles,
	boxshadowEnabled,
}) => {
	const outlined_classname = outlined
		? "borderRed backgroundWhite"
		: "backGroundRed";
	const boxshadow = boxshadowEnabled ? "buttonShadow" : "";
	return (
		<button
			className={`${styles.btn} ${outlined_classname} ${borderRadiusType} ${boxshadow}`}
			style={extraStyles}
		>
			{LabelComponent}
		</button>
	);
};

export default Button;
