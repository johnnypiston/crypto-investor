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
      Сумма: <b>{{ transactionsSum }} BTC</b>
    </div>
    <table>
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
