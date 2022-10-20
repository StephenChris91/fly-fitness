import { Button } from "react-bootstrap";

//styles
import "./Button.css";

export default function Buttons({
  children,
  padding,
  width,
  bgColor,
  color,
  hover,
}) {
  return (
    <Button
      className={`p-${padding} w-${width} bg-${bgColor} text-${color} hover:bg-${hover}`}
    >
      {children}
    </Button>
  );
}
