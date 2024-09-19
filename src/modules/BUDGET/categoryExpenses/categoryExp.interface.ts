import { StandardResponse } from '@/common/interfaces/standarResponse.interface';

// Base interface for Category Expense
export interface CategoryExpenseBase {
    category_name: string;
    description: string;
}
  
// Create category expense request interface
export interface CategoryExpenseCreate extends CategoryExpenseBase {}

// Response interface for a single category expense
export interface CategoryExpense extends CategoryExpenseBase {
    category_expense_id: number;
    created_at: string; // or Date if your API returns a valid date string
}

// Standard Response for a list of Category Expenses
export type ListCategoryExpenseResponse = StandardResponse<CategoryExpense[]>;

// Standard Response for a single Category Expense
export type SingleCategoryExpenseResponse = StandardResponse<CategoryExpense>;