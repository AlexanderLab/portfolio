<template>
  <q-page class="q-pa-lg">
    <div class="constrain-width">
      <h2 class="text-h4 text-weight-bold q-my-md text-center text-white">{{ $t('projects.title') }}</h2>
      
      <div class="row q-col-gutter-md">
        <!-- Project 1 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card text-white">
            <q-img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" :ratio="16/9" />
            
            <q-card-section>
              <div class="text-h6 text-neon">{{ $t('projects.jackpotTitle') }}</div>
              <div class="text-subtitle2 text-cyan">NodeJS | DevOps | SQL</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              {{ $t('projects.jackpotDesc') }}
            </q-card-section>
            
            <q-card-actions align="right">
              <q-btn flat dense color="primary" :label="$t('projects.details')" class="glow-btn" @click="showDetails('jackpot')" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Project 2 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card text-white">
            <q-img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" :ratio="16/9" />
            
            <q-card-section>
              <div class="text-h6 text-neon">{{ $t('projects.erictelTitle') }}</div>
              <div class="text-subtitle2 text-cyan">Agile | Project Mgmt | Technical Analysis</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              {{ $t('projects.erictelDesc') }}
            </q-card-section>
             <q-card-actions align="right">
               <q-btn flat dense color="primary" :label="$t('projects.details')" class="glow-btn" @click="showDetails('erictel')" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Project 3 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card text-white">
            <q-img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" :ratio="16/9" />
            
            <q-card-section>
              <div class="text-h6 text-neon">{{ $t('projects.aplanetTitle') }}</div>
              <div class="text-subtitle2 text-cyan">React | Node.js | PostgreSQL</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              {{ $t('projects.aplanetDesc') }}
            </q-card-section>
            
            <q-card-actions align="right">
              <q-btn flat dense color="primary" :label="$t('projects.details')" class="glow-btn" @click="showDetails('aplanet')" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Project 4 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card text-white">
            <q-img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800" :ratio="16/9" />
            
            <q-card-section>
              <div class="text-h6 text-neon">{{ $t('projects.mitslTitle') }}</div>
              <div class="text-subtitle2 text-cyan">Networking | Linux | CCTV | Hardware</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              {{ $t('projects.mitslDesc') }}
            </q-card-section>
            
            <q-card-actions align="right">
              <q-btn flat dense color="primary" :label="$t('projects.details')" class="glow-btn" @click="showDetails('mitsl')" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Project 5 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card text-white">
            <q-img src="favicon.png" :ratio="16/9" fit="contain" style="background-color: #0f172a !important;" class="q-pa-md" />
            
            <q-card-section>
              <div class="text-h6 text-neon">{{ $t('projects.sunflowerTitle') }}</div>
              <div class="text-subtitle2 text-cyan">Node.js | Vue.js | Firebase</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              {{ $t('projects.sunflowerDesc') }}
            </q-card-section>
            
            <q-card-actions align="right">
              <q-btn flat dense color="secondary" icon="launch" :label="$t('projects.liveView')" class="q-mr-sm" type="a" href="https://www.sunflowersamurai.es" target="_blank" />
              <q-btn flat dense color="primary" :label="$t('projects.details')" class="glow-btn" @click="showDetails('sunflower')" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Project 6 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card text-white">
            <q-img src="lotina.png" :ratio="16/9" fit="contain" style="background-color: #0f172a !important;" class="q-pa-md" />
            
            <q-card-section>
              <div class="text-h6 text-neon">{{ $t('projects.lotinaTitle') }}</div>
              <div class="text-subtitle2 text-cyan">Node.js | Vue.js | Firebase</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              {{ $t('projects.lotinaDesc') }}
            </q-card-section>
            
            <q-card-actions align="right">
              <q-btn flat dense color="secondary" icon="code" :label="$t('projects.github')" class="q-mr-sm" type="a" href="https://github.com/AlexanderLab/ciclos-lotina" target="_blank" />
              <q-btn flat dense color="primary" :label="$t('projects.details')" class="glow-btn" @click="showDetails('lotina')" />
            </q-card-actions>
          </q-card>
        </div>

        <!-- Project 7 -->
        <div class="col-12 col-md-6">
          <q-card class="my-card text-white">
            <q-img src="deejaypo_banner.png" :ratio="16/9" />
            
            <q-card-section>
              <div class="text-h6 text-neon">{{ $t('projects.deejaypoTitle') }}</div>
              <div class="text-subtitle2 text-cyan">Node.js | Discord.js | Lavalink</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-grey-4">
              {{ $t('projects.deejaypoDesc') }}
            </q-card-section>
            
            <q-card-actions align="right">
              <q-btn flat dense color="secondary" icon="code" :label="$t('projects.github')" class="q-mr-sm" type="a" href="https://github.com/AlexanderLab/DeeJayPo" target="_blank" />
              <q-btn flat dense color="primary" :label="$t('projects.details')" class="glow-btn" @click="showDetails('deejaypo')" />
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <!-- Project Details Dialog -->
      <q-dialog v-model="detailsDialog" backdrop-filter="blur(10px)">
        <q-card class="details-card text-white">
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6 text-neon">{{ $t(`projects.${selectedProject}Title`) }}</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup color="grey-5" />
          </q-card-section>

          <q-card-section class="q-pa-md text-grey-4 line-height-relaxed">
            <p v-if="selectedProject">{{ $t(`projects.${selectedProject}Details`) }}</p>
          </q-card-section>

          <q-card-actions align="right" class="q-pa-md">
            <q-btn flat :label="$t('close')" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const detailsDialog = ref(false)
const selectedProject = ref('')

const showDetails = (projectId) => {
  selectedProject.value = projectId
  detailsDialog.value = true
}
</script>

<style scoped lang="scss">
.constrain-width {
  max-width: 1200px;
  margin: 0 auto;
}
.my-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #1e293b !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: $primary;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
  
  .q-card__section:last-of-type {
    flex-grow: 1;
  }
}

.details-card {
  background: rgba(15, 23, 42, 0.9) !important;
  border: 1px solid rgba(0, 245, 160, 0.3);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  min-width: 350px;
  max-width: 600px;
  backdrop-filter: blur(20px);
}

.line-height-relaxed {
  line-height: 1.6;
  font-size: 1.05rem;
  white-space: pre-line;
}

.text-neon {
  color: #00f5a0;
  text-shadow: 0 0 10px rgba(0, 245, 160, 0.5);
}
</style>
