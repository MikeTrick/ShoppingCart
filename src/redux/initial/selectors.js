export const getAppState = ({app}) => ({
    discount: app.discount,
})

export const getProductState = ({products}) => ({
    totalSum: products.products.reduce((acc,{price})=> (parseFloat(acc) + parseFloat(price)).toFixed(2), 0 ),
    productsCount: products.products.length,
    products: products.products,
})
