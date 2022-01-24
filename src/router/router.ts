import { createRouter, createWebHistory } from "vue-router";
import InvestorDesktop from "../components/desktop/InvestorDesktop.vue";
import TransactionTracker from "../components/transaction-tracker/TransactionTracker.vue";

const routes = [
  { path: "/", redirect: "/desktop" },
  { path: "/desktop", component: InvestorDesktop },
  { path: "/transactions", component: TransactionTracker },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
