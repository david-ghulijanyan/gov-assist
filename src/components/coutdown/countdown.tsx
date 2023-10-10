
import { FC, useEffect, useState } from 'react';
import { calculateTimeLeft } from './calculateTimeLeft';

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
		<div>
			<div>
				<span>
					{timeLeft.days}
				</span>
				<span>
					Days
				</span>
			</div>
			<div>
				<span>
					{timeLeft.hours}
				</span>
				<span>
					Hours
				</span>
			</div>
			<div>
				<span>
					{timeLeft.minutes}
				</span>
				<span>
					Minutes
				</span>
			</div>
			<div>
				<span>
					{timeLeft.seconds}
				</span>
				<span>
					Seconds
				</span>
			</div>
		</div>
	);
};

export { Countdown, calculateTimeLeft };
