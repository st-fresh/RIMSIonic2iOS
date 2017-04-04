##vars & params
`let x = 3; //global scope`

//var limitation: only global scope and function scope, no block scope
//for example:
`var doWork = function(flag){`
`    if(flag){`
`        var x = 3;`
`    }`
`    return x;`
`}`
//This works, but is unclear in terms of block scope 
//So using let:
`let x = 3; //on line 8 instead of var`
//`let` only allows var x to be available to the if block,
//meaning x can't be returned because it's no loner in scope

`const` represents a read-only var with value that stays constant and doesn't change
`const MAX_SIZE = 10;`
//once declared it can't be re-declared

##destructuring
`let x = 2;`
`let y = 3;`

//swamp the values of x and y with eachother, aka re-declaring the value of x to the value of y and re-declaring the value of y to x:
`[x,y] = [y,x] //this destructures the array`
//So this is a new assignment statement, you could also do:
`let[x,y] = [3,2]; //new way to declare/assign values to vars`
//Because it's an assignment, we can assign the return of a func to `let[x,y]`:
`var doWork = function() {`
`    return [3.2];`
`};`
//and then the return of the doWork function-call assigned:
`let [x,y] = doWork(); //same as = [3,2]`
//Number of Assignments when declaring must be greater than or equal to assigned values:
//So, you can do:
`let[, x, y] = [1, 3, 2] //x will be assigned value 3, and y assigned value 2`
//but can't do:
`let[x, y] = [1, 3, 2]`
//because there's nothing to assign one of the values to
//Further exploration:


