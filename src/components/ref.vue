<template>
  <div class="tf">
    <div>
      <!--在模板中使用时不需要使用count.value, 会自动解包-->
      <p>{{ count }}</p>
      <button @click="onClick(true)">+</button>
      <button @click="onClick(false)">-</button>
    </div>
  </div>
</template>
<script>
import { ref, reactive, isRef } from 'vue'

export default {
  setup() {
    const count = ref(0)
    // const state = reactive({count})
    const onClick = (isAdd) => {
      isAdd ? count.value++ : count.value--
    }

    const unwrapped = isRef(count) ? count.value : count
    console.log('unwrapped', unwrapped)

    return { count, onClick }
  },
}
</script>
