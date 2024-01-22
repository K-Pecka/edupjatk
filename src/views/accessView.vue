<template>
  <section :style="{ width: sectionWidth, marginLeft: sectionMarginLeft }">
    <div class="accessBox">
      <FormTemplate/>
    </div>
  </section>
</template>

<script setup>
import FormTemplate from '@/components/access/InitComponent.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const sectionWidth = ref('30%');
const sectionMarginLeft = ref('70%');
const sizeWindow = {
  small:815,
  medium:1500,
  big:2000
}
const handleResize = () => {
  if (window.innerWidth <= sizeWindow.small) {
    sectionWidth.value = '80%';
    sectionMarginLeft.value = '20%';
  } else if (window.innerWidth <= sizeWindow.medium &&  window.innerWidth >= sizeWindow.small) {
    sectionWidth.value = '50%';
    sectionMarginLeft.value = '50%';
  } else {
    sectionWidth.value = '30%';
    sectionMarginLeft.value = '70%';
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
section {
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  transition: width 1s, margin-left 1s;
}

.accessBox {
  width: 200%;
  height: 100%;
  position: relative;
  left: 0;
}
</style>
