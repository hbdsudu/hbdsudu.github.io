// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-0", 0.7, ideaTextTrans)
    .to(".idea-0", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .from(".idea-7", 0.7, ideaTextTrans)
    .to(".idea-7", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-8", 1, ideaTextTrans)
    .to(".idea-8", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-9", 1, ideaTextTrans)
    .to(".idea-9", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-10", 1, ideaTextTrans)
    .to(".idea-10", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-11", 1, ideaTextTrans)
    .to(".idea-11", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-12", 1, ideaTextTrans)
    .to(".idea-12", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-13", 1, ideaTextTrans)
    .to(".idea-13", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-14", 1, ideaTextTrans)
    .to(".idea-14", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-15", 1, ideaTextTrans)
    .to(".idea-15", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-16", 1, ideaTextTrans)
    .to(".idea-16", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-17", 1, ideaTextTrans)
    .to(".idea-17", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-18", 1, ideaTextTrans)
    .to(".idea-18", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-19", 1, ideaTextTrans)
    .to(".idea-19", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-20", 1, ideaTextTrans)
    .to(".idea-20", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-21", 1, ideaTextTrans)
    .to(".idea-21", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-22", 1, ideaTextTrans)
    .to(".idea-22", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-23", 1, ideaTextTrans)
    .to(".idea-23", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-24", 1, ideaTextTrans)
    .to(".idea-24", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-25", 1, ideaTextTrans)
    .to(".idea-25", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-26", 1, ideaTextTrans)
    .to(".idea-26", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-27", 1, ideaTextTrans)
    .to(".idea-27", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-28", 1, ideaTextTrans)
    .to(".idea-28", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-29", 1, ideaTextTrans)
    .to(".idea-29", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-30", 1, ideaTextTrans)
    .to(".idea-30", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-31", 1, ideaTextTrans)
    .to(".idea-31", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-32", 1, ideaTextTrans)
    .to(".idea-32", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-33", 1, ideaTextTrans)
    .to(".idea-33", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-34", 1, ideaTextTrans)
    .to(".idea-34", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-35", 1, ideaTextTrans)
    .to(".idea-35", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-36", 1, ideaTextTrans)
    .to(".idea-36", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-37", 1, ideaTextTrans)
    .to(".idea-37", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-38", 1, ideaTextTrans)
    .to(".idea-38", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-39", 1, ideaTextTrans)
    .to(".idea-39", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-40", 1, ideaTextTrans)
    .to(".idea-40", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-41", 1, ideaTextTrans)
    .to(".idea-41", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-42", 1, ideaTextTrans)
    .to(".idea-42", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-43", 1, ideaTextTrans)
    .to(".idea-43", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-44", 1, ideaTextTrans)
    .to(".idea-44", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-45", 1, ideaTextTrans)
    .to(".idea-45", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-46", 1, ideaTextTrans)
    .to(".idea-46", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-47", 1, ideaTextTrans)
    .to(".idea-47", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-48", 1, ideaTextTrans)
    .to(".idea-48", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-49", 1, ideaTextTrans)
    .to(".idea-49", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-50", 1, ideaTextTrans)
    .to(".idea-50", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-51", 1, ideaTextTrans)
    .to(".idea-51", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-52", 1, ideaTextTrans)
    .to(".idea-52", 0, ideaTextTransLeave, "+=1.5")
    .from(".idea-53", 1, ideaTextTrans)
    .to(".idea-53", 0, ideaTextTransLeave, "+=1.5")
    .from(".idea-54", 1, ideaTextTrans)
    .to(".idea-54", 0, ideaTextTransLeave, "+=1.5")
    .from(".idea-55", 1, ideaTextTrans)
    .to(".idea-55", 0, ideaTextTransLeave, "+=1.5")
    .from(".idea-56", 1, ideaTextTrans)
    .to(".idea-56", 0, ideaTextTransLeave, "+=1.5")
    .from(".idea-57", 1, ideaTextTrans)
    .to(".idea-57", 0, ideaTextTransLeave, "+=1.5")
    .from(".idea-58", 1, ideaTextTrans)
    .to(".idea-58", 0, ideaTextTransLeave, "+=1.5")
    .from(".idea-59", 1, ideaTextTrans)
    .to(".idea-59", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-60", 1, ideaTextTrans)
    .to(".idea-60", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-61", 1, ideaTextTrans)
    .to(".idea-61", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-62", 1, ideaTextTrans)
    .to(".idea-62", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-63", 1, ideaTextTrans)
    .to(".idea-63", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-64", 1, ideaTextTrans)
    .to(".idea-64", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-65", 1, ideaTextTrans)
    .to(".idea-65", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-66", 1, ideaTextTrans)
    .to(".idea-66", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-67", 1, ideaTextTrans)
    .to(".idea-67", 1, ideaTextTransLeave, "+=1.5")
    .from(".idea-68", 1, ideaTextTrans)
    .to(".idea-68", 1, ideaTextTransLeave, "+=1.5")
    
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      Object.keys(data).map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
