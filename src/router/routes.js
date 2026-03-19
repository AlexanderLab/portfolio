
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'experience', component: () => import('pages/ExperiencePage.vue') },
      { path: 'projects', component: () => import('pages/ProjectsPage.vue') },
      { path: 'skills', component: () => import('pages/SkillsPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
