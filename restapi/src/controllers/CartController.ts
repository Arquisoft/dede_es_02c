import { RequestHandler } from "express";
import { ObjectId } from "mongodb";
const { response, request } = require('express')
import { Cart } from "../model/Cart";
import { User } from "../model/User";
import { Product } from "../model/Product";

export const createCart = async (req = request, res = response) => {
    try{
        const { client_id} = req.body
        if(await checkClient(client_id)){
            if(await checkCart(client_id)){
                const cart = new Cart();
                cart.client_id = client_id;
                cart.products = [];
                await cart.save();
                res.status(201).json({
                    cart
                })
            }else{
                return res.status(400).json({message: 'The cart already exists'});
            }
        }else{
            return res.status(404).json({message: 'User not found'});
        }
    }catch(error){
        console.log(error)
        res.status(400).json({msg: error})
    }
};

async function checkClient(client_id: ObjectId):Promise<boolean>{
    if(client_id){
        const userFound =  await User.findOne({_id: client_id});
        if(userFound){
            return true;
        }
        return false;
    }
    return false;
}
async function checkCart(client_id: ObjectId):Promise<boolean> {
    if(client_id){
        const cartFound =  await Cart.findOne({client_id: client_id});
        if(cartFound){
            return false;
        }else{
            return true;
        }
    }
    return false;
}
