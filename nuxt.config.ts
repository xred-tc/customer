// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
      
      css: [
            "/node_modules/bootstrap/dist/css/bootstrap.min.css",
            "assets/css/sb-admin-2.css",
            "assets/css/sb-admin-2.min.css",
            "assets/vendor/fontawesome-free/css/all.min.css"
      ],
      app: {
            head: {
                script: [
                  //Bootstrap core JavaScript
                  { src: '/js/jquery/jquery.min.js'},
                  { src: '/js/bootstrap/js/bootstrap.bundle.min.js'},
                  //Core plugin JavaScript
                  { src: '/js/jquery-easing/jquery.easing.min.js'},
                  //Custom scripts for all pages
                  { src: '/js/sb-admin-2.min.js',body:true}
              ]
            }
      }
})
    