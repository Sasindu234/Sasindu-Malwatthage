
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputPath = 'src/assets/profile.jpg';
const outputPath = 'src/assets/profile-optimized.jpg';

async function optimize() {
    try {
        const metadata = await sharp(inputPath).metadata();
        console.log(`Original size: ${metadata.width}x${metadata.height}, ${metadata.size} bytes`);

        await sharp(inputPath)
            .resize(400, 400, {
                fit: 'cover',
                position: 'top'
            })
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(outputPath);

        console.log(`Optimized image saved to ${outputPath}`);

    } catch (error) {
        console.error('Error optimizing image:', error);
    }
}

optimize();
