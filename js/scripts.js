
//Navigation Menu
const menu  = document.querySelector("nav ul");
$(menu).hide();
$(".menu-btn").click( function(){
	
	$(menu).slideToggle();
	
});


var ctx = document.getElementById('trafficChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            tension: 0,
            radius : 6,           
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

            borderWidth: 1
        }]
    },

    options: {


        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


	