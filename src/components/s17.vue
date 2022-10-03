<template>
  <div>
    <h2>Antminer S17</h2>
    <div class="table">
      <div v-for="row in rows" :key="row" class="row">
        <div class="col" v-for="col in cols" :key="col">
          <input type="number" v-model="arr[(row-1)*domen+col-1]" class="chip-data"/>
        </div>
        <div>{{arr[row-1] + arr[row] + arr[row+1]}}</div>
      </div>
    </div>
    <button class="calc" v-on:click="calculate">calc</button>
    <div class="table" v-if="result.length">
      <div v-for="el, index in result" :key="index" class="row">
        <div class="chip-id  chip-cell">{{result[index][0].id}}</div>
        <div class="chip-imp chip-cell">{{result[index][0].imp}}</div>
        <div class="chip-id  chip-cell">{{result[index][1].id}}</div>
        <div class="chip-imp chip-cell">{{result[index][1].imp}}</div>
        <div class="chip-id  chip-cell">{{result[index][2].id}}</div>
        <div class="chip-imp chip-cell">{{result[index][2].imp}}</div>
        <div class="chip-id  chip-cell">{{result[index][3].id}}</div>
        <div class="chip-imp chip-cell">{{result[index][3].imp}}</div>
        <div class="chip-sum chip-cell">{{// result[index][4].sum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 's17-table',
  props: {
    msg: String
  },
  data() {
    return {
      arr : [ 2.2, 3.2, 3.5,
              2.3, 4.5, 4.1,
              3.2, 3.5, 3.0,
              3.4, 3.1, 4.0,
              2.0, 2.5, 2.3,
              4.0, 3.4, 2.3,
              2.0, 3.4, 3.2,
              4.0, 4.5, 2.3,
              3.4, 3.0, 2.5,
              4.1, 3.2, 3.2,
              3.2, 4.3, 2.6,
              4.1, 4.0, 3.7,
              3.6, 2.7, 3.2,
              2.1, 2.0, 3.3,
              3.0, 2.8, 1.9,
              2.4, 3.1, 3.5
      ],
      domen: 4,
      rows: 12,
      cols: 4,
      result: []
    }
  },
  methods: {
    calculate() {
      this.result = [];
      const output = this.arr.map((item, i)=> ({id: i+1, imp: item, impSum: 0}))
      const sortedOutput = output.sort((a, b)=>a.imp - b.imp)

      const r1 = sortedOutput.slice(0, 12);
      const r2 = sortedOutput.slice(12, 24).reverse();
      const r3 = sortedOutput.slice(24, 36).reverse();
      const r4 = sortedOutput.slice(36, 48).reverse();


      // for (let i= 0; i < this.rows; i++) {
      //   this.result.push([r1[i], r2r[i], r3[i], r4r[i] ,{sum:r1[i].imp + r2r[i].imp + r3[i].imp + r4r[i].imp}]);
      // }

      console.log(this.result);
    }
  },
  computed: {
  }
}
function sumArray(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++){
    let el = {id:}
    result[i].impSum = arr1[i].imp + arr2[i].imp;
  } return result;
}
function sumLayerArray(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++){
    result[i].impSum = arr1[i].impSum + arr2[i].imp;
  } return result;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
}
.chip-data{
  width: 50px;
}
.chip-cell{
  display: flex;
  align-items: center;
  justify-content: center;
  width:35px;
  height: 35px;
  border: 1px solid black;
  text-align: center;
}

.chip-id{
  background-color: rgb(210, 153, 30);
  border-radius: 50%;
}
.chip-imp{
}
.chip-sum{
  background-color: lime;
}
</style>
