import styled from 'styled-components';

const Button = styled.button`
	background-color: #2573A7;
	border: none;
	color: white;
	cursor: pointer;
	font-size: 14px;
	outline: none;
	padding: 10px;
	transition-duration: 0.2s;
	width: 100%;
	&:hover {
		background-color: #1C567D;
	}
`;

export default Button;