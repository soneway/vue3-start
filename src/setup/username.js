import { ref, watch } from 'vue'

function useUsername() {
  let username = ref('')
  console.log('useUsername this', this)

  watch(username, (value) => {
    console.log('watch this', this)
    console.log('watch username', value)
  })

  const changeUsername = (value) => {
    console.log('changeUsername this', this)
    username.value = value
  }

  return { username, changeUsername }
}

export {
  useUsername
}
