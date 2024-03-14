const products = [
    {
        id: '1',
        name: 'Remera nike sb',
        price: 2000,
        category: 'remera',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_889944-MLA44249183579_122020-F.webp',
        stock: 20,
        description: 'Descripcion de remera'
    },
    {id:'2', name:'Remera Quicksilver', price: 3000, category: 'remera',img: 'https://cdn.quiksilver.com.ar/media/catalog/product/cache/2c567871808060a6c6ba6753e18925bd/2/2/2231119030_10_1.jpg',stock:15,description: 'Remera quicksilver'},
    {id: '3', name: 'Remera Vans', price: 5000, category:'remera',img: 'https://newsport.vtexassets.com/arquivos/ids/18516612/VN0A4BRWYB2-A.jpg?v=638406634996870000',stock: 30,description: 'Remera Vans'} 
]

export const getProducts = () => {
    console.log("hola")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}