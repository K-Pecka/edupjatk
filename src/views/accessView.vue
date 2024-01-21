<script setup>
import FormTemplate from '@/components/access/InitComponent.vue'
</script>

<template>
  <section>
    <div class="topLayer">
      <FormTemplate/>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 50%;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  margin-left: 50%;
  top: 0;
  left: 0;
  position: absolute;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
}

.topLayer {
  width: 200%;
  height: 100%;
  position: relative;
  left: 0;
}

@media only screen and (max-width: 768px) {
  section {
    width: 80%;
    margin-left: 20%;
  }

  .signup-info,
  .login-info {
    display: none;
  }
}
</style>
