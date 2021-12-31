import {Audio} from 'remotion';
import audio from './bg.mp3';
import {bgColor1} from './components';
import {seqItems} from './sequence';
export const MyComposition = () => {
	return (
		<div style={{flex: 1, backgroundColor: bgColor1}}>
			<div>
				{seqItems}
				<Audio src={audio} />
			</div>
		</div>
	);
};
