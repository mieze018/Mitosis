import { Fragment, component$, h } from "@builder.io/qwik";

export const Button = component$((props) => {
  return (
    <Fragment>
      {props.link ? (
        <a
          role="button"
          {...props.attributes}
          href={props.link}
          target={props.openLinkInNewTab ? "_blank" : undefined}
        >
          {props.text}
        </a>
      ) : (
        <span {...props.attributes}>{props.text}</span>
      )}
    </Fragment>
  );
});

export default Button;
