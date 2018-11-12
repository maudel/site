import React from 'react'
import Swal from 'sweetalert2'
import { AwesomeButton } from 'react-awesome-button'
import styled from 'styled-components'

 
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

const Container = styled.div`
	padding: 20px 10px;
`
const Item = styled.div`
	padding: 15px 0;
`
const Label = styled.p`
	display: block;
	font-size: .75rem;
	font-weight: 700;
	letter-spacing: .05em;
	line-height: 1.45;				
	text-transform: uppercase;
	margin-bottom: .3rem;
`
const Submit = styled(AwesomeButton)`
	width: 140px !important;
`

class ContactForm extends React.Component {
	state = {
		name: "",
		email: "",
		subject: "",
		message: ""
	}

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: {
				 "Content-Type": "application/x-www-form-urlencoded"
			},
			body: encode({
				"form-name": "contact", 
				...this.state
			})
		})
		.then(() => {
			Swal({
				type: 'success',
				title: 'Mensaje Enviado', 
				text: 'Gracias por enviarme tu mensaje, te responderé lo mas pronto posible.',
				confirmButtonClass:  'Btn',
    			cancelButtonClass:  'Btn',
    			onClose: () => {    				
					this.setState({
						name: "",
						email: "",
						subject: "",
						message: ""
					})
    			}
			})

		})
		.catch(error => alert("Error al enviar el mensaje. Vuelve a intentarlo."))
		e.preventDefault()
	}

	handleChange = e => this.setState({ 
		[e.target.name]: e.target.value
	})

	render() {
		const { name, email, subject, message } = this.state
		return (
			<Container>
				<form 
					name="contact"
					onSubmit={ this.handleSubmit }
					>
					<Item>						
						<Label>Name</Label>
						<input name="name" value={ name } placeholder="Name" type="text" required onChange={ this.handleChange }/>
					</Item>		
					<Item>
						<Label>E-mail</Label>
						<input name="email" value={email} placeholder="example@gmail.com" type="email" required onChange={ this.handleChange }/>
					</Item>
					<Item>
						<Label>Title</Label>
						<input name="subject" value={subject} placeholder="Title" type="text" required onChange={ this.handleChange }/>
					</Item>
					<Item>
						<Label>Message</Label>
						<textarea name="message" value={message} placeholder="Insert your message here" rows="6" required onChange={ this.handleChange }></textarea>
					</Item>					
					<Item>						
						<Submit							
							size="medium"
						  type="primary">
						  SEND
						</Submit>						
					</Item>
				</form>
			</Container>
		)
	}
}

export default ContactForm