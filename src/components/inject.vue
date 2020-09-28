<template>
  <div>
    <p>{{ parentData }}</p>
    <p>{{ parentDataOnCreated }}</p>
    <p>{{ parentDataOnMounted }}</p>
  </div>
</template>
<script>
import { inject } from 'vue'

export default {
  setup() {
    console.log('inject.vue setup')
    const parentData = inject('parentData', {})
    const parentDataOnCreated = inject('parentDataOnCreated', {})
    const parentDataOnMounted = inject('parentDataOnMounted', {})

    return { parentData, parentDataOnCreated, parentDataOnMounted }
  }
}
</script>
