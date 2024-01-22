document.querySelector('.grid.top-left').addEventListener('mouseover', function() {
  document.querySelector('.tarjeta').style.transform = 'rotateY(-15deg) rotateX(15deg)';
});
document.querySelector('.grid.top-right').addEventListener('mouseover', function() {
  document.querySelector('.tarjeta').style.transform = 'rotateY(15deg) rotateX(15deg)';
});
document.querySelector('.grid.bottom-left').addEventListener('mouseover', function() {
  document.querySelector('.tarjeta').style.transform = 'rotateY(-15deg) rotateX(-15deg)';
});
document.querySelector('.grid.bottom-right').addEventListener('mouseover', function() {
  document.querySelector('.tarjeta').style.transform = 'rotateY(15deg) rotateX(-15deg)';
});

document.querySelector('.grid.top-left').addEventListener('mouseout', function() {
  document.querySelector('.tarjeta').style.transform = 'none';
});
document.querySelector('.grid.top-right').addEventListener('mouseout', function() {
  document.querySelector('.tarjeta').style.transform = 'none';
});
document.querySelector('.grid.bottom-left').addEventListener('mouseout', function() {
  document.querySelector('.tarjeta').style.transform = 'none';
});
document.querySelector('.grid.bottom-right').addEventListener('mouseout', function() {
  document.querySelector('.tarjeta').style.transform = 'none';
});