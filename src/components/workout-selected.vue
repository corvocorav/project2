<template>
  <div @click="selected()" id="main">
 
    <div class="workout"> {{workoutName}} </div>

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
      this.$emit('selected-workout')
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
