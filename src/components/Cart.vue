<template>
  <table v-if="$store.getters.cart.length > 0" >
    <tr>
      <td colspan="3">
        <h2>Cart</h2>
      </td>
    </tr>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Total Price</th>
    </tr>
    <tr v-for="(item, index) in $store.getters.cart" 
        :key="index">
      <td>{{ item.product.name }}</td>
      <td>{{ item.quantity }}</td>
      <td>{{ item.quantity * item.product.price }}</td>
    </tr>
  </table>
</template>

<style scoped>
tr,
th,
td {
  border: 1px solid #333;
  padding: 10px;
}

table {
  margin: 0 auto;
}

button {
  padding: 10px 40px;
  background-color: lightgreen;
  border-color: gray;
}
</style>
