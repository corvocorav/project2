<template>
  <div id="main">
    <input  name="" id="input">
    <button @click="add()">add workout</button>
    <button @click="switc()" >change render</button>
    <div id="main-container">
    <div id="container1" v-if="page1">

      <workouts-page v-for="(workout , index) in workoutsList" :key="index"
      :workoutName ="workout.name" 
      @selected-workout="chose(workout.name, index)" 
      @self-delete-workout ="selfDeleteWorkout(index)"
      :style="{ filter: workout.style }"
       
      > </workouts-page> 
      

    </div>
    <div id="container2" >
      <div id="days" v-if="!page1">
        <div class="day">  sunday
          <div v-for="(addedWorkout , index ) in sunday" :key="index" class="inADayWorkout"> {{ sunday[index] }} </div> 
        </div>
        <div class="day">  monday
          <div v-for="(addedWorkout , index ) in monday" :key="index" class="inADayWorkout"> {{ monday[index] }} </div> 
        </div>
        <div class="day">  thursday
          <div v-for="(addedWorkout , index ) in thursday" :key="index" class="inADayWorkout"> {{ thursday[index] }} </div> 
        </div>
        <div class="day">  wednesday
          <div v-for="(addedWorkout , index ) in wednesday" :key="index" class="inADayWorkout"> {{ wednesday[index] }} </div> 
        </div>
        <div class="day">  tuesday
          <div v-for="(addedWorkout , index ) in tuesday" :key="index" class="inADayWorkout"> {{ tuesday[index] }} </div> 
        </div>
        <div class="day">  friday
          <div v-for="(addedWorkout , index ) in friday" :key="index" class="inADayWorkout"> {{ friday[index] }} </div> 
        </div>
        <div class="day">  saturday
          <div v-for="(addedWorkout , index ) in saturday" :key="index" class="inADayWorkout"> {{ saturday[index] }} </div> 
        </div>
      </div>
      <workout-selected v-for="(selectedWorkout , index) in chosenWorkoutsList" :key="index"
      @self-delete="selfDeleteSelected(index , selectedWorkout.parentIndex)"
      :workoutName ="selectedWorkout.name" 
      @add-to-a-day="saveAddedName(selectedWorkout.name)"
      > </workout-selected> 

    </div>

    <div id="choseDayPopUp" style="display : none"> 
      <button @click="addToADay(1)">1</button>
      <button @click="addToADay(2)">2</button>
      <button @click="addToADay(3)">3</button>
      <button @click="addToADay(4)">4</button>
      <button @click="addToADay(5)">5</button>
      <button @click="addToADay(6)">6</button>
      <button @click="addToADay(7)">7</button>
    </div>

  </div>


  </div>
</template>

<script>

import WorkoutsPage from './components/workouts-page.vue'
import workoutSelected from './components/workout-selected.vue'

export default {
  name: 'App',
  components: {
    WorkoutsPage,
    workoutSelected
  },
  data() {
    return { 
      page1 : false,
      workoutsList: [
                    {  name: "sample 1"  , style : '' , added : false},
                    {  name: "sample 2"  , style : '' , added : false},
                    
                    // add more objects as needed
                    ] ,

      chosenWorkoutsList: [ /*
                    {  name: "chosesample 1" , parentIndex : 1 },
                    {  name: "chosesample 2" , parentIndex : 2},
                    // add more objects as needed 
                           */
                    ] ,
      sunday: ['placeholder1', 'placeholder2', 'etc'],
      monday: ['placeholder1', 'placeholder2', 'etc'],
      tuesday: ['placeholder1', 'placeholder2', 'etc'],
      wednesday: ['placeholder1', 'placeholder2', 'etc'],
      thursday: ['placeholder1', 'placeholder2', 'etc'],
      friday: ['placeholder1', 'placeholder2', 'etc'],
      saturday: ['placeholder1', 'placeholder2', 'etc'],

      addToADayNameHolder : "blank"
    }
  },
  methods: {
    selfDeleteSelected(index , parentIndex)
    {
      this.chosenWorkoutsList.splice(index, 1); 
      if (this.workoutsList[parentIndex]) 
      {
        this.workoutsList[parentIndex].added = false; //then fix brightness
        console.log( this.workoutsList[parentIndex]);
        this.workoutsList[parentIndex].style= "brightness(100%)"; 

      }
    },
    selfDeleteWorkout(index)
    {
      this.workoutsList.splice(index, 1); 
      //now messes parent index
    },
    switc()
    {
      if (this.page1 == true) 
      {
        this.page1 = false; 
      }
      else
      {
        this.page1 = true
      }
    },
    chose(name , index)
    {
      if (this.workoutsList[index].added == false) 
      {
        let newSelectedWorkout = { name :  name  , parentIndex : index}
        this.chosenWorkoutsList.push(newSelectedWorkout);
        console.log("index :" + index + "  parentindex : " + newSelectedWorkout.parentIndex);
        this.workoutsList[index].style =  "brightness(80%)"; /**/ // this.workoutsList.splice(index, 1); 
        this.workoutsList[index].added =  true; /**/ // this.workoutsList.splice(index, 1); 
        
      }

      //console.log(this.workoutsList);
    },
    add()
    {
    //  alert("hello")
      let newWorkout = {  name :  document.getElementById("input").value  , style : "brightness(100%)" , added : false}
     // console.log(newWorkout);
      this.workoutsList.push(newWorkout);
      console.log(this.workoutsList);
    },
    saveAddedName(name)
    {
      let choseDayPopUp = document.getElementById("choseDayPopUp");
      choseDayPopUp.style.display = "block";
      this.addToADayNameHolder = name
    }
    ,
    addToADay(dayIndex) 
    {
      let choseDayPopUp = document.getElementById("choseDayPopUp");
            let alreadyAdded = false;
            const days = [this.sunday, this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.saturday];
            const selectedDay = days[dayIndex - 1]; // Subtract 1 from dayOfWeek to get the correct array index

            selectedDay.forEach(element => {
                if (element == this.addToADayNameHolder) {
                    alert("already added");
                    alreadyAdded = true;
                }
            });

            if (!alreadyAdded) {
                selectedDay.push(this.addToADayNameHolder);
            }
          choseDayPopUp.style.display = "none";
    },
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html , body
{
  background-color: rgb(23, 49, 43);
  color: white;
}
#main-container
{
  display: grid;
  grid-template-columns: auto auto;
}
div
{
  color: white;
}
#days
{
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}
.day
{
  width: 170px;
  min-height: 200px;
  max-height: auto;
  background-color: darkcyan;
  margin: 5px;
}
.inADayWorkout
{
  font-size: 16px;
  width: 160px;
  height: auto;
  background-color: darkslategrey;
  margin: 3px;
}

#choseDayPopUp
{
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
