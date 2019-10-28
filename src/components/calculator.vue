<template>
    <div>
      <button @click="add()">+</button>
      <button @click="subtract">-</button>
      <span>{{number}}</span>
    </div>
</template>

<script>
    export default {
        name: "calculator",
        props: ['number'],
        data () {
          return {
              num:this.number
          }
        },
        methods: {
            add () {
                this.$emit('eventAdd',this.number)
            },
            subtract () {
                this.$emit('eventSubtract',this.number)
            }
        }
    }
</script>

<style scoped>

</style>
