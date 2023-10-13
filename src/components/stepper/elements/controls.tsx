import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { activeStepIndexAtom } from '../modifications';
import styles from './stepper.module.scss';
import { Button } from '../../button';
import { Icon } from '../../icon';

interface StepperControlsProps {
  totalSteps: number;
}

const StepperControls: FC<StepperControlsProps> = ({ totalSteps }) => {
  const [activeStepIndex, setActiveStepIndex] = useRecoilState<number>(activeStepIndexAtom);

  return (
    <div className={styles.controls}>
      <Button variant='secondary' onClick={() => setActiveStepIndex(Math.max(activeStepIndex - 1, 0))}><Icon name='arrow-down-round'/></Button>
      <Button variant='secondary' onClick={() => setActiveStepIndex(Math.min(activeStepIndex + 1, totalSteps - 1))}><Icon name='arrow-down-round'/></Button>
    </div>
  );
};

export { StepperControls };
