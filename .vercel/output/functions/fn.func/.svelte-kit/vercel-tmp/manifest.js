export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/ape1.png","images/logo-black-fill.svg","images/logo-black-stroke.svg","images/logo-fill.svg","images/logo-multi-black.svg","images/logo-multi.svg","images/logo-stroke.svg","images/moto-black-fill.svg","images/moto-black-stroke.svg","images/moto-fill.svg","images/moto-stroke.svg","images/test.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-96d63faf.js","imports":["_app/immutable/start-96d63faf.js","_app/immutable/chunks/index-da6c9f9f.js","_app/immutable/chunks/singletons-2597a6c7.js","_app/immutable/chunks/utils-d2eec17c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
