<template>
  <div class="hello">
    <calculator :number="number" @eventAdd="add($event)" @eventSubtract="subtract($event)"></calculator>
    <p>parents:{{number}}</p>
  </div>
</template>

<script>
import calculator from "./calculator";
export default {
  name: 'HelloWorld',
  components:{calculator},
  data () {
    return {
      number:10
    }
  },
    methods: {
      add () {
        this.number++
      },
      subtract () {
        this.number--
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
