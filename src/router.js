import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import AddSchool from './components/Schools/Add-school.vue';
import Login from './components/Auth/Login.vue';
Vue.use(VueCookies);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            guest: true,
        },
    },
    {
        path: '/add-school',
        name: 'AddSchool',
        component: AddSchool
    },
    ]
});

router.beforeEach((to, from, next) => {
  // TODO: validate token in ui? ping backend to validate?
  const hasToken = (VueCookies.get('token') !== null);
  if (to.meta.guest === true) {
    // nav to a 'guest' (no auth required) page
    if (hasToken) {
      // already logged in, send home instead
      next({ name: 'AddSchool' });
    } else {
      next();
    }
  } else if (!hasToken) {
    // everything else requires user to be logged in
    // send to login
    next({
      name: 'Login',
      params: { nextUrl: to.fullPath },
    });
  } else {
    // allow authenticated user to continue
    next();
  }
});

export default router