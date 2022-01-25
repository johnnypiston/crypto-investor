import { createRouter, createWebHistory } from "vue-router";
const InvestorDesktop = () =>
  import("../components/desktop/InvestorDesktop.vue");
const TransactionTracker = () =>
  import("../components/transaction-tracker/TransactionTracker.vue");

const routes = [
  { path: "/", redirect: "/desktop" },
  { path: "/desktop", component: InvestorDesktop },
  { path: "/transactions", component: TransactionTracker },
];

export const router = createRouter({
  history: createWebHistory("/crypto-investor/"),
  routes,
});
