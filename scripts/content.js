var newdiv = document.createElement("div");
newdiv.id = "banner";
newdiv.style.background = "blue";
newdiv.style.color = "white";
newdiv.style.zIndex = 1000;
newdiv.style.position = "absolute";
newdiv.style.bottom = 0;
newdiv.style.left = 0;
newdiv.style.width = "100%";
newdiv.style.height = "80px";
newdiv.style.display = "flex";
newdiv.style.justifyContent = "center";
newdiv.style.alignItems = "center";
newdiv.innerText = "pHash = ";
document.body.appendChild(newdiv)
