<template>


  <div  id="sub-main">
    



    <div   class="workout"> {{workoutName}} </div>
    <div id="buttons">
      <button id="add-button" @click="selected()"> <div class="gg-check-o"></div> </button>
      <button id="del-button" @click="selfDelete()"> <div class="gg-close-o"></div> </button>
    </div>
  </div>



   


</template>

<script>
export default {
  name: 'create-workouts-page',
  props: [
    'workoutName' 
],
  methods: {

    selected()
    {
      this.$emit('selected-workout')
    },
    selfDelete()
    {
      this.$emit('self-delete');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*    --------------- put this in app.vue later
#workouts-container
{
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  
}*/ 

#sub-main
{
  background-color: #57e389;
  min-width: 100px;
  max-width: auto;
  display: flex;
  justify-content: space-between;
  grid-template-columns: 240px auto;
  position: relative;
  margin: 5px;
  border-radius: 10px;
  
}
.workout
{
  /*max-width: 100%;
  min-width: 80px;*/
  width: 100%;
  height: auto;
  background-color: transparent;
  margin: 10px 10px;
  text-align: center;
  line-height: 80px;
  word-wrap: break-word;
  font-size: 20px;
 
}
#del-button
{
  
  height: 30px;
  width: 30px;
  background-color: transparent;
  position: absolute;
  
  transform: translate(80%, 50%);
  display: none;
  border-radius: 30px;
  border: solid 2px transparent;
  font-size: 20px;
  font-weight: 900;
  color: hsl(0, 100%, 50%);
  

}
#add-button
{
  
  height: 30px;
  width: 30px;
  background-color: transparent;
  position: absolute;

  transform: translate(-100%, 50%);
  display: none;
  border-radius: 30px;
  border: solid 2px transparent;
  font-size: 20px;
  font-weight: 900;
  color: red;

}
@media only screen and (min-width: 767px)
 {
  #sub-main:hover  #del-button,
#sub-main:hover  #add-button
{
  display: block;
  cursor: pointer; 
}

#sub-main:hover
{
  background-color: hsl(181, 71%, 12%);
}
#sub-main:hover .workout
{
  filter: blur(10px);
}

} 

#buttons
{
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  justify-content: space-around;
  background-color: transparent;
  height: 50px;
  min-width: 100px;

}


.gg-close-o {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,2));
    width: 22px;
    height: 22px;
    border: 2px solid hsl(0, 100%, 60%);
    border-radius: 40px;
    right: -15px;

}
.gg-close-o::after,
.gg-close-o::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    background: hsl(0, 100%, 60%);
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 3px;
}
.gg-close-o::after {
    transform: rotate(-45deg)
}

.gg-add {
 
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 22px;
 height: 22px;
 border: 2px solid  #ffece0;
 transform: scale(var(--ggs,2));
 border-radius: 22px;
 
}

.gg-add::after,
.gg-add::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 10px;
 height: 2px;
 background:  #ffece0;
 border-radius: 5px;
 top: 8px;
 left: 4px
}

.gg-add::after {
 width: 2px;
 height: 10px;
 top: 4px;
 left: 8px
} 

.gg-check-o {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,2));
    width: 22px;
    height: 22px;
    border: 2px solid #ffece0;;
    border-radius: 100px
}
.gg-check-o::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-color: #ffece0;;
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: bottom left;
    transform: rotate(45deg)
}


@media only screen and (max-width: 767px) {
#del-button , #add-button
{
  display: block;
  background-color: transparent;
  position: static;
  transform: translate(0 ,0);
  /**/ 

  
  
  display: block;
  
}
#del-button
{
  transform: translate(0,80%);
}
.workout
{
  background-color: transparent;
}

#sub-main
{

  display: grid;
  grid-template-columns: 1fr  50px;
  
  
}


#buttons
{



  transform: translate(0% , 0%);
  position: static;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  padding-top: 10px;
  padding: 10px;
  
}

.gg-add , .gg-close-o , .gg-check-o{
 
 
 transform: scale(var(--ggs,1.5));
 left: -4px;
}
}

</style>
