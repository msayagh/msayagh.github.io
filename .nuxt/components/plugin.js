import Vue from 'vue'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  ContentMainContainer: () => import('../../components/content/mainContainer.vue' /* webpackChunkName: "components/content-main-container" */).then(c => c.default || c),
  ContentOtherActivities: () => import('../../components/content/otherActivities.vue' /* webpackChunkName: "components/content-other-activities" */).then(c => c.default || c),
  ContentOtherPublications: () => import('../../components/content/otherPublications.vue' /* webpackChunkName: "components/content-other-publications" */).then(c => c.default || c),
  ContentPcMember: () => import('../../components/content/pcMember.vue' /* webpackChunkName: "components/content-pc-member" */).then(c => c.default || c),
  ContentPublications: () => import('../../components/content/publications.vue' /* webpackChunkName: "components/content-publications" */).then(c => c.default || c),
  ContentReviewerFor: () => import('../../components/content/reviewerFor.vue' /* webpackChunkName: "components/content-reviewer-for" */).then(c => c.default || c),
  ContentTeaching: () => import('../../components/content/teaching.vue' /* webpackChunkName: "components/content-teaching" */).then(c => c.default || c),
  ContentTechnicalReports: () => import('../../components/content/technicalReports.vue' /* webpackChunkName: "components/content-technical-reports" */).then(c => c.default || c),
  ContentWorkshops: () => import('../../components/content/workshops.vue' /* webpackChunkName: "components/content-workshops" */).then(c => c.default || c),
  MainHome: () => import('../../components/main/home.vue' /* webpackChunkName: "components/main-home" */).then(c => c.default || c),
  UiElementMenuMobile: () => import('../../components/uiElement/menuMobile.vue' /* webpackChunkName: "components/ui-element-menu-mobile" */).then(c => c.default || c),
  UiElementPopupInfo: () => import('../../components/uiElement/popupInfo.vue' /* webpackChunkName: "components/ui-element-popup-info" */).then(c => c.default || c),
  UiElementSeparateur: () => import('../../components/uiElement/separateur.vue' /* webpackChunkName: "components/ui-element-separateur" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
