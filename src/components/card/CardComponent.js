import React, {Fragment, useState} from 'react'
import {Button, Card, Form, FormControl, InputGroup} from 'react-bootstrap'

const CardComponent = ({allCards, cardKey, onChangeCardHandler}) => {
	const [show, setShow] = useState(false)
	const [cardText, setCardText] = useState(allCards[cardKey].text)
	return (
		<Fragment>
			<Card className='text-center m-2'>
				<Card.Body>
					<Card.Text>
						<Form.Label>
							{allCards[cardKey]?.text}{' '}
							<i
								style={{cursor: 'pointer', fontSize: 18}}
								onClick={() => setShow(true)}
								className='fas fa-edit'
							></i>{' '}
						</Form.Label>
						{show ? (
							<InputGroup className='mb-3'>
								<FormControl
									value={cardText}
									placeholder='Enter Text'
									onChange={(e) => setCardText(e.target.value)}
								/>

								<InputGroup.Append>
									<Button
										onClick={(e) => {
											onChangeCardHandler(cardKey, cardText)
											setShow(false)
										}}
									>
										Save
									</Button>
								</InputGroup.Append>
							</InputGroup>
						) : null}
					</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>
	)
}

export default CardComponent
