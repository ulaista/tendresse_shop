import instanceApi from '../hooks/axiosConfig';

export async function getBlogIdByBlogName(productName) {
  try {
    const response = await instanceApi.get(`/search_blogs_title_en/?q=${encodeURIComponent(productName)}`);
    const product = response.data.find(p => p.title_en === productName);
    if (product) {
      return product.id;
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    throw error;
  }
}
