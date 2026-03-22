<template>
  <q-page class="flex flex-center column q-pa-lg bg-dark">
    <div class="terminal-container full-width" style="max-width: 800px;">
      
      <!-- HEADER -->
      <div class="terminal-header">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
        <div class="text-grey-5 q-ml-sm text-caption font-mono">
          portfolio.js — bash
        </div>
      </div>

      <!-- BODY -->
      <div class="terminal-body font-mono">
        
        <!-- WHOAMI -->
        <div class="q-mb-md">
          <span class="text-green">$</span>
          <span class="text-white"> whoami</span>
          <div class="text-blue q-ml-md">
            alexander_labiano_serrano
          </div>
        </div>

        <!-- PROFILE -->
        <div class="q-mb-md" v-if="step >= 1">
          <span class="text-green">$</span>
          <span class="text-white"> cat profile.json</span>
          <div class="q-ml-md">
            <pre class="text-white q-ma-none">
{{ typedProfile }}<span v-if="step === 1" class="cursor"></span>
            </pre>
          </div>
        </div>

        <!-- COMMAND -->
        <div class="q-mb-md" v-if="step >= 2">
          <span class="text-green">$ </span>
          <span class="text-white">
            {{ typedJourneyCommand }}
            <span v-if="step === 2" class="cursor"></span>
          </span>
          <div v-if="step >= 3" class="text-blue q-ml-md">
            {{ $t('index.startingJourney') }}
          </div>
        </div>

        <!-- STATS -->
        <div v-if="step >= 3" class="q-mt-md text-grey-4">
          <span class="text-green">$</span>
          <span class="text-white"> cat stats.json</span>
          <div v-for="(stat, index) in $tm('index.stats')" :key="index">> {{ $rt(stat) }}</div>
        </div>

        <!-- BUTTONS & SKIP -->
        <div class="q-mt-xl row q-gutter-md items-center">
          <template v-if="step >= 4">
            <q-btn 
              unelevated 
              color="primary" 
              text-color="white"
              :label="$t('index.viewProjects')" 
              @click="scrollTo('#projects')"
              class="glow-btn text-weight-bold animate__animated animate__fadeIn" 
            />
            <q-btn 
              outline 
              color="primary" 
              :label="$t('index.downloadCV')" 
              class="glow-btn animate__animated animate__fadeIn" 
              :href="locale === 'es' ? 'cv_alexander.pdf' : 'cv_alexander_eng.pdf'"
              download
              target="_blank"
            />
          </template>
          
          <q-btn 
            v-if="step < 4"
            flat
            color="grey-7"
            :label="$t('index.skipAnimation')"
            @click="skipAnimation"
            class="animate__animated animate__fadeIn"
          />
        </div>

      </div>
    </div>

    <!-- HEADLINER -->
    <div v-if="step >= 4" class="headliner-text animate__animated animate__fadeInUp q-mt-xl text-center">
      {{ $t('index.headliner') }}
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { scroll } from 'quasar';
import { useI18n } from 'vue-i18n';

const { getScrollTarget, setVerticalScrollPosition } = scroll;
const { tm, locale } = useI18n();

const profileText = computed(() => {
  const data = tm('index.profileData');
  return JSON.stringify(data, null, 2);
});
const journeyCommandText = './start-journey.sh';

const typedProfile = ref('');
const typedJourneyCommand = ref('');
const step = ref(1);
const skip = ref(false);
const animationId = ref(0);

watch(locale, () => {
  // Reiniciar animación cuando cambie el idioma si no se ha saltado
  if (!skip.value) {
    step.value = 1;
    typedProfile.value = '';
    typedJourneyCommand.value = '';
    startAnimation();
  } else {
    // Si ya se saltó, simplemente actualizar los textos instantáneamente
    typedProfile.value = profileText.value;
    typedJourneyCommand.value = journeyCommandText;
  }
});

function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) {
    const target = getScrollTarget(el);
    const offset = el.offsetTop - 66;
    setVerticalScrollPosition(target, offset, 500);
  }
}

async function skipAnimation() {
  skip.value = true;
  typedProfile.value = profileText.value;
  typedJourneyCommand.value = journeyCommandText;
  step.value = 4;
}

const typeText = async (text, target, id, speed = 30) => {
  for (let i = 0; i < text.length; i++) {
    if (skip.value || id !== animationId.value) {
      if (skip.value && id === animationId.value) target.value = text;
      return;
    }
    target.value = text.slice(0, i + 1);
    await new Promise(r => setTimeout(r, speed));
  }
};

const startAnimation = async () => {
  const id = ++animationId.value;
  skip.value = false;
  step.value = 1;
  typedProfile.value = '';
  typedJourneyCommand.value = '';
  
  await typeText(profileText.value, typedProfile, id, 30);
  if (skip.value || id !== animationId.value) return;

  await new Promise(r => setTimeout(r, 400));
  if (skip.value || id !== animationId.value) return;

  step.value = 2;
  await typeText(journeyCommandText, typedJourneyCommand, id, 80);
  if (skip.value || id !== animationId.value) return;

  await new Promise(r => setTimeout(r, 400));
  if (skip.value || id !== animationId.value) return;

  step.value = 3;
  await new Promise(r => setTimeout(r, 600));
  if (skip.value || id !== animationId.value) return;

  step.value = 4;
};

onMounted(() => {
  startAnimation();
});
</script>

<style scoped lang="scss">
.bg-dark {
  background: #0F172A;
}

.terminal-container {
  background: #020617;
  border: 1px solid #1E293B;
  border-radius: 12px;
  overflow: hidden;
}

.terminal-body {
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
}

.terminal-header {
  display: flex;
  align-items: center;
  padding: 8px;
  background: #020617;
  border-bottom: 1px solid #1E293B;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
}
.red { background: #ef4444; }
.yellow { background: #f59e0b; }
.green { background: #22c55e; }

.terminal-body {
  padding: 16px;
}

.font-mono {
  font-family: 'Fira Code', monospace;
}

.cursor {
  display: inline-block;
  width: 8px;
  background-color: #2563EB;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {
  50% { opacity: 0; }
}

.glow-btn {
  border-radius: 8px;
  transition: all 0.2s ease;
}

.glow-btn:hover {
  box-shadow: 0 0 12px rgba(37, 99, 235, 0.5);
  transform: translateY(-1px);
}

pre {
  white-space: pre-wrap;
}

.headliner-text {
  font-size: 1.2rem;
  color: #cbd5e1;
  max-width: 750px;
  line-height: 1.7;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-shadow: 0 0 30px rgba(0, 245, 160, 0.1);
  border-left: 3px solid $primary;
  padding-left: 20px;
  margin-top: 40px;
}

@media (max-width: $breakpoint-sm-max) {
  .headliner-text {
    font-size: 1.1rem;
    padding-left: 0;
    border-left: none;
    border-top: 2px solid $primary;
    padding-top: 20px;
  }
}
</style>
