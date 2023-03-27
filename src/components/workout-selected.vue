<template>
  <div id="main">
 
    <div  @click="selected()" class="workout"> {{workoutName}} 
    </div>
    <button @click="selfDelete()"> </button>
  </div>


</template>

<script>
export default {
  name: 'workouts-page',
  props: [
    'workoutName' 
],
  methods: {
    selected()
    {
      this.$emit('add-to-a-day')
    },
    selfDelete()
    {
      this.$emit('self-delete');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*    --------------- put this in app.vue later
#workouts-container
{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
}*/ 
#main
{
  background-color: darkslategray;
  width: 200px;
  display: grid;
  grid-template-columns: 200px auto;
}
.workout
{
  width: 180px;
  height: 80px;
  background-color: green;
  margin: 10px 10px;
  text-align: center;
  line-height: 80px;
}
</style>
