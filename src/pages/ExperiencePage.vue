<template>
  <q-page class="q-pa-lg">
    <div class="constrain-width">
      <h2 class="text-h4 text-weight-bold q-my-md text-center text-white">{{ $t('experience.title') }}</h2>
      
      <div class="row q-col-gutter-lg justify-center">
        <div v-for="(exp, index) in $tm('experience.items')" :key="index" class="col-12 col-md-6">
          <q-card class="experience-card text-white animate__animated animate__fadeInUp full-height" :style="{ 'animation-delay': (index * 0.2) + 's' }">
            <q-card-section class="q-pa-lg flex column full-height">
              <div class="row justify-between items-center q-mb-md">
                <div class="text-h5 text-neon text-weight-bold">{{ $rt(exp.company) }}</div>
                <div class="text-subtitle1 text-cyan font-mono">{{ $rt(exp.role) }}</div>
              </div>

              <div class="text-grey-4 q-mb-lg line-height-relaxed">
                {{ $rt(exp.summary) }}
              </div>

              <div class="q-mb-sm text-grey-5 text-weight-bold text-uppercase letter-spacing-1">{{ $t('experience.keyContributions') }}</div>
              <ul class="exp-list q-mb-lg">
                <li v-for="(contribution, idx) in exp.contributions" :key="idx">
                  {{ $rt(contribution) }}
                </li>
              </ul>

              <q-space />

              <div class="row q-gutter-xs q-mt-md">
                <span v-for="(tech, idx) in exp.tech" :key="idx" class="exp-chip">
                  {{ $rt(tech) }}
                </span>
              </div>
            </q-card-section>
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
  max-width: 1000px;
  margin: 0 auto;
}

.experience-card {
  background: rgba(30, 41, 59, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    border-color: rgba(0, 245, 160, 0.5);
    background: rgba(30, 41, 59, 0.6) !important;
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 245, 160, 0.1);
  }
}

.text-neon {
  color: #00f5a0;
  text-shadow: 0 0 10px rgba(0, 245, 160, 0.3);
}

.font-mono {
  font-family: 'Fira Code', monospace;
}

.letter-spacing-1 {
  letter-spacing: 1.5px;
  font-size: 0.75rem;
}

.line-height-relaxed {
  line-height: 1.7;
  font-size: 1.05rem;
}

.exp-list {
  padding-left: 1.2rem;
  margin: 0;
  
  li {
    color: #cbd5e1;
    margin-bottom: 0.8rem;
    position: relative;
    list-style: none;
    font-size: 0.95rem;
    
    &::before {
      content: "▹";
      position: absolute;
      left: -1.2rem;
      color: #00f5a0;
      font-weight: bold;
    }
  }
}

.exp-chip {
  background: rgba(0, 245, 160, 0.05);
  color: #00f5a0;
  border: 1px solid rgba(0, 245, 160, 0.2);
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 245, 160, 0.15);
    border-color: rgba(0, 245, 160, 0.4);
    transform: scale(1.05);
  }
}
</style>
