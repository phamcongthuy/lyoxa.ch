<template>
  <div class="row" itemscope itemtype="http://schema.org/Person">
    <div :class="[vertical ? 'col-6 col-md-12' : 'col-md-6']">
      <img :src="photo" :alt="name" class="w-100 mb-3" itemprop="image">
    </div>
    <div :class="[vertical ? 'col-6 col-md-12' : 'col-md-6']">
      <p class="font-weight-bold mb-0 text-uppercase" itemprop="name">{{ name }}</p>
      <p itemprop="jobTitle">{{ title }}</p>
      <address v-if='address' itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress">{{ address }}</span>,
        <br>
        <span itemprop="postalCode">{{ postalCode }}</span>&nbsp;<span itemprop="addressRegion">{{ locality }}</span>
      </address>
      <a v-if="email" :href="`mailto:${email}`" itemprop="email">{{ email }}</a>
      <br>
      <a v-if="phone" :href="`tel:${phone.replace(/\s/g, '')}`" itemprop="telephone">{{ phone }}</a>
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
