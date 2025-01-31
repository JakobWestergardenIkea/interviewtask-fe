import axios from 'axios';
import { ProductType } from '../types';

const url = 'http://localhost:3000/product-types';

export const getAllProductTypes = async (): Promise<ProductType[]> => {
  const response = await axios.get(url);
  return response.data;
};