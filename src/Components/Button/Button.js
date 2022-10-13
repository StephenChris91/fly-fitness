import { Button } from "react-bootstrap";

//styles
import "./Button.css";

export default function Buttons({ children, padding, width, bgColor }) {
  return (
    <Button className={`p-${padding} w-${width} bg-${bgColor}`}>
      {children}
    </Button>
  );
}
