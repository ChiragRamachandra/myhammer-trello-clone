import React, {Fragment, useState} from 'react'
import {
	Button,
	Col,
	Container,
	Row,
	InputGroup,
	FormControl,
} from 'react-bootstrap'
import ListComponent from '../../components/verticalLists/ListComponent'

const BoardPage = ({
	allLists,
	allCards,
	onAddListHandler,
	onChangeListHandler,
	onDeleteListHandler,
	onAddCardHandler,
}) => {
	let displayColumn = []

	const [listName, setListName] = useState('')
	Object.keys(allLists).forEach(function (listsKey) {
		displayColumn = [
			...displayColumn,
			<ListComponent
				key={listsKey}
				listsKey={listsKey}
				allLists={allLists}
				allCards={allCards}
				onChangeListHandler={onChangeListHandler}
				onDeleteListHandler={onDeleteListHandler}
				onAddCardHandler={onAddCardHandler}
			/>,
		]
	})
	return (
		<Fragment>
			<Container>
				<Row style={{overflowX: 'auto'}} className='flex-row flex-nowrap m-2'>
					{displayColumn}
					<Col style={{display: 'inline-block', float: 'none'}} xs={4}>
						<InputGroup className='mb-3'>
							<FormControl
								placeholder='Add a new list'
								name='new list'
								value={listName}
								onChange={(e) => setListName(e.target.value)}
							/>
							<InputGroup.Append>
								<Button
									onClick={() => {
										onAddListHandler(listName)
										setListName('')
									}}
								>
									<i class='fas fa-plus-square'></i>
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

export default BoardPage
