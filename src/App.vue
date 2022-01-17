<template>
  <my-tab
    :tab-data="tabData"
    :inital-index="initialIndex"
  >

  </my-tab>
</template>

<script>
import MyTab from "../components/MyTab"
export default {
  components: {
    MyTab
  },
  data() {
    return {
      tabData: [
        {
          id: 1,
          title: '选项一',
          content: '内容一'
        },
        {
          id: 2,
          title: '选项二',
          content: '内容二'
        },
        {
          id: 3,
          title: '选项三',
          content: '内容三'
        },
        {
          id: 4,
          title: '选项四',
          content: '内容四'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>