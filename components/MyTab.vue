<template>
  <div>
    <div v-nav-change="{
    tabClass: 'tab-item',
    activeClass: 'active',
    currentIndex
  }">
      <!-- <span
      :key="index"
      v-for="(item, index) in tabData"
      :class="['tab-item', {'active':index === currentIndex}]"
    > -->
      <span
        :key="index"
        class="tab-item"
        v-for="(item, index) in tabData"
        @click="handleNavChange(index)"
      >
        {{item.title}}
      </span>
      <p>{{currentContent}}</p>
    </div>
    <div
      class="radio-demo"
      v-nav-change="{tabClass: 'radio', activeClass: 'active', currentIndex: currentGender}"
    >
      <span
        @click="currentGender = 0"
        class="radio"
      >男</span>
      <span
        @click="currentGender = 1"
        class="radio"
      >女</span>
    </div>
  </div>
</template>

<script>
import navChange from '../directives/navChange';
export default {
  props: {
    tabData: {
      type: Array,
      default: () => []
    },
    initialIndex: {
      type: [Number, String],
      default: 0
    }
  },
  directives: {
    navChange
  },
  data() {
    return {
      currentIndex: this.initialIndex,
      currentGender: 1
    }
  },
  computed: {
    currentContent() {
      return this.tabData[this.currentIndex].content
    }
  },
  methods: {
    handleNavChange(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
span.active {
  color: green;
}
.radio-demo {
  color: red;
  &.active {
    color: blue;
  }
}
</style>