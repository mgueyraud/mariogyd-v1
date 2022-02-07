import styles from "@styles/components/Button.module.css";

type CustomButtonProps = {
  variant?: "outline" | "default";
};

type ButtonLinkProps = CustomButtonProps & JSX.IntrinsicElements["a"];

type ButtonNormalProps = CustomButtonProps & JSX.IntrinsicElements["button"];

// optionally use a custom type guard
function isPropsForAnchorElement(
  props: ButtonNormalProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "href" in props;
}

const Button = (props: ButtonLinkProps | ButtonNormalProps) => {
  const { variant = "outline" } = props;
  const className = `${styles.button} ${styles[`button__${variant}`]}`;

  if (isPropsForAnchorElement(props)) {
    return <a className={className} {...props} />;
  }

  return <button className={className} {...props} />;
};

export default Button;
