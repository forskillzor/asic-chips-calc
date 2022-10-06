<template>
  <div>
    <h2>Antminer S17</h2>
    <div class="table">
      <div v-for="row in rows" :key="row" class="row">
        <div class="col" v-for="col in cols" :key="col">
          <input type="number" v-model="arr[(row-1)*domain+col-1]" class="chip-data"/>
        </div>
        <div>{{arr[row-1] + arr[row] + arr[row+1] + arr[row+2]}}</div>
      </div>
    </div>
    <button class="calc" v-on:click="calculate">calc</button>
    <div class="table" v-if="toggle">
      <div v-for="el in calculate()" :key="el" class="row">
        <div class="chip-id  chip-cell">{{el[0].id}}</div>
        <div class="chip-imp chip-cell">{{el[0].imp}}</div>
        <div class="chip-id  chip-cell">{{el[1].id}}</div>
        <div class="chip-imp chip-cell">{{el[1].imp}}</div>
        <div class="chip-id  chip-cell">{{el[2].id}}</div>
        <div class="chip-imp chip-cell">{{el[2].imp}}</div>
        <div class="chip-id  chip-cell">{{el[3].id}}</div>
        <div class="chip-imp chip-cell">{{el[3].imp}}</div>
        <div class="chip-sum chip-cell">{{el[4]}}</div>
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
      domain: 4,
      rows: 12,
      cols: 4,
      toggle: false
    }
  },
  methods: {
    calculate() {
      let result = [];
      const output = this.arr.map((item, i)=> ({id: i+1, imp: item}))
      const sortedOutput = output.sort((a, b)=>a.imp - b.imp)

      const r1 = sortedOutput.slice(0, 12);
      const r2 = sortedOutput.slice(12, 24).reverse();
      const r3 = sortedOutput.slice(24, 36).reverse();
      const r4 = sortedOutput.slice(36, 48).reverse();

      r1.forEach((el) => {result.push([el])});
      r2.forEach((el, i) => {result[i].push(el)});

      console.dir(result);

      result = result.sort((a, b) => {
        const sum1 = a.reduce((sum, chip) => sum + chip.imp, 0);
        const sum2 = b.reduce((sum, chip) => sum + chip.imp, 0);
        return sum1 - sum2;
      });

      r3.forEach((el, i) => {result[i].push(el)});

      result = result.sort((a, b) => {
        const sum1 = a.reduce((sum, chip) => sum + chip.imp, 0);
        const sum2 = b.reduce((sum, chip) => sum + chip.imp, 0);
        return sum1 - sum2;
      });

      r4.forEach((el, i) => {result[i].push(el)});

      result = result.sort((a, b) => {
        const result = a.reduce((sum, chip) => sum + chip.imp) - b.reduce((sum, chip) => sum + chip.imp);
        return result;
      });

      result.forEach(domain => {
        const sum = domain.reduce((sum, chip) => sum + chip.imp, 0);
        domain.push(sum.toFixed(2));
      })

      this.toggle = true;
      return result;
    },
  },
  computed: {
  }
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
