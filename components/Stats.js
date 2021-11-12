import * as styles from "../styles/Stats.module.css";
const stats = [
	{
		id: 1,
		title: "Users",
		numberText: "90+",
		imageUrl: "/images/user.png",
	},
	{
		id: 2,
		title: "Locations",
		numberText: "30+",
		imageUrl: "/images/location.png",
	},
	{
		id: 3,
		title: "Servers",
		numberText: "50+",
		imageUrl: "/images/Server.png",
	},
];
const Stats = () => {
	return (
		<div className={`row ${styles.statContainer}`}>
			{stats.map((item, index) => {
				const borderClass =
					index < stats.length - 1 ? styles.borderRight : "";
				return (
					<div className={`${styles.stat} ${borderClass}`}>
						<img
							src={item.imageUrl}
							className={`${styles.statImage} `}
						/>
						<div className={`${styles.textArea}`}>
							<h3 className={`${styles.count} textDark`}>
								{item.numberText}
							</h3>
							<p className={`${styles.field} textGray`}>
								{item.title}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Stats;
