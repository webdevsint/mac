<template>
  <div class="desktop">
    <div class="screen">
      <div class="topBar">
        <div class="topBarLeft">
          <div class="topBarBtn apple" @click="showOptions()">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"
              ></path>
            </svg>
          </div>
          <p class="recentApp">
            <a href="https://jagucoin.netlify.app/" target="_blank">JaguCoin</a>
          </p>
        </div>
        <div class="topBarRight">
          <div class="topBarBtn battery">
            <p style="margin-right: 8px">100%</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12 5H2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2z"
                clip-rule="evenodd"
              ></path>
              <path d="M2 6h10v4H2V6zm12.5 3.5a1.5 1.5 0 000-3v3z"></path>
            </svg>
          </div>
          <div class="topBarBtn wifi">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"
              ></path>
            </svg>
          </div>
          <div class="topBarBtn spotlight">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
              ></path>
            </svg>
          </div>
          <div class="topBarBtnImg" @click="showControlCenter()">
            <img src="../../public/img/controlcenter.png" alt="" />
          </div>
          <span id="weekDay"></span>
          <span id="month"></span>
          <span v-text="date" class="date"></span>
          <div class="clock" v-if="hourtime != ''">
            <div>
              <span v-text="hours" class="hours"></span>
            </div>
            :
            <div v-text="minutes" class="mins"></div>
            <!-- <div v-text="seconds"></div> -->
            <span class="meredian" v-text="hourtime"></span>
          </div>
        </div>
      </div>
      <div class="controlCenter">
        <div class="row1">
          <div class="row1box1">box</div>
          <div class="row1col1">
            <div class="row1col1box">light mode</div>
            <div
              class="flex"
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div class="row1col1box2">
                keyboard <br />
                brightness
              </div>
              <div class="row1col1box3">
                enter <br />
                fullscreen
              </div>
            </div>
          </div>
        </div>
        <div class="row2">
          <div class="row2box">display</div>
        </div>
        <div class="row3">
          <div class="row3box">sound</div>
        </div>
        <div class="row4">
          <div class="row4box">music</div>
        </div>
      </div>
      <div class="optionsWrap">
        <div class="options">
          <div class="itemContainer">
            <div class="optionsItem">
              <p>About This Mac</p>
            </div>
          </div>
          <div class="itemContainer">
            <div class="optionsItem">
              <p>System Preferences...</p>
            </div>
            <div class="optionsItem">
              <p>App Store...</p>
            </div>
          </div>
          <div class="itemContainer">
            <div class="optionsItem">
              <p>Recent Items</p>
            </div>
          </div>
          <div class="itemContainer">
            <div class="optionsItem">
              <p>Force Quit...</p>
            </div>
          </div>
          <div class="itemContainer">
            <div class="optionsItem">
              <p>Sleep</p>
            </div>
            <div class="optionsItem">
              <p>Restart...</p>
            </div>
            <div class="optionsItem">
              <p>Shut Down...</p>
            </div>
          </div>
          <div class="itemContainer" style="border: none">
            <div class="optionsItem">
              <router-link to="/"><p>Lock Screen</p></router-link>
            </div>
            <div class="optionsItem">
              <router-link to="/"><p>Log Out Nehan...</p></router-link>
            </div>
          </div>
        </div>
      </div>
      <div @click="hideOptions()">
        <main @click="hideControlCenter()">
            <div class="window">
                <div class="windowHeader">
                    <div class="windowActions">
                        <p>x</p>
                        <p>-</p>
                        <p>+</p>
                    </div>
                    <div class="windowTitle">
                        hello world
                    </div>
                    <div>spacing</div>
                </div>
            </div>
        </main>
      </div>
      <div class="appTrayContainer">
        <div class="appTray">
          <div class="apps">
            <div class="app">
              <img src="../../public/img/launchpad.png" alt="" />
            </div>
            <div class="app">
              <img src="../../public/img/bear.png" alt="" />
            </div>
            <div class="app">
              <img src="../../public/img/safari.png" alt="" />
            </div>
            <div class="app">
              <img src="../../public/img/vscode.png" alt="" />
            </div>
            <div class="app">
              <img src="../../public/img/facetime.png" alt="" />
            </div>
            <div class="app">
              <img src="../../public/img/terminal.png" alt="" />
            </div>
            <a href="mailto:nehan.khan779@gmail.com">
              <div class="app">
                <img src="../../public/img/mail.png" alt="" />
              </div>
            </a>
            <a href="https://github.com/webdevsint" target="_blank">
              <div class="app">
                <img src="../../public/img/github.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SECOND, HOUR, getHourTime, getZeroPad } from "../../src/ClockFilters";

export default {
  name: "Desktop",
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourtime: "",
      day: "",
      date: 0,
      month: "",
    };
  },
  mounted() {
    const timer = window.setTimeout(this.updateDateTime, SECOND);
    this.$on("hook:destroyed", () => window.clearTimeout(timer));
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = getZeroPad(now.getMinutes());
      this.seconds = getZeroPad(now.getSeconds());
      this.hourtime = getHourTime(this.hours);
      this.hours = this.hours % HOUR || HOUR;
      this.$options.timer = window.setTimeout(this.updateDateTime, SECOND);
      this.date = now.getDate();
      this.day = now.getDay();
      // month builder
      this.month = now.getMonth();
      if (this.month === 0) {
        document.querySelector("#month").innerHTML = "Jan";
      }
      if (this.month === 1) {
        document.querySelector("#month").innerHTML = "Feb";
      }
      if (this.month === 2) {
        document.querySelector("#month").innerHTML = "Mar";
      }
      if (this.month === 3) {
        document.querySelector("#month").innerHTML = "Apr";
      }
      if (this.month === 4) {
        document.querySelector("#month").innerHTML = "May";
      }
      if (this.month === 5) {
        document.querySelector("#month").innerHTML = "Jun";
      }
      if (this.month === 6) {
        document.querySelector("#month").innerHTML = "Jul";
      }
      if (this.month === 7) {
        document.querySelector("#month").innerHTML = "Aug";
      }
      if (this.month === 8) {
        document.querySelector("#month").innerHTML = "Sep";
      }
      if (this.month === 9) {
        document.querySelector("#month").innerHTML = "Oct";
      }
      if (this.month === 10) {
        document.querySelector("#month").innerHTML = "Nov";
      }
      if (this.month === 11) {
        document.querySelector("#month").innerHTML = "Dec";
      }
      // week builder
      if (this.day === 1) {
        document.querySelector("#weekDay").innerHTML = "Mon";
      }
      if (this.day === 2) {
        document.querySelector("#weekDay").innerHTML = "Tue";
      }
      if (this.day === 3) {
        document.querySelector("#weekDay").innerHTML = "Wed";
      }
      if (this.day === 4) {
        document.querySelector("#weekDay").innerHTML = "Thu";
      }
      if (this.day === 5) {
        document.querySelector("#weekDay").innerHTML = "Fri";
      }
      if (this.day === 6) {
        document.querySelector("#weekDay").innerHTML = "Sat";
      }
      if (this.day === 7) {
        document.querySelector("#weekDay").innerHTML = "Sun";
      }
    },
    showControlCenter() {
      document.querySelector(".controlCenter").style.display = "block";
    },
    hideControlCenter() {
      document.querySelector(".controlCenter").style.display = "none";
    },
    showOptions() {
      document.querySelector(".options").style.display = "block";
    },
    hideOptions() {
      document.querySelector(".options").style.display = "none";
    },
  },
};
</script>

<style scoped>
.topBar {
  display: flex;
  justify-content: space-between;
  background: rgba(156, 156, 156, 0.4);
  backdrop-filter: blur(4px);
  padding: 2px 0;
  max-height: 33px;
  width: 100vw;
}
.topBarLeft,
.topBarRight {
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.recentApp {
  padding: 5px;
  margin: 0 10px;
  font-weight: bold;
}
.topBarBtnImg {
  margin: 0 6px;
  padding: 5px;
  border-radius: 3px;
}
.topBarBtnImg img {
  width: 18px;
  height: 18px;
  filter: invert(1);
}
#weekDay {
  padding: 5px 0;
}
.date {
  padding: 5px 0;
}
#month {
  padding: 5px 4px;
}
.clock {
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin-left: 5px;
}
.meredian {
  margin-left: 6px;
}
.topBarBtn {
  margin: 0 0 0 5px;
  padding: 5px;
  border-radius: 3px;
}
.topBarBtn:hover,
.topBarBtnImg:hover {
  background: rgba(233, 232, 232, 0.6);
}
.controlCenter {
  position: fixed;
  right: 0;
  width: 392px;
  height: 460px;
  background: rgba(233, 232, 232, 0.5);
  backdrop-filter: blur(4px);
  margin: 10px;
  padding: 10px 0;
  border-radius: 13px;
  display: none;
}
.row1,
.row2,
.row3,
.row4 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.row1box1 {
  height: 170px;
  width: 180px;
  padding: 8px;
  background: rgba(240, 239, 239, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 13px;
}
.row1col1 {
  display: flex;
  flex-direction: column;
}
.row1col1box {
  width: 180px;
  height: 80px;
  padding: 8px;
  margin-bottom: 8px;
  background: rgba(240, 239, 239, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 13px;
}
.row1col1box2,
.row1col1box3 {
  width: 85px;
  height: 80px;
  padding: 8px;
  margin-bottom: 8px;
  background: rgba(240, 239, 239, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 13px;
}
.row2box {
  margin: 5px 0;
  width: 370px;
  height: 80px;
  padding: 8px;
  background: rgba(240, 239, 239, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 13px;
}
.row3box {
  margin: 5px 0;
  width: 370px;
  height: 80px;
  padding: 8px;
  background: rgba(240, 239, 239, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 13px;
}
.row4box {
  margin: 5px 0;
  width: 370px;
  height: 80px;
  padding: 8px;
  background: rgba(240, 239, 239, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 13px;
}
main {
  width: 100vw;
  height: calc(100vh - 33px);
}
.options {
  background: rgba(229, 231, 235, 0.9);
  border-radius: 0px 0px 10px 10px;
  backdrop-filter: blur(4px);
  width: 224px;
  position: absolute;
  left: 15px;
  display: none;
}
.optionsItem p {
  padding: 6px 20px;
  color: black;
}
.optionsItem p:hover {
  background: #3b82f6;
  color: white;
}
.itemContainer {
  border-bottom: 2px solid rgb(145, 145, 145);
  padding: 5px 0;
}
.window {
    display: none;
}
.windowHeader {
    display: flex;
    justify-content: space-between;
    background: rgba(229, 231, 235, 1);
}
.windowActions {
    display: flex;
}
.appTrayContainer {
  height: 65px;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
}
.appTray {
  min-height: 65px;
  width: 480px;
  background: rgba(156, 156, 156, 0.4);
  margin: 0 auto;
  border-radius: 10px 10px 0px 0px;
  backdrop-filter: blur(4px);
  padding: 10px;
  display: flex;
  justify-content: center;
}
.apps {
  width: 480px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 5px;
  position: absolute;
  bottom: 0;
}
.app img {
  height: 50px;
  width: 50px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
.app img:hover {
  height: 70px;
  width: 70px;
  transition: 0.2s ease-out;
}
.battery {
  display: flex;
}
@media screen and (max-width: 640px) {
  .battery,
  .wifi {
    display: none;
  }
}
@media screen and (max-width: 479px) {
  .app img:hover {
    height: 50px;
    width: 50px;
  }
  .apps,
  .app {
    position: relative;
  }
  .appTray {
    max-width: 130%;
    border-radius: 0;
  }
  .appTrayContainer,
  .appTray {
    overflow-x: auto;
    overflow-y: hidden;
  }
}
@media screen and (max-width: 410px) {
  .controlCenter {
    border-radius: 0 0 13px 13px;
    margin: 0;
    width: 100vw;
    max-height: 70%;
    overflow: scroll;
  }
}
@media screen and (max-width: 400px) {
  .topBarBtn,
  .topBarLeft p,
  .clock,
  #weekDay,
  #month,
  .date,
  .meredian,
  .hours,
  .mins {
    font-size: small;
  }
  .topBarBtn,
  .topBarLeft p,
  .clock,
  #weekDay,
  #month,
  .date {
    padding-top: 7px;
  }
  .row1box1 {
    margin: 0 4px 0 8px;
  }
  .row1col1 {
    margin: 0 8px 0 4px;
  }
  .row2,
  .row3,
  .row4 {
    margin: 0 8px;
  }
  .apple svg{
      padding-bottom: 2px;
  }
}
@media screen and (max-width: 300px) {
  .spotlight {
    display: none;
  }
}
@media screen and (max-width: 350px) {
  .topBarBtn,
  .topBarLeft p,
  .clock,
  #weekDay,
  #month,
  .date,
  .meredian,
  .hours,
  .mins {
    font-size: 11.5px;
  }
  .topBarBtn,
  .topBarLeft p,
  .clock,
  #weekDay,
  #month,
  .date {
    padding-top: 9px;
  }
  .apple svg{
      padding-bottom: 5px;
  }
}
@media screen and (max-width: 330px) {
  .topBarBtn,
  .topBarLeft p,
  .clock,
  #weekDay,
  #month,
  .date,
  .meredian,
  .hours,
  .mins {
    font-size: 10px;
  }
}
</style>