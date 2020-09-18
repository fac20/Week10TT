
# React Snake Game

Our project this week was to create an app using react using API data within.

We decided to build a Snake Game with tipping our hats to the Nokia days - Keep your eyes peeled for the easter :egg:... 

In this game you will never be defeated by react :lotus_position:	


## To get started

1. Clone the repo
2. `npm i`
3. `npm start` 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Netlify Link


[Snake Game :snake:](https://optimistic-meitner-fd247f.netlify.app/)


## Wireframe

![](https://i.imgur.com/SVNh9bY.png)


## Rough psudo/sketch of build plan



1. Fetch github users profile image

2. Create basic HTML page

Logo (it could anchor tag that on click runs the reset() function - acting like a home button?)

Template/ React render():

Profile image (Name) - response from API

Form/input box with submit button - fetch request

Create Grid

- flexbox : container
- containing a `snake-grid` div
- containing a grid of `div-items`

Snake (With profile picture)

Snake food

4. Append profile image to snake head

### Strecth Goal

Append a random follower profile image to the food item

Reset button

### Workshops that could be helpful

1. Handle forms and inputs in React
   https://github.com/oliverjam/learn-react/tree/main/05-transform-the-form

2. Working with the github API in React

https://github.com/sofiapoh/react-dynamic-data-workshop


## useInterval

Javascript’s initial setInterval wasn't great with hooks so we've used [useInterval](https://github.com/donavon/use-interval), a custom React Hook that provides a declarative setInterval.

`useInterval(callback, delay);`

It takes a `callback` parameter, function that will be called every `delay` milliseconds
This `delay` parameter is a number representing the delay in msecs. Set to null to "pause" the interval.

## Known issues 

- Netlify link hasn't updated to the master bracnh - Any tips on this would be appreciated
- A manual refresh is needed to restart the game


##  Tech Stack

- React
- JS
- CSS
- Whimsical


## Team TT

[Trish :octopus:](https://github.com/trishtracking) and [Terry 	:palm_tree:](https://github.com/RunGT)




