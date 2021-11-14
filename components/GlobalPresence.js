import { images } from "../constants";
import * as styles from "../styles/GlobalPresence.module.css";
const GlobalPresence = () => {
	return (
		<div className={`container ${styles.mapContainer}`}>
			<div className={`${styles.headingContainer}`}>
				<h1>Huge Global Network of Fast VPN</h1>
			</div>
			<div className={`${styles.subHeadingContainer} textGray`}>
				<p>
					See
					<strong> LaslesVPN </strong>
					everywhere to make it easier for you when you move
					locations.
				</p>
			</div>
			<div className={`row horizontalCenter`}>
				<img
					src={images.global_map}
					alt=""
					className={`${styles.mapImage}`}
				/>
			</div>
		</div>
	);
};

export default GlobalPresence;
