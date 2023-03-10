<template>
  <img src="../assets/book2.jpg" class="book" alt="login-book" />
  <div>teste</div>
</template>

<script setup>
import { ref } from "vue";
import { Notify, useQuasar } from "quasar";

const $q = useQuasar();

const login = ref({
  username: "",
  password: "",
});

function submitForm() {
  if (!login.value.username || !login.value.password) {
    $q.notify({
      type: "negative",
      message: "Os dados informados são inválidos.",
    });
  } else if (login.value.password.length < 6) {
    $q.notify({
      type: "negative",
      message: "A senha deve ter mais que 6 caracteres.",
    });
  } else {
    console.log("Login");
    $q.notify({
      type: "positive",
      message: "Login feito com sucesso.",
    });
  }
}
</script>
<style scoped>
.book {
  position: fixed;
  height: 100%;
  width: 40%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
