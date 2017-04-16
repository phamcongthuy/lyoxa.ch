<template>
  <div>
    <h3 class="mb-2">{{ title }}</h3>
    <p class="mb-0 justify">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'description'
  ]
}
</script>
