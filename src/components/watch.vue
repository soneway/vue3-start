<template>
  <div>
    <div>
      <h3>watchEffect</h3>
      <input type="text" v-model="state.count" />
      <input type="text" v-model="inputRef" />
      <button @click="onStopClick">Stop</button>
      <button @click="onClick">Click</button>
      {{ test }}
    </div>
    <div>
      <h3>watch</h3>
      <input type="text" v-model="state.a" />
      <input type="text" v-model="state.b" />
      <input type="text" v-model="refA" />
      <input type="text" v-model="refB" />
    </div>
    <div>
      <h3>deep options</h3>
      <button @click="onDeepClick">Click(deep)</button>
      <button @click="onDeepRefClick">Click(deepRef)</button>
    </div>
    <div>
      <h3>onTrigger & onTrack</h3>
      <input type="text" v-model="debugRef" />
    </div>
  </div>
</template>
<script>
import {
  reactive, ref, watchEffect, watch,
  onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured,
} from 'vue'

export default {
  setup(props) {
    const state = reactive({ count: 1, a: 'a', b: 'b' })
    const inputRef = ref('')

    const stopEffect = watchEffect(
      () => {
        console.log('watchEffect')
        console.log('state.count', state.count)
        // 如果使用了state.a, 修改state.a时, 会执行该回调; 如未使用, 则不会执行; 有意思
        // console.log('state.a', state.a)
        console.log('state.b', state.b)
        console.log('ref', inputRef.value)
      },
      // 不会立即执行
      { lazy: true }
    )

    watch(state, () => {
      console.log('watch state', state)
    })

    watch(
      () => [state.a, state.b],
      ([a, b], [oldA, oldB]) => {
        console.log('watch a, b')
        console.log(a, oldA)
        console.log(b, oldB)
      }
    )

    const refA = ref('a')
    const refB = ref('b')
    watch([refA, refB], ([refA, refB], [oldRefA, oldRefB]) => {
      console.log(refA, oldRefA)
      console.log(refB, oldRefB)
    })

    const onStopClick = () => {
      stopEffect()
    }

    const deepData = reactive({ a: { b: 'b' }, c: 'c' })
    const onDeepClick = () => {
      deepData.a.b = Date.now()
    }
    watch(deepData, () => {
      console.log('watch deepData', deepData.a.b)
    })

    const deepRef = ref({ a: { b: 'b' }, c: 'c' })
    const onDeepRefClick = () => {
      deepRef.value.a.b = Date.now()
    }
    watch(deepRef, () => {
      console.log('watch deepRef', deepRef.value.a.b)
    }, { deep: true })

    const debugRef = ref('')
    watchEffect(
      () => {
        console.log('watchEffect')
        console.log('debugRef', debugRef.value)
      }, {
        onTrack(...args) {
          console.log('onTrack', ...args)
        },
        onTrigger(...args) {
          console.log('onTrigger', ...args)
        },
      }
    )


    // 生命周期钩子
    onBeforeMount(() => {
      console.log('watch.vue onBeforeMount')
    })
    onMounted(() => {
      console.log('watch.vue onMounted')
    })
    onBeforeUpdate(() => {
      console.log('watch.vue onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('watch.vue onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('watch.vue onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('watch.vue onUnmounted')
    })
    onErrorCaptured(() => {
      console.log('watch.vue onErrorCaptured')
    })

    return { state, inputRef, refA, refB, onStopClick, onDeepClick, onDeepRefClick, debugRef }
  },
  data() {
    return {
      test: 1111,
    }
  },

  methods: {
    onClick() {
      this.test = Date.now()
    },
  },
}
</script>
