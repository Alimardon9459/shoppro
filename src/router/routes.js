
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/ForPackerPage.vue') },
      { path: 'carrier', component: () => import('src/pages/ForCarrierPage.vue') },
      { path: 'report', component: () => import('src/pages/MonthlyReport.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
