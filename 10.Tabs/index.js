

// Select all tabs and tab content
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");
    console.log(tabs);
tabs.forEach(tab => {
    console.log("in");
    tab.addEventListener("click", () => {
    
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Add active class to clicked tab
    tab.classList.add("active");

    // Show content with matching id
    const target = document.getElementById(tab.dataset.tab);
    target.classList.add("active");
  });
});
