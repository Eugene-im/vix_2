<template>
  <div id="app">


    <div id="nav">
      <router-link to="/">Button</router-link>|
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/style/main.scss';
</style>
