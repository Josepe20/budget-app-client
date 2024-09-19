import axios from '@/api/axiosConfig';
import { SingleCategoryExpenseResponse, ListCategoryExpenseResponse } from './categoryExp.interface';


export const getAllCategories = async (): Promise<ListCategoryExpenseResponse> => {
  const response = await axios.get<ListCategoryExpenseResponse>('/categories/');
  return response.data;
};

export const getCategoryById = async (categoryId: number): Promise<SingleCategoryExpenseResponse> => {
  const response = await axios.get<SingleCategoryExpenseResponse>(`/categories/${categoryId}`);
  return response.data;
};

