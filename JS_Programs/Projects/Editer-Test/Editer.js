let mainDiv = document.getElementById("main");
mainDiv.setAttribute("style", "display: flex; justify-content: center; align-items: center; height: 100vh; position: relative;");

// window.addEventListener('load', () => {
//     const loader = document.querySelector('.loader');
//     const mainDiv = document.getElementById("main");
//     const loadingType = document.createElement('h1');
//     loadingType.innerHTML = "Loading...";
//     loadingType.style.cssText = "text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black; display: flex; justify-content: center; align-items: center; border-radius: 10px; margin-bottom: 100px; color: white";
//     loader.appendChild(loadingType);

//     loader.style.cssText = "border: 2px solid black; display: flex; justify-content: center; align-items: center; border-radius: 10px;";

//     mainDiv.style.display = 'none';

//     setTimeout(() => {
//         loader.style.display = 'none';
//         mainDiv.style.display = 'flex';
//     }, 5000);
// });

let miniDiv = document.createElement('div'); // Mini Div
miniDiv.style.cssText = "height: calc(100vh - 40px); width: calc(100vw - 200px); border: 2px solid black; display: flex; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0px 0px 20px 10px #808080; background-size: cover; margin: 20px;";
miniDiv.style.backgroundImage = 'url("Image/MiniDiv11.png")';

let functionalityDiv = document.createElement('div'); // Functionality Div
functionalityDiv.style.cssText = "width: 40%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;";

let ImageDiv = document.createElement('div'); // Image Input Div
ImageDiv.style.cssText = "width: 60%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;"; // Apply styles to ImageDiv

let fileInput = document.createElement('input'); // File Input
fileInput.type = "file";
fileInput.accept = "Image/*";
fileInput.style.display = 'none';

let localImage = document.createElement("img"); // Temporary Image
localImage.src = "Image/Gallery12.png";
localImage.style.cssText = "max-width: 100%; max-height: 80%; position: absolute; filter: drop-shadow(0px 5px 10px black);";

let previewImage = document.createElement('div'); // Preview Image Div
previewImage.style.cssText = "width: 100%; height: 30%; display: flex; justify-content: center; align-items: center; margin: 5px; overflow: hidden; position: relative;";

let OriginalImage = document.createElement('div'); // Text Print div
OriginalImage.style.cssText = "width: 100%; height: 5%; display: flex; justify-content: center; align-items: center; margin: 5px; overflow: hidden; position: relative;";

let ImgPreView = document.createElement('img');
ImgPreView.style.cssText = "width: 100%; height: 100%; display: block; position: relative; object-fit: contain; ";
previewImage.appendChild(ImgPreView);

let OriginalImageText = document.createElement('h2'); // Text Original print
OriginalImageText.innerHTML = "Original Image";
OriginalImage.appendChild(OriginalImageText);

let ImgDiv = document.createElement('div'); // Preview Image Div
ImgDiv.style.cssText = "width: 100%; height: 65%; display: flex; justify-content: center; align-items: center; overflow: hidden; position: relative;";

let Img = document.createElement('img'); // Selected Image in IMG
Img.style.cssText = "width: 100%; height: 100%; display: block; position: relative; object-fit: contain; margin: auto;";
ImgDiv.appendChild(Img);

ImageDiv.appendChild(fileInput); // Append In Image Div
ImageDiv.appendChild(localImage);
ImageDiv.appendChild(OriginalImage);
ImageDiv.appendChild(previewImage);
ImageDiv.appendChild(ImgDiv);

let chooseButton = document.createElement('button'); // Choose Image Button
chooseButton.textContent = "Choose Image";
chooseButton.style.cssText = "width: 200px; height: 50px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 10px 5px #808080;";
chooseButton.addEventListener('click', () => fileInput.click());

let cropButton = document.createElement("button"); // Crop Image Button
cropButton.textContent = "Crop Image";
cropButton.style.cssText = "width: 200px; height: 50px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 10px 5px #808080;";
cropButton.disabled = true;

let saveButton = document.createElement("button");// Save Button
saveButton.textContent = "Save Image";
saveButton.style.cssText = "width: 200px; height: 50px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 10px 5px #808080;";
saveButton.disabled = true;

let selectFilter = document.createElement('select'); // Select Filter Button
selectFilter.disabled = true;
selectFilter.setAttribute("class", "form-select");
selectFilter.style.cssText = "width: 200px; height: 50px; margin-top: 10px; border-radius: 5px; box-shadow: 0px 0px 10px 5px #808080;";

let ReSetButton = document.createElement("button"); // Reset Button
ReSetButton.textContent = "Reset Filter";
ReSetButton.style.cssText = "width: 200px; height: 50px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 10px 5px #808080;";
ReSetButton.disabled = true;
ReSetButton.addEventListener('click', () => {
    Img.style.filter = "none";
    rangeLabel.innerText = "0%";
    rangeInput.value = "50%";
    selectFilter.selectedIndex = 0;
});

let rangeInput = document.createElement('input'); // Range Button
rangeInput.type = 'range';
rangeInput.style.cssText = "width: 250px; margin-top: 50px;";
rangeInput.disabled = true;

// Div for Minus Plus
let plusMainusDiv = document.createElement('div');
plusMainusDiv.setAttribute("style", "display : flex ; align-content : center; flex-direction : row");

let Minus = document.createElement("img"); // Minus Button
Minus.style.display = 'none';
Minus.src = 'Image/Minus-.png';
Minus.style.height = '30px';

let rangeLabel = document.createElement('p'); // percentage Button
rangeLabel.innerText = "0%";
rangeLabel.setAttribute("style", "margin: 30px");

let Plus = document.createElement("img"); // Plus Button
Plus.style.display = 'none';
Plus.src = 'Image/Plus-.png';
Plus.style.height = '30px';

plusMainusDiv.appendChild(Minus); // Append all three elements
plusMainusDiv.appendChild(rangeLabel);
plusMainusDiv.appendChild(Plus);

let CropDone = document.createElement("button");  // Crop complete button
CropDone.innerHTML = "Done";
CropDone.style.cssText = "width: 200px; height: 50px; border-radius: 5px; margin-top: 20px; box-shadow: 0px 0px 10px 5px #808080;";
CropDone.style.display = "none";

functionalityDiv.appendChild(chooseButton); // Append All Buttons In Button Div
functionalityDiv.appendChild(cropButton);
functionalityDiv.appendChild(saveButton);
functionalityDiv.appendChild(selectFilter);
functionalityDiv.appendChild(rangeInput);
functionalityDiv.appendChild(plusMainusDiv);
functionalityDiv.appendChild(ReSetButton);
functionalityDiv.appendChild(CropDone);

let filters = [
    { value: "none", text: "Select Filter", min: 0, max: 100, default: 0 }, // Filters
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
filters.forEach(f => { // Value And Filter In Option
    let option = document.createElement('option');
    option.value = f.value;
    option.text = f.text;
    selectFilter.appendChild(option);
});

let croppieInstance; // Declare Croppie instance

// Event listener for file input change
fileInput.addEventListener('change', (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = (event) => {
            // Load the selected image
            localImage.style.display = 'none';
            ImgPreView.src = event.target.result;
            Img.src = event.target.result;

            // Enable the buttons and show controls
            saveButton.disabled = false;
            rangeInput.disabled = false;
            selectFilter.disabled = false;
            cropButton.disabled = false;
            ReSetButton.disabled = false;
            Plus.style.display = 'inline';
            Minus.style.display = 'inline';

            cropButton.addEventListener('click', () => {
                
                // Disable other buttons to avoid interactions during cropping
                chooseButton.disabled = true;
                saveButton.disabled = true;
                rangeInput.disabled = true;
                selectFilter.disabled = true;
                cropButton.disabled = true;
                ReSetButton.disabled = true;
                Plus.style.display = 'none';
                Minus.style.display = 'none';
                CropDone.style.display = "block";
                
                // Destroy any existing Croppie instance
                if (croppieInstance) {
                    croppieInstance.destroy();
                }
                
                // Create a new Croppie instance centered on the image
                croppieInstance = new Croppie(Img, {
                    viewport: { width: 300, height: 300, type: 'square' }, // Larger viewport
                    boundary: {
                        width: ImageDiv.clientWidth - 50, // Adjust boundary size
                        height: ImageDiv.clientHeight - 50
                    },
                    enableResize: true, // Enable resizing
                    enableOrientation: true, // Enable orientation
                    showZoomer: true, // Enable zoomer (zoom controls)
                });
                
                // Center the viewport within the image by adjusting the viewport position
                Img.style.position = 'relative';
            });
            
        };
        reader.readAsDataURL(file);
    }
});

CropDone.addEventListener('click', () => {
    // Enable buttons again
    saveButton.disabled = false;
    rangeInput.disabled = false;
    selectFilter.disabled = false;
    cropButton.disabled = false;
    ReSetButton.disabled = false;
    Plus.style.display = 'inline';
    Minus.style.display = 'inline';
    CropDone.style.display = "none";

    // Get the cropped result from Croppie
    if (croppieInstance) {
        croppieInstance.result({ type: 'base64' }).then((result) => {
            // Apply the cropped image
            Img.src = result;
            ImgPreView.src = result;

            // Destroy the Croppie instance
            croppieInstance.destroy();
            croppieInstance = null;
        });
    }
});



let filterValues = { // Start Filter Value
    blur: 0,
    brightness: 100,
    contrast: 100,
    'drop-shadow': 0,
    grayscale: 0,
    'hue-rotate': 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
};

selectFilter.addEventListener('change', () => { // All Filter Manage
    let selectedFilter = selectFilter.value;
    let filterData = filters.find(f => f.value === selectedFilter);
    rangeInput.min = filterData.min;
    rangeInput.max = filterData.max;
    rangeInput.value = filterData.default;
    rangeLabel.innerText = `${filterData.default}%`;
});

function applyFilters() {  // Function apply filters
    let selectedFilter = selectFilter.value;
    filterValues[selectedFilter] = rangeInput.value;

    Img.style.filter = `
        blur(${filterValues.blur}px) 
        brightness(${filterValues.brightness}%)
        contrast(${filterValues.contrast}%)
        drop-shadow(0 0 ${filterValues['drop-shadow']}px black)
        grayscale(${filterValues.grayscale}%)
        hue-rotate(${filterValues['hue-rotate']}deg)
        invert(${filterValues.invert}%)
        opacity(${filterValues.opacity}%)
        saturate(${filterValues.saturate}%)
        sepia(${filterValues.sepia}%)`;
    rangeLabel.innerText = `${rangeInput.value}%`;
}
rangeInput.addEventListener('input', applyFilters);

Plus.addEventListener('click', () => { // Plus button click
    rangeInput.value = Number(rangeInput.value) + 1;
    applyFilters();
});

Minus.addEventListener('click', () => {   // Minus button click
    rangeInput.value = Number(rangeInput.value) - 1;
    applyFilters();
});


saveButton.addEventListener('click', () => { // Save image And Set Filters
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = Img.naturalWidth;
    canvas.height = Img.naturalHeight;
    ctx.filter = Img.style.filter;
    ctx.drawImage(Img, 0, 0, canvas.width, canvas.height);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'Edit-By-.png';
    link.click();
    alert("it's downloaded");
});

mainDiv.appendChild(miniDiv);               // Append elements
miniDiv.appendChild(functionalityDiv);
miniDiv.appendChild(ImageDiv);

