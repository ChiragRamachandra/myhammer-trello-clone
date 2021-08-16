import React, {Fragment, useState} from 'react'
import {Button, Card, Form, FormControl, InputGroup} from 'react-bootstrap'

const CardComponent = ({
	allCards,
	allLists,
	listsKey,
	cardKey,
	onChangeCardHandler,
	onDeleteCardHandler,
	onMoveCardHandler,
}) => {
	const [show, setShow] = useState(false)
	const [cardText, setCardText] = useState(allCards[cardKey].text)

	let DropDownSelect = []

	Object.keys(allLists).forEach(function (listKey) {
		DropDownSelect = [
			...DropDownSelect,
			<option key={allLists[listKey].id} value={listKey}>
				{allLists[listKey].title}
			</option>,
		]
	})

	return (
		<Fragment>
			<Card className=' m-2'>
				<Card.Body>
					<Card.Text>
						<Form.Label>{allCards[cardKey]?.text}</Form.Label>
						<div style={{float: 'right'}}>
							<i
								style={{cursor: 'pointer'}}
								onClick={() => setShow(true)}
								className='fas fa-edit mr-1'
							></i>{' '}
							<i
								style={{cursor: 'pointer'}}
								onClick={() => onDeleteCardHandler(cardKey, listsKey)}
								className='far fa-trash-alt ml-1'
							></i>
						</div>

						{show ? (
							<InputGroup className='mb-3'>
								<FormControl
									value={cardText}
									placeholder='Enter Text'
									onChange={(e) => setCardText(e.target.value)}
								/>

								<InputGroup.Append>
									<Button
										style={{borderRadius: 0}}
										onClick={(e) => {
											setShow(false)
										}}
									>
										<i class='fas fa-window-close'></i>
									</Button>
									<Button
										style={{borderRadius: 0}}
										onClick={(e) => {
											onChangeCardHandler(cardKey, cardText)
											setShow(false)
										}}
									>
										<i class='fas fa-save'></i>
									</Button>
								</InputGroup.Append>
							</InputGroup>
						) : null}

						<br />

						<div>
							<Form.Label>Change Card Status</Form.Label>
							<Form.Control
								value={listsKey}
								onChange={(e) =>
									onMoveCardHandler(e.target.value, cardKey, listsKey)
								}
								as='select'
							>
								{DropDownSelect}
							</Form.Control>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</Fragment>
	)
}

export default CardComponent
