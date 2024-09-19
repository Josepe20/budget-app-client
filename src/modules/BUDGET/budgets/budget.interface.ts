import { StandardResponse } from '@/common/interfaces/standarResponse.interface';

// Base interface for Budget
export interface BudgetBase {
  user_id: number;
}

// Interface for creating a Budget
export interface BudgetCreate extends BudgetBase {
  total_income?: number;
  total_expense?: number;
}

// Interface for Budget Response
export interface BudgetResponse extends BudgetBase {
  budget_id: number;
  total_income: number;
  total_expense: number;
  created_at: string; // or Date if ISO formatted date
}

// Standard response interfaces
export type ListBudgetResponse = StandardResponse<BudgetResponse[]>;
export type SingleBudgetResponse = StandardResponse<BudgetResponse>;
