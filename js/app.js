const $flexbox = document.getElementById("main-preview");
const $flexItems = document.querySelectorAll(".flex-item");
const $flexItemThird = document.querySelector(".flex-item:nth-child(3)");

/* Initialize */

const itemColors = [
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
];
function initializeItemColor() {
  $flexItems.forEach((item, index) => {
    item.style.backgroundColor = itemColors[index];
  });
}
initializeItemColor();

/* Event Handler */

const $flexDirectionSelect = document.querySelector("#flex-direction select");
$flexDirectionSelect.addEventListener("change", (event) => {
  $flexbox.style.flexDirection = event.target.value;
});

const $flexWrapSelect = document.querySelector("#flex-wrap select");
$flexWrapSelect.addEventListener("change", (event) => {
  $flexbox.style.flexWrap = event.target.value;
});

const $justifyContentSelect = document.querySelector("#justify-content select");
$justifyContentSelect.addEventListener("change", (event) => {
  $flexbox.style.justifyContent = event.target.value;
});

const $alignItemsSelect = document.querySelector("#align-items select");
$alignItemsSelect.addEventListener("change", (event) => {
  $flexbox.style.alignItems = event.target.value;
});

const $alignContentSelect = document.querySelector("#align-content select");
$alignContentSelect.addEventListener("change", (event) => {
  $flexbox.style.alignContent = event.target.value;
});

const $alignSelfSelect = document.querySelector("#align-self select");
$alignSelfSelect.addEventListener("change", (event) => {
  $flexItemThird.style.alignSelf = event.target.value;
});

const $orderSelect = document.querySelector("#order select");
$orderSelect.addEventListener("change", (event) => {
  $flexItemThird.style.order = event.target.value;
});

/* Toggle */

function toggle(checked, token, element) {
  if (checked) {
    element.classList.add(token);
  } else {
    element.classList.remove(token);
  }
}

function toggleSize(checked, token) {
  $flexItems.forEach((content) => {
    toggle(checked, token, content);
  });
}

function toggleLineThrough(checked, element) {
  const DISABLED_CLASSNAME = "disabled";
  toggle(!checked, DISABLED_CLASSNAME, element);
}

/* Width / Height */

const WIDTH_PLACEHOLDER_CLASSNAME = "width-placeholder";
const $widthCheckbox = document.getElementById("width-checkbox");
const $widthCheckboxLabel = document.getElementById("width-checkbox-text");
$widthCheckbox.addEventListener("change", (event) => {
  toggleSize(event.target.checked, WIDTH_PLACEHOLDER_CLASSNAME);
  toggleLineThrough(event.target.checked, $widthCheckboxLabel);
});

const HEIGHT_PLACEHOLDER_CLASSNAME = "height-placeholder";
const $heightCheckbox = document.getElementById("height-checkbox");
const $heightCheckboxLabel = document.getElementById("height-checkbox-text");
$heightCheckbox.addEventListener("change", (event) => {
  toggleSize(event.target.checked, HEIGHT_PLACEHOLDER_CLASSNAME);
  toggleLineThrough(event.target.checked, $heightCheckboxLabel);
});

/* Gap */

const GAP_CLASSNAME = "gap";
const $gapCheckbox = document.getElementById("gap-checkbox");
const $gapCheckboxLabel = document.getElementById("gap-checkbox-text");
$gapCheckbox.addEventListener("change", (event) => {
  toggle(event.target.checked, GAP_CLASSNAME, $flexbox);
  toggleLineThrough(event.target.checked, $gapCheckboxLabel);
});

const ROW_GAP_CLASSNAME = "row-gap";
const $rowGapCheckbox = document.getElementById("row-gap-checkbox");
const $rowGapCheckboxLabel = document.getElementById("row-gap-checkbox-text");
$rowGapCheckbox.addEventListener("change", (event) => {
  toggle(event.target.checked, ROW_GAP_CLASSNAME, $flexbox);
  toggleLineThrough(event.target.checked, $rowGapCheckboxLabel);
});

const COLUMN_GAP_CLASSNAME = "column-gap";
const $columnGapCheckbox = document.getElementById("column-gap-checkbox");
const $columnGapCheckboxLabel = document.getElementById(
  "column-gap-checkbox-text"
);
$columnGapCheckbox.addEventListener("change", (event) => {
  toggle(event.target.checked, COLUMN_GAP_CLASSNAME, $flexbox);
  toggleLineThrough(event.target.checked, $columnGapCheckboxLabel);
});
