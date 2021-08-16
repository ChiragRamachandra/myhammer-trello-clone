import React, {Fragment} from 'react'
import {Container, Row} from 'react-bootstrap'
import ListComponent from '../../components/verticalLists/ListComponent'

const BoardPage = ({allLists, allCards}) => {
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
				<Row style={{overflowX: 'auto'}} className='flex-row flex-nowrap'>
					{displayColumn}
				</Row>
			</Container>
		</Fragment>
	)
}

export default BoardPage
