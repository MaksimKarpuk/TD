<template>
  <div>
    <FooterRadio :text="text" :isChecked="isChecked" :id="id" />
  </div>
</template>

<script>
import FooterRadio from "@/components/atoms/FooterRadio";
export default {
  components: {
    FooterRadio,
  },
  props: {
    id: String,
    text: String,
    isChecked: Boolean,
  },
};
</script>
