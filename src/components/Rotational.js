import React from 'react'
import Img from 'gatsby-image'

export default props => (
	<div className="Rotational">	
		<div className="Rotational__orbit">
			<div className="Rotational__item computer"></div>
			<div className="Rotational__item hacker"></div>
			<div className="Rotational__item server"></div>
			<div className="Rotational__item www"></div>
			<div className="Rotational__item browser"></div>
			<div className="Rotational__item protection"></div>
			<div className="Rotational__item laptop"></div>
			<div className="Rotational__item headphones"></div>
			<div className="Rotational__avatar-container">
				<Img sizes={ props.avatar.sizes }/>
			</div>
		</div>
	</div>
)