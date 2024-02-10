window.onload = function() {

  let launcher = document.querySelector('.header__item__launcher');
  launcher.style.display = 'none';

  let square = document.querySelector('.header__item__start__square');

  square.addEventListener('click', function(event) {
    if (launcher.style.display === 'none') {
      launcher.style.display = 'block';
    } else {
      launcher.style.display = 'none';
    }
    event.stopPropagation(); // Evita que el evento se propague a document
  });

  square.addEventListener('focus', function() {
    launcher.style.display = 'block';
  });

  document.addEventListener('click', function() {
    launcher.style.display = 'none';
  });

  console.log(launcher);
}
