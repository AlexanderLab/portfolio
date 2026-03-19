<template>
  <q-btn-dropdown
    flat
    dense
    :label="currentLocaleLabel"
    icon="language"
    class="language-selector"
  >
    <q-list>
      <q-item
        clickable
        v-close-popup
        @click="changeLocale('es-ES')"
        :active="locale === 'es-ES'"
      >
        <q-item-section avatar>
          <q-icon name="flag" color="red" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Español</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
        clickable
        v-close-popup
        @click="changeLocale('en-US')"
        :active="locale === 'en-US'"
      >
        <q-item-section avatar>
          <q-icon name="flag" color="blue" />
        </q-item-section>
        <q-item-section>
          <q-item-label>English</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocaleLabel = computed(() => {
  return locale.value === 'es-ES' ? 'ES' : 'EN'
})

function changeLocale(newLocale) {
  locale.value = newLocale
  // Save to localStorage for persistence
  localStorage.setItem('user-locale', newLocale)
}
</script>

<style scoped lang="scss">
.language-selector {
  color: $primary;
  
  :deep(.q-btn__content) {
    font-weight: 600;
  }
}
</style>
