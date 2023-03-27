var elForm = document.querySelector(".job__left-form");

var elFirstInput = document.querySelector(".job__first");

var elSecondInput = document.querySelector(".job__second");

var elThirdInput = document.querySelector(".job__third");

var elJobRightList = document.querySelector(".job__right-list");

var allCards = [];


function addLi(companyName, salary, jobTitle) {
  var elLi = document.createElement("li");
  elLi.className = "job__right-item border border-gray-300 rounded-md mb-6";
  elJobRightList.appendChild(elLi);

  var elH3 = document.createElement("h3");
  elH3.className =
  "font-semibold text-xl bg-gray-100 border-b border-b-gray-300 pl-2 py-2";
  elH3.textContent = jobTitle;
  elLi.appendChild(elH3);

  var elCompanyName = document.createElement("p");
  elCompanyName.className = "text-gray-600 pl-2 my-3";
  elCompanyName.textContent = "Company: ";
  elLi.appendChild(elCompanyName);

  var elCompanyNameB = document.createElement("b");
  elCompanyNameB.textContent = companyName;
  elCompanyName.appendChild(elCompanyNameB);

  var elSalary = document.createElement("p");
  elSalary.className = "text-gray-600 pl-2 my-3";
  elSalary.textContent = "Company: ";
  elLi.appendChild(elSalary);

  var elSalaryB = document.createElement("b");
  elSalaryB.textContent = salary;
  elSalary.appendChild(elSalaryB);
}

addLi("Google", "5000$", "Frontend Developer");
addLi("Najot Ta'lim", "1000$", "Frontend Developer");

elForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var newCard = {
    id: allCards.length + 1,
    companyName: elFirstInput.value.trim(),
    jobTitle: elSecondInput.value.trim(),
    salary: elThirdInput.value.trim(),
  };

  allCards.push(newCard);

  addLi(newCard.companyName, newCard.salary, newCard.jobTitle);

  elFirstInput.value = null;
  elSecondInput.value = null;
  elThirdInput.value = null;
});
