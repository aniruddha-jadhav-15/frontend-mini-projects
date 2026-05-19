// DOM elements
const colorPicker = document.getElementById("colorPicker");
const colorSwatch = document.getElementById("colorSwatch");
const body = document.body;
const copyBtn = document.getElementById("copyBtn");
const colorFormat = document.getElementById("colorFormat");

// default color — matches HTML input default value
let selectedColor = "#3498db";

// converts hex color to selected format (hex, rgb, hsl)
function getFormattedColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (colorFormat.value === "rgb") {
    return `rgb(${r}, ${g}, ${b})`;
  } else if (colorFormat.value === "hsl") {
    return hexToHsl(r, g, b);
  } else {
    return hex;
  }
}

// converts rgb values to hsl format
function hexToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

// update UI when user picks a new color
colorPicker.addEventListener("input", () => {
  selectedColor = colorPicker.value;
  colorSwatch.style.backgroundColor = selectedColor;
  colorSwatch.textContent = getFormattedColor(selectedColor);

  // change body gradient slightly based on selected color
  body.style.background = `linear-gradient(135deg, ${selectedColor}, #ACB6E5)`;

  // adjust text color for contrast
  const r = parseInt(selectedColor.slice(1, 3), 16);
  const g = parseInt(selectedColor.slice(3, 5), 16);
  const b = parseInt(selectedColor.slice(5, 7), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  colorSwatch.style.color = luminance > 0.6 ? "#000" : "#fff";
});

// update displayed format when user changes dropdown
colorFormat.addEventListener("change", () => {
  colorSwatch.textContent = getFormattedColor(selectedColor);
});

// copy current formatted color to clipboard
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(getFormattedColor(selectedColor));
  copyBtn.textContent = "Copied! ✓";

  setTimeout(() => {
    copyBtn.textContent = "Copy Color";
  }, 1000);
});
