import axios from 'axios';
import { Colour } from '../types';

const url = 'http://localhost:3000/colours';

export const getAllColours = async (): Promise<Colour[]> => {
  const response = await axios.get(url);
  return response.data;
};