<template>
  <div>
    <p>{{ parentData }}</p>
    <p>{{ parentDataOnCreated }}</p>
    <p>{{ parentDataOnMounted }}</p>
  </div>
</template>
<script>
import { inject, provide } from 'vue'

export default {
  setup() {
    console.log('inject.vue setup')
    const parentData = inject('parentData', {})
    const parentDataOnCreated = inject('parentDataOnCreated', {})
    const parentDataOnMounted = inject('parentDataOnMounted', {})

    return { parentData, parentDataOnCreated, parentDataOnMounted }
  },

  beforeCreate() {
    console.log('inject.vue beforeCreate')
  },

  created() {
    console.log('inject.vue created')
  },

  beforeMount() {
    console.log('inject.vue beforeMount')
  },

  mounted() {
    console.log('inject.vue mounted')
  },
}
</script>
