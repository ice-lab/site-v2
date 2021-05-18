<template>
 <h1>官方物料：{{ name }}</h1>
 <div>用 Vue 组件自定义渲染</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
  },
  props: ['name'],
})
</script>
