import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import { FaceMesh } from "@mediapipe/face_mesh";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/tailwind-BuW-PsGV.css";
const links = () => [
  { rel: "stylesheet", href: stylesheet }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx("title", { children: "Falcon" }),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Header() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-purple-800 text-white p-4 flex items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xl font-bold", children: "Falcon - Interactive Lab" }),
    /* @__PURE__ */ jsxs("div", { className: "ml-auto space-x-4", children: [
      /* @__PURE__ */ jsx("button", { className: "hover:bg-purple-600 px-4 py-2 rounded", children: "Home" }),
      /* @__PURE__ */ jsx("button", { className: "hover:bg-purple-600 px-4 py-2 rounded", children: "About" }),
      /* @__PURE__ */ jsx("button", { className: "hover:bg-purple-600 px-4 py-2 rounded", children: "Contact" })
    ] })
  ] });
}
function MainContent() {
  const threeContainer = useRef(null);
  const videoRef = useRef(null);
  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    if (threeContainer.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
      threeContainer.current.appendChild(renderer.domElement);
      const tableGeometry = new THREE.BoxGeometry(5, 0.1, 5);
      const tableMaterial = new THREE.MeshStandardMaterial({ color: 9127187 });
      const table = new THREE.Mesh(tableGeometry, tableMaterial);
      scene.add(table);
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshStandardMaterial({ color: 16711680 });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(0, 0.6, 0);
      scene.add(cube);
      const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const sphereMaterial = new THREE.MeshStandardMaterial({ color: 255 });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(2, 0.6, 0);
      scene.add(sphere);
      const ambientLight = new THREE.AmbientLight(16777215, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(16777215, 1);
      pointLight.position.set(10, 10, 10);
      scene.add(pointLight);
      camera.position.z = 10;
      const animate = () => {
        requestAnimationFrame(animate);
        table.rotation.y += 0.01;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    }
  }, []);
  useEffect(() => {
    if (showDialog && videoRef.current) {
      const hands = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
      });
      hands.setOptions({
        maxNumHands: 2,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });
      const faceMesh = new FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
      });
      faceMesh.setOptions({
        maxNumFaces: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });
      const camera = new Camera(videoRef.current, {
        onFrame: async () => {
          if (videoRef.current) {
            await hands.send({ image: videoRef.current });
            await faceMesh.send({ image: videoRef.current });
          }
        }
      });
      hands.onResults((results) => {
        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          const hand = results.multiHandLandmarks[0];
          const indexFingerTip = hand[8];
          (indexFingerTip.x - 0.5) * 10;
          -(indexFingerTip.y - 0.5) * 10;
        }
        console.log("Hands detected:", results);
      });
      faceMesh.onResults((results) => {
        console.log("Face detected:", results);
      });
      camera.start();
    }
  }, [showDialog]);
  return /* @__PURE__ */ jsxs("div", { className: "flex-grow flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("div", { ref: threeContainer, className: "bg-gray-300" }),
    /* @__PURE__ */ jsxs("table", { className: "mt-4 border-collapse border border-gray-400", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "border border-gray-300 px-4 py-2", children: "Object" }),
        /* @__PURE__ */ jsx("th", { className: "border border-gray-300 px-4 py-2", children: "Type" })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { children: [
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Box" }),
          /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Cube" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Sphere" }),
          /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Sphere" })
        ] }),
        /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Table" }),
          /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-2", children: "Flat Surface" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setShowDialog(true),
        className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded",
        children: "Open Camera for Face & Hand Tracking"
      }
    ),
    showDialog && /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded p-4 relative", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowDialog(false),
          className: "absolute top-2 right-2 text-red-500 font-bold",
          children: "X"
        }
      ),
      /* @__PURE__ */ jsx(
        "video",
        {
          ref: videoRef,
          className: "w-full h-full",
          autoPlay: true,
          playsInline: true
        }
      )
    ] }) })
  ] });
}
function Sidebar() {
  return /* @__PURE__ */ jsxs("div", { className: "w-64 bg-gray-800 text-white flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "p-4 font-bold", children: "Creative Labs" }),
    /* @__PURE__ */ jsx("button", { className: "p-4 hover:bg-gray-600", children: "Physics" })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-grow", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsx(MainContent, {})
    ] })
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DqXbtC-k.js", "imports": ["/assets/jsx-runtime-d4vcKfGz.js", "/assets/components-0D8jGJiv.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CwF5XSt2.js", "imports": ["/assets/jsx-runtime-d4vcKfGz.js", "/assets/components-0D8jGJiv.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-DjJnziBF.js", "imports": ["/assets/jsx-runtime-d4vcKfGz.js"], "css": [] } }, "url": "/assets/manifest-acf718cd.js", "version": "acf718cd" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
