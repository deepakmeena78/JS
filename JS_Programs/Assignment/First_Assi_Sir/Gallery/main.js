let addButton = document.getElementById('Add');
let File = document.getElementById('File');
let deleteButton = document.getElementById('Delete');

addButton.addEventListener('click', () => {
    inputFile.click();    
});

deleteButton.addEventListener('click', () => {
    inputFile.value = '';
});

const inputImg = document.getElementById('imgInput');
const img = document.getElementById('img');

function getImg(event){
    for (let i = 0; i <10; i++){
             const file = event.target.files[i];
     url = url.append(file)
     let url = window.URL.createObjectURL(file);
     img.src = url;
    }
}
inputImg?.addEventListener('change', getImg);