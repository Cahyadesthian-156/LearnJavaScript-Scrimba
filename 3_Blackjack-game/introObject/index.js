//object - stor data in-depth composite/ complex data type
// key-value pairs

let course = {
    title : "Learn CSS Grid for free",
    lessons : 16,
    creator: "Per Herald Borgen",
    length: 63,
    level : 2,
    isFree: true,
    tags: ["HTML", "CSS"]
}

console.log(course.length); //console 63
console.log(course.tags);
console.log(course["tags"]);    //called as bracket notation
console.log(course)