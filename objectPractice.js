let student1 = { firstName: 'Sue', lastName: 'Smith', gpa: 3.6, playsVollyball: true }
let student2 = { firstName: 'Bob', lastName: 'Loblaw', gpa: 1.9, playsVollyball: false }
let student3 = { firstName: 'Moe', lastName: 'joe', gpa: 4.0, playsVollyball: true }


let allStudents = [student1, student2]
allStudents.push(student3)

for(let i = 0; i < allStudents.length; i++){
    aboutStudent(allStudents[i])
}


function aboutStudent(who) {
    if (who.playsVollyball) {
        console.log(who.firstName + ' ' + who.lastName + ' has a GPA of ' + who.gpa + ' and does play Vollyball')
    } else {
        console.log(who.firstName + ' ' + who.lastName + ' has a GPA of ' + who.gpa + ' and does not play Vollyball')
    }
}
