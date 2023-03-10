const routes = [
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/login2",
    component: () => import("pages/Login2Page.vue"),
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/DashboardPage.vue") },
      {
        path: "/alunos",
        component: () => import("pages/StudentPage.vue"),
      },
      {
        path: "/modulos",
        component: () => import("pages/ModulePage.vue"),
      },
      {
        path: "/cadastro",
        component: () => import("pages/CadastroPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
