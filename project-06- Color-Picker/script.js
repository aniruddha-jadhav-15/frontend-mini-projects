const colorPicker = document.getElementById("colorPicker");
const colorSwatch = document.getElementById("colorSwatch");
const body = document.body;

// Update swatch and background when color changes
colorPicker.addEventListener("input", () => {
  const selectedColor = colorPicker.value;
  colorSwatch.style.backgroundColor = selectedColor;
  colorSwatch.textContent = selectedColor;

  // change body gradient slightly based on selected color
  body.style.background = `linear-gradient(135deg, ${selectedColor}, #ACB6E5)`;

  // adjust text color for contrast
  const r = parseInt(selectedColor.slice(1, 3), 16);
  const g = parseInt(selectedColor.slice(3, 5), 16);
  const b = parseInt(selectedColor.slice(5, 7), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  colorSwatch.style.color = luminance > 0.6 ? "#000" : "#fff";
});
