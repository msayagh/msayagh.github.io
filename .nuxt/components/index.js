export { default as Logo } from '../../components/Logo.vue'
export { default as ContentMainContainer } from '../../components/content/mainContainer.vue'
export { default as ContentOtherActivities } from '../../components/content/otherActivities.vue'
export { default as ContentOtherPublications } from '../../components/content/otherPublications.vue'
export { default as ContentPcMember } from '../../components/content/pcMember.vue'
export { default as ContentPublications } from '../../components/content/publications.vue'
export { default as ContentReviewerFor } from '../../components/content/reviewerFor.vue'
export { default as ContentTeaching } from '../../components/content/teaching.vue'
export { default as ContentTechnicalReports } from '../../components/content/technicalReports.vue'
export { default as ContentWorkshops } from '../../components/content/workshops.vue'
export { default as MainHome } from '../../components/main/home.vue'
export { default as UiElementMenuMobile } from '../../components/uiElement/menuMobile.vue'
export { default as UiElementPopupInfo } from '../../components/uiElement/popupInfo.vue'
export { default as UiElementSeparateur } from '../../components/uiElement/separateur.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyContentMainContainer = import('../../components/content/mainContainer.vue' /* webpackChunkName: "components/content-main-container" */).then(c => c.default || c)
export const LazyContentOtherActivities = import('../../components/content/otherActivities.vue' /* webpackChunkName: "components/content-other-activities" */).then(c => c.default || c)
export const LazyContentOtherPublications = import('../../components/content/otherPublications.vue' /* webpackChunkName: "components/content-other-publications" */).then(c => c.default || c)
export const LazyContentPcMember = import('../../components/content/pcMember.vue' /* webpackChunkName: "components/content-pc-member" */).then(c => c.default || c)
export const LazyContentPublications = import('../../components/content/publications.vue' /* webpackChunkName: "components/content-publications" */).then(c => c.default || c)
export const LazyContentReviewerFor = import('../../components/content/reviewerFor.vue' /* webpackChunkName: "components/content-reviewer-for" */).then(c => c.default || c)
export const LazyContentTeaching = import('../../components/content/teaching.vue' /* webpackChunkName: "components/content-teaching" */).then(c => c.default || c)
export const LazyContentTechnicalReports = import('../../components/content/technicalReports.vue' /* webpackChunkName: "components/content-technical-reports" */).then(c => c.default || c)
export const LazyContentWorkshops = import('../../components/content/workshops.vue' /* webpackChunkName: "components/content-workshops" */).then(c => c.default || c)
export const LazyMainHome = import('../../components/main/home.vue' /* webpackChunkName: "components/main-home" */).then(c => c.default || c)
export const LazyUiElementMenuMobile = import('../../components/uiElement/menuMobile.vue' /* webpackChunkName: "components/ui-element-menu-mobile" */).then(c => c.default || c)
export const LazyUiElementPopupInfo = import('../../components/uiElement/popupInfo.vue' /* webpackChunkName: "components/ui-element-popup-info" */).then(c => c.default || c)
export const LazyUiElementSeparateur = import('../../components/uiElement/separateur.vue' /* webpackChunkName: "components/ui-element-separateur" */).then(c => c.default || c)
