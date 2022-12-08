const billInput = document.querySelector('[name="billPrice"]');
const billInputDiv = document.querySelector(".main__div__left__bill__input");
const fivePercentButton = document.querySelector(".fivePercent");
const tenPercentButton = document.querySelector(".tenPercent");
const fifteenPercentButton = document.querySelector(".fifteenPercent");
const twentyfivePercentButton = document.querySelector(".twentyFivePercent");
const fiftyPercentButton = document.querySelector(".fiftyPercent");
const customInput = document.querySelector(".custom");
const peopleInput = document.querySelector('[name="numberOfPerson"]');
const peopleInputDiv = document.querySelector(
  ".main__div__left__people__input"
);
const tipAmount = document.querySelector(".main__div__right__tip__right");
const totalPerson = document.querySelector(".main__div__right__total__right");
const resetButton = document.querySelector(".reset__button");
const cantBeZero = document.querySelector(".cant__be__zero");

//initial setup
billInput.value = "0"; //outervalue
peopleInput.value = "0"; //outervalue
const initialBillValue = 0; //innervalue
const initialTipValue = 0; //innervalue
const initialPeopleValue = 0; //innervalue
const initialTotalNumber = 0; //innervalue
let billValue = initialBillValue; //innervalue
let tipValue = initialTipValue; //innervalue
let peopleValue = initialPeopleValue; //innervalue
let tipAmountNumber = initialTipValue; //outervalue
let totalNumber = initialTotalNumber; //outervalue

const sum = () => {
  if (peopleValue !== 0) {
    tipAmountNumber = (billValue * tipValue) / peopleValue;
    totalNumber = billValue / peopleValue + tipAmountNumber;
    tipAmount.textContent = `$${tipAmountNumber.toFixed(2)}`;
    totalPerson.textContent = `$${totalNumber.toFixed(2)}`;
  } else {
    tipAmount.textContent = "$0.00";
    totalPerson.textContent = "$0.00";
  }
};

const fivePercentButtonObject = {
  percentValue: 0.05,
};
const tenPercentButtonObject = {
  percentValue: 0.1,
};
const fifteenPercentButtonObject = {
  percentValue: 0.15,
};
const twentyfivePercentButtonObject = {
  percentValue: 0.25,
};
const fiftyPercentButtonObject = {
  percentValue: 0.5,
};
const customInputObject = {
  percentValue: 0,
};
const resetButtonObject = {
  Active: false,
};
/////////////
//Bill input and number of people
billInput.addEventListener("focus", () => {
  billInputDiv.classList.add("div__input__active");
});
billInput.addEventListener("blur", () => {
  billInputDiv.classList.remove("div__input__active");
  if (billInput.value === "") {
    billInput.value = "0";
    billValue = +billInput.value;
    sum();
  } else {
    billValue = +billInput.value;
    sum();
    resetButtonObject.Active = true;
  }
});
peopleInput.addEventListener("focus", () => {
  peopleInputDiv.classList.add("div__input__active");
});
peopleInput.addEventListener("blur", () => {
  peopleInputDiv.classList.remove("div__input__active");
  if (peopleInput.value === "") {
    peopleInput.value = "0";
    peopleValue = +peopleInput.value;
    sum();
  }
  if (
    peopleInput.value.startsWith("0") &&
    !peopleInput.value.startsWith("0.")
  ) {
    cantBeZero.style.display = "block";
    peopleValue = initialPeopleValue;
    sum();
  } else {
    cantBeZero.style.display = "none";
    peopleValue = +peopleInput.value;
    sum();
    resetButtonObject.Active = true;
  }
});
customInput.addEventListener("focus", () => {
  customInput.classList.add("input__active");
});
customInput.addEventListener("blur", () => {
  customInput.classList.remove("input__active");
  if (
    customInput.value.startsWith("0") &&
    !customInput.value.startsWith("0.")
  ) {
    customInput.value = 0;
    tipValue = initialTipValue;
    sum();
  } else {
    customInputObject.percentValue = +customInput.value / 100;
    tipValue = +customInputObject.percentValue;
    sum();
    resetButtonObject.Active = true;
  }
});
/////////////
//input filter which allows to write down only numbers.
function setInputFilter(textbox, inputFilter, errMsg) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
    "focusout",
  ].forEach(function (event) {
    textbox.addEventListener(event, function (e) {
      if (inputFilter(this.value)) {
        // Accepted value.
        if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }

        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // Rejected value: restore the previous one.
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        // Rejected value: nothing to restore.
        this.value = "";
      }
    });
  });
}
setInputFilter(
  billInput,
  function (value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp.
  },
  "Only digits and '.' are allowed"
);
setInputFilter(
  peopleInput,
  function (value) {
    return /^[0-9]*(\.[0-9]{0,2})?$/.test(value);
  },
  "Only digits and '.' are allowed"
);
setInputFilter(
  customInput,
  function (value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp.
  },
  "Only digits and '.' are allowed"
);
/////////////
//choosing button
const arrayOfPercentageButtons = [
  fivePercentButton,
  tenPercentButton,
  fifteenPercentButton,
  twentyfivePercentButton,
  fiftyPercentButton,
  customInput,
];
const arrayOfPercentageButtonsObjects = [
  fivePercentButtonObject,
  tenPercentButtonObject,
  fifteenPercentButtonObject,
  twentyfivePercentButtonObject,
  fiftyPercentButtonObject,
  customInputObject,
];
const enabledOrDisabled = (buttonToEnable, buttonObjectToEnable) => {
  if (buttonToEnable.classList.contains("disabled")) {
    buttonToEnable.classList.add("enabled");
    buttonToEnable.classList.remove("disabled");

    tipValue = +buttonObjectToEnable.percentValue;
    sum();
    resetButtonObject.Active = true;
  }
  if (buttonToEnable.classList.contains("disabled__custom")) {
    buttonToEnable.classList.add("enabled__custom");
    buttonToEnable.classList.remove("disabled__custom");

    sum();
    resetButtonObject.Active = true;
  }
  arrayOfPercentageButtons.forEach((buttonToDisable) => {
    if (!(buttonToDisable === buttonToEnable)) {
      if (buttonToDisable.tagName == "BUTTON") {
        if (!buttonToDisable.classList.contains("disabled")) {
          buttonToDisable.classList.add("disabled");
          if (buttonToDisable.classList.contains("enabled")) {
            buttonToDisable.classList.remove("enabled");
          }
        }
      } else {
        if (!buttonToDisable.classList.contains("disabled__custom")) {
          buttonToDisable.classList.add("disabled__custom");
          if (buttonToDisable.classList.contains("enabled__custom")) {
            buttonToDisable.classList.remove("enabled__custom");
          }
        }
      }
    }
  });
};

fivePercentButton.addEventListener("click", (event) => {
  event.preventDefault();
  enabledOrDisabled(fivePercentButton, fivePercentButtonObject);
});
tenPercentButton.addEventListener("click", (event) => {
  event.preventDefault();
  enabledOrDisabled(tenPercentButton, tenPercentButtonObject);
});
fifteenPercentButton.addEventListener("click", (event) => {
  event.preventDefault();
  enabledOrDisabled(fifteenPercentButton, fifteenPercentButtonObject);
});
twentyfivePercentButton.addEventListener("click", (event) => {
  event.preventDefault();
  enabledOrDisabled(twentyfivePercentButton, twentyfivePercentButtonObject);
});
fiftyPercentButton.addEventListener("click", (event) => {
  event.preventDefault();
  enabledOrDisabled(fiftyPercentButton, fiftyPercentButtonObject);
});
customInput.addEventListener("click", (event) => {
  event.preventDefault();
  enabledOrDisabled(customInput, customInputObject);
});

/////////////
//Reset button
const reset = () => {
  billInput.value = "0";
  peopleInput.value = "0";
  billValue = initialBillValue;
  tipValue = initialTipValue;
  peopleValue = initialPeopleValue;
  tipAmountNumber = initialTipValue;
  customInputObject.percentValue = 0;
  customInput.value = "";
  arrayOfPercentageButtons.forEach((buttonToDisable) => {
    if (buttonToDisable.tagName == "BUTTON") {
      if (!buttonToDisable.classList.contains("disabled")) {
        buttonToDisable.classList.add("disabled");
        if (buttonToDisable.classList.contains("enabled")) {
          buttonToDisable.classList.remove("enabled");
        }
      }
    } else {
      if (!buttonToDisable.classList.contains("disabled__custom")) {
        buttonToDisable.classList.add("disabled__custom");
        if (buttonToDisable.classList.contains("enabled__custom")) {
          buttonToDisable.classList.remove("enabled__custom");
        }
      }
    }
  });
  sum();
  resetButtonObject.Active = false;
  resetButton.classList.remove("reset__enabled");
  resetButton.classList.add("reset__disabled");
};
setInterval(() => {
  if (
    billValue === initialBillValue &&
    tipValue === initialTipValue &&
    peopleValue === initialPeopleValue
  ) {
    resetButtonObject.Active = false;
  }
  if (resetButtonObject.Active) {
    resetButton.classList.add("reset__enabled");
    resetButton.classList.remove("reset__disabled");
    resetButton.addEventListener("click", (event) => {
      event.preventDefault();
      reset();
    });
  }
}, 1000);
/////////////
