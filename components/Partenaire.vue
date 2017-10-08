<template>
  <div class="card mb-3">
    <img class="card-img-top" :src="`/img/partenaires/${logo}`" :alt="title">
    <div class="card-body border border-right-0 border-left-0 border-bottom-0">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-text">{{ description }}</p>
    </div>
    <div class="card-footer bg-white border-0">
      <a :href="buttonLink" class="btn btn-primary">Visiter le site</a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'description',
    'buttonLink',
    'logo'
  ]
}
</script>
