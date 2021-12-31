import {
	Centered,
	Container,
	Outer,
	Panel,
	RADIUS,
	color1,
	color2,
} from './components';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

import {GlowingStroke} from './GlowingStroke';

export const Card: React.FC = (props) => {
	const {fps, width, height} = useVideoConfig();

	const PADDING = 40;
	const SPACING = 30;
	const PANEL_WIDTH = width - PADDING * 2 - SPACING;
	const BIG_PANEL_HEIGHT = height - PADDING * 2;
	const frame = useCurrentFrame();
	const progress = (i: number) =>
		spring({
			fps,
			frame: frame - i * 10 - 15,
			config: {
				damping: 100,
				mass: 2,
			},
		});

	return (
		<Outer>
			<Container>
				<Panel
					style={{
						transform: `scale(${progress(1)})`,
						width: PANEL_WIDTH,
						height: BIG_PANEL_HEIGHT,
					}}
				>
					<Centered style={{opacity: progress(2)}}>
						<GlowingStroke
							width={PANEL_WIDTH}
							height={BIG_PANEL_HEIGHT}
							radius={RADIUS}
							color1={color1}
							color2={color2}
							offset={35}
						/>
						{props.children}
					</Centered>
				</Panel>
			</Container>
		</Outer>
	);
};
