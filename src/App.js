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
		// console.log('listname', listName)
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

	const onChangeListDetails = (ListKey, title) => {
		// console.log('ListKey', ListKey)
		// console.log('title', title)
		let newCard = allLists[ListKey]
		newCard.title = title
		setAllLists({...allLists, [ListKey]: newCard})
	}

	return (
		<Fragment>
			<Header />

			{/* passing down props through parent child relationship v/s context as this is a simple project and this helps for better readability */}
			<BoardPage
				allLists={allLists}
				allCards={allCards}
				onAddListHandler={onAddListHandler}
				onChangeListDetails={onChangeListDetails}
			/>
		</Fragment>
	)
}

export default App
