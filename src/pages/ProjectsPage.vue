<template>
  <q-page class="q-pa-md bg-gradient">
    <div class="constrain-width">
      <h2 class="text-h4 text-weight-bold q-my-md text-center text-white">My Projects</h2>
      
      <div class="row q-col-gutter-md">
        <!-- Project 1 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card bg-grey-9 text-white">
            <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" :ratio="16/9" />
            
            <q-card-section>
              <div class="text-h6">SFW Project</div>
              <div class="text-subtitle2 text-primary">Quasar Framework</div>
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
              <div class="text-h6">Another Awesome Project</div>
              <div class="text-subtitle2 text-primary">Vue.js & Firestore</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              Description of another project showcasing different skills.
            </q-card-section>
             <q-card-actions align="right">
              <q-btn flat color="primary" label="View Code" />
              <q-btn flat color="primary" label="Live Demo" />
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
.bg-gradient {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
}
.constrain-width {
  max-width: 1200px;
  margin: 0 auto;
}
.my-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .q-card__section:last-of-type {
    flex-grow: 1;
  }
}
</style>
