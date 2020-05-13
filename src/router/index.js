import Vue from 'vue'
import VueRouter from 'vue-router'
import FormBuilder from '../components/FormBuilder.vue'
import Form from '../components/FormElements/form/Form.vue'

Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    component: FormBuilder,
    name: 'FormBuilder'

  },
  {
    path: '/Form',
    component: Form,
    name: 'Form'

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
