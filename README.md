# myHammer Frontend Coding Challenge

## App Functionality

- A user should be able to add and label columns.
- A user should be able to add and edit cards.
- A user should be able to move cards between columns (UX is up to you, does not need
  to be drag-and-drop).
- Do make sure the available interactions are intuitive. In other words, we will be
  considering usability.
- Some kind of persistency (LocalStorage or SessionStorage) is encouraged, though not
  required.
- Any additional features you find important (feel free to elaborate in your README file
  about why you made certain choices).

## Technology constraints

- Do not use any third-party React components. All React components must be yours.
  Creating a React App is encouraged as a starting point, but you should not use any other
  React npm packages for the app. We want to see how you work with core JavaScript (or
  Typescript) and React features, not necessarily what libraries or packages you know.
- Don't worry too much about the presentation. This means no particular CSS, fonts, or
  images are required.This is a coding activity and not a design activity. That's not to say
  we don't appreciate great design or that we don't value those skills if you have them! It's
  just that we won't be considering design when scoring this particular project.
- Time limit 4 hours.

## Implementation

### Approach to problem

1. created new reactjs project using npx create react app my-app
2. Decided to use react-bootstrap with a simplex theme to have consistency.
3. Finished all crud operations for lists
4. Finished all crud operation for cards
5. Movement of cards between lists
6. Local storage to ensure that state remains on refresh

## Steps to install

1. Clone the repository
2. Run the command npm install - which would add all the required dependencies.
3. Ensure you have a working nodejs environment
4. Run the command "npm start" or "npm run start" to start your local server.
5. If you want to view it on vercel - please visit <https://myhammer-trello-clone.vercel.app/>

## Additional Feature that could be included if not for 4 hour time limit

1. Drag and drop of cards
2. Drag and drop of lists - thereby fixing the issue of re arranging complete lists.
3. Add date and time to tasks, using momentjs and alert if the date/time is past.
4. Multiple boards.
5. If there are multiple boards involved, use react lazy and suspense.
6. If there are multiple boards involved, might use react context (or global state management like redux) instead of passing props to child components.
7. Error Boundaries, react router and 404 pages etc could be done for multiple boards.
8. Cards could store information like image, priority, comments and labels.
9. Write test cases, the code might have to be refactored for test cases.
10. Usage of react memo/ memoization if the card list is too big.
11. Optimise css and load times. Improve seo using react helmet/ use nextjs for ssr.
