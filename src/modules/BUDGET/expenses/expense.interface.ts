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
export interface Expense extends ExpenseBase {
  expense_id: number;
  expense_name: string;
  amount: number;
  created_at: string;  // ISO formatted datetime
}

// Standard response types
export type ListExpenseResponse = StandardResponse<Expense[]>;
export type SingleExpenseResponse = StandardResponse<Expense>;
