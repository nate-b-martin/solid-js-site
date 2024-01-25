import { Component, For, createSignal, createResource, onMount, createEffect, JSX } from "solid-js";
import GalleryCard from "~/components/Cards/GalleryCard";
import styles from "../styles/gallery.module.css";
import ImageGroup from "~/components/Cards/ImageGroup";

// Dynamically import all .webp images in the gallery directory

const Gallery: Component<{}> = () => {

	const [galleryImages, setGalleryImages] = createSignal<string[]>();

	const importImages = (): string[] => {
		const imageModules = import.meta.glob('../images/gallery/*.webp', {eager: true, as: 'url'});

		const imageList = Object.values(imageModules).map(module => {
			return module
		});

		return imageList
	};

    onMount(() => {
        const list = importImages();
        setGalleryImages(list);

		console.log(`imageList: ${list}`);
    });

	const [imageList] = createResource(galleryImages, importImages);

	function imageGroups (imageList:any): JSX.Element[] {
		console.log(`imageList: ${imageList.length}`);
		const numberFullGroups = imageList.length / 3;
		console.log(`numberFullGroups: ${numberFullGroups}`);
		const leftOver = imageList.length % 3;
		console.log(`leftOver: ${leftOver}`);
		const groups: JSX.Element[] = [];
		let count = 0
		for (let i = 0; i < numberFullGroups; i++) {
			console.log(`adding images ${i}`)
			groups.push(
				<ImageGroup>
					<img src={imageList[count]} alt={`Image ${count}`} />
					<img src={imageList[count + 1]} alt={`Image ${count + 1}`} />
					<img src={imageList[count + 2]} alt={`Image ${count + 2}`} />
				</ImageGroup>
			);
			count += 3;
		}

		if(leftOver > 0) {
			console.log('adding remainers');
			console.log('using count: ' + count);
			groups.push(
				<ImageGroup>
					{imageList.slice(count, count + leftOver).map((image:string, index:number) => (
						<img src={image} alt={`Image ${index}`} />
					))}
				</ImageGroup>
			)
		}

		console.log(`groups: ${groups}`);
		return groups;
	};

	return(	
		<div class={styles.gallery}>
			{imageList() && imageGroups(imageList())}
		</div>
	);
};



export default Gallery;
