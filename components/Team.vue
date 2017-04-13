<template>
  <div class="row">
    <div class="col-6 col-md-12">
      <img :src="photo" :alt="name" class="w-100 mb-3">
    </div>
    <div class="col-6 col-md-12">
      <p class="font-weight-bold mb-0 text-uppercase">{{ name }}</p>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'title',
    'photo'
  ]
}
</script>
