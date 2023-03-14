<template>
  <img src="../assets/book2.jpg" class="book" alt="login-book" />
  <div class="row col-0 col-md-6 flex content-center" style="height: 100vh">
    <!-- Inputs -->
    <div
      v-bind:class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
      }"
      class="col-12 col-md-6 flex content-center"
    >
      <!-- Titulo -->
      <q-card
        v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
      >
        <q-card-section>
          <div class="q-pt-lg col text-h6 ellipsis flex justify-center">
            <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">
              sge
            </h2>
          </div>
        </q-card-section>

        <!-- Form -->
        <q-form class="q-gutter-md q-px-md" @submit.prevent="submitForm">
          <q-input label="Username:" v-model="login.username"></q-input>
          <q-input
            label="Password:"
            type="password"
            v-model="login.password"
          ></q-input>
          <!-- Botões -->
          <div>
            <q-btn
              style="background: #d58936"
              class="full-width"
              label="Login"
              type="submit"
              rounded
            >
            </q-btn>
            <div class="text-center q-mt-sm q-gutter-lg">
              <router-link to="\"></router-link>
            </div>
          </div>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Notify, useQuasar } from "quasar";
import { api } from "src/boot/axios";

const $q = useQuasar();
const router = useRouter();

const login = ref({
  username: "",
  password: "",
});

async function submitForm() {
  if (login.value.username === "" || login.value.password === "") {
    $q.notify({
      type: "negative",
      message: "Campos vazios! Preencha os dados corretamente.",
    });
  } else if (login.value.password.length < 6) {
    $q.notify({
      type: "negative",
      message: "A senha deve ter mais que 6 caracteres.",
    });
  } else {
    // console.log("Login");
    // $q.notify({
    //   type: "positive",
    //   message: "Login feito com sucesso.",
    // });
    const users = await api.get("/user");
    const temDado = users.data.find(
      (data) =>
        data.username === login.value.username &&
        data.password === login.value.password
    );

    if (temDado) {
      router.push("/");
    } else {
      $q.notify({
        type: "negative",
        message: "Sem permissão!",
      });
    }
  }
}
</script>
<style scoped>
.book {
  position: fixed;
  height: 100%;
  width: 50%;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.7;
}
</style>
