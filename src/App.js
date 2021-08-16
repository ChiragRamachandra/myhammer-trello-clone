import React from 'react'
import {Fragment, useState} from 'react'
import Header from './components/header/Header'

let initialLists = {
	'list-0': {
		id: '0',
		cards: ['card-0'],
		title: 'To Do',
	},
	'list-1': {
		id: '1',
		cards: ['card-1'],
		title: 'In Progress',
	},
}

let initialCards = {
	'card-0': {
		text: 'Buy Pasta',
		id: `0`,
	},
	'card-1': {
		text: 'Buy oil to fry pasta',
		id: `1`,
	},
}

const App = () => {
	//all states and functions are maintaines here for better readability
	const [allLists, setallLists] = useState(initialLists)
	const [allCards, setallCards] = useState(initialCards)

	return (
		<Fragment>
			<Header />
			<h1>Trello Board</h1>
		</Fragment>
	)
}

export default App
