<template>
  <div>
    <p>{{ state.input }}</p>
    <button @click="onClick">change</button>
  </div>
</template>
<script>
import { reactive, computed, watch, toRefs } from 'vue'

export default {
  setup(props) {
    const state = reactive({})

    const onClick = () => {
      state.input = '我已经改变了' + Date.now()
    }
    // return state // 模板上下文丢失引用
    return { state, onClick } // 模板上下文丢失引用
    // return { ...toRefs(state), onClick } // 正确的
  }
}
</script>
