import Vue from 'vue';
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  }
})
Vue.directive('height', {
  inserted: function (el,binding) {
    if(binding.value === '100%'){
      el.style.height = document.documentElement.clientHeight + 'px';
    } else {
      el.style.height = binding.value;
    }
  }
});



