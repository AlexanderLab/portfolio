<template>
  <q-page class="q-pa-lg bg-dark-page">
    <div class="constrain-width">
      <h2 class="text-h4 text-weight-bold q-my-md text-center text-white">Skills</h2>
      
      <div class="q-mb-xl">
        <h3 class="text-h5 text-neon q-mb-md">Languages</h3>
        <div class="row q-gutter-sm">
          <q-chip size="lg" icon="code" color="dark" text-color="white" outline class="skill-chip border-neon">JavaScript</q-chip>
          <q-chip size="lg" icon="code" color="dark" text-color="white" outline class="skill-chip border-neon">TypeScript</q-chip>
          <q-chip size="lg" icon="code" color="dark" text-color="white" outline class="skill-chip border-neon">HTML5</q-chip>
          <q-chip size="lg" icon="code" color="dark" text-color="white" outline class="skill-chip border-neon">CSS3/SCSS</q-chip>
          <q-chip size="lg" icon="code" color="dark" text-color="white" outline class="skill-chip border-neon">Python</q-chip>
        </div>
      </div>

      <div class="q-mb-xl">
        <h3 class="text-h5 text-cyan q-mb-md">Frameworks & Libraries</h3>
        <div class="row q-gutter-sm">
          <q-chip size="lg" icon="layers" outline color="primary" class="skill-chip">Vue.js</q-chip>
          <q-chip size="lg" icon="layers" outline color="primary" class="skill-chip">Quasar</q-chip>
          <q-chip size="lg" icon="layers" outline color="primary" class="skill-chip">React</q-chip>
          <q-chip size="lg" icon="layers" outline color="primary" class="skill-chip">Node.js</q-chip>
        </div>
      </div>

      <div class="q-mb-xl">
        <h3 class="text-h5 text-neon q-mb-md">Tools & Others</h3>
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
.constrain-width {
  max-width: 1000px;
  margin: 0 auto;
}
.skill-chip {
  transition: all 0.3s ease;
  &.border-neon {
    border: 1px solid rgba(0, 245, 160, 0.3);
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 245, 160, 0.2);
    border-color: $primary;
  }
}
</style>
