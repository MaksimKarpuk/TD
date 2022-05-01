<template>
  <div>
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
  },
};
</script>
