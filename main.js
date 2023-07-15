let date = new Date()
let day = date.getDate()
let month = date.getMonth();
let year = date.getFullYear();


let m = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31];

let resultDay = 0;
let resultMonth = 0;
let resultYear = 0;
let input = document.querySelectorAll('input');

input[0].addEventListener('change'	, ()=>{
	
userAge = input[0].value.split('-')

let userDay = parseInt(userAge[2]);
let userMonth=parseInt(userAge[1]);
let userYear=parseInt(userAge[0]);

if(userYear >=year && userMonth >month+1 &&userDay >day ||userYear >=year && userMonth >month+1 ||  userYear >=year && userMonth >=month+1 &&userDay >day){
	alert('Invalid Number! Try Again..')
	input[1].value = 'Invalid!⚠️';
	input[1].style.color='red'
}else{
if(userDay<day){
resultDay = day -userDay;
resultMonth = (month+1)-userMonth;}
resultYear = year-userYear;

if(userDay > day){
resultDay = userDay-day;
resultDay = m[month]-resultDay
month--;
}


if(userMonth > month+1){
	resultMonth = (month+1-userMonth)+12;
	resultYear--;
}


input[1].value = `Day: ${resultDay}   ||    Month: ${resultMonth}   ||   Year: ${resultYear}`
}
});