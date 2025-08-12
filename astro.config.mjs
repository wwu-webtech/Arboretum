	// astro.config.js
    import { defineConfig } from "astro/config";
    
    
    export default defineConfig({
        
        build: {
            format: "file",
        },
        images: {
            extensions: ["jpg", "jpeg", "png", "gif", "webp"],
        },
    });
    