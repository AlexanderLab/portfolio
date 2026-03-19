<template>
  <q-page class="q-pa-lg bg-dark-page">
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
.constrain-width {
  max-width: 1000px;
  margin: 0 auto;
}

:deep(.q-timeline__subtitle) {
  color: $secondary;
  opacity: 1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

:deep(.q-timeline__title) {
  color: $primary;
  font-weight: 800;
  text-shadow: 0 0 10px rgba(0, 245, 160, 0.3);
}

:deep(.q-timeline__content) {
  color: #e2e8f0;
}
</style>
