import {ColoredText, InnerContainer} from './components';

export const Greetings: React.FC<{name: string}> = ({name}) => {
	return (
		<InnerContainer>
			<ColoredText>Dear {name}</ColoredText>
			<ColoredText>& Family</ColoredText>
			<ColoredText>Happy New Year</ColoredText>
			<ColoredText>2022</ColoredText>
		</InnerContainer>
	);
};
