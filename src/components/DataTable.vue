<template>
  <div>
    <button v-on:click="generateRowsArray">Сгенерировать</button>
    <table>
      <thead>
        <tr>
          <td>Имя</td>
          <td>Цена</td>
          <td>Количество</td>
          <td>Стоимость</td>
        </tr>
      </thead>

      <tr v-for="rowsArray in rowsArray" :key="rowsArray">
        <td>{{ rowsArray.name }}</td>
        <td>{{ rowsArray.price }}</td>
        <td>{{ rowsArray.amount }}</td>
        <td>{{ rowsArray.cost }}</td>
      </tr>
      <p>Итоговая стоимость: {{ wholeCost }}</p>
    </table>
  </div>
</template>

<script>
import { generateRows } from "../helpers/generateRows";

export default {
  name: "DataTable",
  data() {
    return {
      rowsArray: [],
      wholeCost: 0,
    };
  },
  methods: {
    generateRowsArray() {
      this.rowsArray = generateRows();

      this.rowsArray.forEach((item) => {
        this.wholeCost += item.cost;
      });
    },
  },
};
</script>

<style>
body {
  font: 1em sans-serif;
}
div {
  width: 80%;
  margin: 0 auto 50px;
}
button {
  display: flex;
  padding: 7px 13px;
  margin-bottom: 20px;
  background-color: #008c93;
  color: white;
  border: none;
  border-radius: 5px;
}
table {
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
}
table td {
  padding: 15px;
}
table thead td {
  background-color: #54585d;
  color: #ffffff;
  font-weight: bold;
  font-size: 13px;
  border: 1px solid #54585d;
}
table td {
  color: #636363;
  border: 1px solid #dddfe1;
}
table tr {
  background-color: #f9fafb;
}

p {
  display: flex;
  font-weight: 600;
}
</style>
