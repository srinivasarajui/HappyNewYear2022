import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {totalDuration} from './sequence';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HappyNewYear"
				component={MyComposition}
				durationInFrames={totalDuration}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
