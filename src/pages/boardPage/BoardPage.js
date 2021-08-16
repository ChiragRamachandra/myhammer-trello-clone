import React, {Fragment} from 'react'
import {Container, Row} from 'react-bootstrap'

const BoardPage = ({allCards, allLists}) => {
	return (
		<Fragment>
			<Container>
				<Row style={{overflowX: 'auto'}} className='flex-row flex-nowrap'></Row>
			</Container>
		</Fragment>
	)
}

export default BoardPage
