import * as styles from "../styles/Reviews.module.css";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { reviews } from "../constants";
import { ReviewCard } from ".";
const Reviews = () => {
	const [emblaRef, embla] = useEmblaCarousel({
		dragFree: true,
		containScroll: "trimSnaps",
	});
	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	return (
		<div className={`${styles.reviewContainer}`}>
			<div className={`${styles.headingContainer}`}>
				<h1>Trusted by Thousands of Happy Customer</h1>
			</div>
			<div className={`${styles.subHeadingContainer} textGray`}>
				<p>
					These are the stories of our customers who have joined us
					with great pleasure when using this crazy feature.
				</p>
			</div>
			{/* Reviews */}
			<div style={{ marginTop: "3rem" }}>
				<div className="embla">
					<div className="embla__viewport" ref={emblaRef}>
						<div className="embla__container">
							{reviews.map((item, index) => (
								<div className="embla__slide" key={index}>
									<div className="embla__slide__inner">
										<ReviewCard
											reviewData={item}
											isActive={index === 0}
											key={index}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
				<NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
			</div>
		</div>
	);
};

export default Reviews;
