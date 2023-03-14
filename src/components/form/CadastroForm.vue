<template>
  <div class="q-pa-md">
    <p style="text-align: center">Cadastro de Alunos</p>
    <q-form @submit="onSubmit" @reset="onReset">
      <!-- Input -->
      <div style="width: 800px; margin: 0 auto">
        <q-input
          v-model="form.nome"
          outlined
          label="Nome "
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />
        <q-input
          v-model="form.sobrenome"
          outlined
          label="Sobrenome"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />

        <q-input
          v-model="form.data_nasc"
          outlined
          type="date"
          label="Data de Nascimento"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />

        <q-input
          v-model="form.cpf"
          outlined
          label="CPF"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />
        <q-input
          v-model="form.email"
          outlined
          type="email"
          label="Email"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />
        <q-input
          v-model="form.modulo"
          outlined
          type="text"
          label="Módulo"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />
      </div>

      <!-- Botões -->
      <div style="margin-top: 50px; text-align: center">
        <q-btn label="Cadastrar" type="submit" color="primary" />
        <q-btn
          label="Cancelar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();

const form = ref({
  nome: "",
  sobrenome: "",
  data_nasc: "",
  cpf: "",
  email: "",
  modulo: "",
});

async function onSubmit() {
  if (
    // Para poder referenciar ao objeto criado aqui
    form.value.nome == "" ||
    form.value.sobrenome == "" ||
    form.value.data_nasc == "" ||
    form.value.cpf == "" ||
    form.value.email == "" ||
    form.value.modulo == ""
  ) {
    $q.notify({
      type: "negative",
      message: "Campos vazios! Preencha corretamente.",
    });
    console.log("Error!");
  } else {
    $q.notify({
      type: "info",
      message: "Cadastro realizado com sucesso",
    });
    console.log("Feito!");
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
}
</style>
