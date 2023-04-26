// Anonymous async function. Not needed if you are using Node 17 or newer.
(async () => {
	// Create new SVG instance.
	const svg = new SVG(reallyBadIcon);

	// Wait for cleanupSVG() to finish working by adding 'await' before function call.
	await cleanupSVG(svg);

	// Do other stuff
	console.log(svg.toMinifiedString());

	// Close function and immediately execute it.
})();
