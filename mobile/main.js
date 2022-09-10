import App from "./page/app.js"
import router from "./js/router.js"
import Registry from "./js/componentRegistry.js"
const app = Vue.createApp(App)
const componentRegistry = new Registry(app);
componentRegistry.addComponent("zc-panel");
componentRegistry.addComponent("study-page");
componentRegistry.addComponent("text-panel");
componentRegistry.addComponent("question-panel");
componentRegistry.addComponent("iframe-panel");
componentRegistry.addComponent("code-reader");
componentRegistry.addComponent("triangle-icon");
componentRegistry.addComponent("tree-node");
componentRegistry.addComponent("zc-tree");
componentRegistry.addComponent("tree-selected-panel");
app.use(router);
app.use(vant);
app.use(vant.Lazyload);
app.mount("#app");
