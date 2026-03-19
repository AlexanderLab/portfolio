<template>
  <q-page class="flex flex-center column bg-gradient">
    <div class="text-center q-pa-md constrain-width">
      <q-avatar size="200px" class="q-mb-md shadow-10">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
      
      <h1 class="text-h2 text-weight-bold q-mb-sm text-white">Your Name</h1>
      <div class="text-h5 text-primary q-mb-lg">Full Stack Developer | Computer Scientist</div>
      
      <p class="text-white text-body1 q-mb-xl" style="max-width: 600px; margin-left: auto; margin-right: auto;">
        Passionate about creating elegant and efficient web solutions. 
        Experienced in modern web technologies and always eager to learn more.
      </p>
      
      <div class="row justify-center q-gutter-md">
        <q-btn size="lg" color="primary" label="View Projects" to="/projects" />
        <q-btn size="lg" outline color="white" label="Contact Me" href="mailto:your.email@example.com" />
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
</style>
