import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./content.css";

import CKEditor from "@ckeditor/ckeditor5-vue";
import { install as VueMonacoEditorPlugin } from "@guolao/vue-monaco-editor";

const app = createApp(App);

app.use(CKEditor);
app.use(VueMonacoEditorPlugin, {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs",
  },
});
app.mount("#app");

// createApp(App).mount('#app')
