import './polyfills.server.mjs';
import {
  provideServerRendering
} from "./chunk-7Y46KNKJ.mjs";
import {
  DomRendererFactory2,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter
} from "./chunk-NYFG4232.mjs";
import {
  provideHttpClient,
  withFetch
} from "./chunk-N65XVK4U.mjs";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  DOCUMENT,
  Injectable,
  NgZone,
  RendererFactory2,
  RuntimeError,
  inject,
  makeEnvironmentProviders,
  mergeApplicationConfig,
  performanceMarkFeature,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinvalidFactory,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4HCVDDTL.mjs";

// src/components/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
  constructor() {
    this.year = (/* @__PURE__ */ new Date()).getFullYear().toString();
  }
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)();
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["shop-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "surface-section", "px-2", "py-3", "md:px-4", "lg:px-4", "text-center"], [1, "font-medium", "text-900", "mt-4", "mb-3"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " SincereK 3D Prints, LLC");
  }
} });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\components\\footer\\footer.component.ts", lineNumber: 10 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "angular";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["shop-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet")(1, "shop-footer");
  }
}, dependencies: [RouterOutlet, FooterComponent] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 12 });
})();

// node_modules/.pnpm/@angular+platform-browser@17.3.4_@angular+animations@17.3.4_@angular+common@17.3.4_@angular+core@17.3.4/node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-SXCJGL7K.mjs");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/routes.ts
var routes = [
  { path: "", loadComponent: () => import("./chunk-AEEXAUF7.mjs").then((x) => x.ComingSoonView) },
  { path: "coming-soon", loadComponent: () => import("./chunk-AEEXAUF7.mjs").then((x) => x.ComingSoonView) },
  { path: "home", loadComponent: () => import("./chunk-553HLLSV.mjs").then((x) => x.HomeView) },
  { path: "test", loadComponent: () => import("./chunk-YCWZJ44G.mjs").then((x) => x.TestView) },
  { path: "product", loadComponent: () => import("./chunk-E2LJX476.mjs").then((x) => x.ProductView) }
];

// src/config.main.ts
var mainConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
};

// src/config.server.ts
var config = {
  providers: [
    provideServerRendering()
  ]
};
var serverConfig = mergeApplicationConfig(mainConfig, config);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, serverConfig);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.3.4
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-NGEFNE6W.mjs.map
