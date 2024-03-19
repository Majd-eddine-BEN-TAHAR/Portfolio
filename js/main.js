var string = `I'm a passionate and self-taught Full Stack JS Developer with experience in ReactJS, NodeJS, and Express. I'm also proficient in PHP and Symfony. As a dedicated learner, I'm constantly looking for new challenges to improve my skills and knowledge.
\n Always striving for excellence, I aim to apply my abilities and knowledge to achieve company goals and positively contribute to an organization's future growth. If you're looking for a talented Full Stack Web Developer with a passion for web development, please don't hesitate to get in touch!`;
var str = string.split("");
var el = document.getElementById("about-p");
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  var running = setTimeout(animate, 20);
})();

document.querySelector(".menu-toggler").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector(".top-nav").classList.toggle("open");
});

document.querySelectorAll(".top-nav .nav-link").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelector(".menu-toggler").classList.remove("open");
    document.querySelector(".top-nav").classList.remove("open");
  });
});

document.querySelectorAll('nav a[href*="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.getElementById("up").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});
function toggleTooltip() {
  var tooltip = document.getElementById("emailTooltip");
  tooltip.style.display = tooltip.style.display === "none" ? "flex" : "none";
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      showToast("Email copied to clipboard!");
    },
    function (err) {
      console.error("Error copying to clipboard", err);
    }
  );
}

function showToast(message, type = "success") {
  var toast = document.createElement("div");
  toast.classList.add("toast", `toast-${type}`);
  toast.innerHTML = `<i class="fas fa-${
    type === "success" ? "check-circle" : "times-circle"
  } toast-icon"></i>${message}`;
  document.getElementById("toastContainer").appendChild(toast);

  // Apply slide-in animation
  toast.style.animation = "slideIn 0.5s ease forwards";

  setTimeout(function () {
    // Apply fade-out animation
    toast.style.animation = "fadeOut 0.5s ease forwards";
    setTimeout(function () {
      toast.remove();
    }, 500); // Match the duration of the fade-out animation
  }, 3000); // Display time
}
