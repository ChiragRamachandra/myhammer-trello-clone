import React from 'react'
import {Fragment, useState} from 'react'
import Header from './components/header/HeaderComponent'
import BoardPage from './pages/boardPage/BoardPage'

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

			{/* passing down props through parent child relationship v/s context as this is a simple project and this helps for better readability */}
			<BoardPage allLists={allLists} allCards={allCards} />
		</Fragment>
	)
}

export default App
