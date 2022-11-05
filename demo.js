const day1=document.getElementById('days');
const hour1=document.getElementById('hours');
const minutes1=document.getElementById('minutes');
const second1=document.getElementById('second');

const newyear = '1 jan 2023';


setInterval  (countdown , 1000 );

function countdown()

{
    const NewYearDate = new Date(newyear);

    const CurrentDate = new Date();

    const TotalSecond = (NewYearDate-CurrentDate) / 1000 ;

    const days = Math.floor(TotalSecond / 3600 / 24);

    const hours = Math.floor(TotalSecond / 3600) % 24;

    const minutes = Math.floor(TotalSecond / 60) % 60;

    const second = Math.floor(TotalSecond) % 60;


    day1.innerHTML=days; 

    hour1.innerHTML=hours; 

    minutes1.innerHTML=minutes;

    second1.innerHTML=second; 
}
countdown();

