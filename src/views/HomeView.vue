<template>
  <div class="home">
    <div class="text-4xl mb-10">Posts</div>

    <Post v-for="post in posts" :key="post.id"></Post>
  </div>
</template>

<script setup>
import Post from "@/components/Post.vue";

let posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Content of post 1",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content of post 2",
  },
];
</script>
