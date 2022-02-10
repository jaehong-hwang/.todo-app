import { ref, watchEffect, toRef } from "vue";

const storeInit = () => {
  const storeJSON = localStorage.getItem('store')
  let storeObj = {
    menuOpened: true
  }
  try {
    storeObj = typeof storeJSON === 'string' ? JSON.parse(storeJSON) : storeObj
  } catch (e) {
    console.log(storeJSON)
  }

  return storeObj
}

const store = ref(storeInit())

watchEffect(() => {
  localStorage.setItem('store', JSON.stringify(store.value))
})

export default store

export function getItem(name: any) {
  return toRef(store.value, name)
}
