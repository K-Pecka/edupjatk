<script setup>
import BannerInfo from "@/components/stateless/bannerInfo.vue";
import { useUserStore } from '@/stores/user/main.js'
import { ref } from 'vue'

const isVisible = ref(false);
const { router,accessHTMLstore } = useUserStore();
const accessTypePanel = accessHTMLstore.getState()
const changeState = () => accessHTMLstore.changeState();

const sendForm = async () => {
  useUserStore().sendForm()
    .then((response) =>{ 
      isVisible.value = true
      return response 
    })
    .then((response)=>{setTimeout(()=>isVisible.value=false,2000);return response})
    .then((path) =>{setTimeout(()=>router.goTo(path),2000)});
}
</script>

<template>
  <BannerInfo v-if="isVisible" />
  <div :class="accessTypePanel.classPanelPage">
    <div class="content">
      <h2>{{ accessTypePanel.title }}</h2>
      <form @submit.prevent="sendForm">
        <component
          :is="accessTypePanel.component"
          :fields="accessTypePanel.fields"
          :key="accessTypePanel.state"
        />
        <div class="form-element form-submit">
          <button id="signUp" class="signup" type="submit" name="signup">
            {{ accessTypePanel.btn?.main.title }}
          </button>
          <button class="signup off" type="button" @click="changeState">
            {{ accessTypePanel.btn?.second.title }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
label {
  font-size: 0.8em;
  text-transform: uppercase;
}

input {
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 1em;
  padding: 8px 1px;
  margin-top: 0.1em;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.content h2 {
  font-weight: 300;
  font-size: 2.6em;
  margin: 0.2em 0 0.1em;
  color: #03a9f4;
}


.form-element.form-submit {
  margin: 1.6em 0 0;
}



button {
  padding: 0.8em 1.2em;
  margin: 0 10px 0 0;
  width: auto;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1em;
  color: #fff;
  line-height: 1em;
  letter-spacing: 0.6px;
  border-radius: 3px;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.1),
    0 3px 6px rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  transition: all 0.25s;
}

button.signup {
  background: #03a9f4;
}

button.login {
  background: #673ab7;
}

button.off {
  background: none;
  box-shadow: none;
  margin: 0;
}

button.off.signup {
  color: #03a9f4;
}


button:focus,
button:active,
button:hover {
  box-shadow:
    0 4px 7px rgba(0, 0, 0, 0.1),
    0 3px 6px rgba(0, 0, 0, 0.1);
}

button.signup:focus,
button.signup:active,
button.signup:hover {
  background: #0288d1;
}


button.off:focus,
button.off:active,
button.off:hover {
  box-shadow: none;
}

button.off.signup:focus,
button.off.signup:active,
button.off.signup:hover {
  color: #03a9f4;
  background: #212121;
}

</style>
