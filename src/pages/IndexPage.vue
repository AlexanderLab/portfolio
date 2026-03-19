<template>
  <q-page class="flex flex-center column q-pa-lg">
    <div class="terminal-container full-width" style="max-width: 800px;">
      <div class="terminal-header">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
        <div class="text-grey-5 q-ml-sm text-caption font-mono">portfolio.js — bash</div>
      </div>
      <div class="terminal-body font-mono">
        <div class="q-mb-md">
          <span class="text-neon">$</span> <span class="text-white">whoami</span>
          <div class="text-cyan q-ml-md">alexander_labiano</div>
        </div>
        
        <div class="q-mb-md">
          <span class="text-neon">$</span> <span class="text-white">cat profile.json</span>
          <div class="q-ml-md">
            <pre class="text-white q-ma-none whitespace-pre-wrap">{{ typedText }}<span class="cursor">|</span></pre>
          </div>
        </div>

        <div v-if="animationDone" class="q-mt-xl row q-gutter-md animate__animated animate__fadeIn">
          <q-btn 
            unelevated 
            color="primary" 
            text-color="black" 
            label="View Projects" 
            to="/projects" 
            class="glow-btn text-weight-bold" 
          />
          <q-btn 
            outline 
            color="primary" 
            label="Download CV" 
            class="glow-btn" 
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const fullText = `{
  "name": "Alexander Labiano",
  "role": "Full Stack Developer",
  "location": "Spain",
  "skills": ["Vue.js", "Quasar", "Node.js", "Firebase"],
  "mission": "Building elegant solutions for complex problems"
}`;

const typedText = ref('');
const animationDone = ref(false);

onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    typedText.value += fullText[i];
    i++;
    if (i === fullText.length) {
      clearInterval(interval);
      animationDone.value = true;
    }
  }, 30);
});
</script>

<style scoped lang="scss">
.font-mono {
  font-family: 'Fira Code', 'Courier New', monospace;
}

.cursor {
  display: inline-block;
  width: 10px;
  background-color: $primary;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
