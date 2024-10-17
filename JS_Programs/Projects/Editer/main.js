const fileInput = document.querySelector(".file-inout"),
    filteroption = document.querySelectorAll(".filter bu1"),
    previewImage = document.querySelector(".preimage img"),
    filterName = document.querySelector(".filter name"),
    filterValue = document.querySelector(".filter .value"),
    filterSlider = document.querySelector(".slider input"),
    chooseImage = document.querySelector(".choose");

const loadImage = () => {
    let file = fileInput.files[0];
    if (!file) return;
    previewImage.src = URL.createObjectURL(file);
    previewImage.addEventListener("load", () => {
        document.querySelector('dd').classList.remove('disable');
    });
}

filteroption.forEach(Option => {
    Option.addEventListener("click", () => {
        document.querySelector(".filter .active").classList.remove("active");
        Option.classList.add("active");
        filterName.innerText = Option.innerText;
    });
});

const updateFilter = () =>{
filterValue.innerText = `${filterSlider.value}%`;
const selectedFilter = document.querySelector('filter')
}

fileInput.addEventListener("change", loadImage);
filterSlider.addEventListener("input", updateFilter);
chooseImage.addEventListener("click", () => fileInput.click());
