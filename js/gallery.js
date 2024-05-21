const images = [
    {
        preview: '../img/1s.jpg',
        original: '../img/1m.jpg',
        description: 'foggy forest',
    },
    {
        preview: '../img/2s.jpg',
        original: '../img/2m.jpg',
        description: 'black horse running',
    },
    {
        preview: '../img/3s.jpg',
        original: '../img/3m.jpg',
        description: 'beautiful moon',
    },
    {
        preview: '../img/4s.jpg',
        original: '../img/4m.jpg',
        description: 'autumn roadway',
    },
    {
        preview: '../img/5s.jpg',
        original: '../img/5m.jpg',
        description: 'man with mountains on background',
    },
    {
        preview: '../img/6s.jpg',
        original: '../img/6m.jpg',
        description: 'sea on hand',
    },
    {
        preview: '../img/7s.jpg',
        original: '../img/7m.jpg',
        description: 'woman jumping',
    },
    {
        preview: '../img/8s.jpg',
        original: '../img/8m.jpg',
        description: 'beautiful mountains view',
    }
];

images.forEach(image => {
    let new_img = document.createElement("img");
    new_img.src = image.preview;
    new_img.alt = image.description;
    new_img.dataset.original = image.original;
    let new_list_item = document.createElement("li");
    new_list_item.appendChild(new_img);
    document.querySelector('ul.gallery').appendChild(new_list_item);
})

document.querySelector('ul.gallery').onclick = event => {
    if (event.target.tagName === 'IMG') {
        const instance = basicLightbox.create(`
            <div class="modal">
                <img src="${event.target.dataset.original}" alt="event.target.alt">
            </div>
        `);
        instance.show();
    }
}