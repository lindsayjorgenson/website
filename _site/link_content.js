document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('#links a');
  const contentItems = document.querySelectorAll('.content-item');

  // Set the initial active link and content
  const initialActiveLink = document.querySelector('#links a[data-content="content1"]');
  initialActiveLink.classList.add('active');
  document.getElementById('content1').style.display = 'block';

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove 'active' class from all links
      links.forEach(l => l.classList.remove('active'));

      // Add 'active' class to the clicked link
      this.classList.add('active');

      // Hide all content items
      contentItems.forEach(item => item.style.display = 'none');

      // Show the selected content item
      const contentId = this.getAttribute('data-content');
      document.getElementById(contentId).style.display = 'block';
    });
  });
});



    function toggleMenu() {
        var links = document.getElementById('links');
        if (links.style.display === 'flex') {
            links.style.display = 'none';
        } else {
            links.style.display = 'flex';
        }
    }
