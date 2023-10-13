'use client'

import { RecoilRoot } from "recoil";
import { Copyrights, Menu } from "../../components";
import styles from "./layout.module.scss";

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
      <main className={styles.root}>
        <Menu className={styles.menu}></Menu>
        {children}
        <Copyrights className={styles.copyrights} />
      </main>
    </RecoilRoot>
  )
}
