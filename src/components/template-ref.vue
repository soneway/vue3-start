<template>
  <div ref="ref">
    template ref
  </div>
  <div ref="ref2">
    template ref2
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'

export default {
  setup(props) {
    const root = ref(null)

    onMounted(() => {
      console.log(root.value)
    })

    // 通过属性名与ref值关联
    return { ref: root, ref2: root }
  }
}
</script>
