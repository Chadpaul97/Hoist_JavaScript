// Practice reading JavaScript the same way as the interpreter reads it.

// 1
console.log(hello);
var hello = 'world';
//undefined
//hello = "world"

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//needle = 'haystack'
//run test
//needle =  'magnet'
//log 'magent'

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//brendan = 'super cool'
//fuction but not called so its not ran 
// log 'super cool'

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//food = 'chicken'
//log 'chicken'
// eat calls function 
//function eat is ran 
// food is 'half-chicken'
// log 'half-chicken'
// food = 'gone'

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//mean = undefined
//console.log(food) = undefined line 51 ran 
//console.log(food) = undefined line 58 ran 

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//console.log(genre) = undefined
// genre = 'disco'
//rewind function called
//runs rewind function 
// genre = 'rock'
// log 'rock'
//genre = 'r&b'
// log 'r&b'
//log 'disco'

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//dojo = "san jose"
// log 'san jose'
//learn function called
//learn function ran 
//dojo = 'seattle'
//log 'seattle'
//dojo = 'burbank'
//log 'burbank'
//log 'san jose'


// 8 - Bonus ES6: const
// console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//log results of makeDojo("Chicago", 65) 
//make dojo function called and ran 
// input name 'chicago' input students '65'
// dojo = empty brackets
//dojo.name = chicago
//dojo.students = 65 
//if statment if(65 > 50) dojo.hiring = true 
//dojo.hiring = true 
// return { name: 'Chicago', students: 65, hiring: true }

// input name 'Berkeley' input students '0'
// dojo = empty brackets
//dojo.name = Berkeley
//dojo.students = 0 
//if statment if(0 > 50)
//skip to else if because if statement is not true 
//else if(dojo.students <= 0) 
//dojo = closed for now
// return/ log dojo is closed for now 