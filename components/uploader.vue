<template>
  <div>
    <div
              class="d-flex flex-column align-center justify-center flex-grow-1 upload-block"
          
            >
            <!-- @click="chooseImage"
              :style="`background-image: url('${
                board.image.downloadURL ? board.image.downloadURL : ''
              }');height:150px;background-size: cover;background-position: center;`" -->
    <template
              >
              <!-- v-if="!fileToUpload.progress || fileToUpload.progress == 0" -->

                <v-icon>mdi-camera</v-icon>
                <p>upload project Photo</p>
                <input
                  type="file"
                  accept="jpg, jpeg, png"
                  ref="boardBackground"
                  multiple
                  color="#f66f26"
                  buffer-value="0"
                  @click="onFileClicked($event)"
                  @change="onFileSelected($event)"
                  style="display: none"
                />
              </template>
              <!-- <template
                v-else-if="
                  fileToUpload.progress > 0 && fileToUpload.progress < 100
                "
              >
                <div class="text-center">
                  <v-progress-circular
                    :size="50"
                    color="green"
                    indeterminate
                  ></v-progress-circular>
                </div>
              </template> -->
  </div>
  </div>
</template>

<script>
export default {
data(){
    return{

    }
}
}
</script>

<style>
.upload-block {
  border: 2px dashed #adadad;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 20px;
}
</style>