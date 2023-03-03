const routes = [
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
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
