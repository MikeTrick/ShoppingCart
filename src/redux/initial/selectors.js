export const getAppState = ({app}) => ({
    discount: app.discount,
})

export const getProductState = ({products}) => ({
    productsCount: products.products.length,
    products: products.products,
})