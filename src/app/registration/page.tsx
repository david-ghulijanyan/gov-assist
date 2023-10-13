'use client';

import { FC, PropsWithChildren, useState } from 'react';
import { Sidebar, StartSidebar } from '../../components/sidebar';
import { StartQuize } from '../../components/startQuize';
import { Stepper } from '../../components/stepper';
import { StepperSidebar } from '../../components/stepper/elements/sidebar';
import { stepper } from '../../data';
import styles from "./page.module.scss";

const Registration: FC<PropsWithChildren> = () => {
  const [started, setStarted] = useState<boolean>(false);

  const handleOnStart = () => {
    setStarted(true);
  }

  return (
    <div className={styles.root}>
      <Sidebar small={started}>
        {started ? <StepperSidebar steps={stepper} /> : <StartSidebar />}
      </Sidebar>
      {started ? <Stepper steps={stepper} /> : <StartQuize onClick={handleOnStart} />}
    </div>
  )
}

export default Registration;