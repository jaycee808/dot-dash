import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

export function useNews(initialCategory = '') {
  const articles = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const category = ref(initialCategory);

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const fetchNews = async () => {
    loading.value = true;
    error.value = null;

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    if (category.value) {
      url += `&category=${category.value}`;
    }

    console.log('Fetch URL:', url);

    try {
      const response = await axios.get(url);
      console.log('NewsAPI response:', response.data);
      articles.value = response.data.articles;
    } catch (err) {
      error.value = 'Failed to fetch news.';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  watch(category, (newVal, oldVal) => {
  if (newVal !== oldVal) fetchNews();
  });

  onMounted(() => {
    fetchNews();
  });

  const setCategory = (newCategory) => {
    if (category.value !== newCategory) {
      category.value = newCategory;
    }
  };

  return {
    articles,
    loading,
    error,
    category,
    setCategory,
  };
}
