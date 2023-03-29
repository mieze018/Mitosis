<template>
  <template v-if="link">
    <a
      role="button"
      :href="link"
      :target="openLinkInNewTab ? '_blank' : undefined"
      v-bind="attributes"
    >
      {{ text }}
    </a>
  </template>

  <template v-else>
    <span v-bind="attributes">{{ text }}</span>
  </template>
</template>

<script>
export default {
  name: "button",

  props: ["attributes", "text", "link", "openLinkInNewTab"],
};
</script>