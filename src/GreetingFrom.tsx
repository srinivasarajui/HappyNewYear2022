import {ColoredText, InnerContainer, Title} from './components';

export const GreetingFrom: React.FC = () => {
	return (
		<InnerContainer>
			<Title>This greeting is sent with love from</Title>
			<ColoredText>Srini Raju</ColoredText>
			<ColoredText>Sujani</ColoredText>
			<ColoredText>Srithejas</ColoredText>
			<ColoredText>Sauryaram</ColoredText>
		</InnerContainer>
	);
};
