<template>
  <div>
    <p>{{ state.a }} | {{ stateRefs.b.value }}</p>
    <button @click="onClick">change</button>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'

function useState() {
  return reactive({ a: 1 })
}

function useStateRefs() {
  const state = reactive({ b: 2 })

  return toRefs(state)
}

export default {
  setup() {
    const state = useState()
    const stateRefs = useStateRefs()

    const onClick = () => {
      state.a = Date.now()
      stateRefs.b = Date.now()
    }

    return { state, stateRefs, onClick }
  },
}
</script>
