import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
export const eventBus = new Vue({
  data: {
    products: [
      {
        id: "1",
        img:
          "https://www.rueducommerce.fr/medias/101ec722ad8b350692393f7a03a5feb4/p_1000x1000/macbook-13-02.jpg",
        title: "MacBook",
        description:
          "Quand nous avons créé le MacBook, nous avons tout simplement tenté limpossible. Cest le plus fin et le plus léger de nos ordinateurs portables",
        price: 1500,
      },
      {
        id: "2",
        img:
          "https://www.rueducommerce.fr/medias/101ec722ad8b350692393f7a03a5feb4/p_1000x1000/macbook-13-02.jpg",
        title: "Predator",
        description:
          "The GPU. The source of any competent, powerful gaming machine. With next-gen solutions from NVIDIA® and AMD, this source is overflowing.",
        price: 2300,
      },
      {
        id: "3",
        img:
          "https://www.rueducommerce.fr/medias/101ec722ad8b350692393f7a03a5feb4/p_1000x1000/macbook-13-02.jpg",
        title: "MacBook",
        description:
          "Quand nous avons créé le MacBook, nous avons tout simplement tenté l'impossible. C'est le plus fin et le plus léger de nos ordinateurs portables",
        price: 1500,
      },
    ],
    cart: [],
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
