import { useState } from 'react';


import { getAllBudgets, getAllUserBudgets, getBudgetById, createBudget } from './budget.service';
import { BudgetCreate } from './budget.interface'


export const useBudget = () => {
    const [error, setError] = useState<string | null>(null);

    const fetchAllBudgets = async () => {
        try {
            const response = await getAllBudgets();
            console.log("getAllBudgets response: ", response);

            return response;
        } catch(err) {
            setError('no budgets found');
            console.error(err);
        }
    };

    const fetchBudgetsByUserId = async (userId: number) => {
        try {
            const response = await getAllUserBudgets(userId);
            console.log("getAllUserBudgets response: ", response);

            return response;
        } catch(err) {
            setError('no budgets found');
            console.error(err);
        }     
    };

    const fetchBudgetById = async (budgetId: number) => {
        try {
            const response = await getBudgetById(budgetId);
            console.log("getBudgetById response: ", response);

            return response;
        } catch(err) {
            setError('budget not found');
            console.error(err);
        }
    };

    const CreateBudget = async (budgetData: BudgetCreate) => {
        try {
            const response = await createBudget(budgetData);
            console.log("createBudget response: ", response);

            return response;
        } catch(err) {
            setError('budget not created');
            console.error(err);
        }
    };
 

    return { fetchAllBudgets, fetchBudgetsByUserId, fetchBudgetById, CreateBudget, error };
};