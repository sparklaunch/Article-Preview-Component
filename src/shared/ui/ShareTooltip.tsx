import Image from "next/image";
import facebook from "../assets/images/facebook.svg";
import pinterest from "../assets/images/pinterest.svg";
import shareButton from "../assets/images/share.svg";
import twitter from "../assets/images/twitter.svg";
import styles from "./ShareTooltip.module.css";

export default function ShareTooltip() {
	return (
		<div className={styles.tooltipWrapper}>
			<div className={styles.tooltip}>
				<p className={styles.shareText}>SHARE</p>
				<button type="button" className={styles.shareButton}>
					<Image src={facebook} alt="Share on Facebook" />
				</button>
				<button type="button" className={styles.shareButton}>
					<Image src={twitter} alt="Share on Twitter" />
				</button>
				<button type="button" className={styles.shareButton}>
					<Image src={pinterest} alt="Share on Pinterest" />
				</button>
				<div className={styles.arrow} />
			</div>
			<div className={styles.mobileTooltip}>
				<div className={styles.mobileLeft}>
					<p className={styles.shareText}>SHARE</p>
					<button type="button" className={styles.shareButton}>
						<Image src={facebook} alt="Share on Facebook" />
					</button>
					<button type="button" className={styles.shareButton}>
						<Image src={twitter} alt="Share on Twitter" />
					</button>
					<button type="button" className={styles.shareButton}>
						<Image src={pinterest} alt="Share on Pinterest" />
					</button>
				</div>
				<button type="button" className={styles.closeShareButton}>
					<Image src={shareButton} alt="Close Share" />
				</button>
			</div>
		</div>
	);
}
