import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        options: {
            customProperties: true,
         },
        themes: {
          light: {
              blue: '#008FBE',
              light_blue: '#70CAF0',
              very_light_blue: '#008DB5',
              lightest_blue: '#DBEAEF',
              dark_blue: '#004A80',
              navy_blue: '#1E4260',
              grey: '#ECECEC',
              blue_grey: '#9AA9B5',
              dark_grey: '#808080'
          }
        }
    }
});
