<template>
  <div>
    <h2>Antminer T17</h2>
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
      <div v-for="(el, index) in result" :key="index" class="row">
        <div class="chip-id chip-cell">{{result[index][0].id}}</div>
        <div class="chip-imp chip-cell">{{result[index][0].imp}}</div>
        <div class="chip-id chip-cell">{{result[index][1].id}}</div>
        <div class="chip-imp chip-cell">{{result[index][1].imp}}</div>
        <div class="chip-id chip-cell">{{result[index][2].id}}</div>
        <div class="chip-imp chip-cell">{{result[index][2].imp}}</div>
        <div class="chip-sum chip-cell">{{result[index][3].sum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't17-table',
  props: {
    msg: String
  },
  data() {
    return {
      arr : [2.2, 3.2, 3.5,
             2.3, 4.5, 4.1,
             3.2, 3.5, 3.0,
             3.4, 3.1, 4.0,
             2.0, 2.5, 2.3,
             4.0, 3.4, 2.3,
             2.0, 3.4, 3.2,
             4.0, 4.5, 2.3,
             3.4, 3.0, 2.5,
             4.1, 3.2, 3.2
      ],
      domen: 3,
      rows: 10,
      cols: 3,
      result: []
    }
  },
  methods: {
    calculate() {
      this.result = [];
      const output = this.arr.map((item, i)=> ({id: i+1, imp: item})) 
      const sortedOutput = output.sort((a, b)=>a.imp - b.imp)

      const r1 = sortedOutput.slice(0, 10);
      const r2 = sortedOutput.slice(10, 20);
      const r3 = sortedOutput.slice(20);
      const r3r = r3.reverse();

      for (let i= 0; i < this.rows; i++) {
        this.result.push([r1[i], r2[i], r3r[i], {sum:r1[i].imp + r2[i].imp + r3r[i].imp}]);
      }
      
    console.log(this.result)
    }
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
