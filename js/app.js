const loadProduct = () => {
    fetch('./product.json')
        .then(res => res.json())
        .then(data => showProduct(data))
        .catch(err => console.log(err))
}

const showProduct = data => {
    const productContainer = document.getElementById('product-container');
    console.log(data)
    data.forEach(product => {
        const { id, name, price, description, image } = product
        console.log(image)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
        <div class="d-flex p-3 flex-row-reverse gap-2 fs-4 btn">
            <i onclick="handleBookmark('${id}', '${name}', '${price}')" class="fa-solid fa-bookmark"></i>
            <i class="fa-regular fa-bookmark "></i>
        </div>
            <img src="${image}" class="p-3 img-fluid" alt="..." style="height: 300px;">
            <div class="card-body">
                <h2 class="card-title">${name}</h2>
                <h5>Price: ${price}</h5>
                <p class="card-text">${description}</p>
            </div>
        </div>
        `
        productContainer.appendChild(div)
    });
}

const handleBookmark = (id, name, price) => {
    const previousBookmark = JSON.parse(localStorage.getItem('bookmark'));
    let bookmark = [];
    console.log(bookmark)
    const product = { id, name, price, bookmark: true }
    if (previousBookmark) {
        const isThisProductBookmark = previousBookmark.find(pd => pd.id == id);
        if (isThisProductBookmark) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This product is already bookmark',
            })
        } else {
            bookmark.push(...previousBookmark, product)
            localStorage.setItem('bookmark', JSON.stringify(bookmark))
        }

        // localStorage.getItem('bookmark')
    } else {
        bookmark.push(product)
        localStorage.setItem('bookmark', JSON.stringify(bookmark))
    }


}
loadProduct()