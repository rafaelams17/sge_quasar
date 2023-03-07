<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <!-- Input -->
      <q-input label="Nome " />
      <q-input label="Sobrenome " />
      <q-input label="Data de Nascimento" />
      <q-input label="CPF" />
      <q-input label="E-mail " />
      <q-input label="Módulo" />

      <!-- Botões -->
      <div>
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
