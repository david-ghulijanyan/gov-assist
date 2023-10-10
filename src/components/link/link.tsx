import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';
import styles from './link.module.scss';

const Link: FC<PropsWithChildren<{}>> = ({children, href}: ) => {
	return <NextLink href={href} className={styles.root}>{children}</NextLink>
}

export { Link };
