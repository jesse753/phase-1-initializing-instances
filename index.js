// Write your code here
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }
  
  let myBreakfast = new Breakfast("waffles", "coffee");
  let myLunch = new Lunch("spinach", "tomato", "iced tea");
  let myDinner = new Dinner("caesar", "clam chowder", "steak", "chocolate cake");
  
  console.log(myBreakfast); // Breakfast { food: 'waffles', drink: 'coffee' }
  console.log(myLunch); // Lunch { salad: 'spinach', soup: 'tomato', drink: 'iced tea' }
  console.log(myDinner); // Dinner { salad: 'caesar', soup: 'clam chowder', entree: 'steak' }
   