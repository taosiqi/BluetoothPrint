import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Print from '../views/print.vue'
import Photo from '../views/photo.vue'
import Audio from '../views/audio.vue'
import Video from '../views/video.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/print',
    name: 'print',
    component: Print
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo
  },
  {
    path: '/audio',
    name: 'audio',
    component: Audio
  },
  {
    path: '/video',
    name: 'video',
    component: Video
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
