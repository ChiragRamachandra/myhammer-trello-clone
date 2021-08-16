import React, {Fragment} from 'react'
import {Col} from 'react-bootstrap'
import CardComponent from '../card/CardComponent'

const ListComponent = ({allLists, allCards}) => {
	return (
		<Fragment>
			<Col style={{display: 'inline-block', float: 'none'}} xs={4}>
				<h1>{'Title'}</h1>

				<CardComponent allLists={allLists} allCards={allCards} />
			</Col>
		</Fragment>
	)
}

export default ListComponent
