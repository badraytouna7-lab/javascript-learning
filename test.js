// let price = prompt("enter your price : ");
// price = Number(price);

// let card_wafae = prompt("do you have card_wafae ? yes/no ");
// console.log(card_wafae);
// let holiday = prompt(" is today a holiday ? yes/no ");

//  let hasCard = (card_wafae === "yes");
//  let isHoliday = (holiday === "yes");
// let total_price;

// if (price >= 100 && hasCard === true){
//    total_price = price - 20;
//    alert ("you are luckly! to have a discount : 20 DH");  
// }else if(isHoliday === true || price < 100){
//     total_price = price - 5;
//        alert (" you are luckly ! to have a discount : 5 DH");
// }else{
// total_price = price;
// alert("no discount");
// }
// alert("total price is : " + total_price + " DH");


// let price = prompt(" order price (DH) : ");
// price = Number(price);
// let premium = prompt(" are you a premium subscriber ? (yes/no)");
// let inside_city = prompt(" is the address withen the city ? (yes/no) ");
// let hasPremium = (premium === "yes");
// let isInside_city = (inside_city === "yes");
// let deliveryPrice;

// if(hasPremium === true && price >= 150 ){
// deliveryPrice = 0;
// }
// else if (isInside_city === false || price < 150 ){
//     deliveryPrice = 15; 
// }
// else{
//     deliveryPrice = 5;
// }
// console.log(deliveryPrice);
// alert("Delivery Price is : "+ deliveryPrice +" DH");


// function checkSuccess(score) {
//     if (score >= 10){
//         return ("success");
//     }else{
//         return ("failed");
//     }
// }
// let checkScore = checkSuccess(9);
// console.log(checkScore);


// let score = prompt("enter n° a : ");
// score = Number(score);
// let bonus = prompt("enter n° b : ");
// bonus = Number(bonus);

// let DiscplineGood = prompt("enter your discpline is good (yes/no) : ");
// let isDiscplineGood = (DiscplineGood === ("yes"));
// function calculateFinalScore( score,bonus,isDiscplineGood){
//      let somme = score + bonus;
//     if(isDiscplineGood === true && score + bonus >= 15){  
//         return somme + 2;
//     }else{
//         return somme - 1;
//     }
// }
// let total = calculateFinalScore(score,bonus,isDiscplineGood);
// console.log(total);
// alert(" total : "+ total);


// let mathScore = prompt(" enter your bonus Math : ");
//  mathScore = Number(mathScore);
// let scienceScore = prompt(" enter your bonus Science: ");
// scienceScore = Number(scienceScore);
// let bonusPoint = prompt(" enter your bonus Point : ");
// bonusPoint = Number(bonusPoint);
// let didExtraHomeWork = prompt(" Did your Home Work ? (yes/no) ");
// let wekeendHoliday = prompt(" is a holiday ? (yes/no)");
// let likesSchool = prompt("do likes School ? (yes/no)");
// let o_didExtraHomeWork =(didExtraHomeWork ===("yes"));
// let o_wekeendHoliday =(wekeendHoliday ===("yes"));
// let o_likesSchool =(likesSchool ===("yes"));
// function calculateFinalScore(mathScore,scienceScore,bonusPoint,o_didExtraHomeWork,o_wekeendHoliday,o_likesSchool) {
//     let totalScore = (mathScore + scienceScore + bonusPoint) / 3;
//     let finalScore;
//     if(o_didExtraHomeWork === true && totalScore >= 15 ){
//           return finalScore = totalScore + 4;
//     } else if(o_wekeendHoliday === true || totalScore < 10 ){
//           return finalScore = totalScore - 2;
//     }else if(o_likesSchool === true && totalScore >= 10 ){
//           return finalScore = totalScore + 3;
//     }else{
//          finalScore = totalScore;
//     }
//     return finalScore;
// }
// let o_finalScore = calculateFinalScore(mathScore,scienceScore,bonusPoint,o_didExtraHomeWork,o_wekeendHoliday,o_likesSchool);
// console.log(o_finalScore);
// alert("Final Score: "+ o_finalScore);
  

// let numberOfRatings = Number (prompt("how many ratings ? "));
// let sum = 0;
// for(let i = 1; i <= numberOfRatings ; i++){
// let rating = Number(prompt("enter rating" + i + " (0 to 5): "));
// if (rating < 0 || rating > 5){
// alert (" wrong rating ! enter number between 0 and 5 ");
// i--;
// continue;
// }
// sum = sum + rating;
// }
// let average = sum / numberOfRatings;
// alert("average a ratings is : "+ average);
// console.log(average);

// let numberOfdelivery = Number(prompt("how many delivery ? "));
// let sum = 0 ;
// for( let i=1 ; i <= numberOfdelivery ; i++ ){
// let timeDelivery = Number(prompt(" enter time of delivery " + i + " : ...(min)" ));
// let validDeliveries = 0;
// if(timeDelivery <= 0){
// alert (" worng time! try again.");
// i--;
// continue;
// }
// sum = sum + timeDelivery ;
// validDeliveries++;
// }
//  let moyenTimeOfDelivery = sum / numberOfdelivery ;
//  alert(" moyen time of delivery is : " + moyenTimeOfDelivery + " min");
//  console.log(moyenTimeOfDelivery);
 
// let biologyScore = "10";
// let geographyScore = "5";
// let bonus = 6 ;
// let didProject = true;
// let holiday = false;
// let likeSchool = false;
// let totalScore = Number(biologyScore) + Number(geographyScore)
// + bonus ;
// let finalScore;
// if(didProject === true && totalScore >= 20){
// finalScore = totalScore + 4 ;
// }else if(holiday === true || totalScore < 20){
// finalScore = totalScore - 3 ;
// }else if(likeSchool === true && totalScore >= 15){
// finalScore = totalScore 
// + 2 ;
// }
// console.log(finalScore);

// let number = Number(prompt("enter number (1 to 10): "));
// while(isNaN(number) || number < 1 || number > 10){
//     alert(" wrong number! try again ");
//     number = Number(prompt("enter number (1 to 10): "));
// }
// alert( "Good job, You entered : "+ number);

// let numberOfSubject = Number(prompt(" how many subjects are you studying? "));
// let sum = 0;
// let validDeSubjects = 0;
// for (let i=1 ; i <= numberOfSubject ; i++) {
// let pointSubject = Number(prompt(" enter the subject point "+ i + ": .../20"));

// while (isNaN(pointSubject) || pointSubject < 0 || pointSubject > 20) {
// alert(" wrong point! try again ");
// pointSubject = Number(prompt(" enter the subject point "+ i + ": .../20"));
// }
// sum = sum + pointSubject;
// validDeSubjects++;
// }

// let average = sum / validDeSubjects;
// function checkResult(average) {
//     if( average>=10 ){
// return result = ("success");
//     }else{
//     return result = ("failed");
//     }
// }
// alert( "your average is : " + average);
// let isResult = checkResult(average);
// console.log(isResult);
// alert("your result is : "+ isResult);

// let password;

// do {
//   password = prompt("Enter the 4-digit password:");
// } while (password !== "1234");

// alert("Access granted");

// let nom = prompt("Enter your name:");
// console.log(nom);

// let didExtraHomeWork = prompt("Did you do your homework? (yes/no)");
// let weekendHoliday = prompt("Is today a holiday? (yes/no)");
// let isDidExtraHomeWork = didExtraHomeWork === "yes";
// let isWeekendHoliday = weekendHoliday === "yes";

// let numberOfSubject = Number(prompt("How many subjects are you studying?"));
// while (isNaN(numberOfSubject)) {
//     alert("Wrong number! Try again.");
//     numberOfSubject = Number(prompt("How many subjects are you studying?"));
// }

// let sum = 0;
// let validSubjects = 0;

// for (let i = 1; i <= numberOfSubject; i++) {
//     let pointSubject = Number(prompt("Enter the subject point " + i + " (/20):"));
//     while (isNaN(pointSubject) || pointSubject < 0 || pointSubject > 20) {
//         alert("Wrong point! Try again.");
//         pointSubject = Number(prompt("Enter the subject point " + i + " (/20):"));
//     }
//     sum += pointSubject;
//     validSubjects++;
// }

// let average = sum / validSubjects;
// console.log("Average before adjustment:", average);

// function adjustAverage(average, didExtraHomework, weekendHoliday) {
//     let finalAverage = average;
//     if (didExtraHomework) finalAverage += 1;
//     else if (weekendHoliday) finalAverage -= 1;
//     return finalAverage;
// }

// let finalAverage = adjustAverage(average, isDidExtraHomeWork, isWeekendHoliday);
// alert(nom + ", your average is: " + finalAverage);
// console.log("Final average:", finalAverage);

// function checkResult(average) {
//     return average >= 10 ? "success" : "failed";
// }

// let result = checkResult(finalAverage);
// alert(nom + ", your result is: " + result);
// console.log("Result:", result);
  

// let pointSubject = [10,10,20];
// let sum = 0;
// for (let i = 0; i < pointSubject.length; i++) {
//   sum += pointSubject[i];   
// }
// console.log(sum);

//  let Average= sum / pointSubject.length;
//  console.log(Average);

// let numberOfSubjects = Number(prompt("How many subjects do you have?"));
// while (isNaN(numberOfSubjects)) {
//      alert("Wrong number! Try again.");
//      numberOfSubjects = Number(prompt("How many subjects are you have?"));
//  }

// let subjectsPoints = [];
// let sum = 0;

// for (let i = 1; i <= numberOfSubjects; i++) {

//     let point = Number(prompt("Enter point for subject " + i + " (/20):"));

//     while (isNaN(point) || point < 0 || point > 20) {
//         alert("Wrong point! Try again.");
//         point = Number(prompt("Enter point for subject " + i + " (/20):"));
//     }

//     subjectsPoints.push(point);
//     sum += point;
// }

// let average = sum / subjectsPoints.length;

// console.log(subjectsPoints);
// console.log("Average = " + average);

// alert("Your average is: " + average);
// function checkResult(average) {
//     return average >= 10 ? "success" : "failed";
// }
// let result = checkResult(average);
//  alert(" your result is: " + result);
//  console.log("Result:", result);




//   a=0;
// function trouverNombresPaires(start,stop) {
//    for (let i = start ; i <= stop; i++ )
//   {
//     if (i % 2 == 0)
//     {
//       a++;
//     }
//    } 
// }
// trouverNombresPaires(3,45);
// console.log(a);




 let ar = [2, 5, 7, 12];
function addToTable(ar,x) {
   ar.push(x);  
}
addToTable(ar,9);
console.log(ar);


function deleteToTable(ar,x) {
    ar.pop(x)
}
deleteToTable(ar);
console.log(ar);

sum = 0 ;
function sommeToTable(ar) {
 for(let i = 0 ; i <= ar.lenght; i++){
sum += ar[i];
 }
 console.log(sum);
}
sommeToTable(ar);



