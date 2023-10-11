import { FC, CSSProperties } from 'react';
import styles from './rate.module.scss';
import { Icon } from '../icon';

interface RateProps {
  rating?: number;
}

const Rate: FC<RateProps> = ({ rating = 4.5 }) => {
  const calculateFillPercentage = (index: number) => {
    const rateValue = (rating / 5) * 100;
    const threshold = (index + 1) * 20;
    if (rateValue >= threshold) return 100;
    if (rateValue > (index * 20) && rateValue < threshold) {
      return (rateValue % 20) * 5;
    }
    return 0;
  };

  return (
    <div className={styles.root}>
      {Array.from({ length: 5 }).map((_, index) => {
        const percentage = calculateFillPercentage(index);
        const blockStyles: CSSProperties = {
          background: `linear-gradient(90deg, #00B87C ${percentage}%, var(--gov-grey-l) ${percentage}%, var(--gov-grey-l) 100%)`
        };

        return (
          <div
            key={index}
            className={styles.rateBlock}
            style={blockStyles}
					>
						<Icon name='star-rate' />
					</div>
        );
      })}
    </div>
  );
};

export { Rate };
