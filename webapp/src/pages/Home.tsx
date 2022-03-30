import React, { useState, useEffect, FC } from 'react';
import { Product } from '../shared/shareddtypes';
import axios from 'axios';
import { Stack, Card, CardContent, CardHeader, CardMedia, Grid } from '@mui/material';
import Products from '../components/Products';

type ProductsProps = {
    onAddCart:(prod:Product) => (void);
    cartItems:Product[]
}

function cargarBanner(){

    return(
        <div>
            <img src="https://i.postimg.cc/nhFPPJwZ/De-De-Banner.png" alt='Banner' />
        </div>
    )
}

const Home = (func: ProductsProps) => {

    const [prods, setProds] = React.useState<Product[]>([]);

    const getProducts = async () => {
        const data = axios.get("http://localhost:5000/product/list").then(
            res => {
                setProds(res.data)
                return res.data
            }
        )

        return data != null
    }

    useEffect(() => {cargarProductos();}, [])

    const cargarProductos = () => {
        prods.map((p) => {
            if(Number.parseInt(p.stock) <= 5 && Number.parseInt(p.stock) >= 0){
                return(
                    <Grid item xs={3} md={3}>
                            <Card  sx={{ maxWidth: 600, maxHeight: 700, minHeight: 700}}>
                                <CardHeader title = {p.nombre}/>
                                <CardMedia component="img" height="300" width = "300" image={p.url} alt={p.nombre} />
                                <CardContent>Precio: {p.precio}€</CardContent>
                                <CardContent>Descripción del producto:</CardContent>
                                <CardContent>{p.descripcion}</CardContent>
                            </Card>
                    </Grid>
                );
            } else {
                return "";
            }
        });
    }
    getProducts()

    return (

        <div className='Home' style={{ marginTop: '300px', marginLeft: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
          <Stack direction= 'column'>
                {cargarBanner()}
                <p>Últimas unidades</p>
                <Products homePage = {true} product = {prods} onAddCart = {func.onAddCart} cartItems = {func.cartItems}/> 

            </Stack>

        </div>
    )
}


export default Home; 