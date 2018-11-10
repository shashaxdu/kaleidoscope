// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

// register modal component
Vue.component('hello', {
  template: '<h1>Hello World!</h1>'
});


// --- COMMON COMPONENTS ---
Vue.component('page', {
  props: {
    pages: { type: Object },
    current: { type: String }
  },
  methods: {
    changepage (pageName) {
      current = pageName;
    }
  },
  computed: {
    current() {
      return this.pages[cur]
    }
  },
  template: `
    <div class="content" id="home">
      <header :subtitle=pages.subtitle></header>

      <navbar></navbar>
      <content></content>
    
      <bottombar></bottombar>
    </div>
  `
});

Vue.component('navbar', {
  // ** where the page changes
  data: function() {
    return {
      buttons: [
        { link: '', img: '', alt: ''},
      ]
    };
  },
  template: `
    <div class="navbar-fixed-left">
      <a href="Avatar.html" class="nav-icon hover-80-smaller hover">
        <img src="img/navbar/avatar_icon.png" alt="Avatar navbar icon" class="nav-icon-img">
      </a>
      <a href="Earth.html" class="nav-icon hover-80-smaller hover">
        <img src="img/navbar/earth_icon.png" alt="Earth navbar icon" class="nav-icon-img">
      </a>
      <a href="SolarSystem.html" class="nav-icon hover-80-smaller hover">
        <img src="img/navbar/solarsystem_icon.png" alt="Solar System navbar icon" class="nav-icon-img">
      </a>
      <a href="StarNeighborhood.html" class="nav-icon hover-80-smaller hover">
        <img src="img/navbar/starneighborhood_icon.png" alt="Milky Way navbar icon" class="nav-icon-img">
      </a>
      <a href="Supercluster.html" class="nav-icon hover-80-smaller hover">
        <img src="img/navbar/supercluster_icon.png" alt="Supercluster navbar icon" class="nav-icon-img">
      </a>
      <a href="Infinity.html" class="nav-icon hover-80-smaller hover">
        <img src="img/navbar/infinity_icon.png" alt="Infinity navbar icon" class="nav-icon-img">
      </a>
    </div>
  `
});

/*
  {
    link
    img
    alt
  }
*/

Vue.component('navbar-item', {
  template: '<h1>Hello World!</h1>'
});

Vue.component('content', {
  template: '<h1>Hello World!</h1>'
});

Vue.component('header', {
  props: {
    subtitle: { type: String }
  },
  template: `
    <header>
      <a href="index.html">
        <h1>KALEIDOSCOPE</h1>
      </a>
      <h2>{{ subtitle }}</h2>
    </header>
  `
});

Vue.component('home', {
  template: ''
}) 

Vue.component('bottombar', {
  template: '<h1>Hello World!</h1>'
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  data: {
    showModal: false
  }
}).$mount('#app')

// Now the app has started!