<template>
  <div class="lockscreen">
    <div class="screen">
      <div class="loginBox">
        <center>
          <img
            src="https://boomr.netlify.app/img/portrait.jpg"
            alt="profile picture"
          />
          <h2>Nehan Yaser</h2>
          <input
            type="text"
            placeholder="Enter Password"
            id="input"
            @click="unlock()"
          />
          <p class="clickMe" @click="unlock()">Click to enter</p>
        </center>
      </div>
      <div class="powerOptions">
        <div class="powerOption">
          <img src="../../public/img/sleep.png" alt="sleep" />
          <p>Sleep</p>
        </div>
        <div class="powerOption">
          <img
            src="../../public/img/restart.png"
            alt="reset"
            style="height: 50px; width: 50px; padding: 5px"
          />
          <p>Restart</p>
        </div>
        <div class="powerOption">
          <img src="../../public/img/power.png" alt="power" />
          <p>Power</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lock Screen",
  methods: {
    unlock() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style scoped>
.screen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img {
  height: 110px;
  width: 110px;
  border-radius: 50%;
  margin: 12px 0;
}
input {
  width: 150px;
  height: 30px;
  margin: 20px 0 8px 0;
  padding-left: 10px;
  background: rgb(163, 162, 162);
  color: white;
  border-radius: 6px;
  border: none;
  outline: none;
}
.clickMe {
  margin-bottom: 155px;
  cursor: pointer;
}
.powerOptions {
  position: fixed;
  bottom: 50px;
  width: 35%;
  display: flex;
  justify-content: space-evenly;
}
.powerOption {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.powerOption img {
  height: 50px;
  width: 50px;
  background: rgb(37, 37, 37);
  padding: 10px;
}
::placeholder {
  color: white;
}

@media screen and (max-width: 870px) {
  .powerOptions {
    width: 70%;
  }
}
@media screen and (max-width: 430px) {
  .powerOptions {
    width: 90%;
  }
}
</style>
