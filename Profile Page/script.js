function toggleVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    const status = document.getElementById(`${sectionId}-status`);
    
    if (section.style.display === "none") {
      section.style.display = "block";
      status.innerText = "Public";
    } else {
      section.style.display = "none";
      status.innerText = "Private";
    }
  }
  