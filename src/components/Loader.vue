<template>
  <div class="loader" role="status" aria-label="Chargement">
    <div class="loader-content">
      <div class="vase-wrapper">
        <div class="vase">
          <div class="vase-water" :style="{ height: progress + '%' }">
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
          </div>
          <div class="vase-percentage">{{ progress }}%</div>
        </div>
        <div class="vase-base"></div>
      </div>
      <p class="loader-label">Chargement...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      progress: 0,
      interval: null
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.progress < 90) {
        this.progress += Math.floor(Math.random() * 5) + 2;
        if (this.progress > 90) this.progress = 90;
      }
    }, 120);
  },
  beforeUnmount() {
    clearInterval(this.interval);
    this.progress = 100;
  }
};
</script>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* ---- VASE ---- */
.vase-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vase {
  position: relative;
  width: 70px;
  height: 160px;
  border: 3px solid rgba(139, 124, 246, 0.6);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  background: rgba(255,255,255,0.03);
  clip-path: polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%);
}

.vase-water {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(139, 124, 246, 0.75);
  transition: height 0.3s ease-out;
  overflow: hidden;
}

/* Vague 1 */
.wave {
  position: absolute;
  top: -12px;
  left: -60%;
  width: 220%;
  height: 24px;
  border-radius: 40%;
  background: rgba(139, 124, 246, 0.5);
}

.wave1 {
  animation: wave-anim 2.2s linear infinite;
}

.wave2 {
  top: -8px;
  background: rgba(180, 160, 255, 0.35);
  animation: wave-anim 3.1s linear infinite reverse;
}

@keyframes wave-anim {
  0%   { transform: translateX(0) rotate(0deg); }
  100% { transform: translateX(30%) rotate(360deg); }
}

.vase-percentage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
  z-index: 2;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
}

/* Pied du vase */
.vase-base {
  width: 80px;
  height: 10px;
  background: rgba(139, 124, 246, 0.5);
  border-radius: 0 0 8px 8px;
  margin-top: 0;
}

/* Label */
.loader-label {
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin: 0;
  letter-spacing: 0.06em;
}
</style>