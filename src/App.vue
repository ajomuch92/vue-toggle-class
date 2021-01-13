<template>
  <div id="app">
    <div class="main-container">
      <button v-class-toggle="obj2" id="my-button" class="mb">Button</button>
      <button id="my-button2" class="mb">Button 2</button>
      <button class="mb" @click="toggleObjs">Button3</button>
      <div id="my-div" class="my-style">
        Div 
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    obj1 : {
      if: 'click',
      on: '#my-button2',
      do: 'toggle my-style',
      to: '#my-div'
    },
    obj2 : {
      if: 'click',
      on: '#my-button',
      do: 'toggle mb',
      to: 'button'
    },
  }),
  methods: {
    toggleObjs() {
      this.obj2 = Object.assign({}, this.obj1);
    }
  }
}
</script>

<style>
  .main-container {
    padding: 20px;
    background-color: aquamarine;
    height: 100px;
  }

  .mb {
    margin-bottom: 5px;
  }

  .my-style {
    width: 100%;
    padding: 25px;
    background-color: coral;
    color: white;
    font-size: 25px;
  }

  .red-style {
    background-color: red;
  }
</style>
