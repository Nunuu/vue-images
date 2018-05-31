<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allFavorites" :src="image.link" />
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Favorites',
  computed: mapGetters(['allFavorites', 'isLoggedIn']),
}
</script>

<style lang="sass" scoped>
.image-container
  column-count: 3
  column-gap: 0
img
  max-width: 100%
  padding: 0 5px 5px
</style>