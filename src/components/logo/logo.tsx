import Image from 'next/image';
import styles from './logo.module.scss';

function Logo({ src = "/assets/images/logo.webp" }: { src: string} ) {
	return <div className={styles.root}>
		<Image src={src} alt="logo" width={208} height={104} />
	</div>
}

export { Logo };
