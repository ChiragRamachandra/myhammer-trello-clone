import React, {Fragment, useState} from 'react'
import {Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import CardComponent from '../card/CardComponent'

const ListComponent = ({
	allLists,
	allCards,
	listsKey,
	onChangeListDetails,
	onDeleteList,
}) => {
	const [show, setShow] = useState(false)
	const [listTitle, setListTitle] = useState(allLists[listsKey].title)

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
						onClick={() => onDeleteList(listsKey)}
						class='far fa-trash-alt'
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
								onClick={(e) => {
									onChangeListDetails(listsKey, listTitle)
									setShow(false)
								}}
							>
								Save
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
							allCards={allCards}
						/>
					)
				})}
			</Col>
		</Fragment>
	)
}

export default ListComponent
