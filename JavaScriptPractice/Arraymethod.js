student_details =
    [{ firstName: 'subodh', lastName: "kumar", age: 35 },
    { firstName: 'sushil', lastName: "khadse", age: 50 },
    { firstName: 'amit', lastName: "kumar", age: 45 },
    { firstName: 'ankit', lastName: "kumar", age: 50 },
    { firstName: 'posh', lastName: "kumar", age: 34 }
    ]
    var std = student_details.map(xyz => xyz.firstName);
    console.log(std);
var std = student_details.map(xyz => xyz.age);
console.log(std);

let Arithmatic = [10,20,30,40];
 c = Arithmatic.map(A => A * 10);
console.log(c);