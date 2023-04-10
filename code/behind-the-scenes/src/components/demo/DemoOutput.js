import { memo } from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
    return <MyParagraph>{props.show ? 'This is new': ''}</MyParagraph>
}

export default memo(DemoOutput); //memo => re-execute the component if the previous state and the current state change
//something like this: props.show === props.previous.show for primitive values this works