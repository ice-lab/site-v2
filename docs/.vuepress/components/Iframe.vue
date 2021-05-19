<template>
  <iframe width="100%" height="100%" frameborder="0" style="min-height: calc(100vh - 200px);" :src="src"></iframe>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
  },
  props: ['src'],
})
</script>
