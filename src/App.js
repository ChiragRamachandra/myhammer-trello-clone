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
	const [allLists, setAllLists] = useState(
		JSON.parse(localStorage.getItem('trello-lists'))
			? JSON.parse(localStorage.getItem('trello-lists'))
			: initialLists
	)
	const [allCards, setAllCards] = useState(
		JSON.parse(localStorage.getItem('trello-cards'))
			? JSON.parse(localStorage.getItem('trello-cards'))
			: initialCards
	)

	//lists crud operations
	const onAddListHandler = (listName) => {
		let highestListID = 0
		let objectLength = 0

		if (Object.keys(allLists).length > 0) {
			highestListID = Object.values(allLists).sort((a, b) => {
				return b.id - a.id
			})
			objectLength = highestListID[0].id + 1
		}

		let newList = {
			title: `${listName}`,
			id: `${objectLength}`,
			cards: [],
		}

		setAllLists({
			...allLists,
			[`list-${objectLength}`]: newList,
		})

		localStorage.setItem(
			'trello-lists',
			JSON.stringify({
				...allLists,
				[`list-${objectLength}`]: newList,
			})
		)
	}

	const onChangeListHandler = (ListKey, title) => {
		let newCard = allLists[ListKey]
		newCard.title = title
		setAllLists({...allLists, [ListKey]: newCard})

		localStorage.setItem(
			'trello-lists',
			JSON.stringify({...allLists, [ListKey]: newCard})
		)
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

		localStorage.setItem('trello-lists', JSON.stringify(filteredInitialBoard))
	}

	//cards crud operations

	const onAddCardHandler = (listKey, cardText) => {
		let highestCardID = 0
		let objectLength = 0

		if (Object.keys(allCards).length > 0) {
			highestCardID = Object.values(allCards).sort((a, b) => {
				return b.id - a.id
			})
			objectLength = highestCardID[0].id + 1
		}

		let newCard = {
			text: cardText,
			id: `${objectLength}`,
		}

		setAllCards({
			...allCards,
			[`card-${objectLength}`]: newCard,
		})

		localStorage.setItem(
			'trello-cards',
			JSON.stringify({
				...allCards,
				[`card-${objectLength}`]: newCard,
			})
		)

		//to add to list
		allLists[listKey].cards.push(`card-${objectLength}`)
		localStorage.setItem('trello-lists', JSON.stringify(allLists))
	}

	const onChangeCardHandler = (cardKey, text) => {
		let newCard = allCards[cardKey]
		newCard.text = text
		setAllCards({...allCards, [cardKey]: newCard})
		localStorage.setItem(
			'trello-cards',
			JSON.stringify({...allCards, [cardKey]: newCard})
		)
	}

	const onDeleteCardHandler = (cardKey, listKey) => {
		let prevList = allLists[listKey]
		if (prevList.cards) {
			prevList.cards = prevList.cards.filter((cardNumber) => {
				return cardNumber !== cardKey
			})

			setAllLists({
				...allLists,
				[`${listKey}`]: prevList,
			})

			localStorage.setItem(
				'trello-lists',
				JSON.stringify({
					...allLists,
					[`${listKey}`]: prevList,
				})
			)
		}

		let toBeRemovedCard = allCards[cardKey]

		let filteredInitialCard = {}

		Object.keys(allCards).forEach((caKey) => {
			if (allCards[caKey].id !== toBeRemovedCard.id) {
				filteredInitialCard = {
					...filteredInitialCard,
					[`${caKey}`]: allCards[caKey],
				}
			}
		})

		setAllCards(filteredInitialCard)
		localStorage.setItem('trello-cards', JSON.stringify(filteredInitialCard))
	}

	const onMoveCardHandler = (listKey, cardKey, previousListKey) => {
		//move to new list
		let newList = allLists[listKey]
		newList.cards.push(cardKey)

		setAllLists({
			...allLists,
			[`${listKey}`]: newList,
		})

		localStorage.setItem(
			'trello-lists',
			JSON.stringify({
				...allLists,
				[`${listKey}`]: newList,
			})
		)

		// remove from current list
		let prevList = allLists[previousListKey]
		prevList.cards = prevList.cards.filter((cardNumber) => {
			return cardNumber !== cardKey
		})

		setAllLists({
			...allLists,
			[`${previousListKey}`]: prevList,
		})

		localStorage.setItem(
			'trello-lists',
			JSON.stringify({
				...allLists,
				[`${previousListKey}`]: prevList,
			})
		)
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
				onDeleteCardHandler={onDeleteCardHandler}
				onMoveCardHandler={onMoveCardHandler}
			/>
		</Fragment>
	)
}

export default App
