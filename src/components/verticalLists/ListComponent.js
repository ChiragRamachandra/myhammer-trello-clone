import React, {Fragment} from 'react'
import {Col} from 'react-bootstrap'
import CardComponent from '../card/CardComponent'

const ListComponent = ({allLists, allCards, listsKey}) => {
	return (
		<Fragment>
			<Col style={{display: 'inline-block', float: 'none'}} xs={4}>
				<h1>{allLists[listsKey]?.title}</h1>

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
