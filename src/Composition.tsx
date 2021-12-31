import {Audio} from 'remotion';
import {Card} from './Card';
import {GitRepo} from './GitRepo';
import {GreetingFrom} from './GreetingFrom';
import {Greetings} from './Greetings';
import {Message} from './Message';
import {Sequence} from 'remotion';
import {Transition} from './Transition';
import audio from './bg.mp3';
export const MyComposition = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div>
				<Sequence from={0} durationInFrames={120 + 8}>
					<Transition type="in">
						<Card>
							<Greetings />
						</Card>
					</Transition>
				</Sequence>
				<Sequence from={120} durationInFrames={160 + 8}>
					<Transition type="in">
						<Card>
							<Message />
						</Card>
					</Transition>
				</Sequence>
				<Sequence from={280} durationInFrames={180 + 8}>
					<Transition type="out">
						<Card>
							<GreetingFrom />
						</Card>
					</Transition>
				</Sequence>
				<Sequence from={460} durationInFrames={180}>
					<Transition type="out">
						<Card>
							<GitRepo />
						</Card>
					</Transition>
				</Sequence>
				<Audio src={audio} />
			</div>
		</div>
	);
};
