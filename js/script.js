var stats = {
  time: 30,
  distance: 60,
  flight: 'In flight'
};

var progress = {
  time: 100 - stats.time,
  distance: 100 - stats.distance
};

document.getElementById('time').innerHTML = stats.time;
document.getElementById('distance').innerHTML = stats.distance;
document.getElementById('flight').innerHTML = stats.flight;
document.querySelector('#progress-time').style.width = progress.time + '%';
document.querySelector('#progress-distance').style.width =
  progress.distance + '%';

function inventoryToggle() {
  var list = document.querySelector('#inventory-list');
  if (list.style.display === 'none') {
    list.style.display = 'block';
    document.getElementById('toggle-text').innerHTML = 'Hide';
  } else {
    list.style.display = 'none';
    document.getElementById('toggle-text').innerHTML = 'Show';
  }
}

window.setInterval(function() {
  if (stats.time < 0.9) {
    stats.time = 0;
    stats.distance = 0;
    stats.flight = 'Landed';
    document.getElementById('flight').innerHTML = stats.flight;
    document.querySelector('#progress-time').style.background = 'greenyellow';
    document.querySelector('#progress-distance').style.background =
      'greenyellow';
  } else {
    stats.time = stats.time - 1;
    stats.distance = stats.distance - 2;

    progress.time = progress.time + 1;
    progress.distance = progress.distance + 2;

    document.getElementById('distance').innerHTML = stats.distance;
    document.getElementById('time').innerHTML = stats.time;

    document.querySelector('#progress-time').style.width = progress.time + '%';
    document.querySelector('#progress-distance').style.width =
      progress.distance + '%';
  }
}, 1000);

var quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var apples = quantity[Math.floor(Math.random() * quantity.length)];
document.getElementById('apples').innerHTML = apples + ' pieces left';

var mandarins = quantity[Math.floor(Math.random() * quantity.length)];
document.getElementById('mandarins').innerHTML = mandarins + ' pieces left';

var bananas = quantity[Math.floor(Math.random() * quantity.length)];
document.getElementById('bananas').innerHTML = bananas + ' pieces left';

var raspberries = quantity[Math.floor(Math.random() * quantity.length)];
document.getElementById('raspberries').innerHTML = raspberries + ' pieces left';

var mangos = quantity[Math.floor(Math.random() * quantity.length)];
document.getElementById('mangos').innerHTML = mangos + ' pieces left';
