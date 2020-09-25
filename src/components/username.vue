<template>
  <div>
    <p>{{ username }}</p>
    <button @click="changeUsername(Date.now())">change</button>
  </div>
</template>

<script>
import { useUsername } from '../setup/username'

export default {
  setup(props, context) {
    console.log('props, context', props, context)
    const { username, changeUsername } = useUsername.call(this)
    return { username, changeUsername }
  },
}
</script>
