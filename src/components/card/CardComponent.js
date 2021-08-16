import React, {Fragment} from 'react'
import {Card, Form} from 'react-bootstrap'

const CardComponent = () => {
	return (
		<Fragment>
			<Card className='text-center'>
				<Card.Body>
					<Card.Title>
						<Form.Label>Card Details</Form.Label>
					</Card.Title>
				</Card.Body>
			</Card>
		</Fragment>
	)
}

export default CardComponent
