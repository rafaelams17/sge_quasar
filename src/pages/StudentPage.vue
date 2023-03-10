<template>
  <div class="q-pa-md">
    <q-table
      title="Alunos"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >
      <template v-slot:top>
        <q-btn
          color="primary"
          :disable="loading"
          label="Adcionar aluno"
          @click="addAluno"
        />
        <q-space />
        <q-input
          filled
          borderless
          dense
          debounce="300"
          color="primary"
          v-model="filter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-acoes="props">
        <q-td :props="props">
          <q-btn icon="delete" class="q-mr-md" />
          <q-btn icon="edit" title="Editar" color="orange-8" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import CadastroPage from "../pages/CadastroPage.vue";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import routes from "src/router/routes";

const columns = [
  {
    name: "name",
    required: true,
    label: "Nome",
    align: "left",
    field: "name",
  },
  {
    name: "sobrenome",
    required: true,
    label: "Sobrenome",
    align: "left",
    field: "sobrenome",
  },
  {
    name: "data_nasc",
    required: true,
    label: "Data de Nascimento",
    align: "center",
    field: "data_nasc",
  },
  {
    name: "cpf",
    required: true,
    label: "CPF",
    align: "center",
    field: "cpf",
  },
  {
    name: "email",
    required: true,
    label: "E-mail",
    align: "center",
    field: "email",
  },
  {
    name: "modulo",
    required: true,
    label: "Módulo",
    align: "center",
    field: "modulo",
  },
  {
    name: "situacao",
    required: true,
    label: "Situação",
    align: "center",
    field: "situacao",
  },
  {
    name: "acoes",
    label: "Ações",
    align: "center",
    field: "acoes",
  },
];

const rows = ref([]);

async function buscaDados() {
  const { data } = await api.get("/alunos");
  console.log(data);
  rows.value = data;
}

// const originalRows = [
//   {
//     name: "Rafaela",
//     cpf: "12345678910",
//     data_nasc: "07/09/1999",
//     modulo: "A",
//     acoes: "",
//   },
//   {
//     name: "Rafaela",
//     cpf: "12345678910",
//     data_nasc: "07/09/1999",
//     modulo: "A",
//     acoes: "",
//   },
//   {
//     name: "Rafaela",
//     cpf: "12345678910",
//     data_nasc: "07/09/1999",
//     modulo: "A",
//     acoes: "",
//   },
//   {
//     name: "Rafaela",
//     cpf: "12345678910",
//     data_nasc: "07/09/1999",
//     modulo: "A",
//     acoes: "",
//   },
//   {
//     name: "Rafaela",
//     cpf: "12345678910",
//     data_nasc: "07/09/1999",
//     modulo: "A",
//     acoes: "",
//   },
//   {
//     name: "Teste",
//     cpf: "12345678910",
//     data_nasc: "07/09/1999",
//     modulo: "A",
//     acoes: "",
//   },
// ];

const router = useRouter();
const $q = useQuasar();
const loading = ref(false);
const filter = ref("");

function addAluno() {
  router.push("/cadastro");
}
onMounted(() => {
  buscaDados();
});
</script>

<style scoped></style>
