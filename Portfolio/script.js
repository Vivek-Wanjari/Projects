var typed = new Typed("#element", {
  strings: ["Web Developer", "Web Designer"],
  typeSpeed: 150,
});
function playVideo(videoId) {
  var video = document.getElementById(videoId);
  video.play();
  video.style.opacity = 1; // Make video fully visible
}

function pauseVideo(videoId) {
  var video = document.getElementById(videoId);
  video.pause();
  video.style.opacity = 0; // Hide video when cursor leaves the project
}

document
  .getElementById("frontendSkill")
  .addEventListener("mouseenter", function () {
    expandSkillSection(this);
  });

document
  .getElementById("frontendSkill")
  .addEventListener("mouseleave", function () {
    collapseSkillSection(this);
  });

document
  .getElementById("backendSkill")
  .addEventListener("mouseenter", function () {
    expandSkillSection(this);
  });

document
  .getElementById("backendSkill")
  .addEventListener("mouseleave", function () {
    collapseSkillSection(this);
  });

document
  .getElementById("toolsSkill")
  .addEventListener("mouseenter", function () {
    expandSkillSection(this);
  });

document
  .getElementById("toolsSkill")
  .addEventListener("mouseleave", function () {
    collapseSkillSection(this);
  });

function expandSkillSection(skill) {
  skill.style.width = "40vw";
  skill.style.height = "40vh";
  skill.querySelector("h5"); // Show the h3 element
  skill.querySelector(".skill-list").style.display = "block";
}

function collapseSkillSection(skill) {
  skill.style.width = "auto";
  skill.style.height = "auto";
  skill.querySelector("h5"); // Hide the h3 element
  skill.querySelector(".skill-list").style.display = "none";
}
