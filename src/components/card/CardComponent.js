import React, {Fragment} from 'react'
import {Card, Form} from 'react-bootstrap'

const CardComponent = ({allLists, allCards, listsKey, cardKey}) => {
	return (
		<Fragment>
			<Card className='text-center'>
				<Card.Body>
					<Card.Text>
						<Form.Label>{allCards[cardKey]?.text}</Form.Label>
					</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>
	)
}

export default CardComponent
