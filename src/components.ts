import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';

export const RADIUS = 30;
export const color1 = '#009485';
export const color2 = '#2094f3';
export const bgColor1 = '#2a2e37';
export const bgColor2 = '#3d4451';
export const txtColor = '#d1d5db';
export const Outer = styled(AbsoluteFill)`
	background-color: black;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.04);
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 40px;
`;

export const Panel = styled.div`
	position: absolute;
	background-color: ${bgColor1};
	border-radius: ${RADIUS}px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.07);
`;

export const Centered = styled(AbsoluteFill)`
	justify-content: center;
	align-items: center;
`;

export const Title = styled.div`
	font-weight: 700;
	font-family: -apple-system, BlinkMacSystemFont;
	font-size: 30px;
	margin-bottom: 5px;
	color: ${txtColor};
`;

export const ColoredText = styled.div`
	font-weight: 700;
	font-size: 60px;
	font-family: -apple-system, BlinkMacSystemFont;
	background: linear-gradient(to right, ${color1}, ${color2});
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
`;

export const RedText = styled.p`
	color: red;
`;
