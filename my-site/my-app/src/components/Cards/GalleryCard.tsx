import { Component, JSX, createEffect,createRenderEffect, createSignal, onMount } from 'solid-js'

import styles from '../../styles/galleryCard.module.css';

type GalleryCardProps = {
    srcUrl: string
    class?: string
}


const GalleryCard: Component<GalleryCardProps> = (props: GalleryCardProps) => {

    const [imageElement, setImageElement] = createSignal<HTMLImageElement>();

    const getImageOrientation = (image:HTMLImageElement | any) => {
        const orientation = image.width < image.height ? 'landscape' : 'portrait';
        console.log(`Image orientation is ${orientation}`);
        return orientation;
    };

    onMount(() => {
        const image = new Image();
        image.src = props.srcUrl;
        // image.className = getImageOrientation(image);
        setImageElement(image);
    });

    return (
        <div class={`${styles.galleryCard}`}>
            {imageElement()}
        </div>
    );
};


export default GalleryCard;
