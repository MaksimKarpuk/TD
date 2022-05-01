<template>
  <div :class="$style.tabs">
  <FooterRadio />
  </div>
</template>

<script>
import FooterRadio from "@/components/atoms/FooterRadio";
export default {
  components: {
    FooterRadio,
  },
};
</script>
 <style lang='scss' module>
 @import '@/assets/styles/style';
 .tabs{
   display: flex;
   gap:1rem;
 }
 </style>