import { useState } from 'react';


import { 
    getUserExpenses, 
    getUserActiveExpenses, 
    getUserExpensesByCategory, 
    getUserActiveExpensesByCategory, 
    getExpenseById, 
    createExpense, 
    updateExpense, 
    deleteExpense
} from './expense.service';
import { ExpenseCreate } from './expense.interface'


export const useExpense = () => {
    const [error, setError] = useState<string | null>(null);

    const fetchAllUserExpenses = async (userId: number, active: boolean) => {
        try {

            const response = active ? await getUserActiveExpenses(userId) : await getUserExpenses(userId);
            
            console.log("getUserExpenses response: ", response);

            return response;
        } catch(err) {
            setError('no budgets found');
            console.error(err);
        }
    };

    const fetchAllUserExpensesByCategory = async (userId: number, categoryId: number, active: boolean) => {
        try {

            const response = active ? await getUserActiveExpensesByCategory(userId, categoryId) : await getUserExpensesByCategory(userId, categoryId);
            
            console.log("getUserExpenses response: ", response);

            return response;
        } catch(err) {
            setError('no budgets found');
            console.error(err);
        }
    };


    const fetchExpensebyId = async (expenseId: number) => {
        try {
            const response = await getExpenseById(expenseId);
            console.log("getExpenseById response: ", response);

            return response;
        } catch(err) {
            setError('no budgets found');
            console.error(err);
        }     
    };

    const CreateExpense = async (expenseData: ExpenseCreate) => {
        try {
            const response = await createExpense(expenseData);
            console.log("createExpense response: ", response);

            return response;
        } catch(err) {
            setError('budget not created');
            console.error(err);
        }
    };

    const UpdateExpense = async (expenseId: number, expenseData: ExpenseCreate) => {
        try {
            const response = await updateExpense(expenseId, expenseData);
            console.log("updateExpense response: ", response);

            return response;
        } catch(err) {
            setError('budget not created');
            console.error(err);
        }
    };

    const DeleteExpense = async (expenseId: number) => {
        try {
            const response = await deleteExpense(expenseId);
            console.log("deleteIncome response: ", response);

            return response;
        } catch(err) {
            setError('budget not created');
            console.error(err);
        }
    };
 

    return { fetchAllUserExpenses, fetchAllUserExpensesByCategory, fetchExpensebyId, CreateExpense, UpdateExpense, DeleteExpense, error };
};