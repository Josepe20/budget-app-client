import { StandardResponse } from '@/common/interfaces/standarResponse.interface';

// Base interface for Income
export interface IncomeBase {
  budget_id: number;
}

// Interface for creating an Income
export interface IncomeCreate extends IncomeBase {
  amount?: number;
  income_name?: string;
}

// Interface for Income Response
export interface IncomeResponse extends IncomeBase {
  income_id: number;
  income_name: string;
  amount: number;
  created_at: string; // ISO formatted datetime
}

// Standard response types
export type IncomeListResponse = StandardResponse<IncomeResponse[]>;
export type SingleIncomeResponse = StandardResponse<IncomeResponse>;
