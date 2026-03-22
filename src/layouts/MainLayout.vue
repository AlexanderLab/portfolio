<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="glass-header">
      <q-toolbar class="constrain-width">
        <q-toolbar-title class="sunflower-title" shrink>
          <a href="#home" class="title-link" @click.prevent="scrollTo('#home')">
            <q-avatar size="32px" color="primary" text-color="black" class="q-mr-sm shadow-2">AL</q-avatar>
            <span class="text-neon">alexanderLabiano.dev</span>
          </a>
        </q-toolbar-title>

        <q-space />

        <div class="desktop-nav gt-sm items-center">
          <q-btn flat :label="$t('layout.home')" :class="{ 'active-nav': activeSection === 'home' }" @click="scrollTo('#home')" />
          <q-btn flat :label="$t('layout.experience')" :class="{ 'active-nav': activeSection === 'experience' }" @click="scrollTo('#experience')" />
          <q-btn flat :label="$t('layout.skills')" :class="{ 'active-nav': activeSection === 'skills' }" @click="scrollTo('#skills')" />
          <q-btn flat :label="$t('layout.projects')" :class="{ 'active-nav': activeSection === 'projects' }" @click="scrollTo('#projects')" />
          
          <q-separator vertical dark class="q-mx-md" style="height: 20px;" />
          
          <div class="row items-center q-gutter-x-xs">
            <q-btn 
              flat 
              dense 
              size="sm" 
              :color="$i18n.locale === 'en-US' ? 'primary' : 'grey-7'" 
              label="EN" 
              @click="$i18n.locale = 'en-US'" 
            />
            <span class="text-grey-9">|</span>
            <q-btn 
              flat 
              dense 
              size="sm" 
              :color="$i18n.locale === 'es' ? 'primary' : 'grey-7'" 
              label="ES" 
              @click="$i18n.locale = 'es'" 
            />
          </div>
        </div>

        <q-btn
          flat
          dense
          round
          icon="menu"
          color="primary"
          class="lt-md q-ml-sm"
          @click="toggleDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" side="right" overlay behavior="mobile" class="bg-dark-page">
      <q-list dark>
        <q-item-label header class="text-neon">MENU</q-item-label>
        
        <q-item clickable v-ripple @click="scrollTo('#home', true)" :active="activeSection === 'home'" active-class="text-neon">
          <q-item-section avatar><q-icon name="person" /></q-item-section>
          <q-item-section>{{ $t('layout.home') }}</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="scrollTo('#experience', true)" :active="activeSection === 'experience'" active-class="text-neon">
          <q-item-section avatar><q-icon name="work" /></q-item-section>
          <q-item-section>{{ $t('layout.experience') }}</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="scrollTo('#skills', true)" :active="activeSection === 'skills'" active-class="text-neon">
          <q-item-section avatar><q-icon name="build" /></q-item-section>
          <q-item-section>{{ $t('layout.skills') }}</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="scrollTo('#projects', true)" :active="activeSection === 'projects'" active-class="text-neon">
          <q-item-section avatar><q-icon name="code" /></q-item-section>
          <q-item-section>{{ $t('layout.projects') }}</q-item-section>
        </q-item>

        <q-separator dark class="q-my-md" />
        
        <q-item>
          <q-item-section>
            <div class="row items-center justify-around full-width">
              <q-btn 
                flat 
                dense 
                :color="$i18n.locale === 'en-US' ? 'primary' : 'grey-7'" 
                label="English" 
                @click="$i18n.locale = 'en-US'" 
              />
              <q-btn 
                flat 
                dense 
                :color="$i18n.locale === 'es' ? 'primary' : 'grey-7'" 
                label="Español" 
                @click="$i18n.locale = 'es'" 
              />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div id="home"><IndexPage /></div>
      <div id="experience"><ExperiencePage /></div>
      <div id="skills"><SkillsPage /></div>
      <div id="projects"><ProjectsPage /></div>
    </q-page-container>

    <q-footer class="glass-footer q-pa-md">
      <div class="footer-content constrain-width text-center">
        <div class="text-grey-5 text-caption">
          © {{ new Date().getFullYear() }} Alexander Labiano. Built with Quasar.
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { scroll } from 'quasar';
const { getScrollTarget, setVerticalScrollPosition } = scroll;

import IndexPage from 'pages/IndexPage.vue';
import ExperiencePage from 'pages/ExperiencePage.vue';
import ProjectsPage from 'pages/ProjectsPage.vue';
import SkillsPage from 'pages/SkillsPage.vue';

const activeSection = ref('home');
const drawerOpen = ref(false);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}

function scrollTo(id, closeDrawer = false) {
  if (closeDrawer) drawerOpen.value = false;
  
  const el = document.querySelector(id);
  if (el) {
    const target = getScrollTarget(el);
    const offset = el.offsetTop - 66; // Substract header height
    setVerticalScrollPosition(target, offset, 500);
  }
}

let observer = null;

onMounted(() => {
  // Handle initial scroll based on route
  const currentPath = window.location.hash || window.location.pathname;
  if (currentPath.includes('experience')) setTimeout(() => scrollTo('#experience'), 500);
  else if (currentPath.includes('projects')) setTimeout(() => scrollTo('#projects'), 500);
  else if (currentPath.includes('skills')) setTimeout(() => scrollTo('#skills'), 500);

  const options = {
    threshold: 0.5,
    rootMargin: '-66px 0px 0px 0px'
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  ['home', 'experience', 'skills', 'projects'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped lang="scss">
.constrain-width {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.title-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    font-weight: 800;
    letter-spacing: 1px;
    font-family: 'Fira Code', monospace;
  }
}

.desktop-nav {
  display: flex;
  gap: 1rem;

  :deep(.q-btn) {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    text-transform: none;

    &:hover {
      color: $primary;
    }

    &.active-nav {
      color: $primary;
      border-bottom: 2px solid $primary;
      border-radius: 0;
    }
  }
}

.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

// Add some spacing between sections if needed, though IndexPage etc already use q-page
#home, #experience, #skills, #projects {
  scroll-margin-top: 66px; // For direct link jumps
}
</style>
