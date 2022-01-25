<script setup lang="ts">
import { computed, withDefaults } from "vue";
import { TransactionData } from "../../types";

type Props = {
  transactions: TransactionData[];
};

const props = withDefaults(defineProps<Props>(), {
  transactions: () => [],
});
const transactionsSum = computed(() => {
  return props.transactions
    .reduce((sum, item) => {
      return sum + item.sum;
    }, 0)
    .toPrecision(7);
});
</script>

<template>
  <template v-if="transactions.length">
    <div class="result">
      Общая сумма транзакций: <b>{{ transactionsSum }} BTC</b>
    </div>
    <table class="transactions-table">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions">
          <td>{{ transaction.from }}</td>
          <td>{{ transaction.to }}</td>
          <td>{{ transaction.sum }} BTC</td>
        </tr>
      </tbody>
    </table>
  </template>
</template>

<style>
.result {
  margin-bottom: 20px;

  font-size: 18px;
  text-align: center;
}

.transactions-table {
  margin-bottom: 50px;
  width: 100%;

  border: 2px solid #333;
  border-collapse: collapse;
}

.transactions-table thead th {
  padding: 5px 15px;
  text-align: left;
}

.transactions-table td {
  padding: 5px 15px;
}

.transactions-table thead th:not(:first-child),
.transactions-table td:not(:first-child) {
  border-left: 1px solid #5e5e5e;
}

.transactions-table thead,
.transactions-table tr:not(:last-child) td {
  border-bottom: 1px solid #424242;
}

.transactions-table td:first-child,
.transactions-table td:nth-child(2) {
  width: 40%;
}
</style>
