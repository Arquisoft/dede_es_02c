export type User = {
    name:string;
    email:string;
}

export type Product = {
  codigo: string;
  nombre: string;
  categoria: string;
  precio: number;
  stock: string;
  url: string;
  descripcion: string;
}


export type Order = {
  id: string |undefined;
  codigo: string;
  fecha: Date,
  precioTotal: number,
  product: ProductPedido,
  correo: string
  id_usuario: string;
}

export type ProductPedido = {
    id_producto: string;
    cantidad: number;
    id_carrito: string;
}