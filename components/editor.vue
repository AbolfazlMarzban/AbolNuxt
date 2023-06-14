<template>
  <div>
    <tiptap-vuetify class="mt-3" :value="value" :extensions="extensions" @input="$emit('input', arguments[0])">
      {{ content }}
    </tiptap-vuetify>
  </div>
</template>
 
<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Image,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from "tiptap-vuetify";
export default {
  return: {
  },
  components: { TiptapVuetify },
  props: {
  },
  data: () => ({
    extensions: [
      History,
      Blockquote,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Image,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    content: "",
    value: ""
  })
};
</script>

<style>
.tiptap-vuetify-editor__content p.tiptap-vuetify-editor__paragraph--is-empty:first-child:before {
  float: right;
}
</style>