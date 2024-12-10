

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

        if (change < -50) { // Swipe left
            sidebar.classList.add('active');

        } else if (change > 20) { // Swipe right
            sidebar.classList.remove('active');

        }
    });
});

