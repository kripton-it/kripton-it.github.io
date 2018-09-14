var button = document.querySelector(".hotel-search-open-button");
var popup = document.querySelector(".hotel-search-popup");
var form = popup.querySelector(".hotel-search-form");
var checkInDate = form.querySelector("#check-in-date");
var checkOutDate = form.querySelector("#check-out-date");
var adultsQuantity = form.querySelector("#adults-quantity");
var childrenQuantity = form.querySelector("#children-quantity");

var isStorageSupport = true;
var adultsStorage = "";
var childrenStorage = "";

try {
  adultsStorage = localStorage.getItem("adults");
  childrenStorage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("hotel-search-popup-hide");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("show");
  if (popup.classList.contains("error")) {
    popup.classList.remove("error");
  }
  if (popup.classList.contains("show")) {
    if (adultsStorage) {
      adultsQuantity.value = adultsStorage;
    }
    if (childrenStorage) {
      childrenQuantity.value = childrenStorage;
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!(checkInDate.value && checkOutDate.value && adultsQuantity.value && childrenQuantity.value)) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adultsQuantity.value);
      localStorage.setItem("children", childrenQuantity.value);
    }
  }
});
