import { FC, PropsWithChildren, PropsWithRef, useRef } from 'react';
import { Container } from '../..';
import { TextField } from '../../formBuilder/types';
import styles from "./content.module.scss";

const StepContent: FC<PropsWithChildren<PropsWithRef<{steps: TextField[]}>>> = ({ ref, children }) => {
  const domRef = useRef<HTMLDivElement | null>(ref);

  return <div ref={domRef} className={styles.root}><Container>{children}</Container></div>;
};

export { StepContent };
