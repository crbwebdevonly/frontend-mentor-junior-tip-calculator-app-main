// = document.getElementsByTagName("button");
const buttonsArray = Array.from(document.getElementsByTagName("button"));

const customInput = document.getElementById("custom-input");

//const billAmount = parseInt(document.getElementById("bill").value);

const inputPeople = document.getElementById("people");
inputPeople.addEventListener("input", () => {
     customInput.classList.add("hide");
     tipAmountTag.innerHTML = "$0.00";
     totalAmountTag.innerHTML = "$0.00";
});

//const billAmount = document.getElementById("bill");
//billAmount.value = 0
//const numberOfPeople = document.getElementById("people");


const tipAmountTag = document.getElementById("tip-amount");
tipAmountTag.innerHTML = "$0.00";
const totalAmountTag = document.getElementById("total-amount");
totalAmountTag.innerHTML = "$0.00";

const errorMessage = document.getElementById("error-message");
const errorBorder = document.getElementById("error-border");
errorBorder.classList.remove("show");
errorMessage.classList.remove("show");

console.log(tipAmountTag, totalAmountTag);

buttonsArray.forEach((e) => {
     //console.log(e);
     e.addEventListener("click", () => {
          let buttonString = e.innerHTML;
          // console.log(
          //      "clicked-inner",
          //      e.innerHTML,
          //      "bstring is>>",
          //      buttonString.slice(0, 6)
          // );
          customInput.classList.add("hide");
          if (buttonString === "Reset") {
               //console.log("reset enter");
               // tipAmountTag.innerHTML = "$0.00";
               //totalAmountTag.innerHTML = "$0.00";

               return;
          }
          if (buttonString.slice(0, 6) === "Custom") {
               //console.log("custom clicked");

               customInput.classList.remove("hide");
               customInput.focus();
               customInput.addEventListener("input", (e) => {
                    //console.log("changed>>", e.target.value);

                    const discountRate = parseInt(e.target.value);

                    doCalculation(discountRate);
               });
               return;
          }

          console.log("enter else");
          buttonString = buttonString.slice(0, -1);
          const discountRate = parseInt(buttonString);
          doCalculation(discountRate);
     });
});

const doCalculation = (discountRate) => {
     const billAmount = parseInt(document.getElementById("bill").value);

     const numberOfPeople = parseInt(document.getElementById("people").value);

     if (numberOfPeople < 1) {
          errorBorder.classList.add("show");
          errorMessage.classList.add("show");

          return;
     }
     errorBorder.classList.remove("show");
     errorMessage.classList.remove("show");

     const tip = billAmount * (discountRate / (100 * numberOfPeople));
     tipAmountTag.innerHTML = "$" + tip.toFixed(2);
     const totalFinal = billAmount / numberOfPeople + tip;
     //console.log(discountRate, "<<d rate -- tip>>", tip, totalFinal);

     totalAmountTag.innerHTML = "$" + totalFinal.toFixed(2);
};
