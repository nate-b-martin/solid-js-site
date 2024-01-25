import { Component, For, JSX } from "solid-js";
import styles from "../../styles/imageGroup.module.css";

type ImageGroupProps = {
    children: JSX.Element | JSX.Element[];
    isOdd?: boolean;
}
const ImageGroup: Component<ImageGroupProps> = (props:ImageGroupProps) => {
  
  return (
    <div class={styles.imageGroup}>
        <For each={Array.isArray(props.children) ? props.children : [props.children]}>
            {(child) => (
                <div>
                    {child}
                </div>
            )}
        </For>
    </div>
  );
};

export default ImageGroup;