/* los IDs de firebase son en string, por eso no usamos el ID como un number */
export const productos = [
    // {
    //     // id:'01', NO LO SUBIMOS A FIREBASE
    //     name:"Random 1",
    //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis",
    //     stock:50,
    //     price:25000,
    //     category:"nuevos",
    //     img: "https://picsum.photos/200"
    //SACO EL OBJ QUE SUBI A MANO EN FIREBASE
    // },
    {
       // id: '04',
        name: "Random 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officia tempora distinctio pariatur porro sint ab optio veritatis provident deserunt, quos labore fugiat magnam possimus voluptas! Quos commodi recusandae officia.",
        stock: 60,
        price: 12000,
        category: "nike",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/1327924-1200-1200?width=1200&height=1200&aspect=true"
    },
    {
        // id:'03',
        name: "Random 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis",
        stock: 20,
        price: 65000,
        category: "ofertas",
        img: "https://i.postimg.cc/CK30CyTZ/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp"

    },
    {
        // id:'04',
        name: "Random 4",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis",
        stock: 10,
        price: 55000,
        category: "ofertas",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&"

    }
]
/* exportamos solo la promesa, no el array de productos, para simular un delay */
let error = false

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                //rechazar
                reject('Hubo un error intente mas tarde')
            } else {
                //resolver
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                //rechazar
                reject('Hubo un error intente mas tarde')
            } else {
                //resolver
                let found = productos.find((item) => item.id === id)
                resolve(found)
            }
        }, 2000)
    })
}

