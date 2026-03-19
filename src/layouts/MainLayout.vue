<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated class="bg-black">
      <q-toolbar class="constrain-width">
        <!-- Logo/Title -->
        <q-toolbar-title class="sunflower-title" shrink>
          <router-link to="/" class="title-link">
            <!-- You can replace this with your own logo -->
            <q-avatar size="32px" color="primary" text-color="white" class="q-mr-sm">Y</q-avatar>
            <span>YOUR NAME</span>
          </router-link>
        </q-toolbar-title>

        <q-space />

        <!-- Desktop Navigation -->
        <div class="desktop-nav gt-sm">
          <q-btn flat label="About" to="/" :class="{ 'active-nav': currentTab === 'home' }" />
          <q-btn flat label="Experience" to="/experience" :class="{ 'active-nav': currentTab === 'experience' }" />
          <q-btn flat label="Projects" to="/projects" :class="{ 'active-nav': currentTab === 'projects' }" />
          <q-btn flat label="Skills" to="/skills" :class="{ 'active-nav': currentTab === 'skills' }" />
        </div>

        <!-- Mobile Menu Button -->
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

    <!-- Mobile Drawer -->
    <q-drawer v-model="drawerOpen" side="right" overlay behavior="mobile" class="bg-black">
      <q-list dark>
        <q-item-label header class="text-primary">PORTFOLIO</q-item-label>
        
        <q-item clickable v-ripple to="/" @click="drawerOpen = false" active-class="text-primary">
          <q-item-section avatar><q-icon name="person" /></q-item-section>
          <q-item-section>About Me</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/experience" @click="drawerOpen = false" active-class="text-primary">
          <q-item-section avatar><q-icon name="work" /></q-item-section>
          <q-item-section>Experience</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/projects" @click="drawerOpen = false" active-class="text-primary">
          <q-item-section avatar><q-icon name="code" /></q-item-section>
          <q-item-section>Projects</q-item-section>
        </q-item>

         <q-item clickable v-ripple to="/skills" @click="drawerOpen = false" active-class="text-primary">
          <q-item-section avatar><q-icon name="build" /></q-item-section>
          <q-item-section>Skills</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-black q-pa-md">
      <div class="footer-content constrain-width text-center">
        <div class="text-white text-caption">
          © {{ new Date().getFullYear() }} Your Name. Built with Quasar.
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentTab = ref('home');
const drawerOpen = ref(false);

watch(() => route.path, (newPath) => {
  if (newPath === '/' || newPath === '') currentTab.value = 'home';
  else if (newPath.startsWith('/experience')) currentTab.value = 'experience';
  else if (newPath.startsWith('/projects')) currentTab.value = 'projects';
  else if (newPath.startsWith('/skills')) currentTab.value = 'skills';
}, { immediate: true });

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}
</script>

<style scoped lang="scss">
.constrain-width {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.title-link {
  color: $primary;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    font-weight: 700;
  }
}

.desktop-nav {
  display: flex;
  gap: 1rem;

  :deep(.q-btn) {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;

    &:hover {
      color: $primary;
    }

    &.active-nav {
      color: $primary;
      border-bottom: 2px solid $primary;
    }
  }
}
</style>
