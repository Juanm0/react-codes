/* los IDs de firebase son en string, por eso no usamos el ID como un number */
const productos = [
    {
        id: '01',
        name: "Random 1",
        descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officia tempora distinctio pariatur porro sint ab optio veritatis provident deserunt, quos labore fugiat magnam possimus voluptas! Quos commodi recusandae officia.",
        stock: 50,
        price: 15000,
        category: "nuevos",
        img: "https://picsum.photos/200"
    },
    {
        id: '02',
        name: "Random 2",
        descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officia tempora distinctio pariatur porro sint ab optio veritatis provident deserunt, quos labore fugiat magnam possimus voluptas! Quos commodi recusandae officia.",
        stock: 30,
        price: 25000,
        category: "mas vendidos",
        img: "https://picsum.photos/200"
    },
    {
        id: '03',
        name: "Random 3",
        descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officia tempora distinctio pariatur porro sint ab optio veritatis provident deserunt, quos labore fugiat magnam possimus voluptas! Quos commodi recusandae officia.",
        stock: 40,
        price: 22000,
        category: "ofertas",
        img: "https://picsum.photos/200"
    },
    {
        id: '04',
        name: "Random 4",
        descrption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officia tempora distinctio pariatur porro sint ab optio veritatis provident deserunt, quos labore fugiat magnam possimus voluptas! Quos commodi recusandae officia.",
        stock: 60,
        price: 12000,
        category: "nike",
        img: "https://nikearprod.vtexassets.com/arquivos/ids/1327924-1200-1200?width=1200&height=1200&aspect=true"
    }
]
/* exportamos solo la promesa, no el array de productos, para simular un delay */
let error = false
export const getProducts = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                //rechazar
                reject('Hubo un error intente mas tarde')
            }else{
                //resolver
                resolve(productos)
            }
        },2000)
    })
}