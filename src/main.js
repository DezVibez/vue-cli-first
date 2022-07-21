
/*Descrizione:
Create un nuovo progetto utilizzando Vue CLI: aiutatevi con le slide per ripercorrere i vari passaggi dell'installazione come visti a lezione.
Create e utilizzate un componente Title, il quale contiene un titolo che recita "La mia prima app con Vue CLI!" */



import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
