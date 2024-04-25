import instanceApi from '../hooks/axiosConfig';

export async function getCategoryByCategoryId(categoryName) {
  try {
    const response = await instanceApi.get('/all_categories/');
    const categories = response.data; 

    for (const category of categories) {
      if (category.name === categoryName) {
        return category.id; 
      }
    }

    throw new Error('Category not found'); 
  } 
  catch (error) {
    throw error; 
  }
}
