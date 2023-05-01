<template>
  <div style="height: 100%;">
    <div class="d-flex flex-column align-center justify-center flex-grow-1 uploader" style="height: 100%;">
      <input type="file" @change="handleFileUpload($event)" color="#f66f26" buffer-value="0" />
      <label v-if="upload.loading == 0">
        <div v-if="!img.path" class="uploaderText">
          <v-icon style="font-size: 60px;">mdi-upload</v-icon>
          <p>Upload project Picture</p>
        </div>
        <div v-else>
          <v-img max-height="150" max-width="150" :src="setImageUrl(img.path)"></v-img>
        </div>

      </label>
      <div class="text-center" v-else>
        <v-progress-circular :size="50" color="green" indeterminate></v-progress-circular>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: {
        path: null
      },
      upload: {
        loading: 0
      }
    }
  }
}
</script>

<style>
.uploader {
  border: 2px dashed #adadad;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  width: 100%;
}

.uploader input {
  height: 100%;
  position: absolute;
  opacity: 0;
}

.uploaderText {
  cursor: pointer !important;
  color: grey;
}
</style>