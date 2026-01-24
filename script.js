function addPart(partId) {
  const part = document.getElementById(partId);

  if (part.style.opacity === "1") {
    alert(partId.toUpperCase() + " already evaluated!");
    return;
  }

  // Animate part into the car
  part.style.opacity = "1";
  part.style.transform = "scale(1.1)";

  setTimeout(() => {
    part.style.transform = "scale(1)";
  }, 500);
}
