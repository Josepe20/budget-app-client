import axios from '@/api/axiosConfig';
import { ExpenseCreate, ExpenseListResponse, SingleExpenseResponse } from './expense.interface';


export const getUserExpenses = async (userId: number): Promise<ExpenseListResponse> => {
  const response = await axios.get<ExpenseListResponse>(`/expenses/user/${userId}`);
  return response.data;
};


export const getUserActiveExpenses = async (userId: number): Promise<ExpenseListResponse> => {
  const response = await axios.get<ExpenseListResponse>(`/expenses/user/${userId}/active`);
  return response.data;
};


export const getUserExpensesByCategory = async (userId: number, categoryId: number): Promise<ExpenseListResponse> => {
  const response = await axios.get<ExpenseListResponse>(`/expenses/user/${userId}/category/${categoryId}`);
  return response.data;
};


export const getUserActiveExpensesByCategory = async (userId: number, categoryId: number): Promise<ExpenseListResponse> => {
  const response = await axios.get<ExpenseListResponse>(`/expenses/user/${userId}/category/${categoryId}/active`);
  return response.data;
};


export const getExpenseById = async (expenseId: number): Promise<SingleExpenseResponse> => {
  const response = await axios.get<SingleExpenseResponse>(`/expenses/${expenseId}`);
  return response.data;
};

export const createExpense = async (newExpense: ExpenseCreate): Promise<SingleExpenseResponse> => {
  const response = await axios.post<SingleExpenseResponse>('/expenses/create', newExpense);
  return response.data;
};


export const updateExpense = async (expenseId: number, updatedExpense: ExpenseCreate): Promise<SingleExpenseResponse> => {
  const response = await axios.put<SingleExpenseResponse>(`/expenses/update/${expenseId}`, updatedExpense);
  return response.data;
};


export const deleteExpense = async (expenseId: number): Promise<SingleExpenseResponse> => {
  const response = await axios.delete<SingleExpenseResponse>(`/expenses/delete/${expenseId}`);
  return response.data;
};
