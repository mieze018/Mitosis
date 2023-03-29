<template>
  <div class="div">
    <picture>
      <img
        loading="lazy"
        :alt="altText"
        :aria-role="altText ? 'presentation' : undefined"
        :style="{
          objectPosition: backgroundSize || 'center',
          objectFit: backgroundSize || 'cover',
        }"
        :class="
          _classStringToObject(
            'class-image' + (classProp ? ' ' + classProp : '') + ' img'
          )
        "
        :src="image"
        :srcset="srcset"
        :sizes="sizes"
      />
      <source :srcSet="srcset" />
    </picture>

    <template v-if="aspectRatio">
      <div
        class="div-2"
        :style="{
          paddingTop: aspectRatio * 100 + '%',
        }"
      >
        {{ " " }}
      </div>
    </template>

    <template v-if="!fitContent">
      <div class="div-3">
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "image",

  props: [
    "altText",
    "backgroundSize",
    "classProp",
    "image",
    "srcset",
    "sizes",
    "aspectRatio",
    "fitContent",
  ],

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>

<style scoped>
.div {
  position: relative;
}
.img {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
}
.div-2 {
  width: 100%;
  pointer-events: none;
  font-size: 0;
}
.div-3 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>