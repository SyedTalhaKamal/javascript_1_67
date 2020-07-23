//  ( Chapter 01) 

// //  01
// alert('Hi Talha ');
// //  02
// alert('Error! Please enter a valid password');
// //   03
// alert('Welcome to JS Land... \n Happy Coding!');
// //  04
// alert('Welcome to JS Land...');
// alert('Happy Coding!');
// // 05
// console.log(alert("Hello... I can run JS through my web browser's Console"));
// // Task 06 and 07 done



//  ( Chapter 02) 

// //   01
// var username = '';

// //   02
// var myName = 'Syed Talha Kamal';

// //  03
// var message = "Hello World";
// alert(message);

// //  04
// stdName = "Jhone Doe";
// stdAge = "15 years old";
// stdQul = "Certified Mobile Application Developer";
// alert(stdName);
// alert(stdAge);
// alert(stdQul);

// //  05
// recipe = "PIZZA";
// alert(recipe + "\n" + recipe.slice(0, 4) + "\n" + recipe.slice(0, 3) + "\n" + recipe.slice(0, 2) + "\n" + recipe.charAt(0));

// //  06
// email = 'syedtalhakamal@gmail.com';
// alert('My email address is ' + email);

// //  07
// book = 'A smarter way to learn JavaScript';
// alert('I am trying to learn from the book ' + book);

// //  08
// document.write("<h2>Yah! I can write HTML content through JS</h2>");

// //  09
// var patern = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
// alert(patern);



//  ( Chapter 03) 

// 01)
// var age = (23)
// alert("I am " + age + " years old")

// // 02)
// var track = (14)
// alert("You have visited this site " + track + " times.")

// // 03)
// var birthYear = (1996)
// document.write("<br><br>" + "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number")

// // 04)
// var name = ("John Doe").bold()
// var product = ("T-Shirts(s)").bold()
// var quantity = ("5").bold()
// document.write("<br>" + name + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "<br><br>")



//  ( Chapter 04) 
// 01)
// var a, b, c;

// // 02)
// var a, b, c, d, e;      
// // var 1a,? b, !c, "d,-e;  

// // 03)
// var heading = ("Rules for naming JS variables" + "<br>").bold()
// document.write(heading)
// document.write("<br>" + "Variable names can only contain, numbers, $ and _. For example $my_1stVariable")
// document.write("<br>" + "Variables must begin with a letter, $, or _. For example $name, _name or name")
// document.write("<br>" + "Variable names are case sensitive")
// document.write("<br>" + "Variable names should not be JS keywords" + "<br><br>")


//  ( Chapter 05) 
// // 01)
// var num1 = 3
// var num2 = 5
// document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))

// // 02)
// var num1 = 3
// var num2 = 5
// document.write("<br>" + "Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
// document.write("<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
// document.write("<br>" + "Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
// document.write("<br>" + "Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2))

// // 03)
// var number
// document.write("<br>" + "<br>" + "Value after variable declaration is " + number)
// number = 5
// document.write("<br>" + "Initial value: " + number)
// document.write("<br>" + "Value after increment is: " + ++number)
// var number1 = number + 7
// document.write("<br>" + "Value after addition is: " + number1)
// document.write("<br>" + "Value after decrement is: " + --number1)
// document.write("<br>" + "The remainder is: " + number1 % 3)

// // 04)
// var cost = 600
// var ticket = 5
// document.write("<br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + "PKR")

// // 05)
// var i
// document.write("<br>" + "<br>" + "Table of 4" + "<br>")
// for (i = 1; i <= 10; i++) {
//     document.write("4x" + i + "=" + 4 * i + "<br>")
// }

// // 06)
// var celsius = 25
// document.write("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F")
// var fahrenheit = 70
// document.write("<br>" + fahrenheit + "°F is " + (fahrenheit - 32) * 5 / 9 + "°C")

// // 07)
// document.write("<br>" + "<br>" + "Shopping Cart" + "<br>")
// var pi1 = 650, pi2 = 100, oi1 = 3, oi2 = 7, sc = 100
// document.write("<br>" + "Price of item 1 is " + pi1)
// document.write("<br>" + "Ordered quantity of item 1 is " + oi1)
// document.write("<br>" + "Price of item 2 is " + pi2)
// document.write("<br>" + "Ordered quantity of item 2 is " + oi2)
// document.write("<br>" + "Shiping charges " + sc)
// document.write("<br>" + "<br>" + "Total cost of your order is " + ((pi1 * oi1) + (pi2 * oi2) + sc))

// // 08)
// document.write("<br>" + "<br>" + "Marks Sheet" + "<br>")
// var marksobtained = 804
// var totalmarks = 980
// document.write("<br>" + "Total marks " + totalmarks)
// document.write("<br>" + "Marks obtained " + marksobtained)
// document.write("<br>" + "Percentage: " + (marksobtained / totalmarks * 100) + "%")

// // 09)
// document.write("<br>" + "<br>" + "Currency in PKR" + "<br>")
// var dollar = 10, saudiriyal = 25
// document.write("<br>" + "Total currency in PKR:" + ((dollar * 104.80) + (saudiriyal * 28)))

// // 10)
// var integer = 9
// document.write("<br>" + "<br>" + (((integer + 5) * 10) / 2))

// // 11)
// document.write("<br>" + "<br>" + "Age Calculator" + "<br>")
// var currentyear = 2020, birthyear = 1996
// document.write("<br>" + "Current year: " + currentyear)
// document.write("<br>" + "Birth year: " + birthyear)
// document.write("<br>" + "Your age is: " + (currentyear - birthYear))

// // 12)
// document.write("<br>" + "<br>" + "The Geometrizer" + "<br>")
// var radius = 20
// document.write("<br>" + "Radius of cicle is:" + radius)
// document.write("<br>" + "The circumference is:" + (2 * 3.1415926535897932 * radius))
// document.write("<br>" + "The area is:" + (3.1415926535897932 * radius * radius))

// // 13)
// document.write("<br>" + "<br>" + "The Lifetime Supply Calculator" + "<br>")
// var snack = ("chocolate chip")
// var age = 19, maxage = 80, perday = 3
// document.write("<br>" + "Favourite Snack: " + snack)
// document.write("<br>" + "Current age: " + age)
// document.write("<br>" + "Estimated Maximum Age: " + maxage)
// document.write("<br>" + "Amount of snack per day: " + perday)
// document.write("<br>" + "You will need " + ((maxage - age) * perday) + " " + snack + " to last you until the ripe old age of " + maxage)


//  ( Chapter 06-09)

// // 01

// var a = 10;
// document.write(
//     "Result: <br/> The value of a is:" +a+
//     "<br/> ----------------"+

//     "<br/><br/> The value of ++ a is:"+(++a)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of a++ is:"+(a++)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of  --a is:"+(--a)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of a-- is:"+(a--)+
//          "<br/>  Now The value of a is:"+a +"</br> </br> </br>"
//         ) 


// // 02
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--;

// document.write(" a is ="+a)
// document.write("<br/> b is = "+b)
// document.write("<br/> result is ="+result +"</br> </br>")

// // 03

// var userName = prompt("Enter your Name")
// alert("Hello" +userName+" have a good day")

// // 05

// var table = prompt("Enter a number for Table","5")
// var a = Number(table);
// var num = 1
// document.write(
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"+
//     a+" x "+num+" = "+ (a*num++)+"<br/>"

// )

// // 06
// var sub1 = prompt("Enter First Subject Name")
// var sub2 = prompt("Enter Second SUbject Name")
// var sub3 = prompt("Enter Third SUbject Name")
// var sub1Marks = prompt("Enter First Subject Marks")
// var a = Number(sub1Marks)
// var sub2Marks = prompt("Enter Second Subject Marks")
// var b = Number(sub2Marks)
// var sub3Marks = prompt("Enter Third Subject Marks")
// var c= Number(sub3Marks)
// var totalMarks = 100

// document.write(
//               "<table>"+
//               "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
//               "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//              "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//               "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//              "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
//              "</table>" 



//  (Chapter 09-11)
// 01

// var city = prompt("Enter Your City Name")

// if (city === "Karachi"| city === "Karachi"){
//     alert("Welcome to city of lights")
// }

// // 02

// var gender = prompt("Enter Your Gender")
// if  (gender === "Male"| gender ==="male"){
//     alert("Good Morning Sir")
// }

// if  (gender === "Female"| gender ==="female"){
//     alert("Good Morning Ma'am")
// }

// // 03
//  var light = prompt("Enter Traffic SIgnal Light Color")
//  if (light=== "Red"| light ==="red"){
//      alert("Must Stop")
//  }

//  if (light=== "Yellow"| light ==="yellow"){
//     alert("Ready to move")
// }

// if (light=== "Green"| light ==="green"){
//     alert("Move now")
// }

// // 04
// var fuel = prompt("Enter Your Remaining Fuel Levl")
// if (fuel === "0.25"){
//     alert("Please refill the fuel in your car")
// }

// // 05
// // a. var a = 4;
// // if (++a === 5){
// // alert("given condition for variable a is true");
// // }
// // b. var b = 82;
// // if (b++ === 83){
// // alert("given condition for variable b is true");
// // }
// // c. var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }
// // if (c === 13){
// // alert("condition 2 is true");
// // }
// // if (++c < 14){
// // alert("condition 3 is true");
// // }
// // if(c === 14){
// // alert("condition 4 is true");
// // }
// // d. var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // }
// // e. if (true){
// // alert("True");
// // }
// // if (false){
// // alert("False");
// // }
// // f. if("car" < "cat"){
// //     alert("car is smaller than cat");
// //     }

// // 06

// var totalMarks = 300;
// var sub1 = prompt("Enter Your First Subject Marks")
// var sub2 = prompt("Enter Your Second Subject Marks")
// var sub3 = prompt("Enter Your Third Subject Marks")
// var sub1Marks = Number(sub1)
// var sub2Marks = Number(sub2)
// var sub3Marks = Number(sub3)
// var markObtained = sub1Marks+sub2Marks+sub3Marks
// var percentage = markObtained/totalMarks*100

// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }

// if (percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }

// if (percentage >= 60){
//     grade = "B";
//     remarks = "You Need to improve";
// }
// if (percentage <= 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write(
//     "<h1>Marks sheet</h1>"+
//     "<br/>Total Marks :"+totalMarks+
//     "<br/>Marks Obtained :"+markObtained+
//     "<br/>Percentage :"+percentage+"%"+
//     "<br/>Grade :"+grade+
//     "<br/>Remarks :"+remarks

// )

// // 07

// var number = 10
// var userInput = +prompt("Enter the number")
// if (number==userInput){
//     alert("BINGO! Correct Answer")
// }

// else if (userInput+1==number){
//     alert("Close enough to the correct answer")
// }

// else{
//     alert("You lost!")
// }



// // 08
// var num = prompt("Enter a Number to check is divisible by 3")

// if (num % 3 === 0){
//     alert("Your Given Number is Divisible by 3")

// }else {
//     alert("Your Given Number is not Divisble by 3")
// }

// // 09

// var num = prompt("Enter a number: ")
// if(num % 2 === 0){
//     alert(num +" is a even number")
// }else{
//     alert(num +" is a odd number")
// }

// // 10

// var temp = prompt("Enter the temperature")
// var t = Number(temp)

// if (t > 40){
//     alert("It is too hot outside")
// }

// if (t > 30){
//     alert("The weather today is Normal")
// }

// if (t > 20){
//     alert("Today's weather is cool")
// }

// if (t > 10){
//     alert("OMG! Today's weather is a cool")
// }

// // 11
// var a = prompt("Enter First number")
// var b = prompt("Enter Second number")
// var operator = prompt("Enter an operator operation(+,-,*,/,%)")
// var num1 = Number(a)
// var num2 = Number(b)

// if (operator === "+"){
//     alert ("Your Ans is "+(num1+num2))
// }

// if (operator === "-"){
//     alert ("Your Ans is "+(num1-num2))
// }

// if (operator === "*"){
//     alert ("Your Ans is "+(num1*num2))
// }

// if (operator === "/"){
//     alert ("Your Ans is "+(num1/num2))
// }

// if (operator === "%"){
//     alert ("Your Ans is "+(num1%num2))
// }


//  (Chapter12-13)
// 01)
// var ch = prompt('Enter any character or number:');
// var a = ch.charCodeAt(0);
// if ((a >= 48) && (a <= 57)) {
//     alert('Input is a number.')
// }
// else if ((a >= 65) && (a <= 90)) {
//     alert('Input is an uppercase letter.')
// }
// else if ((a >= 97) && (a <= 122)) {
//     alert('Input is lowercase letter.')
// }
// else {
//     alert('Invalid input');
// }

// // 02)
// var int1 = +prompt("Enter first integer to be compared")
// var int2 = +prompt("Enter second integer to be compared")
// if (int1 > int2) {
//     document.write(int1 + " is larger than " + int2 + "<br>")
// }
// else if (int1 < int2) {
//     document.write(int2 + " is larger than " + int1 + "<br>")
// }
// else if (int1 == int2) {
//     document.write(int1 + " is equal to " + int2 + "<br>")
// }

// // 03)
// var integer1 = +prompt("Enter an integer")
// if (integer1 > 0) {
//     document.write(int1 + " is larger than zero" + "<br>")
// }
// else if (integer1 < 0) {
//     document.write(int2 + " is smaller than zero" + "<br>")
// }
// else if (integer1 == 0) {
//     document.write(int1 + " is equal to zero" + "<br>")
// }

// // 04)
// var char = prompt("Enter any character")
// if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
//     document.write("It is a vowel" + "<br>")
// }
// else {
//     document.write("It is not a vowel" + "<br>")
// }

// // 05)
// var corpass = pakistan
// var guesspass = prompt("Enter your password" + "<br>")
// if (corpass === guesspass) {
//     document.write("Correct! The password you entered matches the original password" + "<br>")
// }
// else if (corpass !== guesspass) {
//     document.write("Incorrect password" + "<br>")
// }
// else {
//     document.write("Please enter your password" + "<br>")
// }

// // 06)
// var greeting, hour = 13
// if (hour < 18) {
//     greeting = "Good day"
// }
// else {
//     greeting = "Good evening"
// }

// // 07)
// var time = prompt("Enter time in 2 hour format: ")
// if (time >= 0000 && time < 1200) {
//     document.write("Good Morning!" + "<br>")
// }
// else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon!" + "<br>")
// }
// else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening!" + "<br>")
// }
// else if (time >= 2100 && time < 2359) {
//     document.write("Good Night!" + "<br>")
// }



//  (Chapter14-16)
// 01
// 

//  (Chapter17-20)
// 01
// var multi_dim = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// //   02
// var multi_dim2 = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];

// //   03
// var i;
// for (i = 1; i < 11; i++) {
//   document.write(i + '<br>');
// }

// //  04
// var table_num = parseInt(prompt('Enter a number to show its multiplication table: '));
// var table_lenght = parseInt(prompt('Enter lenght of multiplication table: '));
// var i;
// document.write(`<h2>Table of ${table_num} </h2>`);
// document.write(`<h2>Lenght of table is ${table_lenght} </h2>`);
// for (i = 1; i < table_lenght + 1; i++) {
//   document.write(`${table_num} x ${i} = ${table_num * i} <br>`);
// }

// //  05
// fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + '<br>');
// }
// for (var i = 0; i < fruits.length; i++) {
//   document.write(`Element at index ${fruits.indexOf(fruits[i])} is ${fruits[i]} <br>`);
// }

// //  06
// arr_counts = [];
// for (let i = 1; i < 16; i++) {
//   arr_counts.push(i);
// }
// document.write(`Counting: ${arr_counts} <br>`);

// arr_reverse = [];
// for (let i = 1; i < 11; i++) {
//   arr_reverse.push(i);
// }
// document.write(`Reverse Counting: ${arr_reverse} <br>`);

// arr_even = [];
// for (let i = 0; i < 21; i += 2) {
//   arr_even.push(i);
// }
// document.write(`Even: ${arr_even} <br>`);

// arr_odd = [];
// for (let i = 1; i < 21; i += 2) {
//   arr_odd.push(i);
// }
// document.write(`Odd: ${arr_odd} <br>`);

// arr_series = [];
// for (let i = 2; i < 21; i += 2) {
//   arr_series.push(i + 'K');
// }
// document.write(`Series: ${arr_series} <br>`);

// //  07
// A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// user_search = prompt('Welcome to ABC Bakery. What do you want to order?');
// for (let i = 0; i < A.length; i++) {
//   if (user_search == A[i]) {
//     alert(`${A[i]} is available at index ${A.indexOf(A[i])} in our bakery`);
//     break;
//   }
// }

// //  08
// var A = [24, 53, 78, 91, 12];
// var largest = Math.max(...A);
// document.write('Array Items: ', A);
// document.write('<br>Largest Number in Array: ', largest);

// //  09
// var A = [24, 53, 78, 91, 12];
// var smallest = Math.min(...A);
// document.write('<br>Array Items: ', A);
// document.write('<br>Smallest Number in Array: ', smallest);

// //  10
// for (var i = 1; i < 21; i++) {
//   document.write('<br>' + i * 5);
// }


//CHAPTER 21-25
//TASK 1
// var firstName=prompt("Enter you first name");
// var lastName=prompt("Enter your last name");
// var fullname=firstName+" "+lastName;
// alert("Welcome"+" "+fullname);

//TASK 2

// var phone=prompt("Enter your favourite phone name")
// var n=phone.length;
// document.write("My favourite phone is: "+phone+"<br>"+"Length of string: "+n);

//TASK 3
// var str="Pakistani";
// var n=str.indexOf("n");
// document.write("String: "+str+"<br>"+"Index of n : "+n);

//TASK 4

// var str="Hello World";
// var n=str.lastIndexOf("l");
// document.write("String: "+str+"<br>"+"Last index of l : "+n);

//TASK 5

// var str="Pakistani";
// var n=str.charAt(3);
// document.write("String: "+str+"<br>"+"Character at index 3 : "+n);

//TASK 6

// var firstName=prompt("Enter you first name");
// var lastName=prompt("Enter your last name");
// var resut=firstName.concat(" ",lastName);
// alert("Welcome "+result);

//TASK 7
// var str1="Hyderabad";
// var n=str1.replace("Hyder","Islam");
// document.write("City: "+str1+"<br>"+"After replacement : "+n);

//TASK 8

// var str1="Ali and Sami are best friends. They play cricket and football together.";
// var n=str1.replaceAll("and","&");
// document.write("Message: "+str1+"<br>"+"After replacement : "+n);

//TASK 9

// var str="472";
// var str2=parseInt(str);
// document.write("Value: "+str+"<br>"+"Type: "+typeof(str)+"<br>"+"Value: "+str2+"<br>"+"Type: "+typeof(str2));

//TASK 10
// var str=prompt("Insert String:");
// var res=str.toUpperCase();
// document.write("User input: "+str+"<br>"+"Upper Case: "+res);

//TASK 11

// function Titlecase(){
//     var str=prompt("Enter String: ")
//     var words=str.toLowerCase().split(" ");
//     for (var i=0; i<words.length; i++){
//         words[i]=words[i][0].toUpperCase()+words[i].slice(1);
//     }
//     document.write(words.join(" "));

// }

//TASK 12

// var str=35.36;
// var str2= str.toString().replace(".", "")
// document.write("Number: "+str+"<br>"+"Result: "+str2);


//TASK 13

// var username=prompt("Enter Username: ");

// for (var i=0 ; i <username.length ; i++){
//     if (username[i] == "!" || username[i]=="." || username[i]=="@" || username[i]==","){
//         alert("Enter a valid username");    
//     }
// }

//TASK 14
// var arr=["cake","apple pie","cookie","chips", "patties"]
// var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// var res=search.toLowerCase();
// for(var i=0 ; i < arr.length ; i++){
//     if (arr[i]===res){
//         alert(arr[i]+" is available at index "+arr.indexOf(arr[i])+" in our bakery")
    
//     }

// }


//TASK 16
// var str="University of Karachi";
// var result=str.split("<br>")
// document.write(result)

//TASK 17 
// var user=prompt("Enter input")
// var n=user.charAt(user.length-1)
// document.write("User input: "+user+"<br>"+"Last charcter of input: "+n);

//TASK 18
// function char_count(str, varter) 
// {
//  var varter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == varter) 
//       {
//       varter_Count += 1;
//       }
//   }
//   return varter_Count;
// }

// document.write("Text: "+"the quick brown fox jumps over the lazy dog"+"<br>"+"There are "+char_count ("the quick brown fox jumps over the lazy dog", "the")+" occurences of word the");



//CHAPTER 26-30
//TASK 1
// var number = +(prompt("Enter any postive integer"));
// document.write("number: " + number + "<br>");
// var round = Math.round(number);
// document.write("round off value of: " + round + "<br>");
// var floor = Math.floor(number);
// document.write("floor value of: " + floor + "<br>");
// var ceil = Math.ceil(number);
// document.write("ceil value of: " + ceil);

// TASK 2
// var number = +(prompt("Enter any negative floating point"));
// document.write("number: " + number + "<br>");
// var round = Math.round(number);
// document.write("round off value of: " + round + "<br>");
// var floor = Math.floor(number);
// document.write("floor value of: " + floor + "<br>");
// var ceil = Math.ceil(number);
// document.write("ceil value of: " + ceil);

// TASK 3
// var number = +(prompt("Enter any value to find absolute value"));
// var absolute = Math.abs(number);
// document.write("absolute value of " + number + " is " + absolute);

// TASK 4
// var dice = (Math.random()) * 7
// var value = Math.floor(dice)
// document.write('random dice value: ' + value);

// TASK 5
// var tail = 1;
// var head = 2;
// var numberGenerate = (Math.random()) * 3;
// var coinToss = Math.floor(numberGenerate);
// if (coinToss == 1) {
//     document.write(tail + "<br>random coin value: Tail");
// } else if (coinToss == 2) {
//     document.write(head + "<br>random coin value: Head");
// } else {
//     document.write("Coin has vanished in System ☺");
// }

// TASK 6
// var number = (Math.random()) * 101;
// var floor = Math.floor(number);
// document.write("Random number between 1 and 100: " + floor);

// TASK 7
// var weight = prompt("Enter your weight in kg");
// document.write("The weight of user is: " + weight);

// TASK 8
// var secretNumber = 7;
// for (var i = 1; i > 0; i++) {
//     var userGuess = +(prompt("Enter a number from 1 to 10"));
//     if (userGuess === secretNumber) {
//         alert("Congratulation");
//         break;
//     } else {
//         alert("Try Again");
//     }
// }



//CHAPTER 31-34
//TASK 1
// var dte = new Date();
// document.write(dte);

// TASK 2
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var dte = new Date();
// var n = month[dte.getMonth()];
// document.write(n);

// TASK 3
// var dte = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var n = weekday[dte.getDay()];
// document.write(n); 

// TASK 4
// var dte = new Date();
// var day = dte.getDay();
// if (day == 6 || day == 7) {
//     document.write("It's Fun Day, Day is " + day);
// } else {
//     document.write("Day is " + day);
// }

// TASK 5
// var dte = new Date();
// var day = dte.getDate();
// if (day < 16) {
//     document.write("First Fifteen Day Of The Month");
// } else {
//     document.write("Last days of the month ");
// }

// TASK 6
// var date = new Date();
// document.write("Current Date: " + date + "<br>");
// var milliSeconds = date.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br>");
// var minutes = milliSeconds / (1000 * 60 * 60);
// document.write("Elapsed minutes since January 1, 1970: " + minutes);

// TASK 7
// var dte = new Date();
// var hour = dte.getHours();
// if (hour <= 12) {
//     document.write("It's AM" + hour);
// } else {
//     document.write("It's PM" + hour);
// }

// TASK 8
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var lastDay = new Date(y + 1, 0, 0);
// document.write(lastDay);

// TASK 9
// var today = new Date();
// var RamzanDay = new Date("June 18, 2015");

// var sToday = today.getTime();
// var msRamzanDay = RamzanDay.getTime();

// var sDiff = sToday - msRamzanDay;
// var dDiff = sDiff / (1000 * 60 * 60 * 24);

// dDiff = Math.floor(dDiff);
// document.write(dDiff + " days have passed since 1st Ramadan, 2015");

// TASK 10
// var today = new Date();
// var RamzanDay = new Date("June 18, 2015");

// var sToday = today.getTime();
// var msRamzanDay = RamzanDay.getTime();

// var dDiff = sToday - msRamzanDay;

// dDiff = Math.floor(dDiff);
// document.write("On Reference Date " + RamzanDay + "<br>" + dDiff + " Seconds had passed since beginning of 2015");

// TASK 11
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth(),
//     h = date.getHours();
// var datee = new Date();
// var lastDay = new Date(y, m + 1, 0, h - 1);
// document.write("Current Date: " + datee + "<br>1 Hour Ago, it was " + lastDay);

// TASK 12
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var datee = new Date();
// var lastDay = new Date(y - 100, m + 1, 0);
// alert("Current Date: " + datee + "\n100 Year Back, it was " + lastDay);

// TASK 13
// var age = prompt("Enter Your Age");
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var datee = new Date();
// var lastDay = new Date(y - age, m + 1, 0);
// alert("Your Age is : " + age + "\nYour Birth Year is: " + lastDay);

// TASK 14
// var customerName = prompt("Enter Customer Name");
// var date = new Date();
// var currentMonth = date.getMonth();
// var units = +prompt("Enter Units");
// var perUnits = +prompt("Enter Per Units Charges");
// var inDueDate = Math.floor(units * perUnits);
// var latePayment = 350;
// var grossAmount = inDueDate + latePayment;

// document.write("Customer Name: " + customerName + "<br>Month: " + currentMonth + "<br>Number of Units: " + units + "<br>Charges Per Unit: " + perUnits + "<br><br>Net Amount Payable (within Due Date): " + inDueDate + "<br>Late payment surcharge: " + latePayment + "<br>Gross Amount Payable (after Due Date): " + grossAmount);



//CHAPTER 35-38
//TASK 1
// function date() {
//     document.write(new Date());
// }

// date();
// // TASK 2
// function greet(firstName, lastName) {
//     firstName = firstName.toUpperCase()
//     lastName = lastName.toUpperCase()
//     document.write("Hello " + firstName + " " + lastName + "!");
// }
// greet(prompt("Enter your first name"), prompt("Enter your last name"));

// TASK 3
// var sum;
// function add(firstNum, secondNum) {
//     document.write("First Number is : " + firstNum + "<br>")
//     document.write("Second Number is : " + secondNum + "<br>")
//     sum = firstNum + secondNum
//     document.write("Sum: " + sum);
// }
// add(+prompt("Enter first number"), +prompt("Enter second number"));

// TASK 4
// function calculator(num1, operator, num2) {
//     switch (operator) {
//         case "+":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 + num2);
//             break;
//         case "-":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 - num2);
//             break;
//         case "*":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 * num2);
//             break;
//         case "/":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 / num2);
//             break;
//         case "%":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 % num2);
//             break;
//         default:
//             return document.write("Grr an error accurred")
//         }
// }
// calculator(+prompt("Enter 1st Number"), prompt("Enter Operator: + - * / %"), +prompt("Enter 2nd Number"));

// TASK 5
// function square(arg) {
//     document.write("Input is: " + arg + "<br>")
//     document.write("Square is: " + arg * arg);
// }
// square(+prompt("Enter number for square"));

// TASK 6
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }else {
//         return num * factorial(num-1);
//     }
// }
// var num = +prompt("Enter Number for factorial");
// var answer = factorial(num);
// document.write("The factorial of " + num + " is " + answer);

// TASK 7
// function counting(num1, num2) {
// document.write("Starting number is: " + num1 + "<br>")
// document.write("Ending number is: " + num2 + "<br>")
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting(+prompt("Enter starting number"), +prompt("Enter ending number"));

// TASK 8
// function hypo(base, perpendicular) {
//     function square(v1, v2) {
//         document.write("First value is: " + v1 + "<br>");
//         var v1Square = v1*v1;
//         document.write("Sqaure root of " + v1 + " is: " + v1Square + "<br><br>");
//         document.write("Second value is: " + v2 + "<br>");
//         var v2Square = v2*v2;
//         document.write("Sqaure root of " + v2 + " is: " + v2Square + "<br><br>");
//         var sqrt = v1*v1 + v2*v2;
//         document.write("Sum of " + v1Square + " and " + v2Square + " is " + sqrt + "<br><hr>");
//     }
//     square(base, perpendicular)
//     document.write("Hypotenuse: " + Math.hypot(base, perpendicular))
// }
// hypo(+prompt("Enter Base"), +prompt("Enter Perpendicular"));

// TASK 9
// var height = 5;
// function area(width, height) {
//     document.write("Area of a rectangle is: " + width * height);
// }
// area(10, height);

// TASK 10
// function palin(word) {
//     var reverse = word.split("").reverse().join("");
//     switch (word) {
//         case reverse:
//             return document.write(word + " and " + reverse + " is same so this is a Palindrome word");
//         default:
//             return document.write(word + " and " + reverse + " is not same so this is not a Palindrome word");
//     }
// }
// palin(prompt("Enter word"));

// TASK 11
// function titleCase(string) {
//     string = string.split(" ");
//     for (var i = 0; i < string.length; i++) {
//         var firstLetter = string[i].slice(0, 1);
//         firstLetter = firstLetter.toUpperCase();
//         var otherLetters = string[i].slice(1);
//         otherLetters = otherLetters.toLowerCase();
//         var result = firstLetter + otherLetters;
//         document.write(result + " ");
//     }
//      var capitalized = string.replace("the", "The").replace("quick", "Quick").replace("brown", "Brown").replace("fox", "Fox");
//     document.write(capitalized);
// }
// titleCase("the quick brown fox" + "<br>");
// titleCase(prompt("Enter some text"));

// TASK 12
// function longestWord(word) {
//   word = word.split(" ");
//   var result = word[0];
//   for(var i = 1 ; i < word.length ; i++) {
//     if(result.length < word[i].length) {
//     result = word[i];
//     } 
//   }
//   return document.write(result);
// }
// longestWord('Web Development Tutorial');

// TASK 13
// function check(string, letter) {
//     var lett = letter;
//     string = string.toLowerCase();
//     letter = string.match(/s/g).length;
//     document.write("There are " + letter + " occurence(s) of word " + '"' + letter + '"');
// }
// check("JSResourceS.com", "s")

// TASK 14
// document.write("<h1>The Geometrizer</h1> <br>")
// function calcCircumference(radius) {
//     var circumference = 2 * 3.142 * radius
//     document.write("The circumference is " + circumference.toFixed(3) + "<br>");
//     function calcArea(radius) {
//         radius = radius * radius
//         var area = 3.142 * radius;
//         document.write("The area is " + area);
//     }
//     calcArea(20);
// }
// calcCircumference(20);

//CHAPTER 38-42

//Task 1 
// function power(a,b){
//     var result=Math.pow(a,b)
// }
//  power(3,3)

//Task 2
// function leapYear(){
//     var check = document.getElementById('val').value;
//     var result= check%4;
//     if(result==0){
//         console.log("Leap Year");
//     }
//     else{
//         console.log("Not a Leap Year");
//     } 
//     val.value = ""; 
// }

//Task 3
// var a=5;
// var b=6;
// var c=7;
// var S=(a + b + c)/2;
// var area=0;

// function validInput(){
//     if (a < 0 || b < 0 || c < 0 ||  (a + b <= c) || a + c <= b ||  b + c <= a){
//         console.log("Please Enter valid Input");
//     } 
// }   
// function areaCheck(){
//     area =S*(S-a)*(S-b)*(S-c);
//     console.log(area);
// }
// validInput();
// areaCheck();


//Task 4
// function mainFunc(marks1,marks2,marks3){

//     var averageMarks=average(marks1,marks2,marks3)
//     var per=percentage(averageMarks)

//     document.write("<h1> Average Marks: "+averageMarks+"<br>")
//     document.write("<h1> Percentage: "+per+"%"+"<br>")
 
// }
// function percentage(ave){
//     var totalMarks=300;
//     var per=(ave/totalMarks)*100;
//     var finalPer=per.toFixed(2)
//     return finalPer;
// }

// function average(marks1,marks2,marks3){
// var average=(marks1+marks2+marks3)/3;
// var finalAve=average.toFixed(2)
// return finalAve;
// }

// var marks1=+prompt("Enter marks in 1st subject");
// var marks2=+prompt("Enter marks in 2nd subject");
// var marks3=+prompt("Enter marks in 3rd subject");
// mainFunc(marks1,marks2,marks3)

//  TASK 5

// function indexCal(name,char){
//         document.write("<h1> Name: "+name+"<br>")
//     document.write("<h1> Character: "+char+"<br>")
//     for(var i=0;i<=name.length;i++){
//         if(name[i]===char){
//     document.write("<h1> Index: "+i+"<br>")
            
//         }
//     }
// }
// var name=prompt("Enter your name")
// var char=prompt("Enter letter whose index you want?")
// indexCal(name,char)

//  TASK 6

// function removeVowels(str){
//     var vowels = "aieuo";
//     var strArr = str.toLowerCase().split("");
//     var newArr = strArr.filter(function(letter){
//         if(vowels.indexOf(letter)  == -1){
            
//             return letter;
    
//         }
//     });
//     var string = "";
//     newArr.forEach(function(letter){
//         string += letter;
//     });
//     return string;
// }
// var sen=prompt("Enter string")
// var res=removeVowels(sen);
// document.write("<h1>String : "+sen+"<br>")
// document.write("<h1>String After vowels removed : "+res+"<br>")


//  TASK 7
// function occ(str) {
   
//     var count = 0;
//     let vowel = false;
//     for (const char of str.toLowerCase()) {
//       switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (vowel) {
//               count++;
//               vowel = false;
//             } else {
//               vowel = true;
//             }
//             break;
//           }
//         default:
//           vowel = false
//       }
//     }
  
//     return count
//   }
//   var str = "Pleases read this application and give me gratuity";
//   var occ=occ(str)
//   document.write(occ)


//  TASK 8

// function meters(distance){
//     var m=distance*1000;
//     document.write("<h1>Distance in meters: "+m+"<br>")
//     feet(m)

//     function feet(m){
//         var f=m* 3.28084;
    
//         document.write("<h1>Distance in feet: "+f+"<br>")
//         inches(f)

//         function inches(f){
//             var i=f*12;
//             document.write("<h1>Distance in inches: "+i+"<br>")
//             cm(i)

//             function cm(i){
//                 var c=i*2.54
//                 document.write("<h1>Distance in cm: "+c+"<br>")
            
                
//             }
//         }
        
//     }    
// }



// var distance=prompt("Enter distance in km")
// document.write("<h1>Distance in km : "+distance+"<br>")

// meters(distance)

//  TASK 9

// function pay(workingHours){
//     var over_time;
//     var over_time_pay;


//     if(workingHours>40)
//     {
//         over_time = workingHours - 40;
//         over_time_pay = over_time * 12.00;
//         document.write("<h1>Overtime Pay is "+over_time_pay.toFixed(2))
// }
// else{
//     document.write("<h1>You have to work for more than 40 hours to get over time pay ")

// }
// }
// var workingHours=prompt("Enter Employees working hours")
// pay(workingHours)


//  TASK 10

// function denominations(amount){
// var h=parseInt(amount/100);
// var f=parseInt((amount % 100) / 50);
// var t=parseInt(((amount % 100) % 50) / 10);
//         document.write("<h1> You have "+h+" hunderd notes "+f+" fifty notes "+t+" ten notes")
// }
// var amount=prompt("Enter amount of withdrawal")
// denominations(amount)



// chapter 43 to 48
//  TASK 1
// function greeting(){
//     alert("Hello world")
// }

//  TASK 2
// function imagealert(){
//     alert("Thanks for purchasing a phone from us")
// }

//  TASK 3
// function deleteRec(row){
//     var a=document.getElementsByClassName(row)[0]
//     a.remove();
// }

//  TASK 4

// function imageover(){
//     var img=document.getElementsByClassName('img')[0];
//     img.src="./mob1.jpg"
// }

// function imageout(){
//     var img=document.getElementsByClassName('img')[0];
//     img.src="./mob2.jpg"
// }

//  TASK 5
// var count=0;
// function increment(){
// count=count+1;
// var a=document.getElementsByClassName("counter")[0];
// a.innerHTML=count;
// }

// function decrement(){
//     count=count-1;
//     var a=document.getElementsByClassName("counter")[0];
//     a.innerHTML=count;
//     }

//  TASK 6

// function signup(){
//     var fname=document.getElementsByClassName('formdata')[0].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var fn=document.createTextNode("First name : "+fname+"");
//     node.appendChild(fn)
//     formDisplay.appendChild(node);
  

//     var lname=document.getElementsByClassName('formdata')[1].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")

//     var ln=document.createTextNode("Last name : "+lname);
//     node.appendChild(ln)
//     formDisplay.appendChild(node);

//     var num=document.getElementsByClassName('formdata')[2].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var nu=document.createTextNode("Number : "+num+"");
//     node.appendChild(nu)
//     formDisplay.appendChild(node);
  

//     var email=document.getElementsByClassName('formdata')[3].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")

//     var en=document.createTextNode("Email : "+email);
//     node.appendChild(en)
//     formDisplay.appendChild(node);

//     var password=document.getElementsByClassName('formdata')[4].value;
//     var formDisplay=document.getElementsByClassName("formdatadisplay")[0]
//     var node=document.createElement("H2")
//     var pwd=document.createTextNode("Password : "+password+"");
//     node.appendChild(pwd)
//     formDisplay.appendChild(node);

// }

//  TASK 6
// function myFunc(){
//     var more=document.getElementById("more");
//     more.style.display='block'
//     var dots=document.getElementById("dots");
//     dots.style.display="none";
// }

//  TASK 7

// function submit(){
//     var fname=document.getElementsByClassName('formdata')[0].value;
//     var lname=document.getElementsByClassName('formdata')[1].value;
//     var num=document.getElementsByClassName('formdata')[2].value;
//     var email=document.getElementsByClassName('formdata')[3].value;
//     var password=document.getElementsByClassName('formdata')[4].value;

//    var table=document.getElementsByClassName('table')[0]
//     var node=document.createElement("tr")

//     var fn=document.createTextNode(fname);
//     var ln=document.createTextNode(lname);
//     var nu=document.createTextNode(num);
//     var en=document.createTextNode(email);
//     var pwd=document.createTextNode(password);


//     var tnode=document.createElement("td")
//     var a=tnode.appendChild(fn)
//     var row1=node.appendChild(a)
//     table.appendChild(row1)

    
//     var tnode1=document.createElement("td")
//     var b=tnode1.appendChild(ln)
//     var row2=node.appendChild(b)
//     table.appendChild(row2)

//     var tnode2=document.createElement("td")
//     var c=tnode2.appendChild(nu)
//     var row3=node.appendChild(c)
//     table.appendChild(row3)

//     var tnode3=document.createElement("td")
//     var d=tnode3.appendChild(en)
//     var row4=node.appendChild(d)
//     table.appendChild(row4)

//     var tnode4=document.createElement("td")
//     var e=tnode4.appendChild(pwd)
//     var row5 =node.appendChild(e)
//     table.appendChild(row5)

// }


// chapter  58-67
//TASK 1-1
// var id=document.getElementById("main-content");

// TASK 1-2
// var a=document.getElementById("main-content");
// // childs=id.children;
// console.log(a);

// TASK 1-3
// var a=document.getElementsByClassName('render')[0];
// var b=a.innerHTML;
// console.log(b)



