onscroll = function () {
  // Scroll For Background
  head_Bg();

  // Scroll Cards
  {
    // For Services
    cards();
    // For Portfolio
    cardFolio();
    // For Live
    cardLive();
    // For Progress Span
    skills_Span();
  }

  // Counter For Goals
  if (window.scrollY + 100 >= SectionWork.offsetTop) {
    if (started == false) {
      goals.forEach((goal) => {
        countGoals(goal);
      });
    }
    started = true;
  }

  // Start Scroll Up
  this.scrollY >= 2500 ? up.classList.add("show") : up.classList.remove("show");

  // Function Scroll Up
  Up();

  // End Window Scroll
};

// Scroll For Background
function head_Bg() {
  let header = document.getElementById("header");
  if (scrollY <= 125) {
    // 0%
    header.style.background = "none";
  } else if (scrollY < 300) {
    // 25%
    header.style.background = "#0303d749";
  } else if (scrollY < 600) {
    // 75%
    header.style.background = "#0303d7a5";
  } else {
    // 100%
    header.style.background = "#0303d7";
  }
}

// Counter For Goals
let SectionWork = document.getElementById("work");
let goals = document.querySelectorAll(".stat .goal");
let started = false;

// Function Counter For Goals
function countGoals(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}

// Border Botton For Bar Link
let links = document.querySelectorAll(".list .link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => {
      l.classList.remove("show");
    });
    link.classList.add("show");
  });
});

// The Scroll Progress Width For Span
function skills_Span() {
  let OurSkills = document.getElementById("skills");

  let SkillsOffSetTop = OurSkills.offsetTop;
  let SkillsOuterHeight = OurSkills.offsetHeight;
  let windowHeight = window.innerHeight;
  let windowScrollTop = window.pageYOffset;

  if (
    windowScrollTop >
    SkillsOffSetTop - 100 + SkillsOuterHeight - windowHeight
  ) {
    let AllSkills_Span = document.querySelectorAll(
      ".card .skill-progress span"
    );

    AllSkills_Span.forEach((Span) => {
      Span.style.width = Span.dataset.progress;
    });

    let AllSkills_i = document.querySelectorAll(".skill-progress i");
    AllSkills_i.forEach((i) => {
      i.style.left = i.dataset.progress;
    });
  }
}

// Scroll Window for Show Card Services
function cards() {
  let serviceCards = document.querySelectorAll(".services-content .card");
  serviceCards.forEach((Card) => {
    let CardOffSetTop = Card.offsetTop;
    let CardOuterHeight = Card.offsetHeight;
    let windowHeight = window.innerHeight;
    let windowScrollTop = window.pageYOffset;

    if (
      windowScrollTop >
      CardOffSetTop + 1600 + CardOuterHeight - windowHeight
    ) {
      Card.classList.add("show");
    }
    false;
  });
}

// Start FeedBack
let users = document.querySelectorAll(".slide-content .user");
let span_Num = document.querySelectorAll(".span-toggle span");
let usersCount = users.length;
indexNext = 1;
let Prev = document.getElementById("prev");
let Next = document.getElementById("next");

function Checker() {
  removeActive();
  users[indexNext - 1].classList.add("active");
  span_Num[indexNext - 1].classList.add("active");

  if (indexNext == 1) {
    Prev.classList.add("not_allowed");
    Prev.classList.remove("active");
    Next.classList.add("active");
  } else {
    Prev.classList.remove("not_allowed");
    Prev.classList.add("active");
  }
  if (indexNext == usersCount) {
    Next.classList.add("not_allowed");
    Next.classList.remove("active");
    Prev.classList.add("active");
  } else {
    Next.classList.remove("not_allowed");
    Next.classList.add("active");
  }
}

// Remove All Active From Users
function removeActive() {
  users.forEach((user) => {
    user.classList.remove("active");
  });
  span_Num.forEach((span) => {
    span.classList.remove("active");
  });
}

// Next User
Next.onclick = () => {
  if (Next.classList.contains("not_allowed")) {
    return false;
  } else {
    indexNext++;
    Checker();
  }
};

// Prev User
Prev.onclick = () => {
  if (Prev.classList.contains("not_allowed")) {
    return false;
  } else {
    indexNext--;
    Checker();
  }
};

// End FeedBack

let toggle = document.getElementById("toggle");
let List = document.getElementById("list");
let container = document.querySelector(".container");

// Open List links
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  List.classList.toggle("show");
});

// Close List By Link
function CloseBars() {
  toggle.classList.remove("active");
  List.classList.remove("show");
}

// Close List Links By click AnyWay
document.addEventListener("click", (e) => {
  e.stopPropagation;
  if (e.target !== toggle && e.target !== List && e.target !== container) {
    toggle.classList.remove("active");
    List.classList.remove("show");
  }
});

// Scroll Window for Show Card Portfolio
function cardFolio() {
  let portfolioCards = document.querySelectorAll(".portfolio-content .card");
  portfolioCards.forEach((Card) => {
    let CardOffSetTop = Card.offsetTop;
    let CardOuterHeight = Card.offsetHeight;
    let windowHeight = window.innerHeight;
    let windowScrollTop = window.pageYOffset;

    if (
      windowScrollTop >
      CardOffSetTop - 150 + CardOuterHeight - windowHeight
    ) {
      Card.classList.add("show");
    }
    false;
  });
}

// Scroll Window for Show Card Live
function cardLive() {
  let liveCards = document.querySelectorAll(".live-content .card");
  liveCards.forEach((Card) => {
    let CardOffSetTop = Card.offsetTop;
    let CardOuterHeight = Card.offsetHeight;
    let windowHeight = window.innerHeight;
    let windowScrollTop = window.pageYOffset;

    if (
      windowScrollTop >
      CardOffSetTop - 200 + CardOuterHeight - windowHeight
    ) {
      Card.classList.add("show");
    }
    false;
  });
}

// Start Click Up
let up = document.getElementById("up");
function Up() {
  up.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
