<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Global Styles*/
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
    font-family: 'Lato', sans-serif;
}
a, router-link {
    text-decoration: none;
}
.screen {
    background: url('../public/img/macos.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
}
@media screen and (max-width: 400px) {
    .screen {
        background: url('../public/img/wallpaper-sm.jpg');
        background-size: cover;
    }
}
</style>
