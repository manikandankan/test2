import {
  default as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material/Button";

export interface ButtonProps extends MuiButtonProps {
  /**
   * The text displayed in the button
   */
  label?: string;
  /**
   * The variant to use.
   * @default contained
   */
  variant?: "text" | "outlined" | "contained";
}

const Button = ({ label, variant, ...rest }: ButtonProps) => (
  <MuiButton {...rest} variant={variant ?? "contained"}>
    {label}
  </MuiButton>
);

export default Button;
