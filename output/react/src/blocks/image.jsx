import * as React from "react";

function Image(props) {
  return (
    <>
      <div className="div">
        <picture>
          <img
            loading="lazy"
            alt={props.altText}
            aria-role={props.altText ? "presentation" : undefined}
            style={{
              objectPosition: props.backgroundSize || "center",
              objectFit: props.backgroundSize || "cover",
            }}
            className={
              "class-image" +
              (props.classProp ? " " + props.classProp : "") +
              " img"
            }
            src={props.image}
            srcset={props.srcset}
            sizes={props.sizes}
          />

          <source srcSet={props.srcset} />
        </picture>

        {props.aspectRatio ? (
          <div
            className="div-2"
            style={{
              paddingTop: props.aspectRatio * 100 + "%",
            }}
          >
            {" "}
          </div>
        ) : null}

        {!props.fitContent ? (
          <>
            <div className="div-3">{props.children}</div>
          </>
        ) : null}
      </div>
      <style jsx>{`
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
      `}</style>
    </>
  );
}

export default Image;
