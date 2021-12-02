import { Button } from ".";
import { images } from "../constants";
import * as styles from "../styles/Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const SocialIcon = ({ iconComponent }) => {
	return <div className={`${styles.iconContainer}`}>{iconComponent}</div>;
};

const Footer = () => {
	return (
		<div className={` backgroundGray`}>
			<div className={`container ${styles.footerContainer}`}>
				{/* Subscribe */}
				<div className={`row ${styles.subscribeBox}`}>
					<div className="row">
						{/* Text Section */}
						<div>
							<h2 className={`textDark`}>
								Subscribe Now to Get Special Features!
							</h2>
							<p className={`textGray`}>
								Let's subscribe with us and find the fun.
							</p>
						</div>
						<Button
							LabelComponent={
								<h4 className={"textWhite"}>Subscribe Now</h4>
							}
							borderRadiusType="softBorder"
							outlined={false}
							extraStyles={{
								border: "none",
								alignSelf: "center",
								width: "30%",
							}}
							boxshadowEnabled
						/>
						{/* Button */}
					</div>
				</div>
				<div className="row">
					<div className={`${styles.branding}`}>
						{/* heading */}
						<div className={`${styles.logoSection}`}>
							<img src={images.icons} />
							<h3 className={`textDark`}>
								Lasles<strong>VPN</strong>
							</h3>
						</div>
						{/* details */}
						<p className={`${styles.details} textGray`}>
							<strong>LaslesVPN </strong>
							is a private virtual network that has unique
							features and has high security.
						</p>
						<div className={`${styles.icons}`}>
							{[
								<FaFacebookF color={"#f53838"} />,
								<FaTwitter color={"#f53838"} />,
								<FaInstagram color={"#f53838"} />,
							].map((item, index) => {
								return (
									<SocialIcon
										iconComponent={item}
										key={index}
									/>
								);
							})}
						</div>
						{/* social */}
					</div>
					<div className={`${styles.linkSet}`}>
						<ul>
							<li className={`${styles.linKSetHeading}`}>
								Product
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Download</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Pricing</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Locations</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Servers</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Countries</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Blog</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.linkSet}`}>
						<ul>
							<li className={`${styles.linKSetHeading}`}>
								Engage
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">LaslesVPN ?</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">FAQ</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Tutorials</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">About us</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Privacy Policy</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Terms of Services</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.linkSet}`}>
						<ul>
							<li className={`${styles.linKSetHeading}`}>
								{" "}
								Earn Money
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Affiliate</a>
							</li>
							<li className={`${styles.linkText}`}>
								<a href="/">Become Partner</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
