<template>
  <div class="visitor-counter">
    <span>👀 {{ count }} visites</span>
  </div>
</template>

<script>
export default {
  name: "VisitorCounter",
  data() {
    return { count: 0 };
  },
  async mounted() {
    try {
      const res = await fetch("/.netlify/functions/visitors");
      const data = await res.json();
      this.count = data.count;
    } catch (error) {
      this.count = 0;
    }
  }
};
</script>

<style scoped>
.visitor-counter {
  position: fixed;
  left: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  z-index: 2147483647;
  background: rgba(0, 0, 0, 0.85);
  color: #fff !important;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  pointer-events: auto;
}

.visitor-counter span {
  color: #fff !important;
}

@media (max-width: 768px) {
  .visitor-counter {
    left: 12px;
    bottom: calc(12px + env(safe-area-inset-bottom, 0px));
    font-size: 12px;
    padding: 7px 12px;
  }
}
</style>