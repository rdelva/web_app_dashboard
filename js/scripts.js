
//Navigation Menu

const bell = document.querySelector('.bell');
const badge = document.querySelector('.badge');
const closeButton  = document.querySelector('.alert span:nth-child(2)');

const notice = document.querySelector('#widget-notice div');





$(closeButton).click(function(){
 
  const alertMessage = document.querySelector('.alert');
  $(alertMessage).hide();

});

$(notice).hide();
$(bell).click(function (){
  $(badge).hide();
  $(notice).slideToggle(); 
});




const timeNav = () => {
  //default link is on Weekly
  const weekly = document.querySelector('#Weekly'); 
  weekly.classList.add('selected');

  const timeMenu = document.querySelector('.time ul');  
  const timeMenuList = timeMenu.getElementsByTagName('li');
  
  timeMenu.addEventListener('click', function(e) {
    //removes the current link outside of the loop selects the new link you've chosen
    if(e.target.tagName == 'LI'){
      for(let i = 0; i <= timeMenuList.length; i++){
        if(document.getElementsByTagName('LI')[i].className == 'selected'){
          timeMenuList[i].classList.remove('selected');          
        }
      }
      e.target.classList.add('selected');
    }
  });

}// end of timeNav


const hourlyTraffic = () => {

let ctx = document.getElementById('hourlyChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: '# of Visitors (Millions)',
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
               
               
         
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',    
                      
         

            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive:true,
      maintainAspectRatio: true,
      aspectRatio: 2,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

}// end of hourlyTraffic



const monthlyTraffic = () => {

    let  ctx = document.getElementById('monthlyChart');


let myChart = new Chart(ctx, {
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



const dailyTraffic2 = () => {

// javascript
    var ctx = document.getElementById('dailyChart');


var myChart = new Chart(ctx, {
    type: 'polarArea',
      data: {
           datasets: [{
                    
            backgroundColor : [
             'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],             
            data: [15, 10, 50, 25,20,30,1,60],
            borderColor: [
              'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }],
        labels: ['North America', 'South America', 'Asia', 'Africa', 'Australia','Antartica', 'Europe'],  
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


const traffic = () => {
	var ctx = document.getElementById('weeklyChart');
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



const dailyTraffic = () => {


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


const mobileUsers = () => {
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





const selectChart = () => {

    const time = document.querySelector('.time ul');
        const hourlyChart = document.getElementById('hourlyChart');
        const monthlyChart = document.getElementById('monthlyChart');
        const dailyChart = document.getElementById('dailyChart');
        const weeklyChart = document.getElementById('weeklyChart');

  


   
    
     hourlyChart.style.display = 'none';
               dailyChart.style.display = 'none';
               weeklyChart.style.display = 'block';
               monthlyChart.style.display = 'none';



    time.addEventListener('click', (e) => {

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






const supportsLocalStorage = () => {
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
 
  let email = document.getElementById('email-notice');
  let publicSetting = document.getElementById('public-profile');
  let timezone = document.getElementById('timezone');

  




     let emailSetting = localStorage.getItem('email');
     let profileSetting = localStorage.getItem('profile');
     let tzSetting = localStorage.getItem('timezone');
     
     if( emailSetting == null){
      email.checked =  true;      
     } else if ( emailSetting == 'true'){
       email.checked =  true;       
     } else {
        email.checked = false;
     }


     if( profileSetting == null){
      publicSetting.checked =  true;      
     } else if ( profileSetting == 'true'){
       publicSetting.checked =  true;       
     } else {
        publicSetting.checked = false;
     }
     
     
     if(tzSetting == null){
       timezone.selectedIndex = 0;
          
     } else {
         
          timezone.value = localStorage.timezone;
     }
    
       


  }
}// end of window onload



const defaultSettings = () => {
    let email = document.getElementById('email-notice');
  let publicSetting = document.getElementById('public-profile');
   email.checked = true;
    publicSetting.checked = true;
}


//Select the save button amd pushes value into local storage

  const saveSettings = () => {
    
    const save = document.getElementById('save');


    save.addEventListener('click', function(event){

      event.preventDefault();
    let email = document.getElementById('email-notice');
    let publicSetting = document.getElementById('public-profile');
    let timezone = document.getElementById('timezone');

     localStorage.setItem('email', email.checked);
     localStorage.setItem('profile', publicSetting.checked);
      localStorage.setItem('timezone', timezone.value);

      window.alert('Settings saved sucessfully');


    });

}// end saveSettings


//Select the cancel removes value into local storage


  const removeSettings = () => {
    
    const cancel = document.getElementById('cancel');


    cancel.addEventListener('click', function(event){

      event.preventDefault();
    let email = document.getElementById('email-notice');
    let publicSetting = document.getElementById('public-profile');
    let timezone = document.getElementById('timezone');

     localStorage.removeItem('email');
     localStorage.removeItem('profile');
      localStorage.removeItem('timezone');

      window.alert('Canceled Settings');


    });

}// end saveSettings

     






//Checks if Username and Message was entered

const messageUsers = () => {


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




timeNav();
traffic();
hourlyTraffic();
dailyTraffic();
dailyTraffic2();
monthlyTraffic();
mobileUsers();
selectChart();
saveSettings();
removeSettings();
messageUsers();