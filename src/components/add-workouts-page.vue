<template>

  <div id="sub-main">
    <!--
    <div  @click="selected()" class="workout"> {{workoutName}} 
    </div>
    <button id="del-button" @click="selfDelete()"> <div class="gg-add"></div> </button>


    -->
   
    <div   class="workout"> {{workoutName}} </div>
    <div id="buttons">
      <button id="add-button" @click="selected()"> <div class="gg-add"></div> </button>
      <button id="del-button" @click="selfDelete()"> <div class="gg-close-o"></div> </button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'add-workouts-page',
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

</style>
