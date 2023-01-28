student_details ={
    student : [{firstName: 'subodh', lastName: "kumar", age: 35},
    {firstName: 'sushil', lastName: "khadse", age: 50},
    {firstName: 'amit', lastName: "kumar", age: 45}
    ]
}
 console.log("student-details", student_details);
 console.log(student_details.student[1].age);
 console.log(student_details.student[1].lastName);
 console.log(student_details.student[1].firstName);
 console.log(student_details.student[1].age);
 console.log(student_details.student[2].age);
 console.log(student_details.student[2].lastName);
 var jsnstringyfy = JSON.stringify(student_details);
 console.log("stringfy", jsnstringyfy);
 var parsedjson = JSON.parse(jsnstringyfy)
 console.log("parsedjson", parsedjson);