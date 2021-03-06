import React, {Fragment, useState} from 'react'
import {Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import CardComponent from '../card/CardComponent'

const ListComponent = ({
	allLists,
	allCards,
	listsKey,
	onChangeListHandler,
	onDeleteListHandler,
	onAddCardHandler,
	onChangeCardHandler,
	onDeleteCardHandler,
	onMoveCardHandler,
}) => {
	const [show, setShow] = useState(false)
	const [listTitle, setListTitle] = useState(allLists[listsKey].title)

	const [cardText, setCardText] = useState('')

	return (
		<Fragment>
			<Col style={{display: 'inline-block', float: 'none'}} xs={4}>
				<h2>
					{allLists[listsKey]?.title}{' '}
					<i
						style={{cursor: 'pointer', fontSize: 18}}
						onClick={() => setShow(true)}
						className='fas fa-edit'
					></i>{' '}
					<i
						style={{cursor: 'pointer', fontSize: 18}}
						onClick={() => onDeleteListHandler(listsKey)}
						className='far fa-trash-alt'
					></i>
				</h2>

				{show ? (
					<InputGroup className='mb-3'>
						<FormControl
							value={listTitle}
							placeholder='Enter Text'
							onChange={(e) => setListTitle(e.target.value)}
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
									onChangeListHandler(listsKey, listTitle)
									setShow(false)
								}}
							>
								<i class='fas fa-save'></i>
							</Button>
						</InputGroup.Append>
					</InputGroup>
				) : null}

				{allLists[listsKey].cards.map((cardKey) => {
					return (
						<CardComponent
							key={cardKey}
							listsKey={listsKey}
							cardKey={cardKey}
							allLists={allLists}
							allCards={allCards}
							onChangeCardHandler={onChangeCardHandler}
							onDeleteCardHandler={onDeleteCardHandler}
							onMoveCardHandler={onMoveCardHandler}
						/>
					)
				})}

				<InputGroup className=' m-2'>
					<FormControl
						placeholder='Enter your new task'
						value={cardText}
						onChange={(e) => {
							setCardText(e.target.value)
						}}
					/>
					<InputGroup.Append>
						<Button
							onClick={() => {
								onAddCardHandler(listsKey, cardText)
								setCardText('')
							}}
						>
							<i className='fas fa-plus-square'></i> Card
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Col>
		</Fragment>
	)
}

export default ListComponent
