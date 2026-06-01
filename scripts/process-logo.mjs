import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const source =
	process.argv[2] ??
	join(
		root,
		'assets',
		'logo-source.png',
	);

const outDir = join(root, 'public', 'images');
mkdirSync(outDir, { recursive: true });

function isBgPixel(r, g, b, a, threshold = 232) {
	if (a === 0) return false;
	// Pure/near white canvas
	if (r >= threshold && g >= threshold && b >= threshold) return true;
	// Residual yellow edge strips from mockup exports
	if (r >= 210 && g >= 190 && b <= 120 && r - b > 80) return true;
	return false;
}

function cleanEdgeColumns({ data, width, height, channels, cols = 3 }) {
	for (let pass = 0; pass < cols; pass++) {
		for (const x of [pass, width - 1 - pass]) {
			for (let y = 0; y < height; y++) {
				const i = (y * width + x) * channels;
				const r = data[i];
				const g = data[i + 1];
				const b = data[i + 2];
				if (isBgPixel(r, g, b, data[i + 3], 200) || (r > 180 && g > 160 && b < 140)) {
					data[i + 3] = 0;
				}
			}
		}
	}
	return data;
}

function removeOuterBackground({ data, width, height, channels }) {
	const visited = new Uint8Array(width * height);
	const queue = [];

	for (let x = 0; x < width; x++) {
		queue.push([x, 0], [x, height - 1]);
	}
	for (let y = 0; y < height; y++) {
		queue.push([0, y], [width - 1, y]);
	}

	while (queue.length) {
		const [x, y] = queue.pop();
		if (x < 0 || y < 0 || x >= width || y >= height) continue;

		const idx = y * width + x;
		if (visited[idx]) continue;

		const i = idx * channels;
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		const a = data[i + 3];

		if (!isBgPixel(r, g, b, a)) continue;

		visited[idx] = 1;
		data[i + 3] = 0;

		queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
	}

	return data;
}

const { data, info } = await sharp(source)
	.ensureAlpha()
	.raw()
	.toBuffer({ resolveWithObject: true });

const processed = removeOuterBackground({
	data: Buffer.from(data),
	width: info.width,
	height: info.height,
	channels: info.channels,
});

cleanEdgeColumns({
	data: processed,
	width: info.width,
	height: info.height,
	channels: info.channels,
	cols: 4,
});

const trimmed = await sharp(processed, {
	raw: { width: info.width, height: info.height, channels: 4 },
})
	.trim({ threshold: 1 })
	.sharpen({ sigma: 0.8, m1: 0.5, m2: 0.3 })
	.modulate({ brightness: 1.03, saturation: 1.1 })
	.png({ compressionLevel: 9, adaptiveFiltering: true })
	.toBuffer({ resolveWithObject: true });

await sharp(trimmed.data).png().toFile(join(outDir, 'logo.png'));

const headerLogo = await sharp(trimmed.data)
	.resize({ height: 112, fit: 'inside', withoutEnlargement: false })
	.png()
	.toBuffer();

await sharp(headerLogo).toFile(join(outDir, 'logo-header.png'));

const favicon = await sharp(trimmed.data)
	.resize({ width: 360, height: 360, fit: 'cover', position: 'centre' })
	.resize({ width: 180, height: 180 })
	.png()
	.toBuffer();

await sharp(favicon).toFile(join(outDir, 'apple-touch-icon.png'));

console.log('Logo processed:', {
	width: trimmed.info.width,
	height: trimmed.info.height,
	outputs: ['logo.png', 'logo-header.png', 'apple-touch-icon.png'],
});
