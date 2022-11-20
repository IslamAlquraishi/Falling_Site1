onscroll = function () {
  // Background For Header
  header_bg();

  // Show Cards With Scroll
  card_Scroll(Cards_Service, 100);
  card_Scroll(Cards_Portfolio, 200);
  card_Scroll(Cards_Live, 200);

  // Counter For Goals
  if (window.scrollY + 150 >= SectionWork.offsetTop) {
    if (started == false) {
      goals.forEach((goal) => {
        countGoals(goal);
      });
    }
    started = true;
  }

  // Progress Width For Span
  skills_Span();

  // Show Toggle Up
  scroll();

  // End Window Scroll
};

// Background For Header
function header_bg() {
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

// Open List links
let toggle = document.getElementById("toggle");
let bars = document.getElementById("bars");
let xmark = document.getElementById("xmark");
let List = document.getElementById("list");
let container = document.querySelector(".container");

bars.addEventListener("click", () => {
  bars.classList.remove("rotate");
  xmark.classList.add("rotate");
  toggle.style.border = "2px solid #f00";

  List.classList.add("show");
});
xmark.addEventListener("click", () => {
  xmark.classList.remove("rotate");
  bars.classList.add("rotate");
  toggle.style.border = "none";
  List.classList.remove("show");
});

// Close List Links By click AnyWay
document.addEventListener("click", (e) => {
  if (e.target != bars && e.target != xmark && e.target != container) {
    toggle.style.border = "none";
    bars.classList.add("rotate");
    xmark.classList.remove("rotate");
    List.classList.remove("show");
  }
});

// Close List By Link
function CloseBars() {
  toggle.classList.remove("active");
  List.classList.remove("show");
}

// Border Botton For Bar Link
let links = document.querySelectorAll(".list .link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("show");
    });
    link.classList.add("show");
  });
});

// Progress Width For Span
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

// Start FeedBack
{
  // Start FeedBack
  let users = document.querySelectorAll(".slide-content .user");
  let span_Num = document.querySelectorAll(".span-toggle span");
  let usersCount = users.length;
  indexNext = 1;
  let Prev = document.getElementById("prev");
  let Next = document.getElementById("next");

  onload = () => {
    Prev.classList.add("not_allowed");
  };

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
}
// End FeedBack

// Add Class Active On Card By Scroll
let Cards_Service = document.querySelectorAll(".services-content .card");
let Cards_Portfolio = document.querySelectorAll(".portfolio-content .card");
let Cards_Live = document.querySelectorAll(".live-content .card");

function card_Scroll(elements, time) {
  elements.forEach((Card) => {
    let CardOffSetTop = Card.offsetTop;
    let CardOuterHeight = Card.offsetHeight;
    let windowHeight = window.innerHeight;
    let windowScrollTop = window.pageYOffset;
    if (
      windowScrollTop + time >
      CardOffSetTop + CardOuterHeight - windowHeight
    ) {
      Card.classList.add("show");
    }
    false;
  });
}

// Show Toggle Up
let scroll = () => {
  let UP = document.getElementById("up");
  let pos = document.documentElement.scrollTop;
  let CalcHeigth =
    document.body.clientHeight - document.documentElement.clientHeight;
  let scrollProgress = Math.round((Math.floor(pos) * 100) / CalcHeigth);

  UP.style.background = `conic-gradient(#0f0 ${scrollProgress}% , #00000030 ${scrollProgress}%)`;
  UP.addEventListener("click", () => {
    document.documentElement.scrollTop = "0";
  });
};
