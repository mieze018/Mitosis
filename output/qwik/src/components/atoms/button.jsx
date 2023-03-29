import { Fragment, Slot, component$, h } from "@builder.io/qwik";

export const Button = component$((props) => {
  return (
    <button {...props}>
      <Slot></Slot>
    </button>
  );
});

export default Button;
