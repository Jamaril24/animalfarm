'use strict';

console.log('hello')

// TODO: assign `catButton` a value by selecting the button labeled `Make Cat` from the DOM

const catButton = document.getElementById('make-cat');
catButton.addEventListener('click', function(){

  // TODO: assign `newCat a value by creating a new list item DOM element
 
  const newCat = document.createElement("li");

  // TODO: assign the list item's text to be 'Cat' or the name of a cat you know.
  newCat.textContent = 'cat';
  const cats = document.getElementById('cats');

  cats.appendChild(newCat);
});

const dogButton = document.getElementById('make-dog');
dogButton.addEventListener('click', function () {
  const newDog = document.createElement('li');
  newDog.textContent = 'dog';
 const dogs = document.createElementById('dog');
  dogs.appendChild(newDog);
});

const sheepButton = document.getElementById('make-sheep');

// TODO: add an event listener to the sheepButton that calls `handleMakingSheep` when clicked
sheepButton.addEventListener('click', function()){

}

function handleMakingSheep(){

  // TODO: make a new list item, assign its text content to `Sheep` or the name of a sheep you know, and append it to the third unordered list.
newSheep.textContent = 'sheep'
}

// TODO: create an event listener for the `Make Horse` Button that calls a function named `handleMakingHorse`

// TODO: write a function called `handleMakingHorse that makes a new list item, assigns its text content to `Horse` or the name of a horse you know, and append it to the fourth unordered list.
