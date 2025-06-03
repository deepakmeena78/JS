// Main Div
let mainDiv = document.getElementById('main');
mainDiv.setAttribute("style", "display: flex; justify-content: center; align-items: center; height: 100vh; position: relative;");

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const mainDiv = document.getElementById("main");
    const loadingType = document.createElement('h1');
    loadingType.innerHTML = "Loading...";
    loadingType.style.cssText = "text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black; display: flex; justify-content: center; align-items: center; border-radius: 10px; margin-bottom: 100px; color: white";
    loader.appendChild(loadingType);

    loader.style.cssText = "border: 2px solid black; display: flex; justify-content: center; align-items: center; border-radius: 10px;";

    mainDiv.style.display = 'none';

    setTimeout(() => {
        loader.style.display = 'none';
        mainDiv.style.display = 'flex';
    }, 5000);
});


// Mini Div
let miniDiv = document.createElement('div');
miniDiv.setAttribute("id", "miniDiv");
miniDiv.style.cssText = "height: calc(100vh - 40px); width: calc(100vw - 200px); display: flex; justify-content: center; align-items: center; box-shadow: 0px 0px 20px 10px #808080; border-radius: 10px; background-size: cover; margin: 20px;";
miniDiv.style.backgroundImage = 'url("Image/MiniDiv11.png")';

// Functionality Div
let functionalityDiv = document.createElement('div');
functionalityDiv.style.cssText = "width: 30%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;";

// Image Input Div
let ImageDiv = document.createElement('div');
ImageDiv.style.cssText = "width: 70%; height: 95%; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden;;";

// File Input
let fileInput = document.createElement('input');
fileInput.type = "file";
fileInput.accept = "image/*";
fileInput.style.cssText = "display: none;";

// Temporary Image
let localImage = document.createElement("img");
localImage.src = "Image/Gallery12.png";
localImage.style.cssText = "max-width: 100%; max-height: 80%; position: absolute; filter: drop-shadow(0px 5px 10px black);";

// Preview Image Div
let previewImage = document.createElement('div');
previewImage.style.cssText = "width: 95%; height: 30%; display: flex; justify-content: center; align-items: center; margin: 5px; overflow: hidden; position: relative;";

// Preview Image Element
let ImgPreView = document.createElement('img');
ImgPreView.style.cssText = "width: 100%; height: 100%; display: block; position: relative; object-fit: contain; box-sizing: border-box; margin: 0; padding: 0;";
previewImage.appendChild(ImgPreView);

// Text Print Div
let OriginalImage = document.createElement('div');
OriginalImage.style.cssText = "width: 100%; height: 5%; display: flex; justify-content: center; align-items: center; margin: 5px; overflow: hidden; position: relative;";
let OriginalImageText = document.createElement('h2');
OriginalImageText.innerText = "Original Image";
OriginalImageText.style.cssText = "font-size: 30px; margin-left:20px; font-style: italic; color: black; text-shadow: 2px 2px 5px rgba(128, 128, 128, 0.5), 4px 4px 10px rgba(128, 128, 128, 0.3);";
OriginalImage.appendChild(OriginalImageText);

// Selected Image Div
let ImgDiv = document.createElement('div');
ImgDiv.style.cssText = "width: 95%; height: 70%; display: flex; justify-content: center; align-items: center; overflow: hidden; position: relative; box-sizing: border-box; margin: 0; padding: 0;";
let Img = document.createElement('img');
Img.style.cssText = "width: 100%; height: 95%; display: block; position: relative; object-fit: contain; margin: 0; padding: 0; box-sizing: border-box;";

// Append the image to the div
ImgDiv.appendChild(Img);

// Append all elements to ImageDiv
ImageDiv.appendChild(fileInput);
ImageDiv.appendChild(localImage);
ImageDiv.appendChild(OriginalImage);
ImageDiv.appendChild(previewImage);
ImageDiv.appendChild(ImgDiv);

// --------------------------- Choose The Button ---------------------------------------------

let chooseButton = document.createElement('button'); // Choose Image Button
chooseButton.textContent = "Choose Image";
chooseButton.style.cssText = "width:250px; height: 40px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 3px 1px #808080; background-color: #c080e9 ; color: white; border: 2px solid black; font-size: 18px; cursor:pointer;";
chooseButton.classList.add("StyleHover");
chooseButton.addEventListener('click', () => fileInput.click());

let cropButton = document.createElement("button"); // Crop Image Button
cropButton.textContent = "Crop Image";
cropButton.style.cssText = "width:250px; height: 40px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 3px 1px #808080; background-color: #c080e9 ; color: white; border: 2px solid black; font-size: 18px; cursor:pointer;";
cropButton.classList.add("StyleHover");
cropButton.disabled = true;

let saveButton = document.createElement("button"); // Save Image Button
saveButton.textContent = "Save Image";
saveButton.style.cssText = "width:250px; height: 40px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 3px 1px #808080; background-color: #c080e9 ; color: white; border: 2px solid black; font-size: 18px; cursor:pointer;";
saveButton.classList.add("StyleHover");
saveButton.disabled = true;

let selectFilter = document.createElement('select'); // Select Filter Dropdown
selectFilter.disabled = true;
selectFilter.setAttribute("class", "form-select");
selectFilter.style.cssText = "width:250px; height: 40px; margin-top: 20px; border-radius: 5px; box-shadow: 0px 0px 3px 1px #808080; background-color: #c080e9 ; color: white; border: 2px solid black; font-size: 18px; cursor:pointer;";
selectFilter.classList.add("StyleHover");

let mainFeedStyle = document.createElement('style');
mainFeedStyle.innerHTML = `
    .StyleHover:hover {
        background-color: #ff0000;
        border: 2px solid black;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
        transition: ease-out;
    }
`;
document.head.appendChild(mainFeedStyle);


let rangeInput = document.createElement('input'); // Range Button
rangeInput.type = 'range';
rangeInput.style.cssText = "width: 300px; margin-top: 30px; cursor:pointer;";
rangeInput.disabled = true;

let plusMinusDiv = document.createElement('div'); // Div for Plus and Minus
plusMinusDiv.style.cssText = "display: flex; align-content: center; flex-direction: row; margin-top: 20px;";

let Minus = document.createElement("img"); // Minus Button
Minus.src = 'Image/Minus-.png';
Minus.style.cssText = 'height: 30px; cursor:pointer;';

let rangeLabel = document.createElement('p'); // Percentage Label
rangeLabel.innerText = "0%";
rangeLabel.style.margin = "30px";

let Plus = document.createElement("img"); // Plus Button
Plus.src = 'Image/Plus-.png';
Plus.style.cssText = 'height: 30px; cursor:pointer;';

plusMinusDiv.appendChild(Minus);
plusMinusDiv.appendChild(rangeLabel);
plusMinusDiv.appendChild(Plus);

let resetButton = document.createElement("button"); // Reset Button
resetButton.textContent = "Reset Filter";
resetButton.style.cssText = "width:250px; height: 40px; border-radius: 5px; box-shadow: 0px 0px 3px 1px #808080; background-color: #c080e9 ; color: white; border: 2px solid black; font-size: 18px; cursor:pointer;";
resetButton.disabled = true;

let CropDoneButton = document.createElement("button"); // Reset Button
CropDoneButton.textContent = "Crop Done";
CropDoneButton.style.cssText = "width:250px; height: 40px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 3px 1px #808080; background-color: #c080e9 ; color: white; border: 2px solid black; font-size: 18px; cursor:pointer;";
CropDoneButton.disabled = true;

// -------------------------------- Crop Image -----------------------------------------------------------

let CropOptionDiv = document.createElement('div');
CropOptionDiv.style.cssText = "display: grid; grid-template-columns: repeat(2, auto); gap: 10px; margin-top: 20px";

let Height = document.createElement('input');
Height.type = "number";
Height.max = 780;
Height.placeholder = "Enter Height";
Height.style.cssText = "height: 30px; width: 100px;";

let Width = document.createElement('input');
Width.type = "number";
Width.max = 780;
Width.placeholder = "Enter Width";
Width.style.cssText = "height: 30px; width: 100px;";

let CropDefault = document.createElement('div');    // Div ---------------
CropDefault.style.cssText = "display: flex; gap: 10px; margin-top: 20px";

let Size1 = document.createElement('button');
Size1.innerText = "16:9";
Size1.style.cssText = "height: 35px; width: 70px; border-radius: 5px;";
Size1.addEventListener("click", () => cropper.setAspectRatio(16 / 9));

let Size2 = document.createElement('button');
Size2.innerText = "4:3";
Size2.style.cssText = "height: 35px; width: 70px; border-radius: 5px;";
Size2.addEventListener("click", () => cropper.setAspectRatio(4 / 3));

let Size3 = document.createElement('button');
Size3.innerText = "1:1";
Size3.style.cssText = "height: 35px; width: 70px; border-radius: 5px;";
Size3.addEventListener("click", () => cropper.setAspectRatio(1 / 1));

let Size4 = document.createElement('button');
Size4.innerText = "2:3";
Size4.style.cssText = "height: 35px; width: 70px; border-radius: 5px;";
Size4.addEventListener("click", () => cropper.setAspectRatio(2 / 3));

let RoteteFlipDiv = document.createElement('div');    // Div --------------------
RoteteFlipDiv.style.cssText = "display: flex; gap: 10px; margin-top: 20px;";

let Rotete1 = document.createElement('img');
Rotete1.src = "Image/Rotate-Left-icon2.png";

let Rotete2 = document.createElement('img');
Rotete2.src = "Image/Rotate-Left-icon.png";

let Rotete3 = document.createElement('img');
Rotete3.src = "Image/Flip-Vertical.png";

let Rotete4 = document.createElement('img');
Rotete4.src = "Image/Flip-Horizontal.png";


RoteteFlipDiv.appendChild(Rotete2);
RoteteFlipDiv.appendChild(Rotete1);
RoteteFlipDiv.appendChild(Rotete3);
RoteteFlipDiv.appendChild(Rotete4);

CropOptionDiv.appendChild(Height);
CropOptionDiv.appendChild(Width);
CropDefault.appendChild(Size1);
CropDefault.appendChild(Size2);
CropDefault.appendChild(Size3);
CropDefault.appendChild(Size4);

let filters = [
    { value: "none", text: "Select Filter", min: 0, max: 100, default: 0 }, // Set All Filters And Values
    { value: "blur", text: "Blur", min: 0, max: 10, default: 0 },
    { value: "brightness", text: "Brightness", min: 0, max: 200, default: 100 },
    { value: "contrast", text: "Contrast", min: 0, max: 200, default: 100 },
    { value: "drop-shadow", text: "DropShadow", min: 0, max: 50, default: 0 },
    { value: "grayscale", text: "Grayscale", min: 0, max: 100, default: 0 },
    { value: "hue-rotate", text: "HueRotate", min: 0, max: 360, default: 0 },
    { value: "invert", text: "Invert", min: 0, max: 100, default: 0 },
    { value: "opacity", text: "Opacity", min: 0, max: 100, default: 100 },
    { value: "saturate", text: "Saturation", min: 0, max: 300, default: 100 },
    { value: "sepia", text: "Sepia", min: 0, max: 100, default: 0 }
];
 
// let filters = [
//     { value: "none", text: "No Filter", min: 0, max: 100, default: 0 },
//     { value: "blur", text: "Blur", min: 0, max: 20, default: 0 },
//     { value: "brightness", text: "Brightness", min: 0, max: 300, default: 100 },
//     { value: "contrast", text: "Contrast", min: 0, max: 300, default: 100 },
//     { value: "drop-shadow", text: "DropShadow", min: 0, max: 100, default: 0 },
//     { value: "grayscale", text: "Grayscale", min: 0, max: 100, default: 0 },
//     { value: "hue-rotate", text: "HueRotate", min: 0, max: 360, default: 0 },
//     { value: "invert", text: "Invert", min: 0, max: 100, default: 0 },
//     { value: "opacity", text: "Opacity", min: 0, max: 100, default: 100 },
//     { value: "saturate", text: "Saturate", min: 0, max: 300, default: 100 },
//     { value: "sepia", text: "Sepia", min: 0, max: 100, default: 0 },
//     { value: "clip-path", text: "Clip Path (Shape)", min: 0, max: 100, default: 0 },
//     { value: "perspective", text: "Perspective", min: 0, max: 2000, default: 0 },
//     { value: "skewX", text: "Skew X", min: 0, max: 360, default: 0 },
//     { value: "skewY", text: "Skew Y", min: 0, max: 360, default: 0 },
//     { value: "transform", text: "Transform (Scale/Rotate)", min: 0, max: 2, default: 1 },
//     { value: "rotateX", text: "Rotate X", min: 0, max: 360, default: 0 },
//     { value: "rotateY", text: "Rotate Y", min: 0, max: 360, default: 0 },
//     { value: "translateX", text: "Translate X", min: -500, max: 500, default: 0 },
//     { value: "translateY", text: "Translate Y", min: -500, max: 500, default: 0 },
// ];


filters.forEach(f => {
    let option = document.createElement('option'); // Loop Help Object In option
    option.value = f.value;
    option.text = f.text;
    selectFilter.appendChild(option);
});

let filterValues = { // Start Filter Value
    blur: 0,
    brightness: 100,
    contrast: 100,
    'drop-shadow': '0 0 0px black',
    grayscale: 0,
    'hue-rotate': 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
};

function applyFilters() {
    let selectedFilter = selectFilter.value;
    filterValues[selectedFilter] = rangeInput.value;  // Apply Filter

    if (selectedFilter === 'drop-shadow') {
        filterValues['drop-shadow'] = `0 0 ${rangeInput.value}px black`; // Apply Shadow
    }


    // Update the filter Value
    Img.style.filter = `
        blur(${filterValues.blur}px)
        brightness(${filterValues.brightness}%) 
        contrast(${filterValues.contrast}%) 
        drop-shadow(${filterValues['drop-shadow']}) 
        grayscale(${filterValues.grayscale}%) 
        hue-rotate(${filterValues['hue-rotate']}deg) 
        invert(${filterValues.invert}%) 
        opacity(${filterValues.opacity}%) 
        saturate(${filterValues.saturate}%) 
        sepia(${filterValues.sepia}%)`;

    rangeLabel.innerText = `${rangeInput.value}%`; // Equal Value Filter
}

rangeInput.addEventListener('input', applyFilters);

Plus.addEventListener('click', () => {
    rangeInput.value = Number(rangeInput.value) + 1; // Plus 1 Value
    applyFilters();
});

Minus.addEventListener('click', () => {
    rangeInput.value = Number(rangeInput.value) - 1; // Minus 1 Value
    applyFilters();
});

selectFilter.addEventListener('change', () => {
    let selectedFilter = selectFilter.value;
    rangeInput.value = filterValues[selectedFilter]; // apply default Value
    rangeLabel.innerText = `${rangeInput.value}%`;

    rangeInput.max = filters.find(f => f.value === selectedFilter).max; // Max Value Input 
    applyFilters();
});


let cropper; // Cropper Image

Height.addEventListener('input', () => {
    const newHeight = parseInt(Height.value);
    if (newHeight && cropper) {
        cropper.setCropBoxData({ height: newHeight });  // Change crop height
    }
});

Width.addEventListener('input', () => {
    const newWidth = parseInt(Width.value);
    if (newWidth && cropper) {
        cropper.setCropBoxData({ width: newWidth });  // Change crop width
    }
});

fileInput.addEventListener("change", () => {

    cropButton.disabled = false; // Enable all Buttons
    saveButton.disabled = false;
    selectFilter.disabled = false;
    rangeInput.disabled = false;
    resetButton.disabled = false;
    chooseButton.disabled = false;

    const reader = new FileReader(); // File Read And Show
    localImage.style.display = "none";
    reader.onload = () => {
        ImgPreView.src = reader.result;
        Img.src = reader.result;

        cropButton.addEventListener('click', () => {

            cropButton.disabled = true; // Deseble all buttons 
            saveButton.disabled = true;
            selectFilter.disabled = true;
            rangeInput.disabled = true;
            resetButton.disabled = true;
            chooseButton.disabled = true;
            CropDoneButton.disabled = false;


            if (cropper) cropper.destroy();
            cropper = new Cropper(Img, {
                viewMode: 1,
                responsive: true,
                autoCropArea: 0.8,
                movable: true,
                zoomable: true,
                rotatable: true,
            });

            CropDoneButton.disabled = false;
        });
    };

    reader.readAsDataURL(fileInput.files[0]);
});

CropDoneButton.addEventListener('click', () => {
    if (cropper) {
        const canvas = cropper.getCroppedCanvas();
        Img.src = canvas.toDataURL(); // Crop Image 
        cropper.destroy();
        cropper = null;

        CropDoneButton.disabled = true; // Disable the button to avoid redundant clicks
        cropButton.disabled = false;
        saveButton.disabled = false;
        selectFilter.disabled = false;
        rangeInput.disabled = false;
        resetButton.disabled = false;
        chooseButton.disabled = false;
    }
});

let rotationAngle = 0; // Initial angle

Rotete2.addEventListener('click', () => {   // Rotete Image 
    rotationAngle -= 90;
    Img.style.transform = `rotate(${rotationAngle}deg)`;
});

Rotete1.addEventListener('click', () => { // Rotete Image 
    rotationAngle += 90;
    Img.style.transform = `rotate(${rotationAngle}deg)`;
});

Rotete3.addEventListener('click', () => {
    if (Img.style.transform === 'scaleX(-1)') {
        Img.style.transform = 'scaleX(1)';   // Rotete Image 
    } else {
        Img.style.transform = 'scaleX(-1)';   // Rotete Image 
    }
});

Rotete4.addEventListener('click', () => {
    if (Img.style.transform === 'scaleY(-1)') {  // Rotete Image 
        Img.style.transform = 'scaleY(1)';
    } else {
        Img.style.transform = 'scaleY(-1)';
    }
});


resetButton.addEventListener('click', () => {
    if (cropper) {
        cropper.reset(); // Reset Crop
        result.src = "";
    }
    ImgPreView.style.display = "block";
    Img.src = ImgPreView.src;
    Img.style.filter = "none";  // Reset Filter
    rangeLabel.innerText = "0%";
    rangeInput.value = "50";
    selectFilter.selectedIndex = 0;
});

saveButton.addEventListener('click', () => {
    if (!Img.src) {
        alert("No image loaded to save!");
        return;
    }
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = Img.naturalWidth;
    canvas.height = Img.naturalHeight;
    ctx.filter = Img.style.filter;
    ctx.drawImage(Img, 0, 0, canvas.width, canvas.height);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'edited-image.png';
    link.click();
});



mainDiv.appendChild(miniDiv);
miniDiv.appendChild(functionalityDiv);
miniDiv.appendChild(ImageDiv);

functionalityDiv.appendChild(chooseButton);
functionalityDiv.appendChild(cropButton);
functionalityDiv.appendChild(saveButton);
functionalityDiv.appendChild(selectFilter);
functionalityDiv.appendChild(rangeInput);
functionalityDiv.appendChild(plusMinusDiv);
functionalityDiv.appendChild(resetButton);
functionalityDiv.appendChild(CropDoneButton);
functionalityDiv.appendChild(CropOptionDiv);
functionalityDiv.appendChild(CropDefault);
functionalityDiv.appendChild(RoteteFlipDiv);