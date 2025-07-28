<template>
  <div id="app">
    <div id="logo">
      <router-link to="/">
        <h1 class="text-4xl font-heading uppercase">Dot Dash</h1>
      </router-link>
    </div>

    <nav class="font-body">
      <router-link to="/politics">Politics</router-link>
      <router-link to="/business">Business</router-link>
      <router-link to="/entertainment">Entertainment</router-link>
      <router-link to="/culture">Culture</router-link>
      <router-link to="/science">Science</router-link>
      <router-link to="/technology">Technology</router-link>
      <router-link to="/health">Health</router-link>
      <router-link to="/sports">Sports</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped></style>
