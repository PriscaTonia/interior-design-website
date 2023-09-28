import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_3054e7fa.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.18d2b92c.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-j7pv25f6]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-j7pv25f6]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.18d2b92c.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-ucd2ps2b]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-ucd2ps2b]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.18d2b92c.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-uw5kdbxl]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-uw5kdbxl]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.18d2b92c.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-kh7btl4r]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-kh7btl4r]{-ms-overflow-style:none;scrollbar-width:none}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/USER-PC/Desktop/interior-design-website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER-PC/Desktop/interior-design-website/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER-PC/Desktop/interior-design-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER-PC/Desktop/interior-design-website/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/image-endpoint.js":"chunks/pages/image-endpoint_893ed4f4.mjs","/src/pages/index.astro":"chunks/pages/index_8adc8409.mjs","/src/pages/services.astro":"chunks/pages/services_8c2d6b83.mjs","\u0000@astrojs-manifest":"manifest_2211ba2e.mjs","C:/Users/USER-PC/Desktop/interior-design-website/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_3dc24b21.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_c67b9eca.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_0425eba8.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_0d81bc09.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_e242606c.mjs","C:/Users/USER-PC/Desktop/interior-design-website/src/components/experience.tsx":"_astro/experience.25918b0a.js","C:/Users/USER-PC/Desktop/interior-design-website/src/components/navbar.tsx":"_astro/navbar.cfe0cf43.js","@astrojs/react/client.js":"_astro/client.4fbc8a11.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.0f13e24a.css","/_astro/about.18d2b92c.css","/_astro/contact.4c93ae0f.css","/_astro/index.441fc649.css","/_astro/services.4de38886.css","/about-img.png","/about1.png","/about2.png","/aboutpage-bg.png","/Background.jpg","/banner.png","/benny.png","/clientLogo1.svg","/clientLogo2.svg","/clientLogo3.svg","/clientLogo4.svg","/clientLogo5.svg","/contactpage-bg.jpg","/favicon.svg","/natasha.png","/person1.png","/person2.png","/person3.png","/project1.png","/project2.png","/project3.png","/project4.png","/raymond.png","/service1.png","/service2.png","/service3.png","/service4.png","/servicespage-bg.jpg","/_astro/client.4fbc8a11.js","/_astro/experience.25918b0a.js","/_astro/index.fa732fd6.js","/_astro/jsx-runtime.ec32632c.js","/_astro/navbar.cfe0cf43.js"]});

export { manifest };
