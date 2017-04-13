<template>
  <div class="card">
    <div class="card-block">
      <h3 class="card-title h5">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
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
