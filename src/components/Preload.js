import { TextureLoader } from 'three';
import { useEffect } from 'react';

// This component preloads resources in the background
const Preload = () => {
    // Font preloading
    useEffect(() => {
        // Using fetch instead of FontLoader since FontLoader is not exported from three
        fetch('/fonts/Inter-Bold.woff')
            .then(() => {
                console.log('Font preloaded');
            })
            .catch(err => {
                console.error('Font preload error:', err);
            });
    }, []);

    // Texture preloading if needed
    useEffect(() => {
        const textureLoader = new TextureLoader();
        textureLoader.load('/placeholder.jpg',
            () => {
                console.log('Texture preloaded');
            },
            undefined,
            (err) => {
                console.error('Texture preload error:', err);
            }
        );
    }, []);

    return null;
};

export default Preload; 