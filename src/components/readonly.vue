<template>
  <div>
    <p>
      <input type="text" v-model="state.count" />
      {{ readonlyState.count }}
      {{ readonlyPlainState.count }}
      {{ plainState.count }}
    </p>
    <button @click="onClick">change</button>
  </div>
</template>

<script>
import { reactive, readonly, watch } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 1 })
    // readonly函数接收一个对象（普通对象或者reactive对象）或者ref并返回一个只读对象代理，在参数对象改变时，返回对象也会相应改变。如果传入的是reactive或ref响应对象，那么返回的对象也是响应的。
    const readonlyState = readonly(state)

    watch(state, () => {
      console.log('watch state, readonlyState.count', readonlyState.count)
    })

    const plainState = { count: 2 }
    const readonlyPlainState = readonly(plainState)

    const onClick = () => {
      plainState.count = 888
      console.log(readonlyPlainState.count)
      // 只读
      readonlyState.count = Date.now()
    }

    return { state, readonlyState, readonlyPlainState, plainState, onClick }
  },
}
</script>
