const fileInput = document.querySelector('.file-input'),
    fileOptions = document.querySelectorAll('.filter button'),
    filterName = document.querySelector('.filter-info .name'),
    filterValue = document.querySelector('.filter-info .value'),
    filterSlider = document.querySelector('.slider input'),
    previewImage = document.querySelector('.preview-img img'),
    chooseImage = document.querySelector('.choose-img');

const loadImage = () => {
    let file = fileInput.files[0];
    if (!file) return;
    previewImage.src = URL.createObjectURL(file);
    previewImage.addEventListener("load", () => {
        document.querySelector(".container").classList.remove("disable")
    });
}

fileOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;
    });
});

const updateFilter = () => {
    filterValue.innerHTML = `${filterSlider.value}%`;
}

fileInput.addEventListener('change', loadImage)
filterSlider.addEventListener("input", updateFilter)
chooseImage.addEventListener('click', () => fileInput.click());