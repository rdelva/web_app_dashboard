
//Navigation Menu
const header = document.querySelector('header');
const bell = document.querySelector('.bell');
const badge = document.querySelector('.badge');
const menu  = document.querySelector('nav ul');
const close  = document.querySelector('.alert span:nth-child(2)');
const alert = document.querySelector('.alert');
const notice = document.querySelector('#widget-notice div');





$(close).click(function(){
 
  const alert = document.querySelector('.alert');
  $(alert).hide();

});

$(notice).hide();
$(bell).click(function (){
  $(badge).hide();
  $(notice).slideToggle(); 
});



function timeNav(){
  //default link is on Weekly
  weekly = document.querySelector('#Weekly'); 
  weekly.classList.add('selected');

  timeMenu = document.querySelector('.time ul');  
  timeMenuList = timeMenu.getElementsByTagName('li');
  
  timeMenu.addEventListener('click', function(e) {
    //removes the current link outside of the loop selects the new link you've chosen
    if(e.target.tagName == 'LI'){
      for(i=0; i <= timeMenuList.length; i++){
        if(document.getElementsByTagName('LI')[i].className == 'selected'){
          timeMenuList[i].classList.remove('selected');          
        }
      }
      e.target.classList.add('selected');
    }
  });

}// end of timeNav()

function monthlyTraffic(){

    var ctx = document.getElementById('monthlyChart');


var myChart = new Chart(ctx, {
    type: 'pie',
      data: {
           datasets: [{
                    
            backgroundColor : [
              'rgba(129, 201, 143, 1)',
              'rgba(116, 177, 191, 1)',
               'rgba(116, 119, 191, 1)',
            ],             
            data: [15, 10, 50, 25],
            borderColor: [
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
            ],
            borderWidth: 1
        }],
        labels: ['Cars', 'Motorcycles', 'Bycicles', 'Buses'],  
    },

    options: {

     responsive:true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      legend: {
          position: 'bottom',
        },

        scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                 ticks: {
                  display: false

                }
            }],
            yAxes: [{
               gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  display: false

                }
            }]
        }
    }
});

}


function dailyTraffic2() {

// javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = svgWidth / dataset.length;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("class", "bar")
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - d - 2;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "#A64C38");


}


function traffic(){
	var ctx = document.getElementById('hourlyChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'put it here', // => here
            tension: 0,
            radius : 6, 
          	pointBackgroundColor: 'rgba(255, 255, 255, 1 )',
            backgroundColor : 'rgba(116, 119, 191, .2)',                         
            data: [800, 1300, 1000, 1500, 1900, 1500, 1800, 1300, 1800, 1300, 1700, 2400],
            borderColor: [
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
            ],
            borderWidth: 1// => hides the border in the label
        }]
    },

    options: {
      responsive:true,
      maintainAspectRatio: false,
      aspectRatio: 2,
            legend: {
            display: false
          },

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}


function dailyTraffic (){


	var ctx = document.getElementById('dailyTraffic');
	var myChart = new Chart(ctx, {
    type: 'bar',
     display: false,
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
                   
            backgroundColor : 'rgba(116, 119, 191, 1)',

            data: [65, 100, 165, 135, 235, 200, 100],
            borderColor: [
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
            ],
            borderWidth: 1
        }]
    },

    options: {
      responsive:true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      legend: {
          display: false
      },
      scales: {
            yAxes: [{
                  ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}

function mobileUsers() {
	var ctx = document.getElementById('mobileChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
      data: {
           datasets: [{
                   	
            backgroundColor : [
           		'rgba(129, 201, 143, 1)',
            	'rgba(116, 177, 191, 1)',
            	 'rgba(116, 119, 191, 1)',
            ],             
            data: [15, 10, 75],
            borderColor: [
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
               'rgba(116, 119, 191, 1)',
            ],
            borderWidth: 1
        }],
        labels: ['Phone', 'Tablets', 'Desktop'],  
    },

    options: {

      responsive:true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      legend: {
          position: 'right',
        },

        scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                 ticks: {
                  display: false

                }
            }],
            yAxes: [{
               gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  display: false

                }
            }]
        }
    }
});
}




function selectChart(){
    const time = document.querySelector('.time ul');
        const hourlyChart = document.getElementById('hourlyChart');
        const monthlyChart = document.getElementById('monthlyChart');
        const barchart = document.getElementById('bar-chart');
        const weeklyChart = document.getElementById('weeklyChart');

  


    const canvas = document.createElement('canvas');
    
     hourlyChart.style.display = 'block';
               dailyChart.style.display = 'none';
               weeklyChart.style.display = 'none';
               monthlyChart.style.display = 'none';



    time.addEventListener('click', (e) => {
          const cdisplay = document.getElementById('chart_display');

      if(e.target.tagName == 'LI') {

          if(e.target.id == 'Hourly' ){             
               hourlyChart.style.display = 'block';
               dailyChart.style.display = 'none';
               weeklyChart.style.display = 'none';
               monthlyChart.style.display = 'none';

             

          } else if(e.target.id == 'Daily'){
              hourlyChart.style.display = 'none';
              dailyChart.style.display = 'block';
              weeklyChart.style.display = 'none';
              monthlyChart.style.display = 'none';

          } else if(e.target.id == 'Weekly'){

               hourlyChart.style.display = 'none';
               dailyChart.style.display = 'none';
               weeklyChart.style.display = 'block';
               monthlyChart.style.display = 'none';



          } else if(e.target.id == 'Monthly') {
               hourlyChart.style.display = 'none';
               dailyChart.style.display = 'none';
               weeklyChart.style.display = 'none';
               monthlyChart.style.display = 'block';
          }
      }

    }); //end of click event listener


}

function usersettings(){
      /*let emailNotice = document.getElementById('email-notice');
      console.log(emailNotice.checked);
      let publicProfile = document.getElementById('public-profile');
      console.log(emailNotice.checked);
      let timezone = document.getElementById('timezone');
      console.log(timezone);*/
}




function supportsLocalStorage() {
  'use strict';
  try {
    return 'localStorage' in window && window['localStorage'] !== null; 
  }
  catch(e) {
    return false;
  }
}



window.onload = function (){
  if(supportsLocalStorage){
  
    const settings  = document.getElementById('settings');
    const emailNotice = document.getElementById('email-notice');
    const publicSetting = document.getElementById('public-profile');
    const timezone = document.getElementById('timezone');
    
   
    const save = document.getElementById('save');
    const reset = document.getElementById('reset');

    settings.addEventListener('submit', function(e) {
      e.preventDefault();
      let  emailSetting = emailNotice.checked;
      let profileSetting = publicSetting.checked;
      let timeSetup = timezone.value;

      //Store the values in Local Storage
      localStorage.setItem('email', emailSetting);
      localStorage.setItem('profile', profileSetting);
      localStorage.setItem('timezone', timeSetup);
    
      setResults();
    });

  }
}// end of window.onload()




function setResults(){


  let email = document.getElementById('email-notice');
  let publicSetting = document.getElementById('public-profile');
  let timezone = document.getElementById('timezone');
    
     email = localStorage.getItem('email');
     publicSetting.checked = localStorage.getItem('profile');
     timezone.value = localStorage.getItem('timezone');
     

}


//Checks if Username and Message was entered.
function messageUsers(){

 const messenger = document.getElementById('messenger');

  messenger.addEventListener('submit', function(e){
    e.preventDefault();
    const user = document.getElementById('search-user');
    const message = document.getElementById('message');
    const sendMessage = document.getElementById('submit');

  if(user.value === '' && message.value === ''){
    window.alert('Please fill out the user and message fields before sending.');
  } else if(user.value === ""){
    window.alert('Please fill out user field before sending.');
  } else if(message.value === ""){
    window.alert('Please fill out message field before sending.');
  } else {
    window.alert(`Message sucessfully sent to: ${user.value}`);
  }


});
  
 
}// end of messageUsers


/*
getResults();*/
setResults();
usersettings();
messageUsers();
timeNav();
traffic();
dailyTraffic();
dailyTraffic2();
monthlyTraffic();
mobileUsers();
selectChart();