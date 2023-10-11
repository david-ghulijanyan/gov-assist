import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';
import styles from './link.module.scss';

interface LinkProps {
	href: string,
	target?: '_blank' | '_parent' | '_self' | '_top'
};

const Link: FC<PropsWithChildren<LinkProps>> = ({ children, href, target } ) => {
	return <NextLink target={target} href={href} className={styles.root}>{children}</NextLink>
}

export { Link };
