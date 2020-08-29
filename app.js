const name = document.getElementById("author");
const job = document.getElementById("job");
const url = document.getElementById("person-img");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

let reviews = [
  {
    id: 1,
    name: "Peter Jones",
    url: "./person-1.jpeg",
    job: "UI/UX",
    comment: "Lorem ciao dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 2,
    name: "Peter Max",
    url: "https://picsum.photos/200/200",
    job: "WebDev",
    comment: "Lorem bye dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    name: "Helena Max",
    url: "https://picsum.photos/200/300",
    job: "WebDev",
    comment: "Lorem hey dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    name: "Roy Max",
    url: "https://picsum.photos/200/200",
    job: "UI/UX",
    comment: "Lorem sey dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

//Load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});


function showPerson(person) {
  const item = reviews[person];
  url.src = item.url;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.comment;
}

randomBtn.addEventListener('click',function() {
  currentItem = randGenerator();
  showPerson(currentItem);
});

nextBtn.addEventListener('click', function() {
    if(currentItem < reviews.length - 1) {
      currentItem+=1;
    } else {
      currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click',function() {
  if(currentItem > 0) {
    currentItem-=1;
  } else {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

function randGenerator() {
  return Math.floor(Math.random()*reviews.length);
}
