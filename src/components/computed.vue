<template>
  <div>
    <p>{{ total }} | {{ total1 }}</p>
    <button @click="onClick">Click</button>
  </div>
</template>
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const a = ref(0)
    const b = ref(1)

    const total = computed(() => a.value + b.value)
    const total1 = a.value + b.value

    const onClick = () => {
      a.value++
      b.value++
    }

    return { total, total1, onClick }
  },
}
</script>
