import React from 'react'
import styled from 'styled-components'

const SocialWrapper = styled.div`
	text-align: center;
`
const SocialIcon = styled.a`
	margin: 0 5px !important;
	background: #bbbbbb;
	border-radius: 50%;
	width: 38px;
	height: 38px;
	padding: 8px;
	transition: .3s;
	display: inline-block;
	img {
		transition: .3s;
		width: 100%;
		margin: 0;
	}
	&:hover {
		transform: scale(1.15);
	}

	&:hover img {
		transform: scale(.9);
	}
`
export default props => (
	<SocialWrapper>
		<SocialIcon
			className="github--hover"
			href="https://www.github.com/maudel"
			title="Github - Mauricio De La Quintana"
			target="_blank">
			<img
				alt="img"
				src="https://icongr.am/fontawesome/github.svg?color=ffffff"
				title="Github - Mauricio De La Quintana"/>
		</SocialIcon>
		<SocialIcon
			className="twitter--hover"
			href="https://twitter.com/maudelaquintana"
			title="Twitter - Mauricio De La Quintana"
			target="_blank">
			<img
				alt="img"
				src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
				title="Twitter - Mauricio De La Quintana"/>
		</SocialIcon>
		<SocialIcon
			className="linkedin--hover"
			href="https://www.linkedin.com/in/mauriciodelaquintana/"
			title="Linkedin - Mauricio De La Quintana"
			target="_blank">
			<img
				alt="img"
				src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
				title="Linkedin - Mauricio De La Quintana"/>
		</SocialIcon>

	</SocialWrapper>
)