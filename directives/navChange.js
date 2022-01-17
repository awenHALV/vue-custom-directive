

export default {
  mounted(el, binding) {
    const {tabClass, activeClass, currentIndex} = binding.value;
    el.tabClass = tabClass;
    el.activeClass = activeClass;
    el.oTabItems = el.getElementsByClassName(tabClass);
    el.oTabItems[currentIndex].className = `${tabClass} ${activeClass}`
  },
  updated(el, binding) {
    const {currentIndex} = binding.value;
    console.log(currentIndex)
    const {tabClass, activeClass, oTabItems} = el;
    Array.from(oTabItems).forEach(item => {
      item.className = tabClass;
    })
    oTabItems[currentIndex].className = `${tabClass} ${activeClass}`;
  }
}