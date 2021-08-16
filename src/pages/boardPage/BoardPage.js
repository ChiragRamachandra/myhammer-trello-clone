import React, {Fragment} from 'react'
import {
	Button,
	Col,
	Container,
	Row,
	InputGroup,
	FormControl,
} from 'react-bootstrap'
import ListComponent from '../../components/verticalLists/ListComponent'

const BoardPage = ({allLists, allCards, listName, setListName}) => {
	let displayColumn = []
	Object.keys(allLists).forEach(function (listsKey) {
		displayColumn = [
			...displayColumn,
			<ListComponent
				key={listsKey}
				listsKey={listsKey}
				allLists={allLists}
				allCards={allCards}
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
								value={listName}
								onChange={(e) => setListName(e.targetvalue)}
							/>
							<InputGroup.Append>
								<Button onClick={() => {}}>Add List</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

export default BoardPage
