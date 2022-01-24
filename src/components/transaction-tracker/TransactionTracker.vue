<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { TransactionData } from "../../types";
import {
  subscribeToTransactions,
  unsubscribeFromTransactions,
} from "../../service/blockchainDataService";
import CustomButton from "../common/CustomButton.vue";
import TransactionTable from "./TransactionsTable.vue";

const transactions = ref<TransactionData[]>([]);

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
    <h1>Трекер транзакций</h1>
    <div class="actions">
      <CustomButton @click="trackTransactions">Запуск</CustomButton>
      <CustomButton @click="stopTracking">Остановка</CustomButton>
      <CustomButton @click="resetTransactionsData">Сброс</CustomButton>
    </div>

    <TransactionTable :transactions="transactions"></TransactionTable>
  </div>
</template>
