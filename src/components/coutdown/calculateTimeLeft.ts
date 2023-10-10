import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, isPast, parseISO } from "date-fns";

const calculateTimeLeft = (targetDate: string) => {
	const now = new Date();
	const target = parseISO(targetDate);

	if (isPast(target)) {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
	}

	const days = differenceInDays(target, now);
	const hours = differenceInHours(target, now) % 24;
	const minutes = differenceInMinutes(target, now) % 60;
	const seconds = differenceInSeconds(target, now) % 60;

	return {
		days,
		hours,
		minutes,
		seconds
	};
};

export { calculateTimeLeft };
