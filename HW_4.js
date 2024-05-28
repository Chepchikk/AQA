// TASK-1

const minAge = 18;
const maxAge = 60;
const age = 61;

if (age < minAge) {
    console.log("You dont't have access cause your age is " + age + " It's less then");
} else if (age >= minAge && age < maxAge) {  
    console.log("Welcome !");
} else if (age > maxAge) { //Я думаю что сдесь необходимо указать age >= maxAge , но для проверки "Technikal work" пойдет)))
    console.log("Keep calm and look Culture chanel");
} else {
    console.log("Technikal work");
}
