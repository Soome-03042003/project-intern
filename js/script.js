function createFunction() {
  let counter = 0;

  function increase() {
    return ++counter;
  }
  return increase;
}

let counter1 = createFunction();
console.log(counter1());
// App
function createLogger(namespace) {
  function logger(message) {
    console.log(`[${namespace}] ${message}`);
  }
  return logger;
}

const inforLogger = createLogger("Info");
inforLogger("namespace1");
inforLogger("namespace2");
inforLogger("namespace3");
inforLogger("namespace4");

function createFunction1(key) {
  const store = JSON.parse(localStorage.getItem(key)) || {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store(key);
      save();
    },
  };
  return storage;
}

const profileSetting = createFunction1("profile_setting");
console.log(profileSetting.get("fullname"));
profileSetting.set("fullname", "Van Loc");
profileSetting.set("age", 20);
profileSetting.set("address", "Hue");

// ------------slider animation chuyen anh

let createSlider = document.querySelector(
  ".navBar__Nav--slider .navBar__Nav--list"
);
let createItems = document.querySelectorAll(
  ".navBar__Nav--slider .navBar__Nav--list .navBar__Nav--items"
);
let prevArrow = document.getElementById("prev");
let nextArrow = document.getElementById("next");
let dotsItemsLi = document.querySelectorAll(
  ".navBar__Nav--slider .navBar__Nav--dots li"
);

let active = 0;
let maxItems = createItems.length - 1;

nextArrow.onclick = function () {
  active = active + 1 <= maxItems ? active + 1 : 0;
  reloadSlider();
};
prevArrow.onclick = function () {
  active = active - 1 <= maxItems ? active - 1 : 0;
  reloadSlider();
};
let autoButton = setInterval(() => {
  nextArrow.click();
}, 3000);
function reloadSlider() {
  createSlider.style.left = -createItems[active].offsetLeft + "px";

  // last-active-dots
  let dotsActive = document.querySelector(
    ".navBar__Nav--slider .navBar__Nav--dots .active"
  );
  dotsActive.classList.remove("active");

  dotsItemsLi[active].classList.add("active");

  // clearInterval
  clearInterval(autoButton);
  autoButton = setInterval(() => {
    nextArrow.click();
  }, 3000);
};
dotsItemsLi.forEach((li, key) => {
  li.addEventListener('click',()=>{
    active = key;
    reloadSlider();
  })
  
});
window.onresize = function(event) {
    reloadSlider();
};

// -------------- slide chuyen icon descovery
let sliderDiscovery = document.querySelector('.navBar__ItemDescovery')
let createDiscovery = document.querySelectorAll('.navBar__card--item');
let btnNext = document.getElementById('next__discovery');
let discoveryActive = 0;
let maxIcon = createDiscovery.lenght - 1;

btnNext.onclick = function(){
  alert("onclick");
  createDiscovery = createDiscovery[discoveryActive] + 1 <= maxIcon ? discoveryActive + 1 : 0;
 reloadDiscovery();
}

function reloadDiscovery(){
 sliderDiscovery.style.left = -createDiscovery[discoveryActive].offsetLeft + "px";
}

