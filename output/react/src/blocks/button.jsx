import * as React from "react";

function Button(props) {
  return (
    <>
      {props.link ? (
        <>
          <a
            role="button"
            {...props.attributes}
            href={props.link}
            target={props.openLinkInNewTab ? "_blank" : undefined}
          >
            {props.text}
          </a>
        </>
      ) : (
        <span {...props.attributes}>{props.text}</span>
      )}
    </>
  );
}

export default Button;
