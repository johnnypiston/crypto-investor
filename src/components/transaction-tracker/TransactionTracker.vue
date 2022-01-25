<script setup lang="ts">
import { ref, onBeforeUnmount, defineAsyncComponent } from "vue";
import { TransactionData } from "../../types";
import {
  subscribeToTransactions,
  unsubscribeFromTransactions,
} from "../../service/blockchainDataService";
import CustomButton from "../common/CustomButton.vue";

const transactions = ref<TransactionData[]>([]);

const TransactionTable = defineAsyncComponent(
  () => import("./TransactionsTable.vue")
);

const trackTransactions = () => {
  subscribeToTransactions((transaction: TransactionData) => {
    transactions.value.push(transaction);
  });
};

const stopTracking = () => {
  unsubscribeFromTransactions();
};

const resetTransactionsData = () => {
  transactions.value = [];
};

onBeforeUnmount(() => {
  stopTracking();
});
</script>

<template>
  <div class="container">
    <h1 class="transactions-title">Трекер транзакций</h1>
    <div class="transactions-actions">
      <CustomButton color="green" @click="trackTransactions"
        >Запуск</CustomButton
      >
      <CustomButton color="red" @click="stopTracking">Остановка</CustomButton>
      <CustomButton color="orange" @click="resetTransactionsData"
        >Сброс</CustomButton
      >
    </div>

    <TransactionTable
      v-if="transactions.length > 0"
      :transactions="transactions"
    ></TransactionTable>
  </div>
</template>

<style>
.transactions-title {
  text-align: center;
}

.transactions-actions {
  display: flex;
  justify-content: space-around;
  width: 800px;
  margin: 0 auto 50px;
}
</style>
