import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HappyNewYear"
				component={MyComposition}
				durationInFrames={640}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
