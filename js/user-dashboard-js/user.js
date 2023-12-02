
document.addEventListener("DOMContentLoaded", function() {
    var userInfo = document.querySelector(".user-info");
    userInfo.addEventListener("click", toggleDropdown);

    function toggleDropdown() {
        var dropdownMenu = userInfo.querySelector(".dropdown-content");

        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    }

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.closest('.user-info')) {
            var dropdowns = document.querySelectorAll(".dropdown-content");
            dropdowns.forEach(function(dropdownMenu) {
                dropdownMenu.style.display = "none";
            });
        }
    });
});
