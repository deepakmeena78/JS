let addButton = document.getElementById('Add');
let fileInput = document.getElementById('Input');
let imageContainer = document.getElementById('imageContainer');

addButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        let url = window.URL.createObjectURL(file);

        let wrapper = document.createElement('div');
        wrapper.style.display = 'inline-block';
        wrapper.style.position = 'relative';
        wrapper.style.margin = '10px';

        let img = document.createElement('img');
        img.src = url;
        img.style.width = '200px';
        img.style.height = 'auto';

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'x';
        deleteButton.style.position = 'absolute';
        deleteButton.style.top = '5px';
        deleteButton.style.right = '5px';

        deleteButton.addEventListener('click', () => {
            wrapper.remove();   
        });

        wrapper.appendChild(img);
        wrapper.appendChild(deleteButton);
        imageContainer.appendChild(wrapper);
    }
});
