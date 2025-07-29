// Get all tabs and content
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

// Function to show content and highlight active tab
function showContent(index) {
    // Hide all contents
    contents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show the selected content
    contents[index].classList.add('active');
    tabs[index].classList.add('active');
}

// Add click event listeners to each tab
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showContent(index));
});

// Initially show the first tab's content
showContent(0);
