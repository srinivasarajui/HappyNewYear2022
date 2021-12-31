import {Audio} from 'remotion';
import {Card} from './Card';
import {Composition} from 'remotion';
import {GitRepo} from './GitRepo';
import {GreetingFrom} from './GreetingFrom';
import {Greetings} from './Greetings';
import {Message} from './Message';
import {Sequence} from 'remotion';
import {Transition} from './Transition';
import audio from './bg.mp3';
import {bgColor1} from './components';

export const RemotionVideo: React.FC = () => {
	const seq = [
		{comp: <Greetings />, duration: 120},
		{comp: <Message />, duration: 300},
		{comp: <GreetingFrom />, duration: 180},
		{comp: <GitRepo />, duration: 180},
	];
	const totalDuration = seq.reduce((acc, item) => acc + item.duration, 0);
	let previousEnd = 0;
	const seqItems = seq
		.map((item) => {
			const start = previousEnd;
			previousEnd += item.duration;
			return {
				comp: item.comp,
				duration: item.duration,
				start,
			};
		})
		.map((item, index) => (
			<Sequence
				key={index}
				from={item.start}
				durationInFrames={item.duration + 8}
			>
				<Transition type="in">
					<Card>{item.comp}</Card>
				</Transition>
			</Sequence>
		));
	const CurrentComposition = () => {
		return (
			<div style={{flex: 1, backgroundColor: bgColor1}}>
				<div>
					{seqItems}
					<Audio src={audio} />
				</div>
			</div>
		);
	};
	return (
		<>
			<Composition
				id="HappyNewYear"
				component={CurrentComposition}
				durationInFrames={totalDuration}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
