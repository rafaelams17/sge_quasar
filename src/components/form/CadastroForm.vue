<template>
  <div class="q-pa-md">
    <p style="text-align: center">Cadastro de Alunos</p>
    <q-form @submit="onSubmit" @reset="onReset">
      <!-- Input -->
      <div style="width: 800px; margin: 0 auto">
        <q-input
          v-model="nome"
          outlined
          label="Nome "
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />
        <q-input
          v-model="sobrenome"
          outlined
          label="Sobrenome"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />

        <q-input
          v-model="date"
          outlined
          type="date"
          label="Data de Nascimento"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />

        <q-input
          v-model="cpf"
          outlined
          label="CPF"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />
        <q-input
          v-model="email"
          outlined
          type="email"
          label="Email"
          stack-label
          :dense="dense"
          style="margin-bottom: 15px"
        />
        <q-input
          v-model="modulo"
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

<script setup></script>

<style scoped>
p {
  font-size: 2em;
}
</style>
