<template>
  <q-page class="q-pa-md bg-gradient">
    <div class="constrain-width">
      <h2 class="text-h4 text-weight-bold q-my-md text-center text-white">Experience</h2>
      
      <q-timeline color="primary" class="text-white">
        <q-timeline-entry
          title="Senior Developer"
          subtitle="2023 - Present"
          icon="code"
          class="timeline-entry-custom"
        >
          <div class="text-grey-4">
            Description of your current role and achievements.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Web Developer"
          subtitle="2020 - 2023"
          icon="web"
           class="timeline-entry-custom"
        >
          <div class="text-grey-4">
            Description of your previous role.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Junior Developer"
          subtitle="2018 - 2020"
           class="timeline-entry-custom"
        >
          <div class="text-grey-4">
            Early career experience.
          </div>
        </q-timeline-entry>
      </q-timeline>
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
:deep(.q-timeline__subtitle) {
  color: $primary;
  opacity: 1;
}
:deep(.q-timeline__title) {
  color: white;
}
</style>
