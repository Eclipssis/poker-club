import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUsersStore = defineStore("users", () => {
  const users = reactive([]);

  return { users };
});
