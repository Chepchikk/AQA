const minAge = 18;
const maxAge = 60;
const age = prompt("How old are you?", 2);



switch (true) {
    case age < minAge: {
        alert("You dont't have access cause your age is " + age + " It's less then");
        break;
    }
    case age >= minAge && age < maxAge: {
        alert("Welcome !");
        break;
    }
    case age > maxAge: {
        alert("Keep calm and look Culture chanel");
        break;
    }
    default: {
        alert("Technikal work");
        break;
    }
}

//2. 

if (age === Number(age)) {
    if (age < minAge) {
        alert("You dont't have access cause your age is " + age + " It's less then");
    } else if (age >= minAge && age < maxAge) {  
        alert("Welcome !");
    } else if (age > maxAge) { 
        alert("Keep calm and look Culture chanel");
    } else {
        alert("Technikal work");
    } 
}
    else {
        alert("Error. Enter numbers");
    }


// // 3.

if (Number(age) < minAge) {
    alert("You dont't have access cause your age is " + age + " It's less then");
} else if (Number(age) >= minAge && Number(age) < maxAge) {  
    alert("Welcome !");
} else if (Number(age) > maxAge) { //Я думаю что сдесь необходимо указать age >= maxAge , но для проверки "Technikal work" пойдет)))
    alert("Keep calm and look Culture chanel");
} else if (age !== Number(age)) { 
    alert("Error. Enter numbers");
} else {
    alert("Technikal work");
}