// Zadanie 1.
const sectionArticle = document.querySelector(".jobs__grid");
/*const jobOffer = document.createElement("article");
jobOffer.classList.add = "job__card";
jobOffer.innerHTML = ` <div
style="background-color: hsl(36, 87%, 49%)"
class="company__logo company__logo--small">
<h5>Scoot</h5>
</div>
<div class="job__infos">
<p>5h ago</p>
<span class="job__infos__divider"></span>
<p>Full Time</p>
</div>
<a href="">
<h3 class="job__card__position">Senior Software Engineer</h3>
</a>
<p>Scoot</p>
<h4 class="job__card__location">United Kingdom</h4>`;
sectionArticle.append(jobOffer);*/

const firstJobOffer = document.querySelector(".job__card");
const secondJobOffer = firstJobOffer.cloneNode(true);
const thirdJobOffer = firstJobOffer.cloneNode(true);
const fourthJobOffer = firstJobOffer.cloneNode(true);

firstJobOffer.insertAdjacentElement("afterend", secondJobOffer);
secondJobOffer.insertAdjacentElement("afterend", thirdJobOffer);
thirdJobOffer.insertAdjacentElement("afterend", fourthJobOffer);

// Zadanie 2.

const jobName = document.querySelector(".job__card__position");
secondJobOffer.querySelector("h3").innerText = "Junior JavaScript Developer";
thirdJobOffer.querySelector("h3").innerText = "Python Developer";
fourthJobOffer.querySelector("h3").innerText = "Senior Java Developer";

// Zadanie 3.

const jobListed = document.querySelector(".jobs-listed");
const howManyJob = jobListed.querySelector("span");
const allJobs = document.querySelectorAll(".job__card");

howManyJob.innerText = allJobs.length;
// Zadanie 4.
const button = document.querySelector(".toggle__button");
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
// Zadanie 5.

const SearchOffer = document.querySelector(".input__field");
SearchOffer.addEventListener("keyup", (event) => {
  const value = event.target.value;
  allJobs.forEach((job) => {
    const jobTitle = job.querySelector("h3").innerText;
    if (!jobTitle.toLowerCase().includes(value.toLowerCase())) {
      job.style.display = "none";
    } else {
      job.style.display = "block";
    }
  });
});
// Zadanie 6.
//Spraw, aby przycisk 'All jobs' resetował aktualne wyniki wyszukiwania i wyświetlił ponownie wszystkie oferty.
const allJobsButton = document.querySelector(".button--primary");
allJobsButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click");
  SearchOffer.value = "";
  allJobs.forEach((job) => {
    job.style.display = "block";
  });
});
