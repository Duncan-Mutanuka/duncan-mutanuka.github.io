
const togglebutton = document.getElementById('toggleSearchbar');
const searchBar = document.getElementById('searchBar');
const hideSearchbar = document.getElementById('hideSearchbar');

togglebutton.addEventListener('click', function (event) {
  searchBar.style.display = 'flex';
  searchBar.style.opacity = '1';
  searchBar.style.zIndex = '2000';
  if(window.innerWidth >= 1024) {
    searchBar.style.top = '75px';
  } else {
    searchBar.style.top = '15px';
  }
});

hideSearchbar.addEventListener('click', function (event) {
  searchBar.style.top = '6px';
  searchBar.style.opacity = '0';
  searchBar.style.zIndex = '-10';
  searchBar.style.transition = '0.2s';
});


document.addEventListener('DOMContentLoaded', function () {
  let sidebar = document.getElementById('sideBar');
  let mainContent = document.getElementById('sideBar');

  let startX;

  document.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
  });

  document.addEventListener('touchmove', function (e) {
      let touch = e.touches[0];
      let change = touch.clientX - startX;

      if (change < -50) { // Swipe right
          sidebar.classList.add('active');

      } else if (change > 50) { // Swipe left
          sidebar.classList.remove('active');
      }
  });
});


const showSidebar = document.getElementById('showSideBar');
const sideBar = document.getElementById('sideBar');

document.addEventListener('click', function (event) {
  if (!sideBar.contains(event.target) && !showSidebar.contains(event.target)) {
      sideBar.classList.remove('active');
      sideBar.classList.remove('shifted');
  }
});

showSidebar.addEventListener('click', function (event) {
  sideBar.classList.toggle('active');
  event.stopPropagation();
});

sideBar.addEventListener('click', function (event) {
  event.stopPropagation();
});
