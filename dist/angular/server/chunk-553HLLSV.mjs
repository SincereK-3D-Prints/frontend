import './polyfills.server.mjs';
import {
  StyleClass,
  StyleClassModule
} from "./chunk-NZFEHFUK.mjs";
import {
  ButtonDirective,
  ButtonModule,
  InputText,
  InputTextModule
} from "./chunk-GRJ7W4DE.mjs";
import {
  DomHandler,
  Ripple,
  RippleModule,
  SharedModule,
  UniqueComponentId
} from "./chunk-KUW7M2MV.mjs";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  Inject,
  Input,
  InputFlags,
  NgClass,
  NgIf,
  NgModule,
  NgStyle,
  Renderer2,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4HCVDDTL.mjs";
import "./chunk-24VIC3GD.mjs";

// node_modules/.pnpm/primeng@17.13.0_@angular+common@17.3.4_@angular+core@17.3.4_@angular+forms@17.3.4_rxjs@7.8.1_zone.js@0.14.4/node_modules/primeng/fesm2022/primeng-badge.mjs
function Badge_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.styleClass);
    \u0275\u0275property("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.value);
  }
}
var BadgeDirective = class _BadgeDirective {
  document;
  el;
  renderer;
  /**
   * Icon position of the component.
   * @group Props
   */
  iconPos = "left";
  /**
   * When specified, disables the component.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
  }
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  get size() {
    return this._size;
  }
  set size(val) {
    this._size = val;
    if (this.initialized) {
      this.setSizeClasses();
    }
  }
  /**
   * Value to display inside the badge.
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    if (val !== this._value) {
      this._value = val;
      if (this.initialized) {
        let badge = document.getElementById(this.id);
        if (this._value) {
          if (DomHandler.hasClass(badge, "p-badge-dot"))
            DomHandler.removeClass(badge, "p-badge-dot");
          if (String(this._value).length === 1) {
            DomHandler.addClass(badge, "p-badge-no-gutter");
          } else {
            DomHandler.removeClass(badge, "p-badge-no-gutter");
          }
        } else if (!this._value && !DomHandler.hasClass(badge, "p-badge-dot")) {
          DomHandler.addClass(badge, "p-badge-dot");
        }
        badge.innerHTML = "";
        this.renderer.appendChild(badge, document.createTextNode(this._value));
      }
    }
  }
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  _value;
  initialized = false;
  id;
  _disabled = false;
  _size;
  constructor(document2, el, renderer) {
    this.document = document2;
    this.el = el;
    this.renderer = renderer;
  }
  ngAfterViewInit() {
    this.id = UniqueComponentId() + "_badge";
    let el = this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
    if (this._disabled) {
      return null;
    }
    let badge = this.document.createElement("span");
    badge.id = this.id;
    badge.className = "p-badge p-component";
    if (this.severity) {
      DomHandler.addClass(badge, "p-badge-" + this.severity);
    }
    this.setSizeClasses(badge);
    if (this.value != null) {
      this.renderer.appendChild(badge, this.document.createTextNode(this.value));
      if (String(this.value).length === 1) {
        DomHandler.addClass(badge, "p-badge-no-gutter");
      }
    } else {
      DomHandler.addClass(badge, "p-badge-dot");
    }
    DomHandler.addClass(el, "p-overlay-badge");
    this.renderer.appendChild(el, badge);
    this.initialized = true;
  }
  setSizeClasses(element) {
    const badge = element ?? this.document.getElementById(this.id);
    if (!badge) {
      return;
    }
    if (this._size) {
      if (this._size === "large") {
        DomHandler.addClass(badge, "p-badge-lg");
        DomHandler.removeClass(badge, "p-badge-xl");
      }
      if (this._size === "xlarge") {
        DomHandler.addClass(badge, "p-badge-xl");
        DomHandler.removeClass(badge, "p-badge-lg");
      }
    } else {
      DomHandler.removeClass(badge, "p-badge-lg");
      DomHandler.removeClass(badge, "p-badge-xl");
    }
  }
  ngOnDestroy() {
    this.initialized = false;
  }
  static \u0275fac = function BadgeDirective_Factory(t) {
    return new (t || _BadgeDirective)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BadgeDirective,
    selectors: [["", "pBadge", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      iconPos: "iconPos",
      disabled: [InputFlags.None, "badgeDisabled", "disabled"],
      size: "size",
      value: "value",
      severity: "severity"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeDirective, [{
    type: Directive,
    args: [{
      selector: "[pBadge]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    iconPos: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }],
    size: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    severity: [{
      type: Input
    }]
  });
})();
var Badge = class _Badge {
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @group Props
   */
  size;
  /**
   * Severity type of the badge.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the badge.
   * @group Props
   */
  value;
  /**
   * When specified, disables the component.
   * @group Props
   */
  badgeDisabled = false;
  containerClass() {
    return {
      "p-badge p-component": true,
      "p-badge-no-gutter": this.value != void 0 && String(this.value).length === 1,
      "p-badge-lg": this.size === "large",
      "p-badge-xl": this.size === "xlarge",
      "p-badge-info": this.severity === "info",
      "p-badge-success": this.severity === "success",
      "p-badge-warning": this.severity === "warning",
      "p-badge-danger": this.severity === "danger"
    };
  }
  static \u0275fac = function Badge_Factory(t) {
    return new (t || _Badge)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Badge,
    selectors: [["p-badge"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      styleClass: "styleClass",
      style: "style",
      size: "size",
      severity: "severity",
      value: "value",
      badgeDisabled: [InputFlags.HasDecoratorInputTransform, "badgeDisabled", "badgeDisabled", booleanAttribute]
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"]],
    template: function Badge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Badge_span_0_Template, 2, 5, "span", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.badgeDisabled);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle],
    styles: ["@layer primeng{.p-badge{display:inline-block;border-radius:10px;text-align:center;padding:0 .5rem}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{position:absolute;top:0;right:0;transform:translate(50%,-50%);transform-origin:100% 0;margin:0}.p-badge-dot{width:.5rem;min-width:.5rem;height:.5rem;border-radius:50%;padding:0}.p-badge-no-gutter{padding:0;border-radius:50%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
    type: Component,
    args: [{
      selector: "p-badge",
      template: ` <span *ngIf="!badgeDisabled" [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">{{ value }}</span> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-badge{display:inline-block;border-radius:10px;text-align:center;padding:0 .5rem}.p-overlay-badge{position:relative}.p-overlay-badge .p-badge{position:absolute;top:0;right:0;transform:translate(50%,-50%);transform-origin:100% 0;margin:0}.p-badge-dot{width:.5rem;min-width:.5rem;height:.5rem;border-radius:50%;padding:0}.p-badge-no-gutter{padding:0;border-radius:50%}}\n"]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    badgeDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var BadgeModule = class _BadgeModule {
  static \u0275fac = function BadgeModule_Factory(t) {
    return new (t || _BadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BadgeModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Badge, BadgeDirective, SharedModule],
      declarations: [Badge, BadgeDirective]
    }]
  }], null, null);
})();

// node_modules/.pnpm/primeng@17.13.0_@angular+common@17.3.4_@angular+core@17.3.4_@angular+forms@17.3.4_rxjs@7.8.1_zone.js@0.14.4/node_modules/primeng/fesm2022/primeng-divider.mjs
var _c0 = ["*"];
var Divider = class _Divider {
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Specifies the orientation.
   * @group Props
   */
  layout = "horizontal";
  /**
   * Border style type.
   * @group Props
   */
  type = "solid";
  /**
   * Alignment of the content.
   * @group Props
   */
  align;
  containerClass() {
    return {
      "p-divider p-component": true,
      "p-divider-horizontal": this.layout === "horizontal",
      "p-divider-vertical": this.layout === "vertical",
      "p-divider-solid": this.type === "solid",
      "p-divider-dashed": this.type === "dashed",
      "p-divider-dotted": this.type === "dotted",
      "p-divider-left": this.layout === "horizontal" && (!this.align || this.align === "left"),
      "p-divider-center": this.layout === "horizontal" && this.align === "center" || this.layout === "vertical" && (!this.align || this.align === "center"),
      "p-divider-right": this.layout === "horizontal" && this.align === "right",
      "p-divider-top": this.layout === "vertical" && this.align === "top",
      "p-divider-bottom": this.layout === "vertical" && this.align === "bottom"
    };
  }
  static \u0275fac = function Divider_Factory(t) {
    return new (t || _Divider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Divider,
    selectors: [["p-divider"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      layout: "layout",
      type: "type",
      align: "align"
    },
    ngContentSelectors: _c0,
    decls: 3,
    vars: 6,
    consts: [["role", "separator", 3, "ngClass", "ngStyle"], [1, "p-divider-content"]],
    template: function Divider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        \u0275\u0275attribute("aria-orientation", ctx.layout)("data-pc-name", "divider");
      }
    },
    dependencies: [NgClass, NgStyle],
    styles: ['@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Divider, [{
    type: Component,
    args: [{
      selector: "p-divider",
      template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" role="separator" [attr.aria-orientation]="layout" [attr.data-pc-name]="'divider'">
            <div class="p-divider-content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-divider-horizontal{display:flex;width:100%;position:relative;align-items:center}.p-divider-horizontal:before{position:absolute;display:block;top:50%;left:0;width:100%;content:""}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{min-height:100%;margin:0 1rem;display:flex;position:relative;justify-content:center}.p-divider-vertical:before{position:absolute;display:block;top:0;left:50%;height:100%;content:""}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-top-style:dotted}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted}}\n']
    }]
  }], null, {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var DividerModule = class _DividerModule {
  static \u0275fac = function DividerModule_Factory(t) {
    return new (t || _DividerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DividerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DividerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Divider],
      declarations: [Divider]
    }]
  }], null, null);
})();

// src/views/home/home.view.ts
var _HomeView = class _HomeView {
};
_HomeView.\u0275fac = function HomeView_Factory(t) {
  return new (t || _HomeView)();
};
_HomeView.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeView, selectors: [["shop-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 423, vars: 4, consts: [[1, "surface-section"], [1, "surface-50", "text-900", "font-medium", "py-2", "text-center", "text-xs", "sm:text-base"], [1, "bg-gray-900", "px-3", "sm:px-6", "py-3", "flex", "align-items-stretch", "justify-content-center", "sm:justify-content-end", "border-bottom-1", "surface-border", "text-sm"], ["pRipple", "", 1, "text-white", "font-medium", "inline-flex", "align-items-center", "cursor-pointer", "px-3", "hover:text-gray-200"], [1, "pi", "pi-sign-in", "mr-2", "sm:mr-3", "text-sm"], [1, "text-white", "mx-1", "sm:mx-2"], [1, "pi", "pi-user", "mr-2", "sm:mr-3", "text-sm"], [1, "surface-overlay", "px-3", "sm:px-6", "flex", "align-items-stretch", "relative", 2, "min-height", "80px"], ["pRipple", "", "pStyleClass", "#nav-1", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "cursor-pointer", "flex", "align-items-center", "lg:hidden", "text-700", "mr-3", "sm:mr-5", 3, "hideOnOutsideClick"], [1, "pi", "pi-bars", "text-4xl"], [1, "flex", "align-items-center", "justify-content-center"], ["src", "assets/images/blocks/logos/peak-700.svg", "alt", "Image", 1, "lg:mr-6", "h-2rem", "sm:h-3rem"], ["id", "nav-1", 1, "surface-overlay", "hidden", "lg:flex", "absolute", "lg:static", "left-0", "top-100", "z-1", "shadow-2", "lg:shadow-none", "w-full", "lg:w-auto", "py-3", "lg:py-0"], [1, "list-none", "p-0", "m-0", "flex", "flex-column", "lg:flex-row"], [1, "flex", "flex-column", "lg:flex-row"], ["pRipple", "", "pStyleClass", "@next", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "inline-flex", "align-items-center", "cursor-pointer", "border-right-2", "lg:border-right-none", "lg:border-bottom-2", "border-transparent", "hover:border-primary", "py-3", "lg:py-0", "px-6", "lg:px-3", "text-700", "select-none", "text-xl", "lg:text-base", "font-medium", "lg:font-base", "w-full", "lg:w-auto", 3, "hideOnOutsideClick"], [1, "surface-overlay", "shadow-none", "lg:shadow-2", "hidden", "lg:absolute", "w-full", "left-0", "top-100", "pl-8", "pr-6", "lg:px-6", "py-0", "lg:py-6"], [1, "flex", "flex-column", "lg:flex-row", "lg:justify-content-between"], ["pStyleClass", "@next", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "font-medium", "text-700", "text-lg", "cursor-pointer", "block", "lg:hidden", "mb-3", "select-none"], [1, "list-none", "py-0", "pr-0", "lg:pl-0", "pl-5", "m-0", "text-700", "hidden", "lg:block"], [1, "font-bold", "mb-5", "text-xl", "text-900", "hidden", "lg:block"], [1, "mb-3", "cursor-pointer", "hover:text-900"], [1, "list-none", "p-0", "m-0", "text-700"], [1, "mt-5", "sm:mt-0", "mb-5", "flex", "flex-column", "align-items-center"], ["src", "assets/images/blocks/ecommerce/storenavigation/storenavigation-1-1.png", "alt", "Image", 1, "w-full", "lg:w-auto", 2, "border-radius", "12px"], [1, "inline-flex", "surface-0", "text-900", "px-3", "py-2", "border-round", "-mt-5", "font-medium"], [1, "mb-5", "flex", "flex-column", "align-items-center"], ["src", "assets/images/blocks/ecommerce/storenavigation/storenavigation-1-2.png", "alt", "Image", 1, "w-full", "lg:w-auto", 2, "border-radius", "12px"], [1, "surface-overlay", "shadow-none", "lg:shadow-2", "hidden", "lg:absolute", "w-full", "left-0", "top-100", "px-6", "py-0", "lg:py-6", "h-10rem", "lg:h-30rem", "z-1"], [1, "border-2", "border-dashed", "surface-border", "border-round", "h-full"], [1, "flex", "ml-auto"], [1, "list-none", "p-0", "m-0", "flex"], [1, "flex"], ["pRipple", "", 1, "text-900", "font-medium", "inline-flex", "align-items-center", "cursor-pointer", "px-2", "sm:px-3", "hover:text-primary"], [1, "pi", "pi-search", "mr-2", "lg:mr-3", "text-xl", "sm:text-base"], [1, "hidden", "lg:inline"], [1, "pi", "pi-heart", "mr-2", "lg:mr-3", "text-xl", "sm:text-base"], ["pBadge", "", 1, "pi", "pi-shopping-cart", "lg:mr-3", "text-xl", "sm:text-base"], [1, "surface-section", "grid", "grid-nogutter"], [1, "col-12", "lg:col-6", 2, "min-height", "60rem"], [1, "grid", "grid-nogutter", "h-full"], [1, "col-12", "lg:col-6", "bg-no-repeat", "bg-center", "bg-cover", "p-4", "flex", "flex-column", "align-items-start", "justify-content-end", 2, "background", "url(assets/images/blocks/ecommerce/storefront/storefront-1-9.png)"], [1, "text-white", "block", "text-2xl", "font-bold", "mb-2"], ["tabindex", "0", "pRipple", "", 1, "text-white", "font-medium", "cursor-pointer", "p-2", "flex", "align-items-center", "border-round", "lg:-ml-1"], [1, "pi", "pi-arrow-right", "ml-2"], [1, "col-12", "lg:col-6", "bg-no-repeat", "bg-center", "bg-cover", "p-4", "flex", "flex-column", "lg:align-items-end", "justify-content-end", 2, "background", "url(assets/images/blocks/ecommerce/storefront/storefront-1-12.png)"], ["tabindex", "0", "pRipple", "", 1, "text-white", "font-medium", "cursor-pointer", "p-2", "flex", "align-items-center", "border-round"], [1, "col-12", "lg:col-6", "bg-no-repeat", "bg-center", "bg-cover", "p-4", "flex", "flex-column", "align-items-start", "justify-content-end", 2, "background", "url(assets/images/blocks/ecommerce/storefront/storefront-1-13.png)"], [1, "col-12", "lg:col-6", "bg-no-repeat", "bg-center", "bg-cover", "p-4", "flex", "flex-column", "lg:align-items-end", "justify-content-end", 2, "background", "url(assets/images/blocks/ecommerce/storefront/storefront-1-10.png)"], [1, "col-12", "lg:col-6", "bg-no-repeat", "bg-center", "bg-cover", "p-4", "flex", "flex-column", "align-items-start", "justify-content-end", "lg:justify-content-start", 2, "background", "url(assets/images/blocks/ecommerce/storefront/storefront-1-11.png)", "min-height", "60rem"], [1, "surface-section", "px-4", "py-8", "md:px-6", "lg:px-8"], [1, "grid"], [1, "col-12", "md:col-4", "flex", "flex-column", "align-items-center", "mb-3", "md:mb-0"], [1, "inline-flex", "align-items-center", "justify-content-center", "bg-blue-500", "border-circle", "w-3rem", "h-3rem", "mb-4"], [1, "pi", "pi-arrow-right", "text-white", "text-2xl"], [1, "text-900", "text-xl", "font-medium", "mb-4"], [1, "text-600", "line-height-3", "py-0", "m-0", "px-3"], [1, "inline-flex", "align-items-center", "justify-content-center", "bg-cyan-500", "border-circle", "w-3rem", "h-3rem", "mb-4"], [1, "pi", "pi-shopping-cart", "text-white", "text-2xl"], [1, "col-12", "md:col-4", "flex", "flex-column", "align-items-center"], [1, "inline-flex", "align-items-center", "justify-content-center", "bg-orange-500", "border-circle", "w-3rem", "h-3rem", "mb-4"], [1, "pi", "pi-shield", "text-white", "text-2xl"], [1, "grid", "grid-nogutter", "-ml-3", "-mr-3"], [1, "col-12", "lg:col-6", "p-3"], [1, "flex", "flex-column", "justify-content-between", "h-full", "w-full", "border-round", "bg-no-repeat", "bg-cover", "bg-center", 2, "background", "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/storefront/storefront-1-28.png)", "min-height", "40rem"], [1, "p-4", "align-self-start"], [1, "text-white", "text-2xl", "font-bold", "mb-2"], [1, "text-white", "text-lg", "line-height-3"], [1, "p-4", "align-self-end"], ["tabindex", "0", 1, "text-2xl", "cursor-pointer", "text-white", "flex", "align-items-center", "hover:text-primary", "transition-duration-150"], [1, "pi", "pi-fw", "pi-arrow-right", "text-2xl", "ml-2"], [1, "col-12", "lg:col-6"], [1, "grid", "grid-nogutter", "lg:flex-column"], [1, "col-12", "p-3"], [1, "flex", "flex-column", "justify-content-between", "h-full", "w-full", "border-round", "bg-no-repeat", "bg-cover", "bg-center", "h-20rem", 2, "background", "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/storefront/storefront-1-27.png)"], [1, "flex", "flex-column", "justify-content-between", "h-full", "w-full", "border-round", "bg-no-repeat", "bg-cover", "bg-center", "h-20rem", 2, "background", "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(assets/images/blocks/ecommerce/storefront/storefront-1-26.png)"], [1, "flex", "flex-wrap", "-mr-3", "-ml-3"], [1, "p-3", "w-full", "xl:w-6"], [1, "bg-no-repeat", "bg-cover", "bg-center", "p-3", "border-round", 2, "background", "url('assets/images/blocks/ecommerce/storefront/storefront-1-8.png')"], [1, "border-2", "border-round", "border-white", "flex", "flex-column", "sm:flex-row", "overflow-hidden"], [1, "flex-1", "text-center", "bg-white-alpha-40", "font-medium", 2, "backdrop-filter", "blur(15px)"], [1, "p-6", "flex", "flex-column", "align-items-center", "text-gray-900"], [1, "text-xl", "mb-5"], [1, "text-xl", "mb-5", "text-5xl"], [1, "text-xl"], [1, "flex-1", "bg-no-repeat", "bg-cover", "bg-center", 2, "background", "url('assets/images/blocks/ecommerce/storefront/storefront-1-8.png')", "min-height", "200px"], [1, "bg-no-repeat", "bg-cover", "bg-center", "p-3", "border-round", 2, "background", "url('assets/images/blocks/ecommerce/storefront/storefront-1-7.png')"], [1, "flex-1", "bg-no-repeat", "bg-cover", "bg-center", 2, "background", "url('assets/images/blocks/ecommerce/storefront/storefront-1-7.png')", "min-height", "200px"], [1, "surface-section", "px-4", "py-8", "md:px-6", "lg:px-8", "mx-2"], [1, "grid", "border-1", "surface-border", "border-round"], [1, "col-12", "md:col-6", "lg:col-4", "md:border-right-1", "border-bottom-1", "surface-border"], [1, "p-4"], ["src", "assets/images/blocks/ecommerce/productlist/product-list-6-1.png", 1, "w-full"], [1, "flex", "align-items-center", "justify-content-between", "mt-5", "mb-3"], [1, "text-900", "font-medium", "text-xl"], [1, "bg-blue-100", "text-blue-700", "font-bold", "text-sm", "px-2", "py-1", 2, "border-radius", "1rem"], [1, "text-900"], [1, "text-900", "text-xl", "font-medium", "mt-3"], [1, "col-12", "md:col-6", "lg:col-4", "lg:border-right-1", "border-bottom-1", "surface-border"], ["src", "assets/images/blocks/ecommerce/productlist/product-list-6-2.png", 1, "w-full"], [1, "col-12", "md:col-6", "lg:col-4", "md:border-right-1", "lg:border-right-none", "border-bottom-1", "surface-border"], ["src", "assets/images/blocks/ecommerce/productlist/product-list-6-3.png", 1, "w-full"], [1, "col-12", "md:col-6", "lg:col-4", "lg:border-right-1", "border-bottom-1", "lg:border-bottom-none", "surface-border"], ["src", "assets/images/blocks/ecommerce/productlist/product-list-6-4.png", 1, "w-full"], [1, "col-12", "md:col-6", "lg:col-4", "border-bottom-1", "md:border-bottom-none", "md:border-right-1", "surface-border"], ["src", "assets/images/blocks/ecommerce/productlist/product-list-6-5.png", 1, "w-full"], [1, "col-12", "md:col-6", "lg:col-4"], ["src", "assets/images/blocks/ecommerce/productlist/product-list-6-6.png", 1, "w-full"], [1, "surface-50", "px-4", "md:px-6", "lg:px-8", "border-1", "surface-border", "border-x-none"], [1, "grid", "grid-nogutter", "flex-wrap", "-mr-3", "-ml-3", "text-center", "md:text-left"], [1, "col-12", "sm:col-6", "md:col-4", "lg:col-3", "flex", "flex-column", "mt-0", "py-4", "px-4", "border-bottom-1", "lg:border-y-none", "md:border-right-1", "surface-border"], [1, "text-900", "text-xl", "block"], [1, "list-none", "p-0"], ["tabindex", "0", 1, "text-600", "hover:text-900", "transition-duration-150", "cursor-pointer", "mt-3", "block"], [1, "col-12", "sm:col-6", "md:col-4", "lg:col-3", "flex", "flex-column", "mt-0", "py-4", "px-4", "border-bottom-1", "lg:border-y-none", "lg:border-right-1", "surface-border"], [1, "col-12", "sm:col-6", "md:col-4", "lg:col-3", "flex", "flex-column", "mt-0", "py-4", "px-4", "mb-4", "lg:mb-0"], [1, "text-500", "block", "mt-4", "line-height-3"], [1, "p-inputgroup", "mt-3", "mx-auto", "lg:mx-0", 2, "max-width", "30rem"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-envelope", 1, "text-500", "surface-100", "surface-border"], ["type", "text", "pInputText", "", "placeholder", "Email", 1, "border-y-1", "text-500", "border-x-none", "surface-border"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-arrow-right", 1, "text-500", "surface-100", "surface-border"], [1, "surface-section", "px-3", "py-4", "lg:px-8", "flex", "flex-column", "lg:flex-row", "justify-content-between", "align-items-center"], [1, "col-fixed", "flex", "justify-content-center", "md:justify-content-start", "flex-wrap", "flex-order-1", "lg:flex-order-0"], ["src", "assets/images/blocks/ecommerce/storefront/storefront-1-21.svg", "alt", "Amex", 1, "w-3rem", "mb-3", "md:mb-0", "mr-3"], ["src", "assets/images/blocks/ecommerce/storefront/storefront-1-22.svg", "alt", "Apple Pay", 1, "w-3rem", "mb-3", "md:mb-0", "mr-3"], ["src", "assets/images/blocks/ecommerce/storefront/storefront-1-23.svg", "alt", "Mastercard", 1, "w-3rem", "mb-3", "md:mb-0", "mr-3"], ["src", "assets/images/blocks/ecommerce/storefront/storefront-1-25.svg", "alt", "Visa", 1, "w-3rem", "mb-3", "md:mb-0", "mr-3"], ["src", "assets/images/blocks/ecommerce/storefront/storefront-1-24.svg", "alt", "PayPal", 1, "w-3rem", "mb-3", "md:mb-0"], [1, "col-fixed", "flex", "align-items-center", "flex-order-0", "lg:flex-order-1"], ["tabindex", "0", 1, "cursor-pointer", "mr-3"], [1, "pi", "pi-facebook", "surface-900", "p-1", "text-sm", "border-circle", "text-0"], [1, "pi", "pi-twitter", "surface-900", "p-1", "text-sm", "border-circle", "text-0"], [1, "pi", "pi-youtube", "surface-900", "p-1", "text-sm", "border-circle", "text-0"], ["tabindex", "0", 1, "cursor-pointer"], [1, "pi", "pi-google", "surface-900", "p-1", "text-sm", "border-circle", "text-0"]], template: function HomeView_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "strong");
    \u0275\u0275text(3, "15%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " off on your first order. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 2)(6, "a", 3);
    \u0275\u0275element(7, "i", 4);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Sign In");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275text(11, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 3);
    \u0275\u0275element(13, "i", 6);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Create Account");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 7)(17, "a", 8);
    \u0275\u0275element(18, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275element(20, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12)(22, "ul", 13)(23, "li", 14)(24, "a", 15)(25, "span");
    \u0275\u0275text(26, "Women");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 16)(28, "div", 17)(29, "a", 18);
    \u0275\u0275text(30, "Clothing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul", 19)(32, "li", 20);
    \u0275\u0275text(33, "Clothing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "li", 21);
    \u0275\u0275text(35, "Dresses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li", 21);
    \u0275\u0275text(37, "Jeans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li", 21);
    \u0275\u0275text(39, "Pants");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li", 21);
    \u0275\u0275text(41, "Skirts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "li", 21);
    \u0275\u0275text(43, "Sweaters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "li", 21);
    \u0275\u0275text(45, "Blouses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "a", 18);
    \u0275\u0275text(47, "Shoes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ul", 19)(49, "li", 20);
    \u0275\u0275text(50, "Shoes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "li", 21);
    \u0275\u0275text(52, "Athletic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "li", 21);
    \u0275\u0275text(54, "Boots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "li", 21);
    \u0275\u0275text(56, "Sneakers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "li", 21);
    \u0275\u0275text(58, "Flats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "li", 21);
    \u0275\u0275text(60, "Outdoor");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "a", 18);
    \u0275\u0275text(62, "Accessories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "ul", 19)(64, "li", 20);
    \u0275\u0275text(65, "Accessories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "li", 21);
    \u0275\u0275text(67, "Handbags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "li", 21);
    \u0275\u0275text(69, "Gloves");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "li", 21);
    \u0275\u0275text(71, "Belts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "li", 21);
    \u0275\u0275text(73, "Hats");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "li", 21);
    \u0275\u0275text(75, "Earmuffs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "a", 18);
    \u0275\u0275text(77, "Jewelry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "ul", 19)(79, "li", 20);
    \u0275\u0275text(80, "Jewelry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "li", 21);
    \u0275\u0275text(82, "Anklets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "li", 21);
    \u0275\u0275text(84, "Bracelets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "li", 21);
    \u0275\u0275text(86, "Earrings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "li", 21);
    \u0275\u0275text(88, "Necklaces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "li", 21);
    \u0275\u0275text(90, "Rings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "li", 21);
    \u0275\u0275text(92, "Wedding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "a", 18);
    \u0275\u0275text(94, "Brands");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "ul", 19)(96, "li", 20);
    \u0275\u0275text(97, "Brands");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "li", 21);
    \u0275\u0275text(99, "Hyper");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "li", 21);
    \u0275\u0275text(101, "Peak");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "li", 21);
    \u0275\u0275text(103, "Alfred");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "li", 21);
    \u0275\u0275text(105, "Bastion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "li", 21);
    \u0275\u0275text(107, "Charot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "li", 21);
    \u0275\u0275text(109, "Hodly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "ul", 22)(111, "li", 23);
    \u0275\u0275element(112, "img", 24);
    \u0275\u0275elementStart(113, "span", 25);
    \u0275\u0275text(114, "New Products");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "li", 26);
    \u0275\u0275element(116, "img", 27);
    \u0275\u0275elementStart(117, "span", 25);
    \u0275\u0275text(118, "Discounts");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(119, "li", 14)(120, "a", 15)(121, "span");
    \u0275\u0275text(122, "Men");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 28);
    \u0275\u0275element(124, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "li", 14)(126, "a", 15)(127, "span");
    \u0275\u0275text(128, "Kids");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 28);
    \u0275\u0275element(130, "div", 29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(131, "div", 30)(132, "ul", 31)(133, "li", 32)(134, "a", 33);
    \u0275\u0275element(135, "i", 34);
    \u0275\u0275elementStart(136, "span", 35);
    \u0275\u0275text(137, "Search");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(138, "li", 32)(139, "a", 33);
    \u0275\u0275element(140, "i", 36);
    \u0275\u0275elementStart(141, "span", 35);
    \u0275\u0275text(142, "Favorites");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(143, "li", 32)(144, "a", 33);
    \u0275\u0275element(145, "i", 37);
    \u0275\u0275elementStart(146, "span", 35);
    \u0275\u0275text(147, "Cart");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(148, "div", 38)(149, "div", 39)(150, "div", 40)(151, "div", 41)(152, "span", 42);
    \u0275\u0275text(153, "Category Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "a", 43);
    \u0275\u0275text(155, "Explore Category ");
    \u0275\u0275element(156, "i", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(157, "div", 45)(158, "span", 42);
    \u0275\u0275text(159, "Category Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "a", 46);
    \u0275\u0275text(161, "Explore Category ");
    \u0275\u0275element(162, "i", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(163, "div", 47)(164, "span", 42);
    \u0275\u0275text(165, "Category Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "a", 43);
    \u0275\u0275text(167, "Explore Category ");
    \u0275\u0275element(168, "i", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(169, "div", 48)(170, "span", 42);
    \u0275\u0275text(171, "Category Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "a", 46);
    \u0275\u0275text(173, "Explore Category ");
    \u0275\u0275element(174, "i", 44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(175, "div", 49)(176, "span", 42);
    \u0275\u0275text(177, "Category Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "a", 43);
    \u0275\u0275text(179, "Explore Category ");
    \u0275\u0275element(180, "i", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(181, "div", 50)(182, "div", 51)(183, "div", 52)(184, "span", 53);
    \u0275\u0275element(185, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "span", 55);
    \u0275\u0275text(187, "Pay Later in 30 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(188, "p", 56);
    \u0275\u0275text(189, "Ullamcorper sit amet risus nullam eget felis eget nunc.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(190, "div", 52)(191, "span", 57);
    \u0275\u0275element(192, "i", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "span", 55);
    \u0275\u0275text(194, "Free Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "p", 56);
    \u0275\u0275text(196, "Ullamcorper sit amet risus nullam eget felis eget nunc.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(197, "div", 59)(198, "span", 60);
    \u0275\u0275element(199, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "span", 55);
    \u0275\u0275text(201, "Secure Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "p", 56);
    \u0275\u0275text(203, "Ullamcorper sit amet risus nullam eget felis eget nunc.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(204, "div", 50)(205, "div", 62)(206, "div", 63)(207, "div", 64)(208, "div", 65)(209, "div", 66);
    \u0275\u0275text(210, "Category Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "span", 67);
    \u0275\u0275text(212, "Quis varius quam quisque id diam. A pellentesque sit amet porttitor eget. Vitae purus faucibus ornare suspendisse sed nisi lacus.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(213, "div", 68)(214, "a", 69);
    \u0275\u0275text(215, "Shop Now");
    \u0275\u0275element(216, "i", 70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(217, "div", 71)(218, "div", 72)(219, "div", 73)(220, "div", 74)(221, "div", 65)(222, "div", 66);
    \u0275\u0275text(223, "Category Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "span", 67);
    \u0275\u0275text(225, "Quis varius quam quisque id diam");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(226, "div", 68)(227, "a", 69);
    \u0275\u0275text(228, "Shop Now");
    \u0275\u0275element(229, "i", 70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(230, "div", 73)(231, "div", 75)(232, "div", 65)(233, "div", 66);
    \u0275\u0275text(234, "Category Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "span", 67);
    \u0275\u0275text(236, "Vitae purus faucibus ornare");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "div", 68)(238, "a", 69);
    \u0275\u0275text(239, "Shop Now");
    \u0275\u0275element(240, "i", 70);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(241, "div", 50)(242, "div", 76)(243, "div", 77)(244, "div", 78)(245, "div", 79)(246, "div", 80)(247, "div", 81)(248, "span", 82);
    \u0275\u0275text(249, "Up To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(250, "span", 83);
    \u0275\u0275text(251, "25 ");
    \u0275\u0275elementStart(252, "span", 84);
    \u0275\u0275text(253, "% OFF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(254, "span", 84);
    \u0275\u0275text(255, "Exclusive JEWELRY");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(256, "div", 85);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(257, "div", 77)(258, "div", 86)(259, "div", 79)(260, "div", 80)(261, "div", 81)(262, "span", 82);
    \u0275\u0275text(263, "Up To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "span", 83);
    \u0275\u0275text(265, "25 ");
    \u0275\u0275elementStart(266, "span", 84);
    \u0275\u0275text(267, "% OFF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(268, "span", 84);
    \u0275\u0275text(269, "Exclusive JEWELRY");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(270, "div", 87);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(271, "div", 88)(272, "div", 89)(273, "div", 90)(274, "div", 91);
    \u0275\u0275element(275, "img", 92);
    \u0275\u0275elementStart(276, "div", 93)(277, "span", 94);
    \u0275\u0275text(278, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(279, "span", 95);
    \u0275\u0275text(280, "NEW");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(281, "span", 96);
    \u0275\u0275text(282, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(283, "div", 97);
    \u0275\u0275text(284, "$120.00");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(285, "div", 98)(286, "div", 91);
    \u0275\u0275element(287, "img", 99);
    \u0275\u0275elementStart(288, "div", 93)(289, "span", 94);
    \u0275\u0275text(290, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(291, "span", 95);
    \u0275\u0275text(292, "NEW");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(293, "span", 96);
    \u0275\u0275text(294, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(295, "div", 97);
    \u0275\u0275text(296, "$120.00");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(297, "div", 100)(298, "div", 91);
    \u0275\u0275element(299, "img", 101);
    \u0275\u0275elementStart(300, "div", 93)(301, "span", 94);
    \u0275\u0275text(302, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(303, "span", 95);
    \u0275\u0275text(304, "NEW");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(305, "span", 96);
    \u0275\u0275text(306, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(307, "div", 97);
    \u0275\u0275text(308, "$120.00");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(309, "div", 102)(310, "div", 91);
    \u0275\u0275element(311, "img", 103);
    \u0275\u0275elementStart(312, "div", 93)(313, "span", 94);
    \u0275\u0275text(314, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "span", 95);
    \u0275\u0275text(316, "NEW");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(317, "span", 96);
    \u0275\u0275text(318, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(319, "div", 97);
    \u0275\u0275text(320, "$120.00");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(321, "div", 104)(322, "div", 91);
    \u0275\u0275element(323, "img", 105);
    \u0275\u0275elementStart(324, "div", 93)(325, "span", 94);
    \u0275\u0275text(326, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(327, "span", 95);
    \u0275\u0275text(328, "NEW");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(329, "span", 96);
    \u0275\u0275text(330, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(331, "div", 97);
    \u0275\u0275text(332, "$120.00");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(333, "div", 106)(334, "div", 91);
    \u0275\u0275element(335, "img", 107);
    \u0275\u0275elementStart(336, "div", 93)(337, "span", 94);
    \u0275\u0275text(338, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(339, "span", 95);
    \u0275\u0275text(340, "NEW");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(341, "span", 96);
    \u0275\u0275text(342, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(343, "div", 97);
    \u0275\u0275text(344, "$120.00");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(345, "div", 108)(346, "div", 109)(347, "div", 110)(348, "span", 111);
    \u0275\u0275text(349, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(350, "ul", 112)(351, "li")(352, "a", 113);
    \u0275\u0275text(353, "About Peak");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(354, "li")(355, "a", 113);
    \u0275\u0275text(356, "Factories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(357, "li")(358, "a", 113);
    \u0275\u0275text(359, "Careers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(360, "li")(361, "a", 113);
    \u0275\u0275text(362, "Environmental Initiatives");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(363, "div", 110)(364, "span", 111);
    \u0275\u0275text(365, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(366, "ul", 112)(367, "li")(368, "a", 113);
    \u0275\u0275text(369, "Manage Account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(370, "li")(371, "a", 113);
    \u0275\u0275text(372, "Saved Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(373, "li")(374, "a", 113);
    \u0275\u0275text(375, "My Cart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(376, "li")(377, "a", 113);
    \u0275\u0275text(378, "Wishlist");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(379, "li")(380, "a", 113);
    \u0275\u0275text(381, "Orders & Returns");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(382, "div", 114)(383, "span", 111);
    \u0275\u0275text(384, "Legal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(385, "ul", 112)(386, "li")(387, "a", 113);
    \u0275\u0275text(388, "Investor Relations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(389, "li")(390, "a", 113);
    \u0275\u0275text(391, "Data Privacy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(392, "li")(393, "a", 113);
    \u0275\u0275text(394, "Terms of Service");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(395, "li")(396, "a", 113);
    \u0275\u0275text(397, "Legal Information");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(398, "div", 115)(399, "span", 111);
    \u0275\u0275text(400, "Subscribe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(401, "span", 116);
    \u0275\u0275text(402, "Join our community to receive the latest updates and special promotions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(403, "div", 117);
    \u0275\u0275element(404, "button", 118)(405, "input", 119)(406, "button", 120);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(407, "div", 121)(408, "div", 122);
    \u0275\u0275element(409, "img", 123)(410, "img", 124)(411, "img", 125)(412, "img", 126)(413, "img", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(414, "div", 128)(415, "a", 129);
    \u0275\u0275element(416, "i", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(417, "a", 129);
    \u0275\u0275element(418, "i", 131);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(419, "a", 129);
    \u0275\u0275element(420, "i", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(421, "a", 133);
    \u0275\u0275element(422, "i", 134);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(17);
    \u0275\u0275property("hideOnOutsideClick", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("hideOnOutsideClick", true);
    \u0275\u0275advance(96);
    \u0275\u0275property("hideOnOutsideClick", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("hideOnOutsideClick", true);
  }
}, dependencies: [BadgeModule, BadgeDirective, ButtonModule, ButtonDirective, DividerModule, InputTextModule, InputText, RippleModule, Ripple, StyleClassModule, StyleClass] });
var HomeView = _HomeView;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeView, { className: "HomeView", filePath: "src\\views\\home\\home.view.ts", lineNumber: 16 });
})();
export {
  HomeView
};
//# sourceMappingURL=chunk-553HLLSV.mjs.map
