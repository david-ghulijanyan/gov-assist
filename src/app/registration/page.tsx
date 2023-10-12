import { FC, PropsWithChildren } from 'react';
import { Copyrights, Menu } from '../../components';
import { Sidebar } from '../../components/sidebar';
import { StartQuize } from '../../components/startQuize';
import styles from "./page.module.scss";

const Registration: FC<PropsWithChildren> = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      <StartQuize />
    </div>
  )
}

export default Registration;