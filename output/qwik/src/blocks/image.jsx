import {
  Fragment,
  Slot,
  component$,
  h,
  useStylesScoped$,
} from "@builder.io/qwik";

export const Image = component$((props) => {
  useStylesScoped$(STYLES);

  return (
    <div class="div-Image">
      <picture>
        <img
          loading="lazy"
          alt={props.altText}
          aria-role={props.altText ? "presentation" : undefined}
          style={{
            objectPosition: props.backgroundSize || "center",
            objectFit: props.backgroundSize || "cover",
          }}
          class={
            "class-image" +
            (props.classProp ? " " + props.classProp : "") +
            " img-Image"
          }
          src={props.image}
          srcset={props.srcset}
          sizes={props.sizes}
        />
        <source srcSet={props.srcset} />
      </picture>
      {props.aspectRatio ? (
        <div
          class="div-Image-2"
          style={{
            paddingTop: props.aspectRatio * 100 + "%",
          }}
        >
          {" "}
        </div>
      ) : null}
      {!props.fitContent ? (
        <div class="div-Image-3">
          <Slot></Slot>
        </div>
      ) : null}
    </div>
  );
});

export default Image;

export const STYLES = `
.div-Image {
  position: relative;
}
.img-Image {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
}
.div-Image-2 {
  width: 100%;
  pointer-events: none;
  font-size: 0;
}
.div-Image-3 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;
