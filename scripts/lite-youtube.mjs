import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir } from 'node:fs/promises';

const targetDir = 'public/assets/yt';
const copy = {
    'lite-youtube-embed/src/lite-yt-embed.js': targetDir + '/lite-yt-embed.js',
    'lite-youtube-embed/src/lite-yt-embed.css': targetDir + '/lite-yt-embed.css'
}

try {
    await mkdir(targetDir);
} catch {
    //
}

const req = createRequire(import.meta.url);
for (const source in copy) {
    const target = copy[source];
    const sourceFile = req.resolve(source);
    const data = await readFile(sourceFile, 'utf8');
    await writeFile(target, data, 'utf8');
    console.log('Saved', target, `(${data.length} bytes)`)
}
