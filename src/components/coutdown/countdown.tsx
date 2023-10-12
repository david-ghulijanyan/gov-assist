'use client';

import { FC, useEffect, useState } from 'react';
import { Flex } from '../flex';
import { Text } from '../text';
import { calculateTimeLeft } from './calculateTimeLeft';
import styles from "./countdown.module.scss";

interface CountdownProps {
	targetDate: string;
}

const Countdown: FC<CountdownProps> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(calculateTimeLeft(targetDate));
		}, 1000);

		return () => clearInterval(interval);
	}, [targetDate]);

	return (
		<div className={styles.root}>
			<Flex direction='column' className={styles.item}>
				<Text variant='h3' weight='xxl'>
					{timeLeft.days}
				</Text>
				<Text variant='small' weight='xs' style={{color: "#A5DEFF"}}>
					Days
				</Text>
			</Flex>
			<Flex direction='column' className={styles.item}>
				<Text variant='h3' weight='xxl'>
					{timeLeft.hours}
				</Text>
				<Text  variant='small' weight='xs' style={{color: "#A5DEFF"}}>
					Hours
				</Text>
			</Flex>
			<Flex direction='column' className={styles.item}>
				<Text variant='h3' weight='xxl'>
					{timeLeft.minutes}
				</Text>
				<Text variant='small' weight='xs' style={{color: "#A5DEFF"}}>
					Minutes
				</Text>
			</Flex>
			<Flex direction='column' className={styles.item}>
				<Text variant='h3' weight='xxl'>
					{timeLeft.seconds}
				</Text>
				<Text variant='small' weight='xs' style={{color: "#A5DEFF"}}>
					Seconds
				</Text>
			</Flex>
		</div>
	);
};

export { Countdown, calculateTimeLeft };
