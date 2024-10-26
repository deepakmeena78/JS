let mainDiv = document.getElementById("main");

mainDiv.style.display = 'flex';
mainDiv.style.justifyContent = 'center';
mainDiv.style.alignItems = 'center';
mainDiv.style.height = '100vh';

let miniDiv = document.createElement('div');
miniDiv.setAttribute("style", "height: 510px; width: 900px; border: 2px solid black; display: flex; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0px 5px 10px grey;");

let functionalityDiv = document.createElement('div');
functionalityDiv.setAttribute("style", "width: 50%; height: 90%; display: flex; flex-direction: column; justify-content: center; align-items: center;");

let ImageDiv = document.createElement('div');
ImageDiv.setAttribute("style", "width: 50%; height: 90%; display: flex; justify-content: center; align-items: center; position: relative;");

let fileInput = document.createElement('input');
fileInput.setAttribute("type", "file");
fileInput.setAttribute("accept", "image/*");
fileInput.style.display = 'none';

let Img = document.createElement('img');
Img.setAttribute("style", "max-width: 100%; max-height: 100%; display: none; margin: auto; position: absolute; border: 2px solid black;");

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            Img.setAttribute("src", e.target.result);
            Img.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

let ChooseButton = document.createElement('button');
ChooseButton.setAttribute("style", "width: 120px; height: 30px; border-radius: 5px; margin-top: 600px;margin-left: 20px");
ChooseButton.textContent = "Choose Image";
ChooseButton.addEventListener('click', () => {
    fileInput.click();
});

let saveImage = document.createElement("button");
saveImage.setAttribute("style", "width: 120px; height: 30px; border-radius: 5px; margin-top: 600px;margin-left: 20px");
saveImage.textContent = "Save Image";

let RangeButton = document.createElement('input');
RangeButton.setAttribute("type", "range");
RangeButton.min = 0;
RangeButton.max = 100;
RangeButton.value = 50;
RangeButton.setAttribute("style", "width: 250px; margin-top: 400px");

let pGrap = document.createElement("p");
pGrap.innerText = "100%";

pGrap.innerText = `${RangeButton.value}%`;

ImageDiv.appendChild(fileInput);
ImageDiv.appendChild(Img);
ImageDiv.appendChild(ChooseButton);
functionalityDiv.appendChild(RangeButton);
functionalityDiv.appendChild(pGrap);
ImageDiv.appendChild(saveImage);
miniDiv.appendChild(functionalityDiv);
miniDiv.appendChild(ImageDiv);
mainDiv.appendChild(miniDiv);