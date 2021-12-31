import {Card} from './Card';
import {GitRepo} from './GitRepo';
import {GreetingFrom} from './GreetingFrom';
import {Greetings} from './Greetings';
import {Message} from './Message';
import {Sequence} from 'remotion';
import {Transition} from './Transition';

const seq = [
	{comp: <Greetings />, duration: 120},
	{comp: <Message />, duration: 300},
	{comp: <GreetingFrom />, duration: 180},
	{comp: <GitRepo />, duration: 180},
];
let previousEnd = 0;
export const seqItems = seq
	.map((item) => {
		const start = previousEnd;
		previousEnd += item.duration;
		return {
			comp: item.comp,
			duration: item.duration,
			start,
		};
	})
	.map((item) => (
		<Sequence from={item.start} durationInFrames={item.duration + 8}>
			<Transition type="in">
				<Card>{item.comp}</Card>
			</Transition>
		</Sequence>
	));
export const totalDuration = seq.reduce((acc, item) => acc + item.duration, 0);
