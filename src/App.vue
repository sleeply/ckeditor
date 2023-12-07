<script setup lang="ts">
import { ref, shallowRef } from "vue";
import { useCkeditor } from "./utils/ckeditor";

const { editor, editorConfig } = useCkeditor();
const data = ref();

function formatJSON(val: any = {}) {
  try {
    const res = JSON.parse(val);
    return JSON.stringify(res, null, 2);
  } catch {
    return JSON.stringify({}, null, 2);
  }
}

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true
};

const code = ref("some content");
const editorRef = shallowRef();
const handleMount = (edit: any) => (editorRef.value = edit);

async function parseJsonFile(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) =>
      resolve(
        JSON.parse(
          // @ts-ignore
          event.target.result
        )
      );
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsText(file);
  });
}

const getFile = async (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files) {
    parseJsonFile(files[0]).then((res) => {
      // setJson(JSON.stringify(res));
      code.value = JSON.stringify(res);
    });
  }
};
</script>

<template>
  <div>
    <!-- min(100% - var(--space-xl),var(--l-wrapper-max,88rem)); -->

    <div style="display: flex">
      <div>
        <input type="file" accept=".json" @change="getFile" />
        <vue-monaco-editor
          style="width: 100vh; height: 70vh"
          :value="formatJSON(code)"
          theme="vs-dark"
          language="html"
          :options="MONACO_EDITOR_OPTIONS"
          @mount="handleMount"
        />
      </div>
      <Ckeditor :editor="editor.ClassicEditor" v-model="data" :config="editorConfig" />
    </div>
  </div>
</template>
