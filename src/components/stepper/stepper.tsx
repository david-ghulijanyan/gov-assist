import gsap from 'gsap';
import { FC, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { stepper } from '../../data';
import { Button } from '../button';
import { Flex } from '../flex';
import { TextField } from '../formBuilder/types';
import { Icon } from '../icon';
import { Input } from '../input';
import { Text } from '../text';
import { StepContent } from './elements/content';
import { StepperControls } from './elements/controls';
import { activeStepIndexAtom } from './modifications';
import styles from "./stepper.module.scss";

const Stepper: FC<{steps: TextField[]}> = ({ steps }) => {
	const [activeStepIndex] = useRecoilState(activeStepIndexAtom);
  const contentRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
		if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
    }
  }, [activeStepIndex, contentRef]);

  const step = stepper[activeStepIndex];

  return ( 
    <Flex direction='column' className={styles.root}>
      <StepContent ref={contentRef}>
        <Flex direction='column' alignItems='flex-start' className={styles.form} style={{ gap: '30px' }}>
          <Text variant="h2" weight='xs' className={styles.title}>{step.label || step.name}</Text>
          <Flex style={{gap: 16}}>
            <Input className={styles.input} id={step.id} name={step.name} placeholder={step.placeholder} type={step.type} />
          </Flex>
          <Button className={styles.button}><Text>OK</Text><Icon className={styles.icon} name='check' /></Button>
        </Flex> 
      </StepContent>
      <StepperControls totalSteps={stepper.length} />
    </Flex>
  );
};


export { Stepper };
