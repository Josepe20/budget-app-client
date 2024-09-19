import axios from '@/api/axiosConfig';
import { BudgetCreate, ListBudgetResponse, SingleBudgetResponse } from './budget.interface';
import { StandardResponse } from '@/common/interfaces/standarResponse.interface';

// Fetch all budgets
export const getAllBudgets = async (): Promise<ListBudgetResponse> => {
  const response = await axios.get<ListBudgetResponse>('/budgets/');
  return response.data;
};

// Fetch all budgets for a user
export const getAllUserBudgets = async (userId: number): Promise<ListBudgetResponse> => {
  const response = await axios.get<ListBudgetResponse>(`/budgets/user/${userId}`);
  return response.data;
};

// Fetch a single budget by ID
export const getBudgetById = async (budgetId: number): Promise<SingleBudgetResponse> => {
  const response = await axios.get<SingleBudgetResponse>(`/budgets/${budgetId}`);
  return response.data;
};

// Create a new budget
export const createBudget = async (newBudget: BudgetCreate): Promise<StandardResponse<BudgetCreate>> => {
  const response = await axios.post<StandardResponse<BudgetCreate>>('/budgets/create', newBudget);
  return response.data;
};
