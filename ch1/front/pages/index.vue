<template>
  <div>
    <v-container>
      <post-card />
      <post-card />
      <post-card />
      <post-card />
      <post-card />
    </v-container>
  </div>
</template>

<script>
import PostCard from "~/components/PostCard";
export default {
  components: {PostCard},
  comments:{
    PostCard,
  },
  data(){
    return {
      name : 'Nuxt.js'
    }
  }
}
</script>