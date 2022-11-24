let details = [
    {
        "first_name":"baskar",
        "last_name" :"giri",
        "roll_no":"005",
        "grade":"A_grade"
    },{
        "first_name":"ashwath",
        "last_name" :"krish",
        "roll_no":"010",
        "grade":"O_grade"
    }
]
//for loop iteration

for(i=0;i<details.length;i++){
    console.log(details[i].roll_no);
}

//for in iteration

for(let i in details ){
    console.log(details[i]);
}

//for of iteration

for(let i of details){
    console.log(i.grade)
}




