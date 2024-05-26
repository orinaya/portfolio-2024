<template>
  <div class="w-80 h-80 overflow-hidden border-beige-400 border-solid border">
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>

<style scoped>
.ocean {
  z-index: 2;
  height: 20%;
  width: 100%;
  /* position: absolute; */
  bottom: 0;
  left: 0;
  /* background: #015871; */
}

.wave {
  background: url("../assets/img/wave-animation-1.svg") repeat-x;
  /* position: absolute; */
  top: 600px;
  width: 6400px;
  height: 405px;
  /* animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0); */
}

.wave:nth-of-type(2) {
  top: 590px;
  /* animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    swell 7s ease -1.25s infinite; */
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%,
  100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}
</style>
