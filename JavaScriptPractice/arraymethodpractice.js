std =
    [{ firstName: 'subodh', lastName: "kumar", age: 35 },
    { firstName: 'sushil', lastName: "khadse", age: 50 },
    { firstName: 'amit', lastName: "kumar", age: 45 },
    { firstName: 'ankit', lastName: "kumar", age: 50 },
    { firstName: 'posh', lastName: "kumar", age: 34 }
    ]
    var a= std.map(c => c.age);
    console.log(a);
    var b= std.map( c=> c.lastName);
    console.log(b);
    console.log(std[0].age);
    let newData =[];
std.forEach(element => {
    newData.push(element.firstName)
});
console.log(newData);