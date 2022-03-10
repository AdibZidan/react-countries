import './Button.scss';

export interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={props?.className}
      onClick={props?.onClick}>
      {props.text}
    </button>
  );
}
