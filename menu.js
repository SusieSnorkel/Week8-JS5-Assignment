// Assignment: Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.

//Menu Doodles

// Class Doodles
// breed 1
// breed 2
class Doodles{
    constructor(breed1, breed2){
    this.breed1 = breed1;
    this.breed2 = breed2;
    }
}

// class Menu
class Menu{
    contstructor(){
    // Doodles array
        this.Doodles=[];
    }

    // see a menu


    // add Doodles
    // prompt for breed1
    // prompt for breed2
    // Create new Doodle and push Doodle into array
    addDoodle(){
        let breed1 = prompt("Enter first breed:");
        let breed2 = prmopt("Enter second breed:");
        this.Doodles.push(new Doodles(breed1, breed2));
}


    // delete cars

    // view Doodles
viewDoodle(){
    let displayDoodles = '';
    for(let i=0; i < this.Doodles.length; i++){

    displayDoodles += `this.Doodles[i].breed1} ${this.Doodles.breed1} ${this.Doodles[i].breed2}`
    }

    //start menu

}

//instanitate the menu and invoke the start menu

let Doodles1 = new Doodles("Poodle", "Soft Coated Wheaten Terrier");
console.log(Doodles1);

let menu = new Menu();

menu.addDoodle();

