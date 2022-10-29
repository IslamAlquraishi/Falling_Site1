let header = document.getElementById("header");

// Onload Up
onload = function () {
  SpanOne.style.opacity = "1";
  right.style.opacity = ".5";
};

// // All Scroll In Index
onscroll = function () {
  // Counter For Goals
  if (window.scrollY + 100 >= SectionWork.offsetTop) {
    if (started == false) {
      goals.forEach((goal) => {
        CountGoals(goal);
      });
    }
    started = true;
  }

  // Scroll Window for Show Card Portfolio
  CardFolio();

  // Scroll Window for Show Card Live
  CardLive();

  // The Scroll Make Width For Span
  Skills_Span();

  // Effict Show Card
  Cards();

  // Scroll Background
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

  // Start Scroll Up
  this.scrollY >= 2500 ? up.classList.add("show") : up.classList.remove("show");

  // Function Scroll Up
  Up();

  // End Window Scroll
};

// The Scroll Make Width For Span
function Skills_Span() {
  let OurSkills = document.getElementById("skills");

  let SkillsOffSetTop = OurSkills.offsetTop;
  let SkillsOuterHeight = OurSkills.offsetHeight;
  let windowHeight = window.innerHeight;
  let windowScrollTop = window.pageYOffset;

  if (windowScrollTop > SkillsOffSetTop + SkillsOuterHeight - windowHeight) {
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

// Effict Show Card
function Cards() {
  let Card = [
    document.getElementById("card1"),
    document.getElementById("card2"),
    document.getElementById("card3"),
    document.getElementById("card4"),
    document.getElementById("card5"),
    document.getElementById("card6"),
  ];
  // Function Small
  function Crad1() {
    if (scrollY > 1600) {
      Card[0].classList.add("card-show_sm");
    } else {
      Card[0].classList.remove("card-show_sm");
    }
    if (scrollY > 1900) {
      Card[1].classList.add("card-show_sm");
    } else {
      Card[1].classList.remove("card-show_sm");
    }
    if (scrollY > 2200) {
      Card[2].classList.add("card-show_sm");
    } else {
      Card[2].classList.remove("card-show_sm");
    }
    if (scrollY > 2500) {
      Card[3].classList.add("card-show_sm");
    } else {
      Card[3].classList.remove("card-show_sm");
    }
    if (scrollY > 2800) {
      Card[4].classList.add("card-show_sm");
    } else {
      Card[4].classList.remove("card-show_sm");
    }
    if (scrollY > 3200) {
      Card[5].classList.add("card-show_sm");
    } else {
      Card[5].classList.remove("card-show_sm");
    }
  }
  // Function Mediam
  function Crad2() {
    if (scrollY > 1400) {
      Card[0].classList.add("card-show_md");
      Card[1].classList.add("card-show_md");
    } else {
      Card[0].classList.remove("card-show_md");
      Card[1].classList.remove("card-show_md");
    }
    if (scrollY > 1900) {
      Card[2].classList.add("card-show_md");
      Card[3].classList.add("card-show_md");
    } else {
      Card[2].classList.remove("card-show_md");
      Card[3].classList.remove("card-show_md");
    }
    if (scrollY > 2400) {
      Card[4].classList.add("card-show_md");
      Card[5].classList.add("card-show_md");
    } else {
      Card[4].classList.remove("card-show_md");
      Card[5].classList.remove("card-show_md");
    }
  }
  // Function Large
  function Crad3() {
    if (scrollY > 1300) {
      Card[0].classList.add("card-show_xl");
      Card[1].classList.add("card-show_xl");
      Card[2].classList.add("card-show_xl");
    } else {
      Card[0].classList.remove("card-show_xl");
      Card[1].classList.remove("card-show_xl");
      Card[2].classList.remove("card-show_xl");
    }
    if (scrollY > 1800) {
      Card[3].classList.add("card-show_xl");
      Card[4].classList.add("card-show_xl");
      Card[5].classList.add("card-show_xl");
    } else {
      Card[3].classList.remove("card-show_xl");
      Card[4].classList.remove("card-show_xl");
      Card[5].classList.remove("card-show_xl");
    }
  }
  Crad1();
  Crad2();
  Crad3();
}

let right = document.getElementById("right");
let left = document.getElementById("left");

let cont1 = document.querySelector(".cont1");
let cont2 = document.querySelector(".cont2");

let SpanOne = document.querySelector(".span-one");
let SpanTwo = document.querySelector(".span-two");

// Change FeedBack For Right
right.onclick = function () {
  cont1.classList.add("margin");
  cont2.classList.add("margin");
  left.style.opacity = ".5";
  this.style.opacity = "1";
  SpanTwo.style.opacity = "1";
  SpanOne.style.opacity = ".5";
};

// Change FeedBack For Left
left.onclick = function () {
  cont1.classList.remove("margin");
  cont2.classList.remove("margin");
  right.style.opacity = ".5";
  this.style.opacity = "1";
  SpanTwo.style.opacity = ".5";
  SpanOne.style.opacity = "1";
};

// Open FeedBace Left
SpanOne.onclick = function () {
  cont1.classList.remove("margin");
  cont2.classList.remove("margin");
  SpanTwo.style.opacity = ".5";
  this.style.opacity = "1";
  left.style.opacity = "1";
  right.style.opacity = ".5";
};

// Open FeedBace Right
SpanTwo.onclick = function () {
  cont1.classList.add("margin");
  cont2.classList.add("margin");
  SpanOne.style.opacity = ".5";
  this.style.opacity = "1";
  left.style.opacity = ".5";
  right.style.opacity = "1";
};

// Controls For Open And Close List
let True = document.getElementById("True");
let False = document.getElementById("False");
let List = document.getElementById("list");

// Open List
True.onclick = function () {
  this.classList.add("show");
  False.classList.remove("show");
  List.classList.add("show");
};

// Close List
False.onclick = function () {
  this.classList.add("show");
  True.classList.remove("show");
  List.classList.remove("show");
};

// Close List By Link
function CloseBars() {
  True.classList.remove("show");
  False.classList.add("show");
  List.classList.remove("show");
}

// Close List Links By click AnyWay
document.addEventListener("click", (e) => {
  e.stopPropagation;
  if (e.target !== True && e.target !== False) {
    True.classList.remove("show");
    False.classList.add("show");
    List.classList.remove("show");
  }
});

// Counter For Goals
let SectionWork = document.getElementById("work");
let goals = document.querySelectorAll(".stat .goal");
let started = false;

function CountGoals(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}

// Scroll Window for Show Card Portfolio
let Card_Portfolio = document.querySelectorAll("#cardFolio");

function CardFolio() {
  Card_Portfolio.forEach((e) => {
    if (window.scrollY + 300 >= e.offsetTop) {
      e.classList.add("show");
    } else {
      e.classList.remove("show");
    }
  });
}

// Scroll Window for Show Card Live
let Card_Live = document.querySelectorAll("#cardLive");

function CardLive() {
  Card_Live.forEach((e) => {
    if (window.scrollY + 300 >= e.offsetTop) {
      e.classList.add("show");
    } else {
      e.classList.remove("show");
    }
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
