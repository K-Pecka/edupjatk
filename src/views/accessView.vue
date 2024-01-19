<script setup>
import FormTemp from '@/components/stateless/FormTemp.vue'
</script>

<template>
  <section id="accessBox">
    <div class="topLayer">
      <FormTemp/>
    </div>
  </section>
</template>

<style>
#accessBox {
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

.logIn {
  width: 50%;
  height: 100%;
  background: #2c3034;
  left: 0;
  position: absolute;
}

.logIn label {
  color: #e3e3e3;
}

.logIn input {
  border-bottom: 1px solid #e3e3e3;
  color: #e3e3e3;
}

.logIn input:focus,
.logIn input:active {
  border-color: #03a9f4;
  color: #03a9f4;
}

.logIn a {
  color: #03a9f4;
}

.signUp {
  width: 50%;
  height: 100%;
  background: #f9f9f9;
  position: absolute;
}

.signUp label {
  color: #212121;
}

.signUp input {
  border-bottom: 1px solid #212121;
}

.signUp input:focus,
.signUp input:active {
  border-color: #673ab7;
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
.form-element {
  margin: 1.6em 0;
}

.form-element.form-submit {
  margin: 1.6em 0 0;
}

.form-stack {
  display: flex;
  flex-direction: column;
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

button.off.login {
  color: #673ab7;
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

button.login:focus,
button.login:active,
button.login:hover {
  background: #512da8;
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

button.off.login:focus,
button.off.login:active,
button.off.login:hover {
  color: #512da8;
  background: #e3e3e3;
}

@media only screen and (max-width: 768px) {
  #slideBox {
    width: 80%;
    margin-left: 20%;
  }

  .signup-info,
  .login-info {
    display: none;
  }
}
</style>
