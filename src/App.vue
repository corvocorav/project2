<template>
  <div id="main">

    <div id="page-buttons-container">
      <button :id="createPage_addPage ? page1ButtonId : page2ButtonId"  name="page-button-1" disabled="true" @click="pageHandle()" > create</button>
      <button :id="createPage_addPage ? page2ButtonId : page1ButtonId"  name="page-button-2" @click="pageHandle()" >schedule</button>
    </div>

    <button v-if="!createPage_addPage" id="edit-button" @click="edit()"> {{editingText}} </button>    
    

    <div id="days" v-if="!createPage_addPage">
      
      <div id="days" v-if="!createPage_addPage">
    <div class="day">Sunday 
        <div v-for="(addedWorkout, index) in sunday" :key="index" class="addedWorkout">
            <div>{{ sunday[index] }}</div>
            <button class="deleteAddedWorkoutButton" @click="selfDeleteAddedWorkout(1, index)" style="display : none"> <div  class="gg-close-o-smaller gg-close-o"></div></button>
        </div>
        <div>
            
        </div>
    </div>
    <div class="day">Monday
        <div v-for="(addedWorkout, index) in monday" :key="index" class="addedWorkout">
            <div>{{ monday[index] }}</div>
            <button class="deleteAddedWorkoutButton" @click="selfDeleteAddedWorkout(2, index)" style="display : none"> <div  class="gg-close-o-smaller gg-close-o"></div></button>
        </div>
        <div>
            
        </div>
    </div>
    <div class="day">Tuesday
        <div v-for="(addedWorkout, index) in tuesday" :key="index" class="addedWorkout">
            <div>{{ tuesday[index] }}</div>
            <button class="deleteAddedWorkoutButton" @click="selfDeleteAddedWorkout(3, index)" style="display : none"> <div  class="gg-close-o-smaller gg-close-o"></div></button>
        </div>
        <div>
            
        </div>
    </div>
    <div class="day">Wednesday
        <div v-for="(addedWorkout, index) in wednesday" :key="index" class="addedWorkout">
            <div>{{ wednesday[index] }}</div>
            <button class="deleteAddedWorkoutButton" @click="selfDeleteAddedWorkout(4, index)" style="display : none"> <div  class="gg-close-o-smaller gg-close-o"></div></button>
        </div>
        <div>
            
        </div>
    </div>
    <div class="day">Thursday
        <div v-for="(addedWorkout, index) in thursday" :key="index" class="addedWorkout">
            <div>{{ thursday[index] }}</div>
            <button class="deleteAddedWorkoutButton" @click="selfDeleteAddedWorkout(5, index)" style="display : none"> <div  class="gg-close-o-smaller gg-close-o"></div></button>
        </div>
        <div>
            
        </div>
    </div>
    <div class="day">Friday
        <div v-for="(addedWorkout, index) in friday" :key="index" class="addedWorkout">
            <div>{{ friday[index] }}</div>
            <button class="deleteAddedWorkoutButton" @click="selfDeleteAddedWorkout(6, index)" style="display : none"> <div  class="gg-close-o-smaller gg-close-o"></div></button>
        </div>
        <div>
            
        </div>
    </div>
    <div class="day">Saturday
        <div v-for="(addedWorkout, index) in saturday" :key="index" class="addedWorkout">
            <div>{{ saturday[index] }}</div>
            <button class="deleteAddedWorkoutButton" @click="selfDeleteAddedWorkout(7, index)" style="display : none"> <div  class="gg-close-o-smaller gg-close-o"></div></button>
        </div>
        <div>
            
        </div>
    </div>
</div>


      </div>



    <div name="main container" :id="createPage_addPage ? page1MainContainerID: page2MainContainerID ">
    <div id="container1" v-if="createPage_addPage">

    <div id="input-text">
      <div> created workouts </div>
      <button @click="displayInputContainer()">  <div class="gg-add-0"></div>  </button>
    </div>
    <div id="input-container"> 
      <input  name="" id="input">
      <button @click="createAWorkout()">create</button>

    </div>


      <div id="sub-container1" v-if="createPage_addPage">

      <create-workouts-page v-for="(workout , index) in workoutsList" :key="index"
      :workoutName ="workout.name" 
      @selected-workout="selectAWorkout(workout.name, index)" 
      @self-delete ="selfDeleteWorkout(index)"
      :style="{ filter: workout.style }"
       
      > </create-workouts-page> 
      
<!--                       sfsd fsd fds fsd fsd fsd-->

    </div>
    </div>
    <div id="devider" v-if="createPage_addPage"> </div>
    <div id="container2" >

      


      <div id="input-text">
      <div> active workouts </div>
      
     </div>

      <div :id="createPage_addPage ? page2SubContainer2Id :  page1SubContainer2Id">

     


      <add-workouts-page v-for="(selectedWorkout , index) in selectedWorkoutsList" :key="index"
      @self-delete="selfDeleteSelected(index , selectedWorkout.Original_parentIndex)"
      :workoutName ="selectedWorkout.name" 
      @add-to-a-day="saveSelectedWorkoutToAdd(selectedWorkout.name)"
      > </add-workouts-page> 
    </div>

    </div>



  </div>
  <div id="choseDayPopUp" style="display : none"> add to : 
      <button @click="addWorkout(1)">sunday</button>
      <button @click="addWorkout(2)">monday</button>
      <button @click="addWorkout(3)">thursday</button>
      <button @click="addWorkout(4)">wednesday</button>
      <button @click="addWorkout(5)">tuesday</button>
      <button @click="addWorkout(6)">friday</button>
      <button @click="addWorkout(7)">saturday</button>
      <button id="close-day" @click="addWorkout(8)">close</button>
    </div>

  </div>
</template>

<script>

import CreateWorkoutsPage from './components/create-workouts-page.vue'
import AddWorkoutsPage from './components/add-workouts-page.vue'


export default {
  name: 'App',
  components: {
    CreateWorkoutsPage,
    AddWorkoutsPage
  },
  data() {
    return { 
      page1SubContainer2Id : "sub-container2-page-2-version",
      page2SubContainer2Id : "sub-container2",
      page1ButtonId : "active-button",
      page2ButtonId : "disactive-button",
      page1MainContainerID : "main-container",
      page2MainContainerID : "main-container-page-2-version",
      createPage_addPage : true,
      workoutsList: [
                    {  name: "sample 1"  , style : '' , added : false},
                   /* {  name: "sample 2"  , style : '' , added : false},
                    {  name: "sample 2"  , style : '' , added : false},
                    {  name: "sample 2"  , style : '' , added : false},
                    {  name: "sample 2"  , style : '' , added : false},
                    {  name: "sample 2"  , style : '' , added : false},*/
                    // add more objects as needed
                    ] ,

      selectedWorkoutsList: [ 
                    {  name: "active sample 1" , Original_parentIndex : 1 },
                  /*  {  name: "chosesample 2" , Original_parentIndex : 2},*/
                    // add more objects as needed 
                           
                    ] ,
      sunday: ['added samlple 1'/*, 'placeholder2', 'etc'*/],
    monday: [/*'placeholder1', 'placeholder2', 'etc'*/],
    thursday: [/*'placeholder1', 'placeholder2', 'etc'*/],
    wednesday: [/*'placeholder1', 'placeholder2', 'etc'*/],
    tuesday: [/*'placeholder1', 'placeholder2', 'etc'*/],
    friday: [/*'placeholder1', 'placeholder2', 'etc'*/],
    saturday: [/*'placeholder1', 'placeholder2', 'etc'*/],

      addToADayNameHolder : "",
      editing : false,
      editingText : "edit"
    }
  },
  methods: {
    edit()
    {
      let btns  = document.getElementsByClassName("deleteAddedWorkoutButton");
      if (this.editing) 
      {
        for (let i = 0; i < btns.length; i++) {
          btns[i].style.display="none"  
        }        
        this.editing = false
      this.editingText = "edit"

      }
      else
      {
        for (let i = 0; i < btns.length; i++) {
        btns[i].style.display="block"  
        }
        this.editing  = true
      this.editingText = "cancel"

      }
    }
    ,
    pageHandle()
    {
      let button1 = document.getElementsByName("page-button-1")  [0]
      let button2 = document.getElementsByName("page-button-2")  [0]
      if (this.createPage_addPage == true) 
      {
        this.createPage_addPage = false;
        button1.disabled = this.createPage_addPage;
        button2.disabled = !this.createPage_addPage;

      }
      else
      {
        this.createPage_addPage = true
        button1.disabled = this.createPage_addPage;
        button2.disabled = !this.createPage_addPage;


      }
    }
    ,
    displayInputContainer()
    {
      let container = document.getElementById("input-container")
      container.style.display = "flex";
    },

    selfDeleteAddedWorkout(day , index)
    {


      const days = [this.sunday, this.monday, this.tuesday, this.wednesday, this.thursday, this.friday, this.saturday];
      console.log(days[day - 1]);
      let result = confirm("delete  " + days[day - 1][index]);
      if(result)
      {
        days[day-1].splice(index, 1); 
      }
      
      
    },
    selfDeleteSelected(index , Original_parentIndex)
    {
      let result = confirm("delete  " + this.selectedWorkoutsList[index].name);
      if(result)
      {
        this.selectedWorkoutsList.splice(index, 1); 
      }
      
      if (this.workoutsList[Original_parentIndex]) 
      {
        this.workoutsList[Original_parentIndex].added = false; //then fix brightness
        console.log( this.workoutsList[Original_parentIndex]);
        this.workoutsList[Original_parentIndex].style= "brightness(100%)"; 
       
      }
      
    },
    selfDeleteWorkout(index)
    {
      let result = confirm("delete " +  this.workoutsList[index].name)
      if (result) 
      {
        this.workoutsList.splice(index, 1); 
        
      }
      //now messes parent index
    },/*
    changePageView()
    {
      if (this.createPage_addPage == true) 
      {
        this.createPage_addPage = false; 
      }
      else
      {
        this.createPage_addPage = true
      }
    },*/
    selectAWorkout(name , index)
    {
      if (this.workoutsList[index].added == false) 
      {

        let newSelectedWorkout = { name :  name  , Original_parentIndex : index}
        this.selectedWorkoutsList.push(newSelectedWorkout);
        console.log("index :" + index + "  Original_parentindex : " + newSelectedWorkout.Original_parentIndex);
        this.workoutsList[index].style =  "brightness(80%)"; /**/ // this.workoutsList.splice(index, 1); 
        this.workoutsList[index].added =  true; /**/ // this.workoutsList.splice(index, 1); 
        
      }

      //console.log(this.workoutsList);
    },
    createAWorkout()
    {
      let alreadyCreated = false;
      this.workoutsList.forEach(element => {
        if (element.name == document.getElementById("input").value || document.getElementById("input").value == '') 
        {
        alert("cant add blank or already added");//////
        alreadyCreated = true;
        }
      });
      if (!alreadyCreated) {
        let newWorkout = {  name :  document.getElementById("input").value  , style : "brightness(100%)" , added : false}
        this.workoutsList.push(newWorkout);
        console.log(this.workoutsList);
        document.getElementById("input").value = "";  
       // document.getElementById("input-container").style.display = "none"
      }
document.getElementById("input-container").style.display = "none"
    },
    saveSelectedWorkoutToAdd(name) // before add workout function
    {
      let choseDayPopUp = document.getElementById("choseDayPopUp");
      choseDayPopUp.style.display = "flex";
      this.addToADayNameHolder = name
    }
    ,
    addWorkout(dayIndex) 
    {
      let choseDayPopUp = document.getElementById("choseDayPopUp");

      if (dayIndex != 8) 
      {
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
      }
      else
      {
        choseDayPopUp.style.display = "none";
      }
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
  margin-top: 30px;
}
html , body
{
  background-color: #ffece0;
 
  color: white;

  
  overflow-x: hidden; 
  overflow-y: auto; 

}

.gg-close-o-smaller
{
  transform: scale(var(--ggs,1.3));
  left: -4px;
  
}
#edit-button
{
  background-color: #57e389;
  border-radius: 5px;
  padding: 5px 10px;
  color: #13242e;
  border: 0;
  margin-bottom: 2px;
  cursor: pointer;
}
#disactive-button:hover
{
  cursor: pointer;
}
#active-button:hover
{
  cursor: not-allowed;
}
#active-button
{
  background-color: transparent;
  color: #57e389;
  border-bottom: solid #57e389;
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;

}
#disactive-button
{
  background-color: transparent;
  color: #13242e;
  border-bottom: solid transparent;
  border-left: transparent;
  border-right: transparent;
  border-top: transparent;

}
#devider
{
  height: 100%;
  background-color: #13242e41;
  width: 4px;
  margin: 5px;
  border-radius: 5px;
  margin-top: 50px;
}
#main-container
{
  display: grid;
  
/*  justify-content: space-around;*/
  grid-template-columns: 1fr 14px 1fr;
  background-color: transparent;

}
#main-container-page-2-version
{
  display: block;
  
    background-color: transparent;
}
#container1
{
  
  background-color: transparent;
  
}
#container2
{
  background-color: transparent;
  
}

#input-container 
{
  display: none; /* felx  */ 

}
#input-container button
{
  background-color: transparent;
  outline: 0;
  border: solid #13242e;
  border-width: 2px 2px 2px 0 ;
  border-radius: 0px 5px 5px 0;
  font-size: 16px;
  margin-bottom: 20px;
}
#input-container button:hover
{
  cursor: pointer;
}
#input
{
  height: 30px;
  font-size: 16px;
  background-color: transparent;
  outline: 0;
  border: solid #13242e 2px;
  border-radius: 5px 0px 0px 5px;
  margin-bottom: 20px;
  margin-left: 20px;
}
#input-text
{
  display: flex;
  font-size: 18px;
  margin-left: 10px;
  color: #13242e;
  margin-bottom: 20px;
}
#input-text div
{
  color: #13242e;
}
#input-text button
{
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 10px;
  background-color: transparent;
  /*border: solid 2px   #13242e;
  border-radius: 10px;*/
  border: 0;
  padding: 0;
  margin-left: 10px;
  position: relative;
  top: 0px;
}#input-text button:hover{ cursor: pointer;}
#sub-container1  , #sub-container2 
{
  
  display: grid;
 /* grid-template-columns: auto auto;*/
 grid-template-columns:repeat(auto-fit, minmax(150px, 400px));/*this was 1fr 1fr */ 
 background-color: transparent;
 
}
#sub-container2-page-2-version
{
  display: grid;

 /* grid-template-columns: auto auto;*/
 grid-template-columns: repeat(auto-fit, minmax(150px, 200px));

 background-color: transparent;
}
div
{
  color: white;
}
#days
{
  display: grid;
  grid-template-columns: repeat(auto-fit , minmax(240px , 1fr));
  margin-bottom: 30px;
}
.day
{
  min-width: 240px;
  max-width: auto;
  min-height: 200px;
  max-height: auto;
  background-color: #57e389;
  margin: 5px;
  color: #13242e95;
  padding-top: 10px;
  font-size: 20px;
  border-radius: 4px;

}
.addedWorkout
{

  font-size: 20px;
  width: auto;
  height: auto;
  background-color: #13242e36;
  padding: 5px;
  border-radius: 4px;
  margin: 3px;
  display: grid;
  grid-template-columns: 1fr 30px;
}
.addedWorkout button
{
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: none;
}
#choseDayPopUp button
{ 

  width: 80px;
  height: 40px;
  margin: 0 2px;
  background-color: #ffece0;
  border: 0;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 18px;

}#choseDayPopUp button:hover{cursor: pointer;}
#choseDayPopUp #close-day
{
 margin-top: 25px;
}
#choseDayPopUp
{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #13242e;
  flex-direction: column;
  
  align-items: center
  /*grid-template-columns: 1fr;*/
;
  padding: 10px 10px 20px 10px;
  border-radius: 5px;
  align-content: center;
  line-height: 50px;
  font-size: 20px;
}

#page-buttons-container button
{
  font-size: 18px;
  margin-left: 20px;
  
}
#page-buttons-container 
{
  margin-bottom: 20px;
}


.gg-add-0 {
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 22px;
 height: 22px;
/* border: 2px solid  #000000;*/
 border: 0;
 transform: scale(var(--ggs,2));
 border-radius: 22px;
 top : 1px;
 left: 3px;
}

.gg-add-0::after,
.gg-add-0::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 10px;
 height: 2px;
 background:  #4ddf85;
 border-radius: 5px;
 top: 9px;
 left: 4px
}

.gg-add-0::after {
 width: 2px;
 height: 10px;
 top: 5px;
 left: 8px
} 

/* Styles for phones */
@media only screen and (max-width: 767px) {
  /* Your phone styles here */
  html body 
  {
   
  }
  #devider
  {
    display: none;
  }
  #main-container
  {
    grid-template-columns: 1fr ;
  }

  #sub-container1  , #sub-container2 
{
  

 
 grid-template-columns: 1fr;
 background-color: transparent;
 
}
#sub-container2-page-2-version
{
  display: grid;
 /* grid-template-columns: auto auto;*/
 grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

 background-color: transparent;
}
#choseDayPopUp
{
  position: fixed;
  width: 40%;
  display: flex;

}
#choseDayPopUp button
{
  width: 80%;
  font-size: 22px;
}
}


#confirmation
{
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50% , 50%);
  background-color: black;
  height: 40px;
  padding: 10px 10px 20px 10px;
  
}



</style>
