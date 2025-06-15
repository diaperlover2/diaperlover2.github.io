document.addEventListener('DOMContentLoaded', function() {
  fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('menu-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading sidebar:', error));

  function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
  }
});
