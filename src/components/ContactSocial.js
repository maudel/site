import React from 'react'
import styled from 'styled-components'
import { AwesomeButton } from 'react-awesome-button'

const ContactSocialWrapper = styled.div`
	text-align: center;
`

const Button = styled(AwesomeButton)`
	margin: 0 3px !important;
	.aws-btn__content {
		padding: 0 15px !important;
	}
	img {
		width: 25px;
		height: 25px;
		margin: 0;
		position: relative;
		top: 2px;
	}
`

export default props => (
	<ContactSocialWrapper>
		<Button			
			type="github"
			size="small"
			href="https://www.github.com/maudel"
			title="Github - Mauricio De La Quintana"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/github.svg?color=ffffff"
				title="Github - Mauricio De La Quintana"
				alt="img"/>
		</Button>
		<Button			
			type="twitter"
			size="small"
			href="https://twitter.com/maudelaquintana"
			title="Twitter - Mauricio De La Quintana"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/twitter.svg?color=ffffff"
				title="Twitter - Mauricio De La Quintana"
				alt="img"/>
		</Button>
		<Button			
			type="linkedin"
			size="small"
			href="https://www.linkedin.com/in/maudelaquintana/"
			title="Linkedin - Mauricio De La Quintana"
			target="_blank">
			<img
				src="https://icongr.am/fontawesome/linkedin.svg?color=ffffff"
				title="Linkedin - Mauricio De La Quintana"
				alt="img"/>
		</Button>
	</ContactSocialWrapper>
)