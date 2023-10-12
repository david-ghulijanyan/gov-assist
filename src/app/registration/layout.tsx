import { Copyrights, Menu } from "../../components";
import styles from "./layout.module.scss";

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.root}>
      <Menu className={styles.menu}></Menu>
      {children}
      <Copyrights className={styles.copyrights} />
    </main>
  )
}
