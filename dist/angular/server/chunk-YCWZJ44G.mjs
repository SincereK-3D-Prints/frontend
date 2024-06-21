import './polyfills.server.mjs';
import {
  ProductListComponent
} from "./chunk-WV5QAJTA.mjs";
import "./chunk-KUW7M2MV.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-4HCVDDTL.mjs";
import "./chunk-24VIC3GD.mjs";

// src/views/test/test.view.ts
var _TestView = class _TestView {
  constructor() {
    this.products = [
      {
        id: "1",
        image: "assets/images/blocks/ecommerce/productlist/product-list-2-1.png",
        name: "Product Name",
        price: 150,
        discount: 25
      },
      {
        id: "2",
        image: "assets/images/blocks/ecommerce/productlist/product-list-2-2.png",
        name: "Product Name",
        price: 150,
        discount: 10
      },
      {
        id: "3",
        image: "assets/images/blocks/ecommerce/productlist/product-list-2-3.png",
        name: "Product Name",
        price: 150,
        discount: 15
      },
      {
        id: "4",
        image: "assets/images/blocks/ecommerce/productlist/product-list-2-4.png",
        name: "Product Name",
        price: 150,
        discount: 20
      }
    ];
  }
};
_TestView.\u0275fac = function TestView_Factory(t) {
  return new (t || _TestView)();
};
_TestView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestView, selectors: [["shop-test"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[3, "products"]], template: function TestView_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "shop-product-list", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("products", ctx.products);
  }
}, dependencies: [ProductListComponent] });
var TestView = _TestView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestView, { className: "TestView", filePath: "src\\views\\test\\test.view.ts", lineNumber: 14 });
})();
export {
  TestView
};
//# sourceMappingURL=chunk-YCWZJ44G.mjs.map
