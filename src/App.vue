<template>
  <Username />
  <Reactive />
  <Ref />
  <ToRefs />
  <Computed />
  <Readonly />
</template>

<script>
import Username from './components/username.vue'
import Reactive from './components/reactive.vue'
import Ref from './components/ref.vue'
import ToRefs from './components/toRefs.vue'
import Computed from './components/computed.vue'
import Readonly from './components/readonly.vue'

export default {
  components: {
    Username,
    Reactive,
    Ref,
    ToRefs,
    Computed,
    Readonly,
  },
}
</script>
