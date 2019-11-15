var generateBtn = document.getElementById('generate-name');
var newNameContainer = document.getElementById('display-name');

function randBabyName(arr, filter) {
  var randName = getRandName(arr);
  while (randName === filter) {
    randName = getRandName(arr);
  }
  return randName;
}

// Takes a gender
// Returns a full name appropriate for that gender
function getRandName(gender) {
  if(gender === 'boy'){
    var firstName = getRandEl(boyNames);
    var middleName = randFilteredElem(boyNames, firstName);
    var lastName = document.getElementById('last-name').value;
  } else if (gender === 'girl') {
    var firstName = getRandEl(girlNames);
    var middleName = randFilteredElem(girlNames, firstName);
    var lastName = document.getElementById('last-name').value;
  }
  return firstName + ' ' + middleName + ' ' + lastName;
}
 
function getRandEl(arr) {
  return arr[getRandNum(0, arr.length - 1)];
}

function randFilteredElem(arr, filter) {
  var randEl = getRandEl(arr);
  while (randEl === filter) {
    randEl = getRandEl(arr);
  }
  return randEl;
}

function getRandNum(min,max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

generateBtn.addEventListener('click', genBtnHandler);

// on event, get gender, get full name for gender, display full name to dom
function genBtnHandler() {
  newNameContainer.innerHTML = '';
  var gender = getGender();
  var name = getRandName(gender);
  displayName(name);
} 

// easily and clearly grab the gender, according to DOM
function getGender() {
  var isBoy = document.getElementById('yes-boy').checked;
  if (isBoy) {
    return 'boy';
  } else {
    return 'girl';
  }
}

// display name on DOM
function displayName (name) {
  var display = document.createElement('h3');
  display.innerText = name;
  newNameContainer.appendChild(display);
}
