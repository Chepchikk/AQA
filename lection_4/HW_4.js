// // TASK-1

const minAge = 18;
const maxAge = 60;
const age = "2";

if (age < minAge) {
    console.log("You dont't have access cause your age is " + age + " It's less then");
} else if (age >= minAge && age < maxAge) {  
    console.log("Welcome !");
} else if (age > maxAge) { //Я думаю что сдесь необходимо указать age >= maxAge , но для проверки "Technikal work" пойдет)))
    console.log("Keep calm and look Culture chanel");
} else {
    console.log("Technikal work");
}


// //TASK-2
// // 1.

switch (true) {
    case age < minAge: {
        console.log("You dont't have access cause your age is " + age + " It's less then");
        break;
    }
    case age >= minAge && age < maxAge: {
        console.log("Welcome !");
        break;
    }
    case age > maxAge: {
        console.log("Keep calm and look Culture chanel");
        break;
    }
    default: {
        console.log("Technikal work");
        break;
    }
}

//2. 

if (age === Number(age)) {
    if (age < minAge) {
        console.log("You dont't have access cause your age is " + age + " It's less then");
    } else if (age >= minAge && age < maxAge) {  
        console.log("Welcome !");
    } else if (age > maxAge) { //Я думаю что сдесь необходимо указать age >= maxAge , но для проверки "Technikal work" пойдет)))
        console.log("Keep calm and look Culture chanel");
    } else {
        console.log("Technikal work");
    } 
}
    else {
        console.log("Error. Enter numbers");
    }


// // 3.

if (Number(age) < minAge) {
    console.log("You dont't have access cause your age is " + age + " It's less then");
} else if (Number(age) >= minAge && Number(age) < maxAge) {  
    console.log("Welcome !");
} else if (Number(age) > maxAge) { //Я думаю что сдесь необходимо указать age >= maxAge , но для проверки "Technikal work" пойдет)))
    console.log("Keep calm and look Culture chanel");
} else if (age !== Number(age)) { 
    console.log("Error. Enter numbers");
} else {
    console.log("Technikal work");
}