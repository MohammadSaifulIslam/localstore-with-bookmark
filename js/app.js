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

loadProduct()