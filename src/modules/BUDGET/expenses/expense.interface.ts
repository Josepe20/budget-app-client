import { StandardResponse } from '@/common/interfaces/standarResponse.interface';

// Base interface for Expense
export interface ExpenseBase {
  budget_id: number;
  category_expense_id: number;
}

// Interface for creating an Expense
export interface ExpenseCreate extends ExpenseBase {
  amount?: number;
  expense_name?: string;
}

// Interface for Expense Response
export interface ExpenseResponse extends ExpenseBase {
  expense_id: number;
  expense_name: string;
  amount: number;
  created_at: string;  // ISO formatted datetime
}

// Standard response types
export type ExpenseListResponse = StandardResponse<ExpenseResponse[]>;
export type SingleExpenseResponse = StandardResponse<ExpenseResponse>;
