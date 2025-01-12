document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".stars i");
    const submitButton = document.querySelector(".submit");
    const reviewBox = document.querySelector(".review-box");
    let rating = 0;
  
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        rating = index + 1;
        updateStars();
      });
  
      star.addEventListener("mouseover", () => {
        highlightStars(index);
      });
  
      star.addEventListener("mouseout", () => {
        highlightStars(rating - 1);
      });
    });
  
    submitButton.addEventListener("click", () => {
      reviewBox.innerHTML = `
        <div class="alert">
          <h2>Congratulations🥳 You have done it!</h2>
        </div>
      `;
    });
  
    function updateStars() {
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add("active");
        } else {
          star.classList.remove("active");
        }
      });
    }
  
    function highlightStars(highlightIndex) {
      stars.forEach((star, index) => {
        if (index <= highlightIndex) {
          star.classList.add("active");
        } else {
          star.classList.remove("active");
        }
      });
    }
  });
  