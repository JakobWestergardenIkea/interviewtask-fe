import axios from 'axios';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from '../types';

const url = 'http://localhost:3000/products';

export const createProduct = async (createProductDto: CreateProductDto) => {
  const response = await axios.post(url, createProductDto);
  return response.data;
};

export const getAllProducts = async (): Promise<{ id: string; name: string }[]>  => {
  const response = await axios.get(url);
  return response.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};