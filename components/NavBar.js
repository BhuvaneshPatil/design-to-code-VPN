import Image from "next/image";
import Link from "next/link";
import { Button } from ".";
import { images } from "../constants";
import * as styles from "../styles/Navbar.module.css";
const imageDim = 35;
const NavBar = () => {
	return (
		<div className={`container row ${styles.nav}`}>
			{/* Logo and Name */}
			<div className={`row ${styles.logo}`}>
				<Image src={images.icons} height={imageDim} width={imageDim} />
				<h3>LaslesVPN</h3>
			</div>
			{/* Navigation Items */}
			<ul className={`row ${styles.navLinks} `}>
				<li>
					<Link href="/" passHref>
						<a className={`${styles.navLink}`}>About</a>
					</Link>
				</li>
				<li>
					<Link href="/" passHref>
						<a className={`${styles.navLink}`}>Features</a>
					</Link>
				</li>
				<li>
					<Link href="/" passHref>
						<a className={`${styles.navLink}`}>Pricing</a>
					</Link>
				</li>
				<li>
					<Link href="/" passHref>
						<a className={`${styles.navLink}`}>Testimonials</a>
					</Link>
				</li>
				<li>
					<Link href="/" passHref>
						<a className={`${styles.navLink}`}>Help</a>
					</Link>
				</li>
			</ul>
			{/* User Entry */}
			<div className={`row`}>
				{/* Sigin  */}
				<Link href="/" passHref>
					<a className={`${styles.signin}`}>
						<h4>Sign In</h4>
					</a>
				</Link>
				{/* Sig n Up */}
				<div style={{ marginLeft: 20 }}>
					<Button
						LabelComponent={<h4 className={"textRed"}>Sign Up</h4>}
						outlined
						borderRadiusType="roundedBorder"
						extraStyles={{ padding: "12px 40px" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
