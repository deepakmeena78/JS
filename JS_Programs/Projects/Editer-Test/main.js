const fileInput = document.querySelector('.file-input'),
    fileOptions = document.querySelectorAll('.filter button'),
    filterName = document.querySelector('.filter-info .name'),
    filterValue = document.querySelector('.filter-info .value'),
    filterSlider = document.querySelector('.slider input'),
    previewImage = document.querySelector('.preview-img img'),
    rotateOptions = document.querySelectorAll('.rotate button'),
    resetImage = document.querySelector('.reset-filter'),
    chooseImage = document.querySelector('.choose-img'),
    saveImage = document.querySelector('.save-img');

let Brightness = 100, Saturation = 100, Inversion = 0, Grayscale = 0;
let rotate = 0, flipPhoto = 1, flipVertical = 1;

const applyFilters = () => {
    previewImage.style.transform = `rotate(${rotate}deg) scale(${flipPhoto},${flipVertical})`;
    previewImage.style.filter = `brightness(${Brightness}%) saturate(${Saturation}%) invert(${Inversion}%) grayscale(${Grayscale}%)`;
}

const loadImage = () => {
    let file = fileInput.files[0];
    if (!file) return;

    previewImage.src = URL.createObjectURL(file);
    previewImage.addEventListener("load", () => {
        document.querySelector(".container").classList.remove("disable");
    });
}

fileInput.addEventListener('change', loadImage);

fileOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;

        if (option.id === "brightness") {
            filterSlider.max = "200";
            filterSlider.value = Brightness;
            filterValue.innerText = `${Brightness}%`;
        }
        else if (option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = Saturation;
            filterValue.innerText = `${Saturation}%`;
        }
        else if (option.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = Inversion;
            filterValue.innerText = `${Inversion}%`;
        }
        else {
            filterSlider.max = "100";
            filterSlider.value = Grayscale;
            filterValue.innerText = `${Grayscale}%`;
        }
    });
});

const updateFilter = () => {
    filterValue.innerHTML = `${filterSlider.value}%`;
    const selectedFilter = document.querySelector('.filter .active');

    if (selectedFilter.id === "brightness") {
        Brightness = filterSlider.value;
    }
    else if (selectedFilter.id === "saturation") {
        Saturation = filterSlider.value;
    }
    else if (selectedFilter.id === "inversion") {
        Inversion = filterSlider.value;
    }
    else {
        Grayscale = filterSlider.value;
    }
    applyFilters();
}

rotateOptions.forEach(option => {
    option.addEventListener('click', () => {
        if (option.id === "left") {
            rotate -= 90;
        }
        else if (option.id === "right") {
            rotate += 90;
        }
        else if (option.id === "horizontal") {
            flipPhoto = flipPhoto === 1 ? -1 : 1;
        }
        else {
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyFilters();
    })
});

const resetFitter = () => {
    Brightness = 100, Saturation = 100, Inversion = 0, Grayscale = 0;
    rotate = 0, flipPhoto = 1, flipVertical = 1;
    fileOptions[0].click();
    applyFilters();
}

const saveImagecom = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImage.naturalWidth;
    canvas.height = previewImage.naturalHeight;

    ctx.filter = `brightness(${Brightness}%) saturate(${Saturation}%) invert(${Inversion}%) grayscale(${Grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);

    if (rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180);
    }

    ctx.scale(flipPhoto, flipVertical);
    ctx.drawImage(previewImage, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
}

filterSlider.addEventListener("input", updateFilter);
resetImage.addEventListener("click", resetFitter);
saveImage.addEventListener("click", saveImagecom);
chooseImage.addEventListener('click', () => fileInput.click());
