<template>
  <div :class="$style.tabs">
  <FooterRadio :text="text" :isChecked="isChecked" />
  </div>
</template>

<script>
import FooterRadio from "@/components/atoms/FooterRadio";
export default {
  components: {
    FooterRadio,
  },
   props: {
    text: String,
    isChecked: Boolean,
  }
};
</script>
<style lang='scss' module>
 @import '@/assets/styles/style';
 .tabs{
   display: flex;
   gap:1rem;
 }
 </style>