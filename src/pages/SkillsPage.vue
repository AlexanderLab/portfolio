<template>
  <q-page class="q-pa-lg">
    <div class="constrain-width">
      <h2 class="text-h4 text-weight-bold q-my-lg text-center text-white">
        {{ $t('skills.title') }}
      </h2>

      <div class="text-center text-grey-5 q-mb-lg">
        {{ $t('skills.description') }}
      </div>

      <div class="row q-col-gutter-lg">

        <!-- 🔥 CORE STACK (LO MÁS IMPORTANTE) -->
        <div class="col-12">
          <q-card class="skill-card highlight-card">
            <q-card-section>
              <div class="text-h6 text-white q-mb-sm">{{ $t('skills.coreStack') }}</div>
              <div class="row q-gutter-xs">
                <div class="skill-chip front">React</div>
                <div class="skill-chip back">Node.js</div>
                <div class="skill-chip db">PostgreSQL</div>
                <div class="skill-chip cloud">Firebase</div>
                <div class="skill-chip back">REST APIs</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- FRONTEND -->
        <div class="col-12 col-md-6 col-lg-4">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-grey-5 q-mb-sm">{{ $t('skills.frontend') }}</div>
              <div class="row q-gutter-xs">
                <div class="skill-chip front">React</div>
                <div class="skill-chip front">Vue.js</div>
                <div class="skill-chip front">Quasar</div>
                <div class="skill-chip front">TypeScript</div>
                <div class="skill-chip front">Tailwind</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- BACKEND -->
        <div class="col-12 col-md-6 col-lg-4">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-grey-5 q-mb-sm">{{ $t('skills.backend') }}</div>
              <div class="row q-gutter-xs">
                <div class="skill-chip back">Node.js</div>
                <div class="skill-chip back">Express</div>
                <div class="skill-chip back">NestJS</div>
                <div class="skill-chip back">REST APIs</div>
                <div class="skill-chip back">Authentication (JWT / Firebase)</div>
                <div class="skill-chip back">Redis</div>
                <div class="skill-chip back">RabbitMQ</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- DATABASES -->
        <div class="col-12 col-md-6 col-lg-4">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-grey-5 q-mb-sm">{{ $t('skills.databases') }}</div>
              <div class="row q-gutter-xs">
                <div class="skill-chip db">MongoDB</div>
                <div class="skill-chip db">PostgreSQL</div>
                <div class="skill-chip db">SQLite</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- CLOUD & DEVOPS -->
        <div class="col-12 col-md-6 col-lg-4">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-grey-5 q-mb-sm">{{ $t('skills.cloudDevOps') }}</div>
              <div class="row q-gutter-xs">
                <div class="skill-chip cloud">Docker</div>
                <div class="skill-chip cloud">Firebase</div>
                <div class="skill-chip cloud">CI/CD</div>
                <div class="skill-chip cloud">Linux / Bash</div>
                <div class="skill-chip cloud">Git</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- AI & AUTOMATION -->
        <div class="col-12 col-md-6 col-lg-4">
          <q-card class="skill-card highlight-card">
            <q-card-section>
              <div class="text-h6 text-grey-5 q-mb-sm">{{ $t('skills.aiAutomation') }}</div>
              <div class="row q-gutter-xs">
                <div class="skill-chip ia">LLM Integration</div>
                <div class="skill-chip ia">OpenAI API</div>
                <div class="skill-chip ia">AI Automation (n8n)</div>
                <div class="skill-chip ia">AI-driven workflows</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- LANGUAGES -->
        <div class="col-12 col-md-6">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-grey-5 q-mb-sm">{{ $t('skills.languages') }}</div>
              <div class="row q-gutter-xs">
                <div class="skill-chip lang">{{ $t('skills.spanish') }}</div>
                <div class="skill-chip lang">{{ $t('skills.english') }}</div>
                <div class="skill-chip lang">{{ $t('skills.basque') }}</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- OTHERS -->
        <div class="col-12 col-md-6">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-grey-5 q-mb-sm">{{ $t('skills.others') }}</div>
              <div class="row q-gutter-xs">
                <div class="skill-chip other">{{ $t('skills.cctv') }}</div>
                <div class="skill-chip other">Python</div>
                <div class="skill-chip other">C++</div>
                <div class="skill-chip other">PHP</div>
                <div class="skill-chip other">Symfony</div>
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
  max-width: 1200px;
  margin: 0 auto;
}

.skill-card {
  height: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  background: #0F172A !important; // slate-900 matching index

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 25px -10px rgba(0, 0, 0, 0.5);
    
    .text-grey-5 {
      color: white !important;
    }
  }

  &.highlight-card {
    border: 1px solid rgba(0, 245, 160, 0.2);
    &:hover {
      border-color: rgba(0, 245, 160, 0.4);
      box-shadow: 0 10px 30px -10px rgba(0, 245, 160, 0.2);
    }
  }
}

.skill-chip {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;

  &:hover {
    color: white;
    border-color: white;
    transform: translateY(-2px) scale(1.05);
    background: rgba(255, 255, 255, 0.1);
  }

  // Category Highlights (Constant + Hover)
  &.lang {
    border-color: rgba(0, 245, 160, 0.3);
    color: rgba(0, 245, 160, 0.85);
    background: rgba(0, 245, 160, 0.03);
    &:hover {
      border-color: #00f5a0;
      color: #00f5a0;
      background: rgba(0, 245, 160, 0.1);
      box-shadow: 0 0 15px rgba(0, 245, 160, 0.3);
    }
  }
  
  &.front {
    border-color: rgba(59, 130, 246, 0.3);
    color: rgba(59, 130, 246, 0.85);
    background: rgba(59, 130, 246, 0.03);
    &:hover {
      border-color: #3b82f6;
      color: #3b82f6;
      background: rgba(59, 130, 246, 0.1);
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
    }
  }
  
  &.back {
    border-color: rgba(245, 158, 11, 0.3);
    color: rgba(245, 158, 11, 0.85);
    background: rgba(245, 158, 11, 0.03);
    &:hover {
      border-color: #f59e0b;
      color: #f59e0b;
      background: rgba(245, 158, 11, 0.1);
      box-shadow: 0 0 15px rgba(245, 158, 11, 0.3);
    }
  }
  
  &.cloud {
    border-color: rgba(6, 182, 212, 0.3);
    color: rgba(6, 182, 212, 0.85);
    background: rgba(6, 182, 212, 0.03);
    &:hover {
      border-color: #06b6d4;
      color: #06b6d4;
      background: rgba(6, 182, 212, 0.1);
      box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
    }
  }
  
  &.db {
    border-color: rgba(139, 92, 246, 0.3);
    color: rgba(139, 92, 246, 0.85);
    background: rgba(139, 92, 246, 0.03);
    &:hover {
      border-color: #8b5cf6;
      color: #8b5cf6;
      background: rgba(139, 92, 246, 0.1);
      box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
    }
  }
  
  &.ia {
    border-color: rgba(37, 99, 235, 0.4);
    color: rgba(37, 99, 235, 0.9);
    background: rgba(37, 99, 235, 0.05);
    
    &:hover {
      border-color: #2563EB;
      color: #2563EB;
      background: rgba(37, 99, 235, 0.15);
      box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
    }
  }

  &.other {
    border-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.6);
    &:hover {
      border-color: white;
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>