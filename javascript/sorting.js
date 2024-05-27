const numbers = [74, 18, 10, 5, 84, 105];

numbers.sort((a, b) => a - b)

// console.log(numbers);

const products = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: 'phone',
        price: 500
    },
    {
        name: 'tv',
        price: 1500
    },
    {
        name: 'pc',
        price: 1200
    }
];

products.sort((a, b) => {
    return a.price - b.price;
});

console.log(JSON.stringify(products, null, 2));

const productsFilter = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: 'phone',
        price: 500
    },
    {
        name: 'tv',
        price: 1500   
    },
    {
        name: 'pc',
        price: 1200
    }
];

const maxPrice = 1000;

const filteredProducts = productsFilter.filter(product => product.price <= maxPrice);

console.log(JSON.stringify(filteredProducts, null, 2));
                                     