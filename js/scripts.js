
//Navigation Menu
const header = document.querySelector('header');
const bell = document.querySelector('.bell');
const menu  = document.querySelector('nav ul');
const close  = document.querySelector('.alert span:nth-child(2)');
  const alert = document.querySelector('.alert');


$(menu).hide();
$('.menu-btn').click( function(){
	
	$(menu).slideToggle();
	
});


$(close).click(function(){
 
  const alert = document.querySelector('.alert');
  $(alert).hide();

});

bell.addEventListener('click', () => {

  alert.style.display ='block';

});


function traffic(){
	var ctx = document.getElementById('trafficChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'put it here', // => here
            tension: 0,
            radius : 6, 
          	pointBackgroundColor: 'rgba(0, 0, 0, 0)',
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
    position: 'right',
    data: {
        labels: ['Phone', 'Tablets', 'Desktop'],
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
        }]
    },

    options: {
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

traffic();
dailyTraffic();
mobileUsers();