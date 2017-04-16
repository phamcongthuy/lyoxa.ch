<template>
  <div class="row">
    <div :class="[vertical ? 'col-6 col-md-12' : 'col-md-6']">
      <img :src="photo" :alt="name" class="w-100 mb-3">
    </div>
    <div :class="[vertical ? 'col-6 col-md-12' : 'col-md-6']">
      <p class="font-weight-bold mb-0 text-uppercase">{{ name }}</p>
      <p>{{ title }}</p>
      <address>
        {{ address }}<span v-if='address'>,<br></span>
        {{ postalCode }} {{ locality }}
      </address>
      <a :href="`mailto:${email}`">{{ email }}</a>
      <br>
      <a :href="`tel:${phone.replace(/\s/g, '')}`" v-if='phone'>{{ phone }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'title',
    'photo',
    'address',
    'postalCode',
    'locality',
    'email',
    'phone',
    'vertical'
  ]
}
</script>
