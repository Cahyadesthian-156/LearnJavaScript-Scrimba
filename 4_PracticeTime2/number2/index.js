let age = 16

//less than 6 years old -> free
//6 to 17 -> child discoont
//18 to 26 -> student discount
//27 to 66 -> full price
//over 66 -> senior citizen discount

//create conditional statement(if/else/else if) that logs out the discount
// the passenger will et based upon the value pf age variable
if ( age < 6 ) {
    console.log("Free");
} else if ( age >= 6 && age <= 17) {
    console.log("Child Discount");
} else if ( age > 17 && age <= 26 ) {
    console.log("Student discount");
} else if (age > 26 && age <= 66) {
    console.log("Full price");
} else {
    console.log("Senior citizen discount");
}


