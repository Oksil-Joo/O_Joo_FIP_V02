module.exports = {

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
              @import "@/assets/sass/main.scss";
              @import "@/assets/sass/reset.scss";
              @import "@/assets/sass/vars.scss";
        `
      }
    }
  },

  devServer: {
    proxy: {

        '/movies': {
          target: "http://localhost:8888/roku/api/index.php",
          changeOrigin: true,
          pathRewrite: {
            '^/movies' : '' }
          }
      }
    }
};
