if (document.getElementById('speaker-list')) {
    const productContainer = document.getElementById('speaker-list');

    fetch("https://audiophiles.up.railway.app/api/store/speakers/")
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch products");
            return response.json();
        })
        .then(products => {
            if (!products.length) {
                productContainer.innerHTML = "<p>No products found in this category.</p>";
                return;
            }

            productContainer.innerHTML = "";
            products.forEach((product, index) => {
                const isNew = product.is_new ? `<p class="product-new">NEW PRODUCT</p>` : "";

                const productHTML = `
                    <div class="product-showcase ${index % 2 !== 0 ? 'reverse' : ''}">
                        <div class="product-image">
                            <img src="${product.image_absolute_url}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            ${isNew}
                            <h2 class="product-name">${product.name}</h2>
                            <p class="product-description">${product.description}</p>
                            <a href="product.html?id=${product.id}" class="btn btn-primary">SEE PRODUCT</a>
                        </div>
                    </div>
                `;

                productContainer.insertAdjacentHTML("beforeend", productHTML);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            productContainer.innerHTML = "<p>Error loading products. Try again later.</p>";
        });
}


if (document.getElementById('earphone-list')) {
    const productContainer = document.getElementById('earphone-list');

    fetch("https://audiophiles.up.railway.app/api/store/earphones/")
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch products");
            return response.json();
        })
        .then(products => {
            if (!products.length) {
                productContainer.innerHTML = "<p>No products found in this category.</p>";
                return;
            }

            productContainer.innerHTML = "";
            products.forEach((product, index) => {
                const isNew = product.is_new ? `<p class="product-new">NEW PRODUCT</p>` : "";

                const productHTML = `
                    <div class="product-showcase ${index % 2 !== 0 ? 'reverse' : ''}">
                        <div class="product-image">
                            <img src="${product.image.url}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            ${isNew}
                            <h2 class="product-name">${product.name}</h2>
                            <p class="product-description">${product.description}</p>
                            <a href="product.html?id=${product.id}" class="btn btn-primary">SEE PRODUCT</a>
                        </div>
                    </div>
                `;

                productContainer.insertAdjacentHTML("beforeend", productHTML);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            productContainer.innerHTML = "<p>Error loading products. Try again later.</p>";
        });
}



if (document.getElementById('headphone-list')) {
    const productContainer = document.getElementById('headphone-list');

    fetch("https://audiophiles.up.railway.app/api/store/headphones/")
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch products");
            return response.json();
        })
        .then(products => {
            if (!products.length) {
                productContainer.innerHTML = "<p>No products found in this category.</p>";
                return;
            }

            productContainer.innerHTML = "";
            products.forEach((product, index) => {
                const isNew = product.is_new ? `<p class="product-new">NEW PRODUCT</p>` : "";

                const productHTML = `
                    <div class="product-showcase ${index % 2 !== 0 ? 'reverse' : ''}">
                        <div class="product-image">
                            <img src="${product.image_absolute_url}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            ${isNew}
                            <h2 class="product-name">${product.name}</h2>
                            <p class="product-description">${product.description}</p>
                            <a href="product.html?id=${product.id}" class="btn btn-primary">SEE PRODUCT</a>
                        </div>
                    </div>
                `;

                productContainer.insertAdjacentHTML("beforeend", productHTML);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            productContainer.innerHTML = "<p>Error loading products. Try again later.</p>";
        });
}
