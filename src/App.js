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
	const [allLists, setAllLists] = useState(initialLists)
	const [allCards, setAllCards] = useState(initialCards)

	//lists crud operations
	const onAddListHandler = (listName) => {
		let highestListID = Object.values(allLists).sort((a, b) => {
			return b.id - a.id
		})
		let objectLength = highestListID[0].id + 1

		let newList = {
			title: `${listName}`,
			id: `${objectLength}`,
			cards: [],
		}

		setAllLists({
			...allLists,
			[`list-${objectLength}`]: newList,
		})
	}

	const onChangeListHandler = (ListKey, title) => {
		let newCard = allLists[ListKey]
		newCard.title = title
		setAllLists({...allLists, [ListKey]: newCard})
	}

	const onDeleteListHandler = (ListKey) => {
		let toBeRemovedList = allLists[ListKey]
		let filteredInitialBoard = {}

		Object.keys(allLists).forEach((boardKey) => {
			if (allLists[boardKey].id !== toBeRemovedList.id) {
				filteredInitialBoard = {
					...filteredInitialBoard,
					[`${boardKey}`]: allLists[boardKey],
				}
			}
		})

		setAllLists(filteredInitialBoard)
	}

	const onAddCardHandler = (listKey, cardText) => {
		let highestCardID = Object.values(allCards).sort((a, b) => {
			return b.id - a.id
		})
		let objectLength = highestCardID[0].id + 1
		let newCard = {
			text: cardText,
			id: `${objectLength}`,
		}

		setAllCards({
			...allCards,
			[`card-${objectLength}`]: newCard,
		})

		//to add to list
		allLists[listKey].cards.push(`card-${objectLength}`)
	}

	const onChangeCardHandler = (cardKey, text) => {
		let newCard = allCards[cardKey]
		newCard.text = text
		setAllCards({...allCards, [cardKey]: newCard})
	}

	return (
		<Fragment>
			<Header />

			{/* passing down props through parent child relationship v/s context as this is a simple project and this helps for better readability */}
			<BoardPage
				allLists={allLists}
				allCards={allCards}
				onAddListHandler={onAddListHandler}
				onChangeListHandler={onChangeListHandler}
				onDeleteListHandler={onDeleteListHandler}
				onAddCardHandler={onAddCardHandler}
				onChangeCardHandler={onChangeCardHandler}
			/>
		</Fragment>
	)
}

export default App
