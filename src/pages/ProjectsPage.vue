<template>
  <q-page class="q-pa-lg bg-dark-page">
    <div class="constrain-width">
      <h2 class="text-h4 text-weight-bold q-my-md text-center text-white">My Projects</h2>
      
      <div class="row q-col-gutter-md">
        <!-- Project 1 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card bg-grey-9 text-white">
            <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" :ratio="16/9" />
            
            <q-card-section>
              <div class="text-h6 text-neon">Portfolio Project</div>
              <div class="text-subtitle2 text-cyan">Quasar Framework</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              A comprehensive web application built with Quasar, featuring media galleries, team management, and authentication.
            </q-card-section>
            
            <q-card-actions align="right">
              <q-btn flat color="primary" label="View Code" />
              <q-btn flat color="primary" label="Live Demo" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Project 2 (Placeholder) -->
        <div class="col-12 col-md-6">
          <q-card class="my-card bg-grey-9 text-white">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" :ratio="16/9" />
            
            <q-card-section>
              <div class="text-h6 text-neon">Another Awesome Project</div>
              <div class="text-subtitle2 text-cyan">Vue.js & Firestore</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              Description of another project showcasing different skills.
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat dense color="primary" label="View Code" class="glow-btn" />
              <q-btn flat dense color="secondary" label="Live Demo" class="glow-btn" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
</script>

<style scoped lang="scss">
.constrain-width {
  max-width: 1200px;
  margin: 0 auto;
}
.my-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #1e293b !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: $primary;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  
  .q-card__section:last-of-type {
    flex-grow: 1;
  }
}
</style>
