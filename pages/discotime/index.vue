<template>
  <div class="container">
    <h1>Disco Time 🔥🎉🦄</h1>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/imYJpr09IgQ?rel=0&autoplay=1" frameborder="0" allowfullscreen autoplay></iframe>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Disco Time! - Lyoxa',
      meta: [
        { hid: 'description', name: 'description', content: 'Disco Time!' },
        { property: 'og:url', content: 'https://lyoxa.ch/discotime/', hid: 'og_url' },
        { property: 'og:title', content: 'Lyoxa - Disco Time!', hid: 'og_title' },
        { property: 'og:description', content: 'Disco Time!', hid: 'og_description' }
      ]
    }
  }
}
</script>
