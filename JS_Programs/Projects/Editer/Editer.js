let mainDiv = document.getElementById("main");

mainDiv.style.display = 'flex';
mainDiv.style.justifyContent = 'center';
mainDiv.style.alignItems = 'center';
mainDiv.style.height = '100vh';


let miniDiv = document.createElement('div');
miniDiv.setAttribute("style", "height: 510px; width: 900px; border: 2px solid black; display: flex; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0px 0px 20px red;");

let functionalityDiv = document.createElement('div');
functionalityDiv.setAttribute("style", "width: 50%; height: 90%; display: flex; flex-direction: column; justify-content: center; align-items: center;");

let h1 = document.createElement("h1");
h1.innerHTML = "Easy Edit";
h1.setAttribute("style", "margin-left: 300px; text-shadow: 0px 5px 10px yellow; display: flex;");
functionalityDiv.appendChild(h1);

let ImageDiv = document.createElement('div');
ImageDiv.setAttribute("style", "width: 50%; height: 90%; display: flex; justify-content: center; align-items: center; position: relative;");

let fileInput = document.createElement('input');
fileInput.setAttribute("type", "file");
fileInput.setAttribute("accept", "image/*");
fileInput.style.display = 'none';

let localImage = document.createElement("img");
localImage.setAttribute("src", "gallery.png");
localImage.setAttribute("style", "max-width: 100%; max-height: 80%; margin: auto; position: absolute; filter: drop-shadow(0px 5px 10px green);margin: 0px");

ImageDiv.appendChild(localImage);

let Img = document.createElement('img');
Img.setAttribute("style", "max-width: 100%; max-height: 100%; display: none; margin: auto; position: absolute; border: 2px solid black;");
ImageDiv.appendChild(Img);

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            Img.setAttribute("src", e.target.result);
            Img.style.display = 'block';
            localImage.remove();
        };
        reader.readAsDataURL(file);
    }
});


let ChooseButton = document.createElement('button');
ChooseButton.setAttribute("style", "width: 120px; height: 30px; border-radius: 5px; margin-top: 600px; margin-left: 20px;box-shadow: 0px 5px 20px blue;");
ChooseButton.textContent = "Choose Image";
ChooseButton.addEventListener('click', () => {
    fileInput.click();
});

let saveImage = document.createElement("button");
saveImage.setAttribute("style", "width: 120px; height: 30px; border-radius: 5px; margin-top: 600px; margin-left: 20px; box-shadow: 0px 5px 20px blue;");
saveImage.textContent = "Save Image";

let RangeButton = document.createElement('input');
RangeButton.setAttribute("type", "range");
RangeButton.setAttribute("style", "width: 250px; margin-top: 400px");

let pGrap = document.createElement("p");
RangeButton.addEventListener('input', () => {
    pGrap.innerText = `${RangeButton.value}%`;
});

let selectBar = document.createElement('select');
selectBar.setAttribute("style", "width: 120px; border-radius: 5px; box-shadow: 0px 0px 20px green;");

let options = [
    { value: "none", text: "Select Filter", min: 0, max: 100, default: 0 },
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

options.forEach(optionData => {
    let option = document.createElement("option");
    option.value = optionData.value;
    option.text = optionData.text;
    selectBar.appendChild(option);
});

const filterValues = {
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

const updateImageFilter = () => {
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
        sepia(${filterValues.sepia}%)
    `;
};

const setInitialRange = () => {
    const selectedFilter = selectBar.value;
    const filter = options.find(opt => opt.value === selectedFilter);
    RangeButton.min = filter.min;
    RangeButton.max = filter.max;
    RangeButton.value = filter.default;
    pGrap.innerText = RangeButton.value;
};

RangeButton.addEventListener('input', () => {
    const selectedFilter = selectBar.value;
    filterValues[selectedFilter] = RangeButton.value;
    updateImageFilter();
    pGrap.innerText = RangeButton.value;
});

selectBar.addEventListener('change', setInitialRange);
setInitialRange();

saveImage.addEventListener('click', () => {
    if (Img.src) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = Img.naturalWidth;
        canvas.height = Img.naturalHeight;
        ctx.filter = Img.style.filter;
        ctx.drawImage(Img, 0, 0, canvas.width, canvas.height);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'edited_image.png';
        link.click();
    }
});

let resetButton = document.createElement('button');
resetButton.textContent = "Reset Filter";
resetButton.setAttribute("style", "width: 120px; height: 30px; border-radius: 5px; margin-top: 120px; box-shadow: 0px 5px 20px blue;");
resetButton.addEventListener('click', () => {
    Img.style.filter = 'none';
    Object.keys(filterValues).forEach(key => filterValues[key] = options.find(opt => opt.value === key).default);
    setInitialRange();
    updateImageFilter();
    pGrap.innerText = RangeButton.value;
});

ImageDiv.appendChild(fileInput);
ImageDiv.appendChild(Img);
ImageDiv.appendChild(ChooseButton);
functionalityDiv.appendChild(RangeButton);
functionalityDiv.appendChild(pGrap);
functionalityDiv.appendChild(selectBar);
ImageDiv.appendChild(saveImage);
functionalityDiv.appendChild(resetButton);
miniDiv.appendChild(functionalityDiv);
miniDiv.appendChild(ImageDiv);
mainDiv.appendChild(miniDiv);
