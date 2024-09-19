import { useState } from 'react';


import { getUserIncomes, getUserActiveIncomes, getIncomeById, createIncome, updateIncome, deleteIncome} from './income.service';
import { IncomeCreate } from './income.interface'


export const useIncome = () => {
    const [error, setError] = useState<string | null>(null);

    const fetchAllUserIncomes = async (userId: number, active: boolean) => {
        try {
            const response = active ? await getUserActiveIncomes(userId) : await getUserIncomes(userId);
            console.log("getUserIncomes response: ", response);

            return response;
        } catch(err) {
            setError('no budgets found');
            console.error(err);
        }
    };

    const fetchIncomebyId = async (incomeId: number) => {
        try {
            const response = await getIncomeById(incomeId);
            console.log("getIncomeById response: ", response);

            return response;
        } catch(err) {
            setError('no budgets found');
            console.error(err);
        }     
    };

    const CreateIncome = async (incomeData: IncomeCreate) => {
        try {
            const response = await createIncome(incomeData);
            console.log("createIncome response: ", response);

            return response;
        } catch(err) {
            setError('budget not created');
            console.error(err);
        }
    };

    const UpdateIncome = async (incomeId: number, incomeData: IncomeCreate) => {
        try {
            const response = await updateIncome(incomeId, incomeData);
            console.log("updateIncome response: ", response);

            return response;
        } catch(err) {
            setError('budget not created');
            console.error(err);
        }
    };

    const DeleteIncome = async (incomeId: number) => {
        try {
            const response = await deleteIncome(incomeId);
            console.log("deleteIncome response: ", response);

            return response;
        } catch(err) {
            setError('budget not created');
            console.error(err);
        }
    };
 

    return { fetchAllUserIncomes, fetchIncomebyId, CreateIncome, UpdateIncome, DeleteIncome, error };
};