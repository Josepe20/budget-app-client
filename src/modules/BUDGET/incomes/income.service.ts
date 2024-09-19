import axios from '@/api/axiosConfig';
import { IncomeCreate, ListIncomeResponse, SingleIncomeResponse } from './income.interface';


export const getUserIncomes = async (userId: number): Promise<ListIncomeResponse> => {
  const response = await axios.get<ListIncomeResponse>(`/incomes/user/${userId}`);
  return response.data;
};


export const getUserActiveIncomes = async (userId: number): Promise<ListIncomeResponse> => {
  const response = await axios.get<ListIncomeResponse>(`/incomes/user/${userId}/active`);
  return response.data;
};


export const getIncomeById = async (incomeId: number): Promise<SingleIncomeResponse> => {
  const response = await axios.get<SingleIncomeResponse>(`/incomes/${incomeId}`);
  return response.data;
};


export const createIncome = async (newIncome: IncomeCreate): Promise<SingleIncomeResponse> => {
  const response = await axios.post<SingleIncomeResponse>('/incomes/create', newIncome);
  return response.data;
};


export const updateIncome = async (incomeId: number, updatedIncome: IncomeCreate): Promise<SingleIncomeResponse> => {
  const response = await axios.put<SingleIncomeResponse>(`/incomes/update/${incomeId}`, updatedIncome);
  return response.data;
};


export const deleteIncome = async (incomeId: number): Promise<SingleIncomeResponse> => {
  const response = await axios.delete<SingleIncomeResponse>(`/incomes/delete/${incomeId}`);
  return response.data;
};
