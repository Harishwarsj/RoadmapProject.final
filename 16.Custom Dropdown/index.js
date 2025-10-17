const dropdown = document.getElementById("customDropdown");
const toggle = document.getElementById("dropdownToggle");
const menu = document.getElementById("dropdownMenu");
const items = menu.querySelectorAll(".dropdown-item");

toggle.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        // Remove "selected" class from all items
        items.forEach(i => i.classList.remove("selected"));

        // Add "selected" to clicked item
        item.classList.add("selected");

        // Set the selected item's text as the toggle text
        toggle.textContent = item.textContent;

        // Close the dropdown
        dropdown.classList.remove("open");
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
    }
});