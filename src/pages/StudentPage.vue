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
    </q-table>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useQuasar } from "quasar";

const columns = [
  {
    name: "name",
    required: true,
    label: "Nome Completo",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "cpf",
    required: true,
    label: "CPF",
    align: "center",
    field: "cpf",
    sortable: true,
  },
  {
    name: "data_nasc",
    required: true,
    label: "Data de Nascimento",
    align: "center",
    field: "data_nasc",
    sortable: true,
  },
  {
    name: "modulo",
    required: true,
    label: "Módulo",
    align: "center",
    field: "modulo",
    sortable: true,
  },
  {
    name: "acoes",
    label: "Ações",
    align: "center",
    field: "acoes",
    sortable: true,
  },
];

const originalRows = [
  {
    name: "Rafaela",
    cpf: "12345678910",
    data_nasc: "07/09/1999",
    modulo: "A",
    acoes: "",
  },
  {
    name: "Rafaela",
    cpf: "12345678910",
    data_nasc: "07/09/1999",
    modulo: "A",
    acoes: "",
  },
  {
    name: "Rafaela",
    cpf: "12345678910",
    data_nasc: "07/09/1999",
    modulo: "A",
    acoes: "",
  },
  {
    name: "Rafaela",
    cpf: "12345678910",
    data_nasc: "07/09/1999",
    modulo: "A",
    acoes: "",
  },
  {
    name: "Rafaela",
    cpf: "12345678910",
    data_nasc: "07/09/1999",
    modulo: "A",
    acoes: "",
  },
  {
    name: "Teste",
    cpf: "12345678910",
    data_nasc: "07/09/1999",
    modulo: "A",
    acoes: "",
  },
];

export default defineComponent({
  name: "StudentPage",

  setup() {
    const $q = useQuasar();
    const loading = ref(false);
    const filter = ref("");
    const rowCount = ref(10);
    const rows = ref([...originalRows]);

    return {
      columns,
      rows,
      loading,
      filter,
      rowCount,

      addAluno() {
        $q.notify({
          type: "info",
          message: "Falta a tela de cadastro do aluno",
        });
      },
    };
  },
});
</script>

<style scoped></style>
