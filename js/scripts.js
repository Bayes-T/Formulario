function changeOptions(selectEl) {
    let selectedValue = selectEl.options[selectEl.selectedIndex].value;
    let subForms = document.getElementsByClassName('className')
    for (let i = 0; i < subForms.length; i += 1) {
      if (selectedValue === subForms[i].name) {
        subForms[i].setAttribute('style', 'display:block')
      } else {
        subForms[i].setAttribute('style', 'display:none') 
      }
    }
  }

  var today = new Date();


  var hour = today.getHours();
  var hournow = hour.toLocaleString();
  var minute = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  var minutenow = minute.toLocaleString();

  var day = today.getDay();
  var daynow = day.toLocaleString();

  let monthnow = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());

  var year = today.getFullYear();
  var yearnow = year.toLocaleString();

  
  document.getElementById("hour").innerHTML = hournow + ':' + minutenow;
  document.getElementById("day").innerHTML = daynow;
  document.getElementById("month").innerHTML = monthnow;
  document.getElementById("year").innerHTML = yearnow;




  var today = new Date();
var date = today.toISOString().slice(0,10);
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var dateTime = date + ' ' + time;

document.getElementById('currentDateTime').value = dateTime;