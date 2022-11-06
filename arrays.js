let studentsWebDev = ['Ellie', 'Avery', 'Erin', 'Mr. Gorton']
console.log(studentsWebDev)

studentsWebDev.push('Bobith')

console.log(studentsWebDev)

studentsWebDev[4] = 'joe'
console.log(studentsWebDev)

console.log('The seconed person in class is ' + studentsWebDev[1])

for (let i = 0; i < studentsWebDev.length; i++) {
    console.log('Hi ' + studentsWebDev[i])
}