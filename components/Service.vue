<template>
  <div>
    <h3 class="mb-2">{{ title }}</h3>
    <p class="mb-0 justify" v-if="description">{{ description }}</p>
    <nuxt-link :to="buttonLink" v-if="buttonText" class="btn btn-primary btn-lg mt-3">{{ buttonText }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'description',
    'buttonLink',
    'buttonText'
  ]
}
</script>
