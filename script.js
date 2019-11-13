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
    var lastName = document.getElementById('last-name');
  }
  return firstName + ' ' + middleName + ' ' + lastName;
}

function randFilteredElem(arr, filter) {
  var randEl = getRandEl(arr);
  while (randEl === filter) {
    randEl = getRandEl(arr);
  }
  return randEl;
}

function getRandEl(arr) {
  return arr[getRandNum(0, arr.length - 1)];
}

function getRandNum(min,max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

var genButton = document.getElementById('generate-name');


genButton.addEventListener('click', genBtnHandler);

// on event, get gender, get full name for gender, display full name to dom
function genBtnHandler() {
  var gender = getGender();
  var name = getRandName(gender);
  var displayName = returnName(name);
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
function returnName () {
  var display = document.createElement('string');
}
