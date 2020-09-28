<template>
  <Username />
  <Reactive />
  <Ref />
  <ToRefs />
  <Computed />
  <Readonly />
  <Watch />
  <Inject />
  <TemplateRef />
</template>

<script>
import Username from './components/username.vue'
import Reactive from './components/reactive.vue'
import Ref from './components/ref.vue'
import ToRefs from './components/toRefs.vue'
import Computed from './components/computed.vue'
import Readonly from './components/readonly.vue'
import Watch from './components/watch.vue'
import Inject from './components/inject.vue'
import TemplateRef from './components/template-ref.vue'

import { provide } from 'vue'

export default {
  components: {
    Username,
    Reactive,
    Ref,
    ToRefs,
    Computed,
    Readonly,
    Watch,
    Inject,
    TemplateRef,
  },

  setup() {
    console.log('App.vue setup')
    provide('parentData', { a: 1, b: 1 })
  },

  beforeCreate() {
    console.log('App.vue beforeCreate')
  },

  created() {
    console.log('App.vue created')
    // 子组件可以拿到值
    provide('parentDataOnCreated', { a: 2, b: 2 })
  },

  beforeMount() {
    console.log('App.vue beforeMount')
  },

  mounted() {
    console.log('App.vue mounted')
    // 子组件拿不到
    provide('parentDataOnMounted', { a: 3, b: 3 })
  },
}
</script>
