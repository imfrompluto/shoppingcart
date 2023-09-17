let value = 0;

document.getElementById('plus').addEventListener('click', function() {
  value++;
  document.getElementById('value').innerText = value;
});
document.getElementById('minus').addEventListener('click', function() {
  if (value > 0) {
    value--;
    document.getElementById('value').innerText = value;
  }
});

