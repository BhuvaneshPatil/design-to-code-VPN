import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { reviews } from "../constants";
import { ReviewCard } from ".";
import Dot from "./Dot";
import ScrollButton from "./ScrollButton";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import * as styles from "../styles/Reviews.module.css";
const Reviews = () => {
	const [emblaRef, embla] = useEmblaCarousel({
		dragFree: true,
		containScroll: "trimSnaps",
	});
	const [selectedIndex, setSelectedIndex] = useState(0);
	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
	const [canScrollNext, setCanScrollNext] = useState(true);
	const [canScrollPrev, setCanScrollPrev] = useState(true);
	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
		setCanScrollNext(embla.canScrollNext());
		setCanScrollPrev(embla.canScrollPrev());
	}, [embla, setSelectedIndex]);
	useEffect(() => {
		if (!embla) return;
		onSelect();
		embla.on("select", onSelect);
	}, [embla, onSelect]);

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
											isActive={index === selectedIndex}
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
			<div className={`container row alignCenter`}>
				{/* dots */}
				<div className={` ${styles.dotContainer}`}>
					{reviews.map((item, index) => {
						return (
							<Dot
								key={index}
								isActive={index === selectedIndex}
								clickHandler={() => {
									embla.scrollTo(index);
								}}
							/>
						);
					})}
				</div>
				<div className={`${styles.buttonsContainer}`}>
					<ScrollButton
						isDisabled={!canScrollPrev}
						onClickHandle={scrollPrev}
						innerComponent={
							<MdArrowBack
								style={{
									color: canScrollPrev ? "white" : "#f53838",
									height: 30,
									width: 30,
								}}
							/>
						}
					/>
					<ScrollButton
						isDisabled={!canScrollNext}
						onClickHandle={scrollNext}
						innerComponent={
							<MdArrowForward
								style={{
									color: canScrollNext ? "white" : "#f53838",
									height: 30,
									width: 30,
								}}
							/>
						}
					/>
				</div>
				{/* Buttons */}.
			</div>
		</div>
	);
};

export default Reviews;
