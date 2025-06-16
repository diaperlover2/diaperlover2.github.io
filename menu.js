document.addEventListener('DOMContentLoaded', function() {
  // Load sidebar.html into menu-placeholder
  fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('menu-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading sidebar:', error));

  // Toggle sidebar function
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar && overlay) {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    }
  }

  // Add click event to menu button if exists
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleSidebar);
  }
});
