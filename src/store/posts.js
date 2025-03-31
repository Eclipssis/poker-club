import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePostssStore = defineStore("posts", () => {
  const posts = reactive([]);

  return { posts };
});
