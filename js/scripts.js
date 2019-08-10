
//Navigation Menu
const header = document.querySelector('header');
const bell = document.querySelector('.bell');
const menu  = document.querySelector('nav ul');
const close  = document.querySelector('.alert span:nth-child(2)');
const alert = document.querySelector('.alert');
const notice = document.querySelector('.notice div');



if(document.width < 769){
  $(menu).hide();
} else {
    $(menu).show();
}


$('.menu-btn').click( function(){
	
	$(menu).slideToggle();
	
});


$(close).click(function(){
 
  const alert = document.querySelector('.alert');
  $(alert).hide();

});

$(notice).hide();
$(bell).click(function (){

  $(notice).slideToggle(); 
});


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
      responsive: true,
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
    let messenger =  document.getElementById('messenger');
    let enteredList = document.getElementById('enteredList');
    let searchUser = document.getElementById('search-user');
    let message = document.getElementById('message');
    const submit = document.getElementById('submit');

    let emailNotice = document.getElementById('email-notice');
    let publicProfile = document.getElementById('public-profile');
    let timezoneSet = document.getElementById('timeZone');
    let settings  = document.getElementById('settings');
    const saveSettings = document.getElementById('save-settings');
    const reset = document.getElementById('reset');


    //Initialize display list
  
    messenger.addEventListener('submit', function(e) {
      e.preventDefault();
   
    });

    settings.addEventListener('submit', function(e) {
      e.preventDefault();
      let emailNotice = document.getElementById('email-notice');

      if(emailNotice.checked){
        console.log("It's true");
      } else {
        console.log("It's false");
      }

   
    });

  }
}// end of window.onload()

function getResults(){

  var lclTimezoneSet = localStorage.getItem('timezoneSet');


}






function submitted() {
  alert('Form is submitted');
}

traffic();
dailyTraffic();
dailyTraffic2();
monthlyTraffic();
mobileUsers();
selectChart();