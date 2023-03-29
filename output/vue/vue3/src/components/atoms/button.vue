<template>
  <button v-bind="$props"><slot /></button>
</template>

<script>
export default {
  name: "button",

  props: [],
};
</script>