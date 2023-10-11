'use client';

import { format } from 'date-fns';
import { gsap } from 'gsap';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { reviews as data } from '../../data';
import { Container } from '../container';
import { Flex } from '../flex';
import { Icon } from '../icon';
import { Link } from '../link';
import { Text } from '../text';
import styles from './carousel.module.scss';

interface User {
  id: string;
  image: string;
  name: string;
  reviewsCount: number;
  location: string;
}

interface Review {
  id: string;
  rate: number;
  recommendation: string;
  message: string;
  createdAt: string;
  date: string;
  user: User;
}

interface CarouselProps {
  reviews: Review[];
}

const Carousel: FC<CarouselProps> = ({ reviews = data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

	// @TODO: make links work with replacewithJsx function
	const genReviewLink = (reviewId) => {
		return `https://www.trustpilot.com/reviews/${reviewId}`;
	}

	const genUserLink = (userId) => {
		return `https://www.trustpilot.com/reviews/${userId}`;
	}

  useEffect(() => {
    if (carouselRef.current) {
      const tl = gsap.timeline();
      tl.to(carouselRef.current.children, {
        x: `-${activeIndex * 100}%`,
        duration: 0.5,
        stagger: { each: 0.1, from: 'end' }
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  return (
		<Container className={styles.root}>
			<Text variant='h3' className={styles.title}>
				<Icon name='star' className={styles.icon} />
				<Text variant='h4'>Find the right visa for you!</Text>
			</Text>
			<div className={styles.carouselContainer}>
				<div className={styles.carouselWrapper} ref={carouselRef}>
					{reviews.map((review) => (
						<div key={review.id} className={styles.reviewSlide}>
							<Flex direction='column' style={{gap: 24}}>
								<Flex direction='row' className={styles.userWrapper}>
									<Flex>
										<Image src={review.user.image} alt={review.user.id} width={72} height={72} className={styles.userImage} />
									</Flex>
									<Flex direction='column' style={{flexGrow: 1}}>
											<Text variant='h4' style={{ flexGrow: 1 }}>
												<Link href={genUserLink(review.user.id)}>{review.user.name}</Link>
											</Text>
											<Flex>
												<Text variant='h5' weight='m' style={{ flexBasis: "20%"}}>{review.user.reviewsCount} reviews</Text>
												<Text variant='h5' weight='m'><Icon name="place" className={styles.place} /> <span>{review.user.location}</span></Text>
											</Flex>
									</Flex>
								</Flex>
								<Flex justifyContent='flex-end' className={styles.created}>{format(new Date(review.createdAt), "MMM dd, yyyy")}</Flex>
								<Flex justifyContent='flex-start' className={styles.rating}>asasd</Flex>
								<Flex className={styles.review} direction="column">
									<Text variant='h4'><Link href={genUserLink(review.id)}>{review.recommendation}</Link></Text>
									<Text as='p' style={{lineHeight: 1.3, textAlign: "justify"}}>{review.message}</Text>
								</Flex>
								<Flex justifyContent='flex-start' className={styles.date}>
									<Text variant='h6'>Date of experience: {format(new Date(review.createdAt), "MMMM dd, yyyy")}</Text>
								</Flex>
							</Flex>
						</div>
					))}
				</div>
				<Flex justifyContent="center">
					<button onClick={handlePrev} className={styles.carouselArrow}><Icon name='arrow-right' /></button>
					<button onClick={handleNext} className={styles.carouselArrow}><Icon name='arrow-right' /></button>
				</Flex>
			</div>
		</Container>
  );
};

export { Carousel };
