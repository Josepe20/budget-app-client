import { useState } from 'react';


import { getAllCategories, getCategoryById } from './categoryExp.service';


export const useCategoryExpense = () => {
    const [error, setError] = useState<string | null>(null);

    const fetchAllCategories = async () => {
        try {
            const response = await getAllCategories();
            console.log("getAllCategories response: ", response);

            return response; 
        } catch(err) {
            setError('no categories found');
            console.error(err);
        }       
    };

    const fetchCategoryById = async (categoryId: number) => {
        try {
            const response = await getCategoryById(categoryId);
            console.log("getCategoryById response: ", response);

            return response;
        } catch(err) {
            setError('category not found');
            console.error(err);
        }       
    };

    return { fetchAllCategories, fetchCategoryById, error };
};