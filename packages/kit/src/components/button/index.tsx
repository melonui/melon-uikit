import React from "react";
import styles from "./styles";

export type ButtonProps = {
  /** Render as a block with full width. */
  block?: boolean;
  /** Render as borderless. */
  borderless?: boolean;
  /** @ignore Hidden prop used in forms. */
  invalid?: boolean;
  /** Invert text colors. */
  inverted?: boolean;
  /** Increase font size and padding to large. */
  large?: boolean;
  /** Decrease font size and padding to small. */
  small?: boolean;
  children?: string | React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
};

/** A standard button and or link for common UI interactions. */
function Button({
  block,
  borderless,
  children,
  disabled,
  invalid,
  inverted,
  large,
  small,
  loading,
  ...rest
}: ButtonProps) {
  const s = styles();

  return (
    <button
      {...rest}
      disabled={disabled}
      style={{
        ...s.button,
      }}
      className="button_large"
    >
      {children}
    </button>
  );
}

export default Button;
