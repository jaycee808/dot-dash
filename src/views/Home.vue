<template>
  <section class="p-8">
    <h1 class="text-3xl font-bold mb-4 font-heading">Top Stories</h1>

    <div class="flex gap-3 mb-4 flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat.value"
        @click="setCategory(cat.value)"
        :class="[
          'py-2 mr-2 text-lg font-body',
          category === cat.value ? 'border-b-2 border-black text-black' : 'text-gray-700'
        ]"
      >
        {{ cat.label }}
      </button>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>

<ul v-else>
  <li
    v-for="(article, index) in articles"
    :key="index"
    class="mb-6 border-b pb-4"
  >
    <a :href="article.url" target="_blank" class="block">
      <h2 class="text-xl font-bold font-heading mb-1">{{ article.title }}</h2>
      <p class="text-lg font-body">{{ article.description }}</p>
      <img
        v-if="article.urlToImage"
        :src="article.urlToImage"
        alt="Thumbnail"
        class="mt-2 max-w-full rounded"
      />
    </a>
  </li>
</ul>
  </section>
</template>

<script setup>
import { useNews } from '../composables/useNews';

const categories = [
  { label: 'Top Headlines', value: '' },
  { label: 'Business', value: 'business' },
  { label: 'Technology', value: 'technology' },
  { label: 'Entertainment', value: 'entertainment' },
  { label: 'Health', value: 'health' },
  { label: 'Science', value: 'science' },
  { label: 'Sports', value: 'sports' },
];

const { articles, loading, error, category, setCategory } = useNews();
</script>
