// @TODO: All icons should be converted to font
import { CSSProperties, FC } from 'react';

interface IconProps {
	name: string;
	className?: string;
	style?: CSSProperties;
}

const Icon: FC<IconProps> = ({ name, className, style }) => {
	switch (name) {
		case 'arrow-down-round':
			return (
				<svg className={className} style={style} width="48" height="25" viewBox="0 0 48 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M45.4039 22L27.9498 4.54597C25.8885 2.48468 22.5155 2.48468 20.4542 4.54597L3 22" stroke="white" stroke-width="4.75" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			);
		case 'arrow-down-square':
			return (
				<svg className={className} style={style} width="33" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="m1 1 15.5 15L32 1" stroke="#fff" stroke-width="2" />
				</svg>
			);
		case 'arrow-down':
			return (
				<svg className={className} style={style} width="14" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="m1 1 6 6 6-6" stroke="#fff" stroke-width="2" stroke-linecap="round" />
				</svg>
			);
		case 'check':
			return (
				<svg className={className} style={style} width="26" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 9.333 8.765 16 25 2" stroke="#fff" stroke-width="3" style={{
						"stroke": "#fff",
						"strokeOpacity": "1",
						"strokeWidth": "3.00094488",
						"strokeDasharray": "none",
						"fill": "none"
					}} />
				</svg>
			);
		case 'document-text':
			return (
				<svg className={className} style={style} width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.375 13.512h1.137M6.688 13.512h2.786M6.688 18.062h4.55M1 8.962C1 3.275 3.275 1 8.962 1h5.688M23.75 10.1v5.687c0 5.687-2.275 7.962-7.963 7.962H8.962C3.275 23.75 1 21.474 1 15.787V13.49M19.2 10.1c-3.413 0-4.55-1.138-4.55-4.55V1l9.1 9.1" stroke="#fff" stroke-width="2" />
				</svg>
			);
		case 'place':
			return (
				<svg className={className} style={style} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" fill="#fff" />
				</svg>
			);
		case 'right':
			return (
				<svg className={className} style={style} width="34" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21.062 24.594c-.342 0-.685-.126-.956-.397a1.36 1.36 0 0 1 0-1.912l9.991-9.99-9.99-9.991a1.36 1.36 0 0 1 0-1.912 1.36 1.36 0 0 1 1.911 0L32.965 11.34a1.36 1.36 0 0 1 0 1.912L22.018 24.197c-.27.27-.613.397-.956.397z" fill="#fff" />
					<path d="M31.704 13.647H1.353c-.74 0-1.353-.613-1.353-1.352 0-.74.613-1.353 1.353-1.353h30.35c.74 0 1.353.613 1.353 1.353 0 .739-.613 1.352-1.352 1.352z" fill="#fff" />
				</svg>
			);
		case 'star-rate':
			return (
				<svg className={className} style={style} width="38" height="37" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M31.268 15.588H21.81L18.9 6.595l-2.929 8.993-9.458-.017 7.65 5.564-2.93 8.993 7.65-5.565 7.649 5.565-2.257-6.97-5.375 1.405 4.72-3.428z" fill="#fff" />
				</svg>
			);
		case 'star':
			return (
				<svg className={className} style={style} width="35" height="27" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="m23.555 1.905 2.35 4.698c.316.65 1.166 1.266 1.882 1.4l4.248.7c2.716.45 3.349 2.415 1.4 4.38L30.118 16.4c-.55.55-.866 1.633-.683 2.416l.95 4.098c.75 3.232-.983 4.498-3.832 2.799l-3.981-2.366c-.717-.433-1.916-.433-2.633 0l-3.981 2.366c-2.849 1.682-4.582.433-3.832-2.8l.95-4.097c.15-.8-.167-1.883-.717-2.433l-3.315-3.315c-1.949-1.949-1.316-3.915 1.4-4.381l4.248-.7c.716-.117 1.566-.75 1.882-1.4l2.35-4.697c1.282-2.533 3.348-2.533 4.63.016zM11.245 2.803H1.25C.567 2.803 0 2.236 0 1.553S.567.303 1.25.303h9.995c.683 0 1.25.567 1.25 1.25s-.567 1.25-1.25 1.25zM6.247 26.126H1.25c-.683 0-1.25-.567-1.25-1.25s.567-1.25 1.25-1.25h4.997c.683 0 1.25.567 1.25 1.25s-.567 1.25-1.25 1.25zM2.916 14.464H1.25c-.683 0-1.25-.566-1.25-1.25 0-.682.567-1.249 1.25-1.249h1.666c.683 0 1.249.567 1.249 1.25s-.566 1.25-1.25 1.25z" fill="#fff" />
				</svg>
			);
		default:
			return null;
	}
};

export { Icon };
