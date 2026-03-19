<template>
  <q-page class="q-pa-md bg-gradient">
    <div class="constrain-width">
      <h2 class="text-h4 text-weight-bold q-my-md text-center text-white">Skills</h2>
      
      <div class="q-mb-xl">
        <h3 class="text-h5 text-primary q-mb-md">Languages</h3>
        <div class="row q-gutter-sm">
          <q-chip size="lg" icon="code" color="grey-9" text-color="white" class="skill-chip">JavaScript</q-chip>
          <q-chip size="lg" icon="code" color="grey-9" text-color="white" class="skill-chip">TypeScript</q-chip>
          <q-chip size="lg" icon="code" color="grey-9" text-color="white" class="skill-chip">HTML5</q-chip>
          <q-chip size="lg" icon="code" color="grey-9" text-color="white" class="skill-chip">CSS3/SCSS</q-chip>
          <q-chip size="lg" icon="code" color="grey-9" text-color="white" class="skill-chip">Python</q-chip>
        </div>
      </div>

      <div class="q-mb-xl">
        <h3 class="text-h5 text-primary q-mb-md">Frameworks & Libraries</h3>
        <div class="row q-gutter-sm">
          <q-chip size="lg" icon="layers" outline color="primary" class="skill-chip">Vue.js</q-chip>
          <q-chip size="lg" icon="layers" outline color="primary" class="skill-chip">Quasar</q-chip>
          <q-chip size="lg" icon="layers" outline color="primary" class="skill-chip">React</q-chip>
          <q-chip size="lg" icon="layers" outline color="primary" class="skill-chip">Node.js</q-chip>
        </div>
      </div>

      <div class="q-mb-xl">
        <h3 class="text-h5 text-primary q-mb-md">Tools & Others</h3>
        <div class="row q-gutter-sm">
          <q-chip size="lg" icon="build" color="secondary" text-color="black" class="skill-chip">Git</q-chip>
          <q-chip size="lg" icon="build" color="secondary" text-color="black" class="skill-chip">Firebase</q-chip>
          <q-chip size="lg" icon="build" color="secondary" text-color="black" class="skill-chip">Docker</q-chip>
          <q-chip size="lg" icon="build" color="secondary" text-color="black" class="skill-chip">VS Code</q-chip>
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
  max-width: 1000px;
  margin: 0 auto;
}
.skill-chip {
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
}
</style>
