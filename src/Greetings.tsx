import {ColoredText, InnerContainer} from './components';

export const Greetings: React.FC<{name: string}> = ({name}) => {
	return (
		<InnerContainer>
			<ColoredText>Dear</ColoredText>
			<ColoredText>{name}</ColoredText>
			<ColoredText>Happy New Year</ColoredText>
			<ColoredText>2022</ColoredText>
		</InnerContainer>
	);
};
