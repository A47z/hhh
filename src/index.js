var el = document.querySelector('.name');
var speed = 2;
var direction = { x: 1, y: 1 };

function move() {
  var rect = el.getBoundingClientRect();
  var maxX = window.innerWidth - rect.width;
  var maxY = window.innerHeight - rect.height;

  if (rect.left + direction.x * speed < 0 || rect.left + direction.x * speed > maxX) {
    direction.x = -direction.x;
  }
  if (rect.top + direction.y * speed < 0 || rect.top + direction.y * speed > maxY) {
    direction.y = -direction.y;
  }

  el.style.left = (rect.left + direction.x * speed) + 'px';
  el.style.top = (rect.top + direction.y * speed) + 'px';

  requestAnimationFrame(move);
}

move();