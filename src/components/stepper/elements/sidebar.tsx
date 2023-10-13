import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { stepper } from '../../../data';
import { Flex } from '../../flex';
import { TextField } from '../../formBuilder/types';
import { Logo } from '../../logo';
import { Text } from '../../text';
import { activeStepIndexAtom } from '../modifications';
import styles from './stepper.module.scss';

interface StepperSidebarProps {
  steps?: TextField[];
}

const StepperSidebar: FC<StepperSidebarProps> = ({ steps }) => {
  const [activeStepIndex, setActiveStepIndex] = useRecoilState(activeStepIndexAtom);

  return (
    <Flex direction='column' style={{gap: "var(--gov-h1-size)"}}>
      <Logo />
       <Flex direction='column' justifyContent='space-between' style={{height: "100%"}}>
      {stepper.map((step, index) => (
        <div
          key={step.name + index}
          className={`${styles.step} ${index <= activeStepIndex ? styles.active : ''}`}
          onClick={() => setActiveStepIndex(index)}
        >
          <div className={styles.dot}></div>
          <Text variant='h6' weight='s'>{step.label || step.name}</Text>
        </div>
      ))}
    </Flex>
   </Flex>
  );
};

export { StepperSidebar };
