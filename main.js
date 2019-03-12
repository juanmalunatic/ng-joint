(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js":
/*!***********************************************!*\
  !*** ./dist/ng-joint/fesm5/dgwnu-ng-joint.js ***!
  \***********************************************/
/*! exports provided: DiaPaperComponent, DiaGraphComponent, ShapesComponent, NgJointService, NgJointModule, StandardLinkComponent, StandardDoubleLinkComponent, StandardRectangleComponent, StandardPolylineComponent, StandardPolygonComponent, StandardPathComponent, StandardInscribedImageComponent, StandardImageComponent, StandardHeaderedRectangleComponent, StandardEmbeddedImageComponent, StandardEllipseComponent, StandardCylinderComponent, StandardCircleComponent, StandardBorderedImageComponent, ShapesStandardComponent, ShapesStandardModule, UmlImplementationComponent, UmlGeneralizationComponent, UmlCompositionComponent, UmlAggregationComponent, UmlInterfaceComponent, UmlClassComponent, UmlAbstractComponent, ShapesUmlComponent, ShapesUmlModule, AngularElementComponent, ShapesAngularComponent, ShapesAngularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaPaperComponent", function() { return DiaPaperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaGraphComponent", function() { return DiaGraphComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesComponent", function() { return ShapesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgJointService", function() { return NgJointService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgJointModule", function() { return NgJointModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLinkComponent", function() { return StandardLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardDoubleLinkComponent", function() { return StandardDoubleLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardRectangleComponent", function() { return StandardRectangleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardPolylineComponent", function() { return StandardPolylineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardPolygonComponent", function() { return StandardPolygonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardPathComponent", function() { return StandardPathComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardInscribedImageComponent", function() { return StandardInscribedImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardImageComponent", function() { return StandardImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardHeaderedRectangleComponent", function() { return StandardHeaderedRectangleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardEmbeddedImageComponent", function() { return StandardEmbeddedImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardEllipseComponent", function() { return StandardEllipseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardCylinderComponent", function() { return StandardCylinderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardCircleComponent", function() { return StandardCircleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardBorderedImageComponent", function() { return StandardBorderedImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardComponent", function() { return ShapesStandardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardModule", function() { return ShapesStandardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlImplementationComponent", function() { return UmlImplementationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlGeneralizationComponent", function() { return UmlGeneralizationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlCompositionComponent", function() { return UmlCompositionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlAggregationComponent", function() { return UmlAggregationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlInterfaceComponent", function() { return UmlInterfaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlClassComponent", function() { return UmlClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlAbstractComponent", function() { return UmlAbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlComponent", function() { return ShapesUmlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlModule", function() { return ShapesUmlModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularElementComponent", function() { return AngularElementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularComponent", function() { return ShapesAngularComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularModule", function() { return ShapesAngularModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jointjs */ "./node_modules/jointjs/dist/joint.min.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jointjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Indexable Holder of Joint Paper Object
 */
var /**
 * Indexable Holder of Joint Paper Object
 */
DiaPaper = /** @class */ (function () {
    function DiaPaper(options) {
        this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["dia"].Paper(options);
    }
    Object.defineProperty(DiaPaper.prototype, "jointjsObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jointjsObject;
        },
        enumerable: true,
        configurable: true
    });
    return DiaPaper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgJointService = /** @class */ (function () {
    function NgJointService() {
        /**
         * jointjs internal events subjects
         */
        this.jointEventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * jointjs internal dia.Paper.event subject handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onDiaPaperEvents()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             V
     *    NgJointService.jointEventSubject.next()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             ? -> DiaGraphComponent -> emit()
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents()
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit()
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit()
     *
     */
    /**
     * jointjs internal dia.Paper.event subject handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onDiaPaperEvents()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             V
     *    NgJointService.jointEventSubject.next()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             ? -> DiaGraphComponent -> emit()
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents()
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit()
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit()
     *
     * @param {?} jointjsPaperObject
     * @return {?}
     */
    NgJointService.prototype.onDiaPaperEvents = /**
     * jointjs internal dia.Paper.event subject handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onDiaPaperEvents()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             V
     *    NgJointService.jointEventSubject.next()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             ? -> DiaGraphComponent -> emit()
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents()
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit()
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit()
     *
     * @param {?} jointjsPaperObject
     * @return {?}
     */
    function (jointjsPaperObject) {
        var _this = this;
        jointjsPaperObject
            .on('element:pointerclick', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            _this.jointEventSubject.next({ cid: context.model.cid, eventSource: 'element', eventType: 'pointerclick' });
        }))
            .on('link:pointerclick', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            _this.jointEventSubject.next({ cid: context.model.cid, eventSource: 'link', eventType: 'pointerclick' });
        }));
    };
    NgJointService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgJointService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgJointService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function NgJointService_Factory() { return new NgJointService(); }, token: NgJointService, providedIn: "root" });
    return NgJointService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular Joint Dia Paper Service:
 */
var DiaPaperService = /** @class */ (function () {
    function DiaPaperService(service) {
        this.service = service;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    DiaPaperService.prototype.createPaper = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return new DiaPaper(options);
    };
    /**
     * NgJoint Component Event handling
     */
    /**
     * NgJoint Component Event handling
     * @param {?} component
     * @return {?}
     */
    DiaPaperService.prototype.onEvents = /**
     * NgJoint Component Event handling
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // handling of internal joinjs dia.Paper object events => Angular Emitors
        this.service.onDiaPaperEvents(component.paperInstance.jointjsObject);
    };
    DiaPaperService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DiaPaperService.ctorParameters = function () { return [
        { type: NgJointService }
    ]; };
    /** @nocollapse */ DiaPaperService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DiaPaperService_Factory() { return new DiaPaperService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(NgJointService)); }, token: DiaPaperService, providedIn: "root" });
    return DiaPaperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generic Shape Plugin Component Class (anchestor for all Shape Plugin Components)
 * @abstract
 */
var /**
 * Generic Shape Plugin Component Class (anchestor for all Shape Plugin Components)
 * @abstract
 */
GenericShapePluginComponent = /** @class */ (function () {
    function GenericShapePluginComponent(service) {
        this.service = service;
    }
    Object.defineProperty(GenericShapePluginComponent.prototype, "graphInstance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._graphInstance;
        },
        set: /**
         * @param {?} graphInstance
         * @return {?}
         */
        function (graphInstance) {
            this._graphInstance = graphInstance;
            this.service.initShapePluginComponent(this);
        },
        enumerable: true,
        configurable: true
    });
    return GenericShapePluginComponent;
}());
/**
 * Generic Element Shape Component Class (anchestor for all Element Shapes)
 * @abstract
 */
var GenericElementShapeComponent = /** @class */ (function () {
    function GenericElementShapeComponent(service) {
        this.service = service;
        /**
         * @ignore
         */
        this.xChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @ignore
         */
        this.yChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @ignore
         */
        this.widthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @ignore
         */
        this.heightChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * jointjs.dia.Paper event (element:pointer:click)
         */
        this.elementPointerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    Object.defineProperty(GenericElementShapeComponent.prototype, "x", {
        /** two-way binding x property */
        get: /**
         * two-way binding x property
         * @return {?}
         */
        function () { return this._x; },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} xValue
         * @return {?}
         */
        function (xValue) {
            if (this._x !== xValue) {
                this._x = xValue;
                this.xChange.emit(this._x);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericElementShapeComponent.prototype, "y", {
        /** two-way binding y property */
        get: /**
         * two-way binding y property
         * @return {?}
         */
        function () { return this._y; },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} yValue
         * @return {?}
         */
        function (yValue) {
            if (this._y !== yValue) {
                this._y = yValue;
                this.yChange.emit(this._y);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericElementShapeComponent.prototype, "width", {
        /** two-way binding width property */
        get: /**
         * two-way binding width property
         * @return {?}
         */
        function () { return this._width; },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} widthValue
         * @return {?}
         */
        function (widthValue) {
            if (this._width !== widthValue) {
                this._width = widthValue;
                this.widthChange.emit(this._width);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericElementShapeComponent.prototype, "height", {
        /** two-way binding height property */
        get: /**
         * two-way binding height property
         * @return {?}
         */
        function () { return this._height; },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} heightValue
         * @return {?}
         */
        function (heightValue) {
            if (this._height !== heightValue) {
                this._height = heightValue;
                this.heightChange.emit(this._height);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Create Shape Element Instance and initialize event handlers */
    /**
     * Create Shape Element Instance and initialize event handlers
     * @param {?} graphInstance
     * @return {?}
     */
    GenericElementShapeComponent.prototype.createShape = /**
     * Create Shape Element Instance and initialize event handlers
     * @param {?} graphInstance
     * @return {?}
     */
    function (graphInstance) {
        console.log('PRE: createShape.shapeInstance', this.shapeInstance);
        this.graphInstance = graphInstance;
        /** @type {?} */
        var shapeOptions = this.service.shapeOptions(this);
        this.shapeInstance = this.service.createElementShape(this.id, shapeOptions);
        this.service.configShape(this);
        console.log('POST: createShape.shapeInstance', this.shapeInstance);
        this.service.onEvents(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GenericElementShapeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.service.setChanges(changes, this);
    };
    GenericElementShapeComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        x: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        xChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        y: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        yChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        widthChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        heightChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        elementPointerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return GenericElementShapeComponent;
}());
/**
 * Generic Element Shape Component Class (anchestor for all Element Shapes)
 * @abstract
 */
var GenericLinkShapeComponent = /** @class */ (function () {
    function GenericLinkShapeComponent(service) {
        this.service = service;
        /**
         * jointjs.dia.Paper event (link:pointer:click)
         */
        this.linkPointerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    Object.defineProperty(GenericLinkShapeComponent.prototype, "sourceShape", {
        set: /**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            this.shapeInstance.jointjsObject.source(source.jointjsObject);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericLinkShapeComponent.prototype, "targetShape", {
        set: /**
         * @param {?} target
         * @return {?}
         */
        function (target) {
            this.shapeInstance.jointjsObject.target(target.jointjsObject);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} graphInstance
     * @return {?}
     */
    GenericLinkShapeComponent.prototype.createShape = /**
     * @param {?} graphInstance
     * @return {?}
     */
    function (graphInstance) {
        console.log('PRE: createShape.shapeInstance', this.shapeInstance);
        this.graphInstance = graphInstance;
        /** @type {?} */
        var shapeOptions = this.service.shapeOptions(this);
        this.shapeInstance = this.service.createLinkShape(this.id, this.sourceId, this.targetId, shapeOptions);
        this.service.configShape(this);
        this.service.onEvents(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GenericLinkShapeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.service.setChanges(changes, this);
    };
    GenericLinkShapeComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        sourceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        targetId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        linkPointerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return GenericLinkShapeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Shapes Service Class
 *
 * \@comment Manages LifeCycle, Events and Bi-Directional Data-Binding of Plugin Shapes
 */
var ShapesService = /** @class */ (function () {
    function ShapesService(service) {
        this.service = service;
    }
    /**
     * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
     */
    /**
     * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
     * @param {?} shapePlugins
     * @param {?} graphInstance
     * @return {?}
     */
    ShapesService.prototype.activateShapePlugins = /**
     * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
     * @param {?} shapePlugins
     * @param {?} graphInstance
     * @return {?}
     */
    function (shapePlugins, graphInstance) {
        var e_1, _a;
        try {
            for (var shapePlugins_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(shapePlugins), shapePlugins_1_1 = shapePlugins_1.next(); !shapePlugins_1_1.done; shapePlugins_1_1 = shapePlugins_1.next()) {
                var shapePlugin = shapePlugins_1_1.value;
                if (shapePlugin) {
                    shapePlugin.graphInstance = graphInstance;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (shapePlugins_1_1 && !shapePlugins_1_1.done && (_a = shapePlugins_1.return)) _a.call(shapePlugins_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Create Shapes from ContentChildren QueryLists on ShapePlugin Component
     * @param component any shape Plugin Component
     */
    /**
     * Create Shapes from ContentChildren QueryLists on ShapePlugin Component
     * @param {?} component any shape Plugin Component
     * @return {?}
     */
    ShapesService.prototype.initShapePluginComponent = /**
     * Create Shapes from ContentChildren QueryLists on ShapePlugin Component
     * @param {?} component any shape Plugin Component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var elements = [];
        /** @type {?} */
        var links = [];
        for (var key in component) {
            if (component[key] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]) {
                /** @type {?} */
                var listObject = component[key]['first'];
                if (listObject) {
                    if (listObject instanceof GenericElementShapeComponent) {
                        elements.push(component[key]);
                    }
                    if (listObject instanceof GenericLinkShapeComponent) {
                        links.push(component[key]);
                    }
                }
            }
        }
        // console.log('elements', elements);
        // console.log('links', links);
        this.createShapes(elements, links, component.graphInstance);
    };
    /**
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     */
    /**
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     * @param {?} elements
     * @param {?} links
     * @param {?} graphInstance
     * @return {?}
     */
    ShapesService.prototype.createShapes = /**
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     * @param {?} elements
     * @param {?} links
     * @param {?} graphInstance
     * @return {?}
     */
    function (elements, links, graphInstance) {
        var e_2, _a, e_3, _b;
        try {
            // Firstly, create elements
            for (var elements_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                var element = elements_1_1.value;
                element.forEach((/**
                 * @param {?} elementShape
                 * @return {?}
                 */
                function (elementShape) {
                    elementShape.createShape(graphInstance);
                }));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            // Secondly, create links and connect them between the elements
            for (var links_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(links), links_1_1 = links_1.next(); !links_1_1.done; links_1_1 = links_1.next()) {
                var link = links_1_1.value;
                link.forEach((/**
                 * @param {?} linkShape
                 * @return {?}
                 */
                function (linkShape) {
                    var e_4, _a;
                    // create link shape
                    linkShape.createShape(graphInstance);
                    try {
                        // connect link to elements
                        for (var elements_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(elements), elements_2_1 = elements_2.next(); !elements_2_1.done; elements_2_1 = elements_2.next()) {
                            var element = elements_2_1.value;
                            // connect source element
                            /** @type {?} */
                            var source = element.find((/**
                             * @param {?} elementShape
                             * @return {?}
                             */
                            function (elementShape) { return elementShape.id === linkShape.sourceId; }));
                            if (source) {
                                linkShape.sourceShape = source.shapeInstance;
                            }
                            // connect target element
                            /** @type {?} */
                            var target = element.find((/**
                             * @param {?} elementShape
                             * @return {?}
                             */
                            function (elementShape) { return elementShape.id === linkShape.targetId; }));
                            if (target) {
                                linkShape.targetShape = target.shapeInstance;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (elements_2_1 && !elements_2_1.done && (_a = elements_2.return)) _a.call(elements_2);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (links_1_1 && !links_1_1.done && (_b = links_1.return)) _b.call(links_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @ignore
     */
    /**
     * @ignore
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype._positionComponent = /**
     * @ignore
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        /** @type {?} */
        var xShapeElement = shape.jointjsObject.getBBox().x;
        /** @type {?} */
        var yShapeElement = shape.jointjsObject.getBBox().y;
        /** @type {?} */
        var xChangeDetected = (component.x !== xShapeElement);
        /** @type {?} */
        var yChangedDetected = (component.y !== yShapeElement);
        if (xChangeDetected) {
            component.x = xShapeElement;
        }
        if (yChangedDetected) {
            component.y = yShapeElement;
        }
    };
    /**
     * @ignore
     */
    /**
     * @ignore
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype._sizeComponent = /**
     * @ignore
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        /** @type {?} */
        var widthShapeElement = shape.jointjsObject.getBBox().width;
        /** @type {?} */
        var heightShapeElement = shape.jointjsObject.getBBox().height;
        /** @type {?} */
        var widthChangeDetected = (component.width !== widthShapeElement);
        /** @type {?} */
        var heightChangedDetected = (component.height !== heightShapeElement);
        if (widthChangeDetected) {
            component.width = widthShapeElement;
        }
        if (heightChangedDetected) {
            component.height = heightShapeElement;
        }
    };
    /**
     * NgJoint dia.Element.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Element.events
     */
    /**
     * NgJoint dia.Element.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Element.events
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.onElementEvents = /**
     * NgJoint dia.Element.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Element.events
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var _this = this;
        // jointjs internal element event handling
        // bi-directional data changes
        component.shapeInstance.jointjsObject
            .on('change:position', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { _this._positionComponent(component); }))
            .on('change:size', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { _this._sizeComponent(component); }));
        // jointjs internal paper event handling
        // emit events on element level. Does seperate event-sources (element instances)
        // on the angular HTML-template
        this.service.jointEventSubject.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.eventSource === 'element') {
                if (event.eventType === 'pointerclick') {
                    if ((event.cid === component.shapeInstance.jointjsObject.cid)) {
                        component.elementPointerClick.emit(event.cid);
                    }
                }
            }
        }));
    };
    /**
     * NgJoint dia.Link.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Link.events
     */
    /**
     * NgJoint dia.Link.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Link.events
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.onLinkEvents = /**
     * NgJoint dia.Link.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Link.events
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // jointjs internal link event handling
        // bi-directional data changes
        component.shapeInstance.jointjsObject
            .on('change:source', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { }))
            .on('change:target', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { }));
        // jointjs internal paper event handling
        // emit events on link level. Does seperate event-sources (element instances)
        // on the angular HTML-template
        this.service.jointEventSubject.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.eventSource === 'link') {
                if (event.eventType === 'pointerclick') {
                    if ((event.cid === component.shapeInstance.jointjsObject.cid)) {
                        component.linkPointerClick.emit(event.cid);
                    }
                }
            }
        }));
    };
    /**
     * returns al generic dia element options
     */
    /**
     * returns al generic dia element options
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.elementShapeOptions = /**
     * returns al generic dia element options
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return {
            position: { x: component.x, y: component.y },
            size: { width: component.width, height: component.height }
        };
    };
    /**
     * configure al generic dia shape (element or link) settings
     */
    /**
     * configure al generic dia shape (element or link) settings
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.configShapeAttrs = /**
     * configure al generic dia shape (element or link) settings
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // shape attrs config
        /** @type {?} */
        var shape = component.shapeInstance.jointjsObject;
        for (var prop in shape.attributes.attrs) {
            if (component[prop]) {
                this.setAttrProp(shape, prop, component[prop]);
            }
        }
    };
    /**
     * Set Attr Property Values on a jointjs dia shape (element or link)
     */
    /**
     * Set Attr Property Values on a jointjs dia shape (element or link)
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    ShapesService.prototype.setAttrProp = /**
     * Set Attr Property Values on a jointjs dia shape (element or link)
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    function (diaShape, prop, currentValue) {
        for (var attr in currentValue) {
            if (currentValue.hasOwnProperty(attr)) {
                diaShape.attr(prop + '/' + attr, currentValue[attr]);
            }
        }
    };
    /**
     * @ignore
     */
    /**
     * @ignore
     * @private
     * @param {?} changes
     * @param {?} shape
     * @return {?}
     */
    ShapesService.prototype._setAttrChanges = /**
     * @ignore
     * @private
     * @param {?} changes
     * @param {?} shape
     * @return {?}
     */
    function (changes, shape) {
        /** @type {?} */
        var diaShape = shape.jointjsObject;
        /** @type {?} */
        var attrs = diaShape.attributes['attrs'];
        for (var prop in changes) {
            if (changes.hasOwnProperty(prop) &&
                prop !== 'x' && prop !== 'y' && prop !== 'width' && prop !== 'height') {
                /** @type {?} */
                var currentValue = changes[prop].currentValue;
                /** @type {?} */
                var previousValue = attrs[prop];
                if (currentValue !== previousValue) {
                    this.setAttrProp(diaShape, prop, currentValue);
                }
            }
        }
        // console.log(element.attributes);
    };
    /**
     * Process Angular Element Component changes --> in JointJs Element Shape object
     *
     * @comment To provide bi-directional functionality for position, size and attrs
     */
    /**
     * Process Angular Element Component changes --> in JointJs Element Shape object
     *
     * \@comment To provide bi-directional functionality for position, size and attrs
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.setElementChanges = /**
     * Process Angular Element Component changes --> in JointJs Element Shape object
     *
     * \@comment To provide bi-directional functionality for position, size and attrs
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var bbox = shape.jointjsObject.getBBox();
        /** @type {?} */
        var element = shape.jointjsObject;
        // detect position change
        /** @type {?} */
        var positionChangeDetected = false;
        if (changes.x) {
            positionChangeDetected = (changes.x.currentValue !== bbox.x);
        }
        else if (changes.y) {
            positionChangeDetected = (changes.y.currentValue !== bbox.y);
        }
        // detect size change
        /** @type {?} */
        var sizeChangeDetected = false;
        if (changes.width) {
            sizeChangeDetected = (changes.width.currentValue !== bbox.width);
        }
        else if (changes.height) {
            sizeChangeDetected = (changes.height.currentValue !== bbox.height);
        }
        // process position changes
        if (positionChangeDetected) {
            element.position(component.x, component.y);
        }
        // process size changes
        if (sizeChangeDetected) {
            element.resize(component.width, component.height);
        }
        // process attrs changes
        this._setAttrChanges(changes, shape);
    };
    /**
     * Process Angular Link Component changes --> in JointJs Link Shape object
     *
     * @comment To provide bi-directional functionality for attrs
     */
    /**
     * Process Angular Link Component changes --> in JointJs Link Shape object
     *
     * \@comment To provide bi-directional functionality for attrs
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.setLinkChanges = /**
     * Process Angular Link Component changes --> in JointJs Link Shape object
     *
     * \@comment To provide bi-directional functionality for attrs
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var link = shape.jointjsObject;
        // process attrs changes
        this._setAttrChanges(changes, shape);
    };
    ShapesService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesService.ctorParameters = function () { return [
        { type: NgJointService }
    ]; };
    /** @nocollapse */ ShapesService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ShapesService_Factory() { return new ShapesService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(NgJointService)); }, token: ShapesService, providedIn: "root" });
    return ShapesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dia Element Class
 * @abstract
 */
var /**
 * Dia Element Class
 * @abstract
 */
DiaElement = /** @class */ (function () {
    function DiaElement(parms) {
        this._id = parms.id;
    }
    Object.defineProperty(DiaElement.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiaElement.prototype, "jointjsObject", {
        get: /**
         * @return {?}
         */
        function () { return this._jointjsObject; },
        enumerable: true,
        configurable: true
    });
    return DiaElement;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaElementModule = /** @class */ (function () {
    function DiaElementModule() {
    }
    DiaElementModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [],
                    imports: []
                },] }
    ];
    return DiaElementModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dia Link Class
 * @abstract
 */
var /**
 * Dia Link Class
 * @abstract
 */
DiaLink = /** @class */ (function () {
    function DiaLink(parms) {
        this._id = parms.id;
        this._sourceId = parms.sourceId;
        this._targetId = parms.targetId;
    }
    Object.defineProperty(DiaLink.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiaLink.prototype, "sourceId", {
        get: /**
         * @return {?}
         */
        function () { return this._sourceId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiaLink.prototype, "targetId", {
        get: /**
         * @return {?}
         */
        function () { return this.targetId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiaLink.prototype, "jointjsObject", {
        get: /**
         * @return {?}
         */
        function () { return this._jointjsObject; },
        enumerable: true,
        configurable: true
    });
    return DiaLink;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaLinkModule = /** @class */ (function () {
    function DiaLinkModule() {
    }
    DiaLinkModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [],
                    imports: []
                },] }
    ];
    return DiaLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
StandardElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardElementShape, _super);
    function StandardElementShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardElementShape;
}(DiaElement));
/**
 * @abstract
 */
var /**
 * @abstract
 */
StandardLinkShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardLinkShape, _super);
    function StandardLinkShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardLinkShape;
}(DiaLink));
/**
 * @abstract
 */
var GenericStandardElementShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericStandardElementShapeComponent, _super);
    function GenericStandardElementShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericStandardElementShapeComponent.propDecorators = {
        root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return GenericStandardElementShapeComponent;
}(GenericElementShapeComponent));
/**
 * @abstract
 */
var GenericStandardLinkShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericStandardLinkShapeComponent, _super);
    function GenericStandardLinkShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericStandardLinkShapeComponent.propDecorators = {
        root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        line: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return GenericStandardLinkShapeComponent;
}(GenericLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesStandardService = /** @class */ (function () {
    function ShapesStandardService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.initShapePluginComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.initShapePluginComponent(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.onElementEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.onLinkEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.setElementChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.setLinkChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.elementShapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.configElementShape = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // shape attrs config
        this.service.configShapeAttrs(component);
        // Cylinder shape extra config
        if (component.shapeInstance.jointjsObject instanceof jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Cylinder && component['topRy']) {
            // jointjs.shapes.Cylinder extra config
            /** @type {?} */
            var t = component['topRy'];
            /** @type {?} */
            var cylinder = (/** @type {?} */ (component.shapeInstance.jointjsObject));
            cylinder.topRy(t);
            console.log('cylinder', cylinder);
        }
        // shape generic config
        component.graphInstance.addElement(component.shapeInstance);
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.linkShapeOptions = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return undefined;
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.configLinkShape = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        if (component.line) {
            this.service.setAttrProp(component.shapeInstance.jointjsObject, 'line', component.line);
        }
        if (component['outline']) {
            this.service.setAttrProp(component.shapeInstance.jointjsObject, 'outline', component['outline']);
        }
        component.graphInstance.addLink(component.shapeInstance);
    };
    ShapesStandardService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesStandardService.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    /** @nocollapse */ ShapesStandardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ShapesStandardService_Factory() { return new ShapesStandardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesService)); }, token: ShapesStandardService, providedIn: "root" });
    return ShapesStandardService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Link Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Link Class
 */
StandardLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardLink, _super);
    function StandardLink(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Link(options);
        return _this;
    }
    return StandardLink;
}(StandardLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardLinkService = /** @class */ (function () {
    function StandardLinkService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    StandardLinkService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new StandardLink(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    StandardLinkService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardLinkService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardLinkService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardLinkService_Factory() { return new StandardLinkService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardLinkService, providedIn: "root" });
    return StandardLinkService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardLinkComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardLinkComponent, _super);
    // no additional inputs
    function StandardLinkComponent(linkService) {
        var _this = _super.call(this, linkService) || this;
        _this.linkService = linkService;
        return _this;
    }
    StandardLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-link',
                    template: "\n    <!-- joint.shapes.standard.Link  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardLinkComponent.ctorParameters = function () { return [
        { type: StandardLinkService }
    ]; };
    return StandardLinkComponent;
}(GenericStandardLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard DoubleLink Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard DoubleLink Class
 */
StandardDoubleLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardDoubleLink, _super);
    function StandardDoubleLink(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.DoubleLink(options);
        return _this;
    }
    return StandardDoubleLink;
}(StandardLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardDoubleLinkService = /** @class */ (function () {
    function StandardDoubleLinkService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardDoubleLinkService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    StandardDoubleLinkService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new StandardDoubleLink(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardDoubleLinkService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardDoubleLinkService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardDoubleLinkService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    StandardDoubleLinkService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardDoubleLinkService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardDoubleLinkService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardDoubleLinkService_Factory() { return new StandardDoubleLinkService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardDoubleLinkService, providedIn: "root" });
    return StandardDoubleLinkService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardDoubleLinkComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardDoubleLinkComponent, _super);
    function StandardDoubleLinkComponent(doubleLinkService) {
        var _this = _super.call(this, doubleLinkService) || this;
        _this.doubleLinkService = doubleLinkService;
        return _this;
    }
    StandardDoubleLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-double-link',
                    template: "\n    <!-- joint.shapes.standard.DoubleLink  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardDoubleLinkComponent.ctorParameters = function () { return [
        { type: StandardDoubleLinkService }
    ]; };
    StandardDoubleLinkComponent.propDecorators = {
        outline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardDoubleLinkComponent;
}(GenericStandardLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Rectangle Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Rectangle Class
 */
StandardRectangle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardRectangle, _super);
    function StandardRectangle(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Rectangle(options);
        return _this;
    }
    return StandardRectangle;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardRectangleService = /** @class */ (function () {
    function StandardRectangleService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardRectangleService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardRectangle(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardRectangleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardRectangleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardRectangleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardRectangleService_Factory() { return new StandardRectangleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardRectangleService, providedIn: "root" });
    return StandardRectangleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardRectangleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardRectangleComponent, _super);
    function StandardRectangleComponent(rectangleService) {
        var _this = _super.call(this, rectangleService) || this;
        _this.rectangleService = rectangleService;
        return _this;
    }
    StandardRectangleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-rectangle',
                    template: "\n    <!-- joint.shapes.standard.Rectangle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardRectangleComponent.ctorParameters = function () { return [
        { type: StandardRectangleService }
    ]; };
    StandardRectangleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardRectangleComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Polyline Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Polyline Class
 */
StandardPolyline = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPolyline, _super);
    function StandardPolyline(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Polyline(options);
        return _this;
    }
    return StandardPolyline;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolylineService = /** @class */ (function () {
    function StandardPolylineService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolylineService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardPolylineService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardPolyline(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolylineService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolylineService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardPolylineService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardPolylineService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPolylineService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPolylineService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardPolylineService_Factory() { return new StandardPolylineService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardPolylineService, providedIn: "root" });
    return StandardPolylineService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolylineComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPolylineComponent, _super);
    function StandardPolylineComponent(polylineService) {
        var _this = _super.call(this, polylineService) || this;
        _this.polylineService = polylineService;
        return _this;
    }
    StandardPolylineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-polyline',
                    template: "\n    <!-- joint.shapes.standard.Polyline  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPolylineComponent.ctorParameters = function () { return [
        { type: StandardPolylineService }
    ]; };
    StandardPolylineComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardPolylineComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Polygon Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Polygon Class
 */
StandardPolygon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPolygon, _super);
    function StandardPolygon(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Polygon(options);
        return _this;
    }
    return StandardPolygon;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolygonService = /** @class */ (function () {
    function StandardPolygonService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolygonService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardPolygonService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardPolygon(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolygonService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolygonService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardPolygonService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardPolygonService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPolygonService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPolygonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardPolygonService_Factory() { return new StandardPolygonService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardPolygonService, providedIn: "root" });
    return StandardPolygonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolygonComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPolygonComponent, _super);
    function StandardPolygonComponent(polygonService) {
        var _this = _super.call(this, polygonService) || this;
        _this.polygonService = polygonService;
        return _this;
    }
    StandardPolygonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-polygon',
                    template: "\n    <!-- joint.shapes.standard.Polygon  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPolygonComponent.ctorParameters = function () { return [
        { type: StandardPolygonService }
    ]; };
    StandardPolygonComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardPolygonComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Path Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Path Class
 */
StandardPath = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPath, _super);
    function StandardPath(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Path(options);
        return _this;
    }
    return StandardPath;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPathService = /** @class */ (function () {
    function StandardPathService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPathService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardPathService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardPath(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPathService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPathService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardPathService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardPathService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPathService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPathService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardPathService_Factory() { return new StandardPathService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardPathService, providedIn: "root" });
    return StandardPathService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPathComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPathComponent, _super);
    function StandardPathComponent(pathService) {
        var _this = _super.call(this, pathService) || this;
        _this.pathService = pathService;
        return _this;
    }
    StandardPathComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-path',
                    template: "\n    <!-- joint.shapes.standard.Path  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPathComponent.ctorParameters = function () { return [
        { type: StandardPathService }
    ]; };
    StandardPathComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardPathComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard InscribedImage Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard InscribedImage Class
 */
StandardInscribedImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardInscribedImage, _super);
    function StandardInscribedImage(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.InscribedImage(options);
        return _this;
    }
    return StandardInscribedImage;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardInscribedImageService = /** @class */ (function () {
    function StandardInscribedImageService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardInscribedImageService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardInscribedImageService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardInscribedImage(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardInscribedImageService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardInscribedImageService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardInscribedImageService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardInscribedImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardInscribedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardInscribedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardInscribedImageService_Factory() { return new StandardInscribedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardInscribedImageService, providedIn: "root" });
    return StandardInscribedImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardInscribedImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardInscribedImageComponent, _super);
    function StandardInscribedImageComponent(inscribedImageService) {
        var _this = _super.call(this, inscribedImageService) || this;
        _this.inscribedImageService = inscribedImageService;
        return _this;
    }
    StandardInscribedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-inscribed-image',
                    template: "\n    <!-- joint.shapes.standard.InscribedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardInscribedImageComponent.ctorParameters = function () { return [
        { type: StandardInscribedImageService }
    ]; };
    StandardInscribedImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardInscribedImageComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Image Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Image Class
 */
StandardImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardImage, _super);
    function StandardImage(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Image(options);
        return _this;
    }
    return StandardImage;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardImageService = /** @class */ (function () {
    function StandardImageService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardImageService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardImageService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardImage(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardImageService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardImageService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardImageService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardImageService_Factory() { return new StandardImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardImageService, providedIn: "root" });
    return StandardImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardImageComponent, _super);
    function StandardImageComponent(imageService) {
        var _this = _super.call(this, imageService) || this;
        _this.imageService = imageService;
        return _this;
    }
    StandardImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-image',
                    template: "\n    <!-- joint.shapes.standard.Image  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardImageComponent.ctorParameters = function () { return [
        { type: StandardImageService }
    ]; };
    StandardImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardImageComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard HeaderedRectangle Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard HeaderedRectangle Class
 */
StandardHeaderedRectangle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardHeaderedRectangle, _super);
    function StandardHeaderedRectangle(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.HeaderedRectangle(options);
        return _this;
    }
    return StandardHeaderedRectangle;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardHeaderedRectangleService = /** @class */ (function () {
    function StandardHeaderedRectangleService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardHeaderedRectangle(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardHeaderedRectangleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardHeaderedRectangleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardHeaderedRectangleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardHeaderedRectangleService_Factory() { return new StandardHeaderedRectangleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardHeaderedRectangleService, providedIn: "root" });
    return StandardHeaderedRectangleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardHeaderedRectangleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardHeaderedRectangleComponent, _super);
    function StandardHeaderedRectangleComponent(headeredRectangleService) {
        var _this = _super.call(this, headeredRectangleService) || this;
        _this.headeredRectangleService = headeredRectangleService;
        return _this;
    }
    StandardHeaderedRectangleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-headered-rectangle',
                    template: "\n    <!-- joint.shapes.standard.HeaderedRectangle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardHeaderedRectangleComponent.ctorParameters = function () { return [
        { type: StandardHeaderedRectangleService }
    ]; };
    StandardHeaderedRectangleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bodyText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardHeaderedRectangleComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard EmbeddedImage Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard EmbeddedImage Class
 */
StandardEmbeddedImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardEmbeddedImage, _super);
    function StandardEmbeddedImage(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.EmbeddedImage(options);
        return _this;
    }
    return StandardEmbeddedImage;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEmbeddedImageService = /** @class */ (function () {
    function StandardEmbeddedImageService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardEmbeddedImage(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardEmbeddedImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardEmbeddedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardEmbeddedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardEmbeddedImageService_Factory() { return new StandardEmbeddedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardEmbeddedImageService, providedIn: "root" });
    return StandardEmbeddedImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEmbeddedImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardEmbeddedImageComponent, _super);
    function StandardEmbeddedImageComponent(embeddedImageService) {
        var _this = _super.call(this, embeddedImageService) || this;
        _this.embeddedImageService = embeddedImageService;
        return _this;
    }
    StandardEmbeddedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-embedded-image',
                    template: "\n    <!-- joint.shapes.standard.EmbeddedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardEmbeddedImageComponent.ctorParameters = function () { return [
        { type: StandardEmbeddedImageService }
    ]; };
    StandardEmbeddedImageComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardEmbeddedImageComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Ellipse Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Ellipse Class
 */
StandardEllipse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardEllipse, _super);
    function StandardEllipse(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Ellipse(options);
        return _this;
    }
    return StandardEllipse;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEllipseService = /** @class */ (function () {
    function StandardEllipseService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEllipseService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardEllipseService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardEllipse(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEllipseService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEllipseService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardEllipseService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardEllipseService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardEllipseService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardEllipseService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardEllipseService_Factory() { return new StandardEllipseService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardEllipseService, providedIn: "root" });
    return StandardEllipseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEllipseComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardEllipseComponent, _super);
    function StandardEllipseComponent(ellipseService) {
        var _this = _super.call(this, ellipseService) || this;
        _this.ellipseService = ellipseService;
        return _this;
    }
    StandardEllipseComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-ellipse',
                    template: "\n    <!-- joint.shapes.standard.Ellipse  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardEllipseComponent.ctorParameters = function () { return [
        { type: StandardEllipseService }
    ]; };
    StandardEllipseComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardEllipseComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Cylinder Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Cylinder Class
 */
StandardCylinder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardCylinder, _super);
    function StandardCylinder(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Cylinder(options);
        return _this;
    }
    return StandardCylinder;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCylinderService = /** @class */ (function () {
    function StandardCylinderService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCylinderService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardCylinderService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardCylinder(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCylinderService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCylinderService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardCylinderService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardCylinderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardCylinderService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardCylinderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardCylinderService_Factory() { return new StandardCylinderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardCylinderService, providedIn: "root" });
    return StandardCylinderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCylinderComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardCylinderComponent, _super);
    function StandardCylinderComponent(cylinderService) {
        var _this = _super.call(this, cylinderService) || this;
        _this.cylinderService = cylinderService;
        return _this;
    }
    StandardCylinderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-cylinder',
                    template: "\n    <!-- joint.shapes.standard.Cylinder  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardCylinderComponent.ctorParameters = function () { return [
        { type: StandardCylinderService }
    ]; };
    StandardCylinderComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        top: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        topRy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardCylinderComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Circle Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Circle Class
 */
StandardCircle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardCircle, _super);
    function StandardCircle(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Circle(options);
        return _this;
    }
    return StandardCircle;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCircleService = /** @class */ (function () {
    function StandardCircleService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCircleService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardCircleService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardCircle(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCircleService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCircleService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardCircleService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardCircleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardCircleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardCircleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardCircleService_Factory() { return new StandardCircleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardCircleService, providedIn: "root" });
    return StandardCircleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCircleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardCircleComponent, _super);
    function StandardCircleComponent(circleService) {
        var _this = _super.call(this, circleService) || this;
        _this.circleService = circleService;
        return _this;
    }
    StandardCircleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-circle',
                    template: "\n    <!-- joint.shapes.standard.Circle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardCircleComponent.ctorParameters = function () { return [
        { type: StandardCircleService }
    ]; };
    StandardCircleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardCircleComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard BorderedImage Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard BorderedImage Class
 */
StandardBorderedImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardBorderedImage, _super);
    function StandardBorderedImage(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.BorderedImage(options);
        return _this;
    }
    return StandardBorderedImage;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardBorderedImageService = /** @class */ (function () {
    function StandardBorderedImageService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardBorderedImageService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardBorderedImageService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardBorderedImage(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardBorderedImageService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardBorderedImageService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardBorderedImageService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardBorderedImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardBorderedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardBorderedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardBorderedImageService_Factory() { return new StandardBorderedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardBorderedImageService, providedIn: "root" });
    return StandardBorderedImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardBorderedImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardBorderedImageComponent, _super);
    function StandardBorderedImageComponent(borderedImageService) {
        var _this = _super.call(this, borderedImageService) || this;
        _this.borderedImageService = borderedImageService;
        return _this;
    }
    StandardBorderedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-bordered-image',
                    template: "\n    <!-- joint.shapes.standard.BorderedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardBorderedImageComponent.ctorParameters = function () { return [
        { type: StandardBorderedImageService }
    ]; };
    StandardBorderedImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return StandardBorderedImageComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesStandardComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShapesStandardComponent, _super);
    function ShapesStandardComponent(shapesStandardService) {
        var _this = _super.call(this, shapesStandardService) || this;
        _this.shapesStandardService = shapesStandardService;
        return _this;
    }
    ShapesStandardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-shapes-standard',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesStandardComponent.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    ShapesStandardComponent.propDecorators = {
        standardBorderedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardBorderedImageComponent,] }],
        standardCircles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardCircleComponent,] }],
        standardCylinders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardCylinderComponent,] }],
        standardEllipses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardEllipseComponent,] }],
        standardEmbeddedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardEmbeddedImageComponent,] }],
        standardHeaderedRectangles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardHeaderedRectangleComponent,] }],
        standardImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardImageComponent,] }],
        standardInscribedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardInscribedImageComponent,] }],
        standardPaths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardPathComponent,] }],
        standardPolygons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardPolygonComponent,] }],
        standardPolylines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardPolylineComponent,] }],
        standardRectangles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardRectangleComponent,] }],
        standardDoubleLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardDoubleLinkComponent,] }],
        standardLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardLinkComponent,] }]
    };
    return ShapesStandardComponent;
}(GenericShapePluginComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardBorderedImageModule = /** @class */ (function () {
    function StandardBorderedImageModule() {
    }
    StandardBorderedImageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardBorderedImageService],
                    declarations: [StandardBorderedImageComponent],
                    exports: [StandardBorderedImageComponent]
                },] }
    ];
    return StandardBorderedImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCircleModule = /** @class */ (function () {
    function StandardCircleModule() {
    }
    StandardCircleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardCircleService],
                    declarations: [StandardCircleComponent],
                    exports: [StandardCircleComponent]
                },] }
    ];
    return StandardCircleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCylinderModule = /** @class */ (function () {
    function StandardCylinderModule() {
    }
    StandardCylinderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardCylinderService],
                    declarations: [StandardCylinderComponent],
                    exports: [StandardCylinderComponent]
                },] }
    ];
    return StandardCylinderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEllipseModule = /** @class */ (function () {
    function StandardEllipseModule() {
    }
    StandardEllipseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardEllipseService],
                    declarations: [StandardEllipseComponent],
                    exports: [StandardEllipseComponent]
                },] }
    ];
    return StandardEllipseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEmbeddedImageModule = /** @class */ (function () {
    function StandardEmbeddedImageModule() {
    }
    StandardEmbeddedImageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardEmbeddedImageService],
                    declarations: [StandardEmbeddedImageComponent],
                    exports: [StandardEmbeddedImageComponent]
                },] }
    ];
    return StandardEmbeddedImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardHeaderedRectangleModule = /** @class */ (function () {
    function StandardHeaderedRectangleModule() {
    }
    StandardHeaderedRectangleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardHeaderedRectangleService],
                    declarations: [StandardHeaderedRectangleComponent],
                    exports: [StandardHeaderedRectangleComponent]
                },] }
    ];
    return StandardHeaderedRectangleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardImageModule = /** @class */ (function () {
    function StandardImageModule() {
    }
    StandardImageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardImageService],
                    declarations: [StandardImageComponent],
                    exports: [StandardImageComponent]
                },] }
    ];
    return StandardImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardInscribedImageModule = /** @class */ (function () {
    function StandardInscribedImageModule() {
    }
    StandardInscribedImageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardInscribedImageService],
                    declarations: [StandardInscribedImageComponent],
                    exports: [StandardInscribedImageComponent]
                },] }
    ];
    return StandardInscribedImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPathModule = /** @class */ (function () {
    function StandardPathModule() {
    }
    StandardPathModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardPathService],
                    declarations: [StandardPathComponent],
                    exports: [StandardPathComponent]
                },] }
    ];
    return StandardPathModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolygonModule = /** @class */ (function () {
    function StandardPolygonModule() {
    }
    StandardPolygonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardPolygonService],
                    declarations: [StandardPolygonComponent],
                    exports: [StandardPolygonComponent]
                },] }
    ];
    return StandardPolygonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolylineModule = /** @class */ (function () {
    function StandardPolylineModule() {
    }
    StandardPolylineModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardPolylineService],
                    declarations: [StandardPolylineComponent],
                    exports: [StandardPolylineComponent]
                },] }
    ];
    return StandardPolylineModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardRectangleModule = /** @class */ (function () {
    function StandardRectangleModule() {
    }
    StandardRectangleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardRectangleService],
                    declarations: [StandardRectangleComponent],
                    exports: [StandardRectangleComponent]
                },] }
    ];
    return StandardRectangleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardDoubleLinkModule = /** @class */ (function () {
    function StandardDoubleLinkModule() {
    }
    StandardDoubleLinkModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardDoubleLinkService],
                    declarations: [StandardDoubleLinkComponent],
                    exports: [StandardDoubleLinkComponent]
                },] }
    ];
    return StandardDoubleLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardLinkModule = /** @class */ (function () {
    function StandardLinkModule() {
    }
    StandardLinkModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [StandardLinkService],
                    declarations: [StandardLinkComponent],
                    exports: [StandardLinkComponent]
                },] }
    ];
    return StandardLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesStandardModule = /** @class */ (function () {
    function ShapesStandardModule() {
    }
    ShapesStandardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [ShapesStandardService],
                    declarations: [ShapesStandardComponent],
                    exports: [ShapesStandardComponent, StandardBorderedImageModule, StandardCircleModule, StandardCylinderModule, StandardEllipseModule, StandardEmbeddedImageModule, StandardHeaderedRectangleModule, StandardImageModule, StandardInscribedImageModule, StandardPathModule, StandardPolygonModule, StandardPolylineModule, StandardRectangleModule, StandardDoubleLinkModule, StandardLinkModule],
                    imports: [StandardBorderedImageModule, StandardCircleModule, StandardCylinderModule, StandardEllipseModule, StandardEmbeddedImageModule, StandardHeaderedRectangleModule, StandardImageModule, StandardInscribedImageModule, StandardPathModule, StandardPolygonModule, StandardPolylineModule, StandardRectangleModule, StandardDoubleLinkModule, StandardLinkModule]
                },] }
    ];
    return ShapesStandardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generic Angular Element Shape
 *
 * Contains extra angular element references for rendering capabilities
 *
 * @abstract
 */
var /**
 * Generic Angular Element Shape
 *
 * Contains extra angular element references for rendering capabilities
 *
 * @abstract
 */
AngularElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AngularElementShape, _super);
    function AngularElementShape(parms) {
        var _this = _super.call(this, { id: parms.id, options: parms.options }) || this;
        parms.options.attrs = {
            rect: { stroke: 'none', 'fill-opacity': 0 }
        };
        return _this;
    }
    return AngularElementShape;
}(DiaElement));
/**
 * Generic Angular Link Shape
 * @abstract
 */
var /**
 * Generic Angular Link Shape
 * @abstract
 */
AngularLinkShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AngularLinkShape, _super);
    function AngularLinkShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AngularLinkShape;
}(DiaLink));
/**
 * Generic Angular Element Shapoe Component
 *
 * Contains Angular specific instances
 *
 * @abstract
 */
var /**
 * Generic Angular Element Shapoe Component
 *
 * Contains Angular specific instances
 *
 * @abstract
 */
GenericAngularElementShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericAngularElementShapeComponent, _super);
    function GenericAngularElementShapeComponent(genericAngularElementService, genericNgElementRef) {
        var _this = _super.call(this, genericAngularElementService) || this;
        _this.genericAngularElementService = genericAngularElementService;
        _this.genericNgElementRef = genericNgElementRef;
        return _this;
    }
    Object.defineProperty(GenericAngularElementShapeComponent.prototype, "ngNode", {
        get: /**
         * @return {?}
         */
        function () { return this.genericNgElementRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    return GenericAngularElementShapeComponent;
}(GenericElementShapeComponent));
/**
 * @abstract
 */
var /**
 * @abstract
 */
GenericAngularLinkShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericAngularLinkShapeComponent, _super);
    function GenericAngularLinkShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GenericAngularLinkShapeComponent;
}(GenericLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// definition of angular content behaviour
/** @type {?} */
var _NODE_NAMES_ = ['BUTTON', 'INPUT', 'SELECT'];
/** @type {?} */
var _CONTENT_STYLE_ = 'pointer-events';
/** @type {?} */
var _STYLE_VALUE_ = 'auto';
/**
 * NgJoint Shapes Angular Service Class
 *
 * \@comment Manages LifeCycle, Events and Bi-Directional Data-Binding Angular Shapes
 */
var ShapesAngularService = /** @class */ (function () {
    function ShapesAngularService(service, rendererFactory) {
        this.service = service;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.initShapePluginComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.initShapePluginComponent(component);
    };
    // set behaviour of html (and angular specific) content within angular element
    // set behaviour of html (and angular specific) content within angular element
    /**
     * @private
     * @param {?} contentNode
     * @return {?}
     */
    ShapesAngularService.prototype._setNgContentStyles = 
    // set behaviour of html (and angular specific) content within angular element
    /**
     * @private
     * @param {?} contentNode
     * @return {?}
     */
    function (contentNode) {
        var _this = this;
        contentNode.childNodes.forEach((/**
         * @param {?} childNode
         * @return {?}
         */
        function (childNode) {
            if (_NODE_NAMES_.find((/**
             * @param {?} nodeName
             * @return {?}
             */
            function (nodeName) { return nodeName === childNode.nodeName; }))) {
                _this.renderer.setStyle(childNode, _CONTENT_STYLE_, _STYLE_VALUE_);
            }
            // process child nodes (until no more)
            if (childNode.hasChildNodes) {
                _this._setNgContentStyles(childNode);
            }
        }));
    };
    // set NgStyle in DIV-container (first child node)
    // set NgStyle in DIV-container (first child node)
    /**
     * @private
     * @param {?} elementNode
     * @param {?} prop
     * @param {?} px
     * @return {?}
     */
    ShapesAngularService.prototype._setNgElPxStyleProp = 
    // set NgStyle in DIV-container (first child node)
    /**
     * @private
     * @param {?} elementNode
     * @param {?} prop
     * @param {?} px
     * @return {?}
     */
    function (elementNode, prop, px) {
        console.log('_setNgElPxStyleProp', elementNode.firstChild);
        this.renderer.setStyle(elementNode.firstChild, prop, px.toString() + 'px');
    };
    // render new angular element BBOX position
    // render new angular element BBOX position
    /**
     * @private
     * @param {?} elementNode
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    ShapesAngularService.prototype._positionNgElement = 
    // render new angular element BBOX position
    /**
     * @private
     * @param {?} elementNode
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (elementNode, x, y) {
        this._setNgElPxStyleProp(elementNode, 'left', x);
        this._setNgElPxStyleProp(elementNode, 'top', y);
    };
    // render new angular element BBOX position
    // render new angular element BBOX position
    /**
     * @private
     * @param {?} elementNode
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ShapesAngularService.prototype._sizeNgElement = 
    // render new angular element BBOX position
    /**
     * @private
     * @param {?} elementNode
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (elementNode, width, height) {
        this._setNgElPxStyleProp(elementNode, 'width', width);
        this._setNgElPxStyleProp(elementNode, 'height', height);
    };
    // initialize initial component position and size
    // initialize initial component position and size
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype._initComponent = 
    // initialize initial component position and size
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this._positionNgElement(component.ngNode, component.x, component.y);
        this._sizeNgElement(component.ngNode, component.width, component.height);
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype._positionComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        /** @type {?} */
        var xShapeElement = shape.jointjsObject.getBBox().x;
        /** @type {?} */
        var yShapeElement = shape.jointjsObject.getBBox().y;
        /** @type {?} */
        var xChangeDetected = (component.x !== xShapeElement);
        /** @type {?} */
        var yChangedDetected = (component.y !== yShapeElement);
        if (xChangeDetected || yChangedDetected) {
            this._positionNgElement(component.ngNode, xShapeElement, yShapeElement);
        }
        if (xChangeDetected) {
            component.x = xShapeElement;
        }
        if (yChangedDetected) {
            component.y = yShapeElement;
        }
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype._resizeComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        /** @type {?} */
        var widthShapeElement = shape.jointjsObject.getBBox().width;
        /** @type {?} */
        var heightShapeElement = shape.jointjsObject.getBBox().height;
        /** @type {?} */
        var widthChangeDetected = (component.width !== widthShapeElement);
        /** @type {?} */
        var heightChangedDetected = (component.height !== heightShapeElement);
        if (widthChangeDetected || heightChangedDetected) {
            this._sizeNgElement(component.ngNode, widthShapeElement, heightShapeElement);
        }
        if (widthChangeDetected) {
            component.width = widthShapeElement;
        }
        if (heightChangedDetected) {
            component.height = heightShapeElement;
        }
    };
    // Bi-Directional processing of changes (moving and resizing jointjs and angular BOX in sync)
    // Bi-Directional processing of changes (moving and resizing jointjs and angular BOX in sync)
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.setElementChanges = 
    // Bi-Directional processing of changes (moving and resizing jointjs and angular BOX in sync)
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var bbox = shape.jointjsObject.getBBox();
        // detect position change
        /** @type {?} */
        var positionChangeDetected = false;
        if (changes.x) {
            positionChangeDetected = (changes.x.currentValue !== bbox.x);
        }
        else if (changes.y) {
            positionChangeDetected = (changes.y.currentValue !== bbox.y);
        }
        // detect size change
        /** @type {?} */
        var sizeChangeDetected = false;
        if (changes.width) {
            sizeChangeDetected = (changes.width.currentValue !== bbox.width);
        }
        else if (changes.height) {
            sizeChangeDetected = (changes.height.currentValue !== bbox.height);
        }
        // process detected changes
        if (positionChangeDetected) {
            shape.jointjsObject.position(component.x, component.y);
            this._positionNgElement(component.ngNode, component.x, component.y);
        }
        if (sizeChangeDetected) {
            shape.jointjsObject.resize(component.width, component.height);
            this._sizeNgElement(component.ngNode, component.width, component.height);
        }
    };
    // Change Handler to move/resize angular element DIV-container
    // Change Handler to move/resize angular element DIV-container
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.onElementEvents = 
    // Change Handler to move/resize angular element DIV-container
    /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var _this = this;
        this._initComponent(component);
        component.shapeInstance.jointjsObject
            .on('change:position', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            _this._positionComponent(component);
        }))
            .on('change:size', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            _this._resizeComponent(component);
        }));
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.elementShapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.configElementShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.graphInstance.addElement(component.shapeInstance);
        this._setNgContentStyles(component.ngNode);
    };
    ShapesAngularService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesAngularService.ctorParameters = function () { return [
        { type: ShapesService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"] }
    ]; };
    /** @nocollapse */ ShapesAngularService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ShapesAngularService_Factory() { return new ShapesAngularService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"])); }, token: ShapesAngularService, providedIn: "root" });
    return ShapesAngularService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Angular Element Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Angular Element Class
 */
AngularElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AngularElement, _super);
    function AngularElement(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].basic.Rect(options);
        return _this;
    }
    return AngularElement;
}(AngularElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularElementService = /** @class */ (function () {
    function AngularElementService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    AngularElementService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new AngularElement(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    AngularElementService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularElementService.ctorParameters = function () { return [
        { type: ShapesAngularService }
    ]; };
    /** @nocollapse */ AngularElementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function AngularElementService_Factory() { return new AngularElementService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesAngularService)); }, token: AngularElementService, providedIn: "root" });
    return AngularElementService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularElementComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AngularElementComponent, _super);
    // no additional inputs
    function AngularElementComponent(elementService, ngElementRef) {
        var _this = _super.call(this, elementService, ngElementRef) || this;
        _this.elementService = elementService;
        _this.ngElementRef = ngElementRef;
        return _this;
    }
    AngularElementComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-angular-element',
                    template: "\n    <div class=\"angular-element\">\n      <ng-content></ng-content>\n    </div>\n    <!-- joint.shapes.angular.Element  -->\n  ",
                    styles: ["\n   .angular-element {\n     pointer-events: none;\n     -moz-user-select: none;\n     -ms-user-select: none;\n     user-select: none;\n     -webkit-user-select: none;\n     position: absolute;\n     z-index: 2\n   }\n  "]
                }] }
    ];
    /** @nocollapse */
    AngularElementComponent.ctorParameters = function () { return [
        { type: AngularElementService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    return AngularElementComponent;
}(GenericAngularElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesAngularComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShapesAngularComponent, _super);
    function ShapesAngularComponent(shapesAngularService) {
        var _this = _super.call(this, shapesAngularService) || this;
        _this.shapesAngularService = shapesAngularService;
        return _this;
    }
    ShapesAngularComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-shapes-angular',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesAngularComponent.ctorParameters = function () { return [
        { type: ShapesAngularService }
    ]; };
    ShapesAngularComponent.propDecorators = {
        angularElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [AngularElementComponent,] }]
    };
    return ShapesAngularComponent;
}(GenericShapePluginComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularElementModule = /** @class */ (function () {
    function AngularElementModule() {
    }
    AngularElementModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [AngularElementService],
                    declarations: [AngularElementComponent],
                    exports: [AngularElementComponent]
                },] }
    ];
    return AngularElementModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesAngularModule = /** @class */ (function () {
    function ShapesAngularModule() {
    }
    ShapesAngularModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [ShapesAngularService],
                    declarations: [ShapesAngularComponent],
                    exports: [ShapesAngularComponent, AngularElementModule],
                    imports: [AngularElementModule]
                },] }
    ];
    return ShapesAngularModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
UmlElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlElementShape, _super);
    function UmlElementShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UmlElementShape;
}(DiaElement));
/**
 * @abstract
 */
var /**
 * @abstract
 */
UmlLinkShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlLinkShape, _super);
    function UmlLinkShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UmlLinkShape;
}(DiaLink));
/**
 * @abstract
 */
var GenericUmlElementShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericUmlElementShapeComponent, _super);
    function GenericUmlElementShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericUmlElementShapeComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        attributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        methods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        attrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return GenericUmlElementShapeComponent;
}(GenericElementShapeComponent));
/**
 * @abstract
 */
var /**
 * @abstract
 */
GenericUmlLinkShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericUmlLinkShapeComponent, _super);
    function GenericUmlLinkShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GenericUmlLinkShapeComponent;
}(GenericLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlService = /** @class */ (function () {
    function ShapesUmlService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.initShapePluginComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.initShapePluginComponent(component);
    };
    /**
     * @private
     * @param {?=} stringArray
     * @return {?}
     */
    ShapesUmlService.prototype._formatUndefinedStringArray = /**
     * @private
     * @param {?=} stringArray
     * @return {?}
     */
    function (stringArray) {
        if (stringArray) {
            return stringArray;
        }
        else {
            return [];
        }
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    ShapesUmlService.prototype._formatName = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (typeof name === 'string') {
            return [name];
        }
        else {
            return name;
        }
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.elementShapeOptions = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return {
            position: { x: component.x, y: component.y },
            size: { width: component.width, height: component.height },
            name: this._formatName(component.name),
            attributes: this._formatUndefinedStringArray(component.attributes),
            methods: this._formatUndefinedStringArray(component.methods),
            attrs: component.attrs
        };
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.configElementShape = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.graphInstance.addElement(component.shapeInstance);
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.linkShapeOptions = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return undefined;
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.configLinkShape = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.graphInstance.addLink(component.shapeInstance);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.onElementEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.onLinkEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.setElementChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.setLinkChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    ShapesUmlService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesUmlService.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    /** @nocollapse */ ShapesUmlService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ShapesUmlService_Factory() { return new ShapesUmlService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesService)); }, token: ShapesUmlService, providedIn: "root" });
    return ShapesUmlService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Implementation Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Implementation Class
 */
UmlImplementation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlImplementation, _super);
    function UmlImplementation(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Implementation(options);
        return _this;
    }
    return UmlImplementation;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementationService = /** @class */ (function () {
    function UmlImplementationService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    UmlImplementationService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new UmlImplementation(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    UmlImplementationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlImplementationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlImplementationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlImplementationService_Factory() { return new UmlImplementationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlImplementationService, providedIn: "root" });
    return UmlImplementationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlImplementationComponent, _super);
    // no additional inputs
    function UmlImplementationComponent(implementationService) {
        var _this = _super.call(this, implementationService) || this;
        _this.implementationService = implementationService;
        return _this;
    }
    UmlImplementationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-uml-implementation',
                    template: "\n    <!-- joint.shapes.uml.Implementation  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlImplementationComponent.ctorParameters = function () { return [
        { type: UmlImplementationService }
    ]; };
    return UmlImplementationComponent;
}(GenericUmlLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Generalization Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Generalization Class
 */
UmlGeneralization = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlGeneralization, _super);
    function UmlGeneralization(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Generalization(options);
        return _this;
    }
    return UmlGeneralization;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralizationService = /** @class */ (function () {
    function UmlGeneralizationService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    UmlGeneralizationService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new UmlGeneralization(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    UmlGeneralizationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlGeneralizationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlGeneralizationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlGeneralizationService_Factory() { return new UmlGeneralizationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlGeneralizationService, providedIn: "root" });
    return UmlGeneralizationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralizationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlGeneralizationComponent, _super);
    // no additional inputs
    function UmlGeneralizationComponent(generalizationService) {
        var _this = _super.call(this, generalizationService) || this;
        _this.generalizationService = generalizationService;
        return _this;
    }
    UmlGeneralizationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-uml-generalization',
                    template: "\n    <!-- joint.shapes.uml.Generalization  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlGeneralizationComponent.ctorParameters = function () { return [
        { type: UmlGeneralizationService }
    ]; };
    return UmlGeneralizationComponent;
}(GenericUmlLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Composition Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Composition Class
 */
UmlComposition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlComposition, _super);
    function UmlComposition(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Composition(options);
        return _this;
    }
    return UmlComposition;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlCompositionService = /** @class */ (function () {
    function UmlCompositionService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    UmlCompositionService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new UmlComposition(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    UmlCompositionService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlCompositionService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlCompositionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlCompositionService_Factory() { return new UmlCompositionService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlCompositionService, providedIn: "root" });
    return UmlCompositionService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlCompositionComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlCompositionComponent, _super);
    // no additional inputs
    function UmlCompositionComponent(compositionService) {
        var _this = _super.call(this, compositionService) || this;
        _this.compositionService = compositionService;
        return _this;
    }
    UmlCompositionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-uml-composition',
                    template: "\n    <!-- joint.shapes.uml.Composition  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlCompositionComponent.ctorParameters = function () { return [
        { type: UmlCompositionService }
    ]; };
    return UmlCompositionComponent;
}(GenericUmlLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Aggregation Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Aggregation Class
 */
UmlAggregation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlAggregation, _super);
    function UmlAggregation(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Aggregation(options);
        return _this;
    }
    return UmlAggregation;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregationService = /** @class */ (function () {
    function UmlAggregationService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    UmlAggregationService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new UmlAggregation(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    UmlAggregationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlAggregationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlAggregationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlAggregationService_Factory() { return new UmlAggregationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlAggregationService, providedIn: "root" });
    return UmlAggregationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlAggregationComponent, _super);
    // no additional inputs
    function UmlAggregationComponent(aggregationService) {
        var _this = _super.call(this, aggregationService) || this;
        _this.aggregationService = aggregationService;
        return _this;
    }
    UmlAggregationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-uml-aggregation',
                    template: "\n    <!-- joint.shapes.uml.Aggregation  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlAggregationComponent.ctorParameters = function () { return [
        { type: UmlAggregationService }
    ]; };
    return UmlAggregationComponent;
}(GenericUmlLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Interface Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Interface Class
 */
UmlInterface = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlInterface, _super);
    function UmlInterface(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Interface(options);
        return _this;
    }
    return UmlInterface;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlInterfaceService = /** @class */ (function () {
    function UmlInterfaceService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    UmlInterfaceService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new UmlInterface(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    UmlInterfaceService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlInterfaceService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlInterfaceService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlInterfaceService_Factory() { return new UmlInterfaceService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlInterfaceService, providedIn: "root" });
    return UmlInterfaceService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlInterfaceComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlInterfaceComponent, _super);
    // no additional inputs
    function UmlInterfaceComponent(interfaceService) {
        var _this = _super.call(this, interfaceService) || this;
        _this.interfaceService = interfaceService;
        return _this;
    }
    UmlInterfaceComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-uml-interface',
                    template: "\n    <!-- joint.shapes.uml.Interface  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlInterfaceComponent.ctorParameters = function () { return [
        { type: UmlInterfaceService }
    ]; };
    return UmlInterfaceComponent;
}(GenericUmlElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Class Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Class Class
 */
UmlClass = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlClass, _super);
    function UmlClass(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Class(options);
        return _this;
    }
    return UmlClass;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlClassService = /** @class */ (function () {
    function UmlClassService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    UmlClassService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new UmlClass(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    UmlClassService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlClassService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlClassService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlClassService_Factory() { return new UmlClassService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlClassService, providedIn: "root" });
    return UmlClassService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlClassComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlClassComponent, _super);
    // no additional inputs
    function UmlClassComponent(classService) {
        var _this = _super.call(this, classService) || this;
        _this.classService = classService;
        return _this;
    }
    UmlClassComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-uml-class',
                    template: "\n    <!-- joint.shapes.uml.Class  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlClassComponent.ctorParameters = function () { return [
        { type: UmlClassService }
    ]; };
    return UmlClassComponent;
}(GenericUmlElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Abstract Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Abstract Class
 */
UmlAbstract = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlAbstract, _super);
    function UmlAbstract(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Abstract(options);
        return _this;
    }
    return UmlAbstract;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAbstractService = /** @class */ (function () {
    function UmlAbstractService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    UmlAbstractService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new UmlAbstract(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    UmlAbstractService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlAbstractService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlAbstractService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlAbstractService_Factory() { return new UmlAbstractService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlAbstractService, providedIn: "root" });
    return UmlAbstractService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAbstractComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlAbstractComponent, _super);
    // no additional inputs
    function UmlAbstractComponent(abstractService) {
        var _this = _super.call(this, abstractService) || this;
        _this.abstractService = abstractService;
        return _this;
    }
    UmlAbstractComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-uml-abstract',
                    template: "\n    <!-- joint.shapes.uml.Abstract  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlAbstractComponent.ctorParameters = function () { return [
        { type: UmlAbstractService }
    ]; };
    return UmlAbstractComponent;
}(GenericUmlElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShapesUmlComponent, _super);
    function ShapesUmlComponent(shapesUmlService) {
        var _this = _super.call(this, shapesUmlService) || this;
        _this.shapesUmlService = shapesUmlService;
        return _this;
    }
    ShapesUmlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-shapes-uml',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesUmlComponent.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    ShapesUmlComponent.propDecorators = {
        umlAbstracts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlAbstractComponent,] }],
        umlClasss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlClassComponent,] }],
        umlInterfaces: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlInterfaceComponent,] }],
        umlAggregations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlAggregationComponent,] }],
        umlCompositions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlCompositionComponent,] }],
        umlGeneralizations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlGeneralizationComponent,] }],
        umlImplementations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlImplementationComponent,] }]
    };
    return ShapesUmlComponent;
}(GenericShapePluginComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAbstractModule = /** @class */ (function () {
    function UmlAbstractModule() {
    }
    UmlAbstractModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [UmlAbstractService],
                    declarations: [UmlAbstractComponent],
                    exports: [UmlAbstractComponent]
                },] }
    ];
    return UmlAbstractModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlClassModule = /** @class */ (function () {
    function UmlClassModule() {
    }
    UmlClassModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [UmlClassService],
                    declarations: [UmlClassComponent],
                    exports: [UmlClassComponent]
                },] }
    ];
    return UmlClassModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlInterfaceModule = /** @class */ (function () {
    function UmlInterfaceModule() {
    }
    UmlInterfaceModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [UmlInterfaceService],
                    declarations: [UmlInterfaceComponent],
                    exports: [UmlInterfaceComponent]
                },] }
    ];
    return UmlInterfaceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregationModule = /** @class */ (function () {
    function UmlAggregationModule() {
    }
    UmlAggregationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [UmlAggregationService],
                    declarations: [UmlAggregationComponent],
                    exports: [UmlAggregationComponent]
                },] }
    ];
    return UmlAggregationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlCompositionModule = /** @class */ (function () {
    function UmlCompositionModule() {
    }
    UmlCompositionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [UmlCompositionService],
                    declarations: [UmlCompositionComponent],
                    exports: [UmlCompositionComponent]
                },] }
    ];
    return UmlCompositionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralizationModule = /** @class */ (function () {
    function UmlGeneralizationModule() {
    }
    UmlGeneralizationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [UmlGeneralizationService],
                    declarations: [UmlGeneralizationComponent],
                    exports: [UmlGeneralizationComponent]
                },] }
    ];
    return UmlGeneralizationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementationModule = /** @class */ (function () {
    function UmlImplementationModule() {
    }
    UmlImplementationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [UmlImplementationService],
                    declarations: [UmlImplementationComponent],
                    exports: [UmlImplementationComponent]
                },] }
    ];
    return UmlImplementationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlModule = /** @class */ (function () {
    function ShapesUmlModule() {
    }
    ShapesUmlModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [ShapesUmlService],
                    declarations: [ShapesUmlComponent],
                    exports: [ShapesUmlComponent, UmlAbstractModule, UmlClassModule, UmlInterfaceModule, UmlAggregationModule, UmlCompositionModule, UmlGeneralizationModule, UmlImplementationModule],
                    imports: [UmlAbstractModule, UmlClassModule, UmlInterfaceModule, UmlAggregationModule, UmlCompositionModule, UmlGeneralizationModule, UmlImplementationModule]
                },] }
    ];
    return ShapesUmlModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Shapes Component
 *
 * Container for ShapePlugin's within DiaGraphElement (ng-joint-dia-graph)
 *
 */
var ShapesComponent = /** @class */ (function () {
    function ShapesComponent(service) {
        this.service = service;
    }
    Object.defineProperty(ShapesComponent.prototype, "graphInstance", {
        /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and activate declared Plugin Shapes
         */
        set: /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and activate declared Plugin Shapes
         * @param {?} graphInstance
         * @return {?}
         */
        function (graphInstance) {
            this._graphInstance = graphInstance;
            this.service.activateShapePlugins([
                this.shapesStandard,
                this.shapesAngular,
                this.shapesUml
            ], this._graphInstance);
        },
        enumerable: true,
        configurable: true
    });
    ShapesComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-shapes',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesComponent.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    ShapesComponent.propDecorators = {
        shapesStandard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [ShapesStandardComponent,] }],
        shapesAngular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [ShapesAngularComponent,] }],
        shapesUml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [ShapesUmlComponent,] }]
    };
    return ShapesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * JointNg Graph Class
 */
var /**
 * JointNg Graph Class
 */
DiaGraph = /** @class */ (function () {
    /** @ignore */
    function DiaGraph() {
        /**
         * jointjs internal events subjects
         */
        this.jointEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["dia"].Graph();
    }
    Object.defineProperty(DiaGraph.prototype, "jointjsObject", {
        /** jointjs graph object instance */
        get: /**
         * jointjs graph object instance
         * @return {?}
         */
        function () {
            return this._jointjsObject;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    DiaGraph.prototype.addElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.jointjsObject.addTo(this._jointjsObject);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    DiaGraph.prototype.addLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        link.jointjsObject.addTo(this._jointjsObject);
    };
    return DiaGraph;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaGraphService = /** @class */ (function () {
    function DiaGraphService() {
    }
    /**
     * @return {?}
     */
    DiaGraphService.prototype.createGraph = /**
     * @return {?}
     */
    function () {
        return new DiaGraph();
    };
    /**
     * handling jointjs.dia.Graph events on Angular Component HTML-template
     */
    /**
     * handling jointjs.dia.Graph events on Angular Component HTML-template
     * @param {?} component
     * @return {?}
     */
    DiaGraphService.prototype.onEvents = /**
     * handling jointjs.dia.Graph events on Angular Component HTML-template
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.graphInstance.jointjsObject
            .on('change', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { return component.anyChange.emit(context); }))
            .on('add', (/**
         * @param {?} cell
         * @return {?}
         */
        function (cell) { return component.cellAdd.emit(cell.cid); }))
            .on('remove', (/**
         * @param {?} cell
         * @return {?}
         */
        function (cell) { return component.cellRemove.emit(cell.cid); }));
    };
    DiaGraphService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DiaGraphService.ctorParameters = function () { return []; };
    /** @nocollapse */ DiaGraphService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DiaGraphService_Factory() { return new DiaGraphService(); }, token: DiaGraphService, providedIn: "root" });
    return DiaGraphService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Dia Graph Component
 *
 * Creates DiaGraphElement (ng-joint-dia-paper) instance within a DiaPaperElement (ng-joint-dia-paper)
 *
 */
var DiaGraphComponent = /** @class */ (function () {
    function DiaGraphComponent(service) {
        this.service = service;
        /**
         * jointjs.dia.Graph event (change)
         */
        this.anyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * jointjs.dia.Graph event (add)
         */
        this.cellAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * jointjs.dia.Graph event (remove)
         */
        this.cellRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.graphInstance = this.service.createGraph();
        this.service.onEvents(this);
    }
    /**
     * Trigger to add the Shapes to the Graph Instance
     */
    /**
     * Trigger to add the Shapes to the Graph Instance
     * @return {?}
     */
    DiaGraphComponent.prototype.addShapes = /**
     * Trigger to add the Shapes to the Graph Instance
     * @return {?}
     */
    function () {
        this.shapes.graphInstance = this.graphInstance;
    };
    DiaGraphComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-dia-graph',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    DiaGraphComponent.ctorParameters = function () { return [
        { type: DiaGraphService }
    ]; };
    DiaGraphComponent.propDecorators = {
        shapes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [ShapesComponent,] }],
        anyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        cellAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        cellRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    return DiaGraphComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Dia Graph Component
 *
 * Creates DiaPaperElement (ng-joint-dia-paper)
 *
 * \@example
 *
 * <ng-joint-dia-paper
 *  [width]="800"
 *  [height]="600"
 *  [gridSize]="2"
 *  [drawGrid]="true">
 *
 * </ng-joint-dia-paper>
 *
 */
var DiaPaperComponent = /** @class */ (function () {
    function DiaPaperComponent(service, el) {
        this.service = service;
        this.el = el;
    }
    /**
     * @return {?}
     */
    DiaPaperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // work around (for problem 1st call ngAfterContentInit attributes are not initialized!)
        if (this.graph) {
            // console.log('offsetParent', this.el.nativeElement.offsetParent);
            this._createPaper();
        }
    };
    /**
     * @private
     * @return {?}
     */
    DiaPaperComponent.prototype._createPaper = /**
     * @private
     * @return {?}
     */
    function () {
        // console.log('graph', this.graph);
        this.paperInstance = this.service.createPaper({
            width: this.width,
            height: this.height,
            gridSize: this.gridSize,
            drawGrid: this.drawGrid,
            model: this.graph.graphInstance.jointjsObject,
            el: this.diaPaperElRef.nativeElement
        });
        // console.log('paperInstance', this.paperInstance);
        this.graph.addShapes();
        this.service.onEvents(this);
    };
    DiaPaperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-dia-paper',
                    template: "<ng-content></ng-content>\n<div #dgwnudiapaper></div>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
                }] }
    ];
    /** @nocollapse */
    DiaPaperComponent.ctorParameters = function () { return [
        { type: DiaPaperService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    DiaPaperComponent.propDecorators = {
        diaPaperElRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dgwnudiapaper',] }],
        graph: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [DiaGraphComponent,] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        gridSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        drawGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return DiaPaperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaPaperModule = /** @class */ (function () {
    function DiaPaperModule() {
    }
    DiaPaperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [DiaPaperService],
                    declarations: [DiaPaperComponent],
                    imports: [],
                    exports: [DiaPaperComponent]
                },] }
    ];
    return DiaPaperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaGraphModule = /** @class */ (function () {
    function DiaGraphModule() {
    }
    DiaGraphModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [DiaGraphService],
                    declarations: [DiaGraphComponent],
                    imports: [],
                    exports: [DiaGraphComponent]
                },] }
    ];
    return DiaGraphModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesModule = /** @class */ (function () {
    function ShapesModule() {
    }
    ShapesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [ShapesService],
                    declarations: [ShapesComponent],
                    exports: [ShapesComponent]
                },] }
    ];
    return ShapesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaModule = /** @class */ (function () {
    function DiaModule() {
    }
    DiaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [DiaPaperModule, DiaGraphModule, DiaElementModule, DiaLinkModule],
                    exports: [DiaPaperModule, DiaGraphModule, DiaElementModule, DiaLinkModule],
                },] }
    ];
    return DiaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgJointModule = /** @class */ (function () {
    function NgJointModule() {
    }
    NgJointModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    providers: [NgJointService],
                    imports: [DiaModule, ShapesModule],
                    exports: [DiaModule, ShapesModule]
                },] }
    ];
    return NgJointModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=dgwnu-ng-joint.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-generic.service.ts":
/*!****************************************!*\
  !*** ./src/app/app-generic.service.ts ***!
  \****************************************/
/*! exports provided: AppGenericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGenericService", function() { return AppGenericService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppGenericService = /** @class */ (function () {
    function AppGenericService() {
        this.mainTitle = 'ng-joint';
        this.subTitle = '<<not initialzied>>';
    }
    AppGenericService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppGenericService);
    return AppGenericService;
}());



/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var matModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
];
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [matModules],
            exports: [matModules]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.component */ "./src/app/overview.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");





var appRoutes = [
    { path: '', component: _overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    {{service.mainTitle}} {{service.subTitle}} \n</mat-toolbar>\n\n<div fxLayout=\"row\">\n\n    <mat-card class=\"menu-card\">\n        <mat-card-content>\n\n            <mat-accordion>\n\n                <mat-expansion-panel *ngFor=\"let menuOption of menuOptions\"\n                    (afterCollapse)=\"onOverview(menuOption)\"\n                    (afterExpand)=\"onOverview(menuOption)\"\n                >\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            {{menuOption.title}}\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            ({{menuOption.description}})\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n\n                    <mat-action-row *ngFor=\"let child of menuOption.childs\">\n                        <a mat-button routerLink=\"/{{menuOption.path}}/{{child.path}}\">\n                            {{child.title}}\n                        </a>\n                    </mat-action-row>\n\n                </mat-expansion-panel>\n\n            </mat-accordion>\n\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class=\"main-card\" fxFlex>\n        <mat-card-content *ngIf=\"initialized\">\n            <router-outlet></router-outlet>\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/*! JointJS v2.2.1 (2018-11-12) - JavaScript diagramming library\n\n\nThis Source Code Form is subject to the terms of the Mozilla Public\nLicense, v. 2.0. If a copy of the MPL was not distributed with this\nfile, You can obtain one at http://mozilla.org/MPL/2.0/.\n*/\n/*\nA complete list of SVG properties that can be set through CSS is here:\nhttp://www.w3.org/TR/SVG/styling.html\n\nImportant note: Presentation attributes have a lower precedence over CSS style rules.\n*/\n/* .viewport is a <g> node wrapping all diagram elements in the paper */\n.joint-viewport {\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n.joint-paper > svg,\n.joint-paper-background,\n.joint-paper-grid {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*\n1. IE can't handle paths without the `d` attribute for bounding box calculation\n2. IE can't even handle 'd' attribute as a css selector (e.g path[d]) so the following rule will\n   break the links rendering.\n\npath:not([d]) {\n    display: none;\n}\n\n*/\n/* magnet is an element that can be either source or a target of a link */\n[magnet=true]:not(.joint-element) {\n   cursor: crosshair;\n}\n[magnet=true]:not(.joint-element):hover {\n   opacity: .7;\n}\n/*\n\nElements have CSS classes named by their types. E.g. type: basic.Rect has a CSS class \"element basic Rect\".\nThis makes it possible to easilly style elements in CSS and have generic CSS rules applying to\nthe whole group of elements. Each plugin can provide its own stylesheet.\n\n*/\n.joint-element {\n   /* Give the user a hint that he can drag&drop the element. */\n   cursor: move;\n}\n.joint-element * {\n   user-drag: none;\n}\n.joint-element .scalable * {\n   /* The default behavior when scaling an element is not to scale the stroke in order to prevent the ugly effect of stroke with different proportions. */\n   vector-effect: non-scaling-stroke;\n}\n/*\n\nconnection-wrap is a <path> element of the joint.dia.Link that follows the .connection <path> of that link.\nIn other words, the `d` attribute of the .connection-wrap contains the same data as the `d` attribute of the\n.connection <path>. The advantage of using .connection-wrap is to be able to catch pointer events\nin the neighborhood of the .connection <path>. This is especially handy if the .connection <path> is\nvery thin.\n\n*/\n.marker-source,\n.marker-target {\n   /* This makes the arrowheads point to the border of objects even though the transform: scale() is applied on them. */\n   vector-effect: non-scaling-stroke;\n}\n/* Paper */\n.joint-paper {\n    position: relative;\n}\n/* Paper */\n/*  Highlighting  */\n.joint-highlight-opacity {\n    opacity: 0.3;\n}\n/*  Highlighting  */\n/*\n\nVertex markers are `<circle>` elements that appear at connection vertex positions.\n\n*/\n.joint-link .connection-wrap,\n.joint-link .connection {\n   fill: none;\n}\n/* <g> element wrapping .marker-vertex-group. */\n.marker-vertices {\n   opacity: 0;\n   cursor: move;\n}\n.marker-arrowheads {\n   opacity: 0;\n   cursor: move;\n   cursor: -webkit-grab;\n   cursor: -moz-grab;\n/*   display: none;   */   /* setting `display: none` on .marker-arrowheads effectivelly switches of links reconnecting */\n}\n.link-tools {\n   opacity: 0;\n   cursor: pointer;\n}\n.link-tools .tool-options {\n   display: none;       /* by default, we don't display link options tool */\n}\n.joint-link:hover .marker-vertices,\n.joint-link:hover .marker-arrowheads,\n.joint-link:hover .link-tools {\n   opacity: 1;\n}\n/* <circle> element used to remove a vertex */\n.marker-vertex-remove {\n   cursor: pointer;\n   opacity: .1;\n}\n.marker-vertex-group:hover .marker-vertex-remove {\n   opacity: 1;\n}\n.marker-vertex-remove-area {\n   opacity: .1;\n   cursor: pointer;\n}\n.marker-vertex-group:hover .marker-vertex-remove-area {\n   opacity: 1;\n}\n/*\nExample of custom changes (in pure CSS only!):\n\nDo not show marker vertices at all:  .marker-vertices { display: none; }\nDo not allow adding new vertices: .connection-wrap { pointer-events: none; }\n*/\n/* foreignObject inside the elements (i.e joint.shapes.basic.TextBlock) */\n.joint-element .fobj {\n    overflow: hidden;\n}\n.joint-element .fobj body {\n    background-color: transparent;\n    margin: 0px;\n    position: static;\n}\n.joint-element .fobj div {\n    text-align: center;\n    vertical-align: middle;\n    display: table-cell;\n    padding: 0px 5px 0px 5px;\n}\n/* Paper */\n.joint-paper.joint-theme-dark {\n    background-color: #18191b;\n}\n/* Paper */\n/*  Links  */\n.joint-link.joint-theme-dark .connection-wrap {\n    stroke: #8F8FF3;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-dark .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-dark .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-dark .link-tools .tool-remove circle {\n    fill: #F33636;\n}\n.joint-link.joint-theme-dark .link-tools .tool-remove path {\n    fill: white;\n}\n.joint-link.joint-theme-dark .link-tools [event=\"link:options\"] circle {\n    fill: green;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-dark .marker-vertex {\n    fill: #5652DB;\n}\n.joint-link.joint-theme-dark .marker-vertex:hover {\n    fill: #8E8CE1;\n    stroke: none;\n}\n.joint-link.joint-theme-dark .marker-arrowhead {\n    fill: #5652DB;\n}\n.joint-link.joint-theme-dark .marker-arrowhead:hover {\n    fill: #8E8CE1;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-dark .marker-vertex-remove-area {\n    fill: green;\n    stroke: darkgreen;\n}\n.joint-link.joint-theme-dark .marker-vertex-remove {\n    fill: white;\n    stroke: white;\n}\n/*  Links  */\n/* Paper */\n.joint-paper.joint-theme-default {\n    background-color: #FFFFFF;\n}\n/* Paper */\n/*  Links  */\n.joint-link.joint-theme-default .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-default .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-default .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-default .link-tools .tool-remove circle {\n    fill: #FF0000;\n}\n.joint-link.joint-theme-default .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-default .marker-vertex {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-default .marker-vertex:hover {\n    fill: #34495E;\n    stroke: none;\n}\n.joint-link.joint-theme-default .marker-arrowhead {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-default .marker-arrowhead:hover {\n    fill: #F39C12;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-default .marker-vertex-remove {\n    fill: #FFFFFF;\n}\n/*  Links  */\n@font-face {\n    font-family: 'lato-light';\n    src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n/*  Links  */\n.joint-link.joint-theme-material .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-material .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-material .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-material .link-tools .tool-remove circle {\n    fill: #C64242;\n}\n.joint-link.joint-theme-material .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-material .marker-vertex {\n    fill: #d0d8e8;\n}\n.joint-link.joint-theme-material .marker-vertex:hover {\n    fill: #5fa9ee;\n    stroke: none;\n}\n.joint-link.joint-theme-material .marker-arrowhead {\n    fill: #d0d8e8;\n}\n.joint-link.joint-theme-material .marker-arrowhead:hover {\n    fill: #5fa9ee;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-material .marker-vertex-remove-area {\n    fill: #5fa9ee;\n}\n.joint-link.joint-theme-material .marker-vertex-remove {\n    fill: white;\n}\n/*  Links  */\n/*  Links  */\n.joint-link.joint-theme-modern .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-modern .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-modern .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-modern .link-tools .tool-remove circle {\n    fill: #FF0000;\n}\n.joint-link.joint-theme-modern .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-modern .marker-vertex {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-modern .marker-vertex:hover {\n    fill: #34495E;\n    stroke: none;\n}\n.joint-link.joint-theme-modern .marker-arrowhead {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-modern .marker-arrowhead:hover {\n    fill: #F39C12;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-modern .marker-vertex-remove {\n    fill: white;\n}\n/*  Links  */\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-badge-small .mat-badge-content {\n  font-size: 6px; }\n.mat-badge-large .mat-badge-content {\n  font-size: 24px; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-bottom-sheet-container {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 500; }\n.mat-card-header .mat-card-title {\n  font-size: 20px; }\n.mat-card-subtitle,\n.mat-card-content {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell, .mat-footer-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.34375em) scale(0.75);\n          transform: translateY(-1.34375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.34374em) scale(0.75);\n          transform: translateY(-1.34374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.34375em; }\n.mat-form-field-underline {\n  bottom: 1.34375em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.66666667em;\n  top: calc(100% - 1.79166667em); }\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n    -webkit-transform: translateY(-1.28122em) scale(0.75);\n            transform: translateY(-1.28122em) scale(0.75); }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n    -webkit-transform: translateY(-1.28121em) scale(0.75);\n            transform: translateY(-1.28121em) scale(0.75); }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n    -webkit-transform: translateY(-1.2812em) scale(0.75);\n            transform: translateY(-1.2812em) scale(0.75); } }\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0; }\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em; }\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-0.59375em) scale(0.75);\n          transform: translateY(-0.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-0.59374em) scale(0.75);\n          transform: translateY(-0.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0; }\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em; }\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.59375em) scale(0.75);\n          transform: translateY(-1.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.59374em) scale(0.75);\n          transform: translateY(-1.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-sub-label-error {\n  font-weight: normal; }\n.mat-step-label-error {\n  font-size: 14px; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-base .mat-list-item {\n  font-size: 16px; }\n.mat-list-base .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list-base .mat-list-option {\n  font-size: 16px; }\n.mat-list-base .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list-base .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list-base[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list-base[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list-base[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list-base[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list-base[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tree-node,\n.mat-nested-tree-node {\n  font-weight: 400;\n  font-size: 14px; }\n.mat-ripple {\n  overflow: hidden;\n  position: relative; }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n@media (-ms-high-contrast: active) {\n    .mat-ripple-element {\n      display: none; } }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n@media screen and (-ms-high-contrast: active) {\n      .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n        opacity: 0.6; } }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.32); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n@-webkit-keyframes cdk-text-field-autofill-start {\n  /*!*/ }\n@keyframes cdk-text-field-autofill-start {\n  /*!*/ }\n@-webkit-keyframes cdk-text-field-autofill-end {\n  /*!*/ }\n@keyframes cdk-text-field-autofill-end {\n  /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation-name: cdk-text-field-autofill-start;\n          animation-name: cdk-text-field-autofill-start; }\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation-name: cdk-text-field-autofill-end;\n          animation-name: cdk-text-field-autofill-end; }\ntextarea.cdk-textarea-autosize {\n  resize: none; }\ntextarea.cdk-textarea-autosize-measuring {\n  height: auto !important;\n  overflow: hidden !important;\n  padding: 2px 0 !important;\n  box-sizing: content-box !important; }\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #3f51b5; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff4081; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff4081; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #3f51b5; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #3f51b5; }\n@media (-ms-high-contrast: active) {\n    .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-accent .mat-badge-content {\n  background: #ff4081;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #2196f3; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-disabled .mat-badge-content {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38); }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #3f51b5; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #ff4081; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #2196f3; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: #3f51b5; }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: #ff4081; }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: #2196f3; }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button .mat-ripple-element, .mat-icon-button .mat-ripple-element, .mat-stroked-button .mat-ripple-element {\n    opacity: 0.1;\n    background-color: currentColor; }\n.mat-button-focus-overlay {\n  background: black; }\n.mat-stroked-button:not([disabled]) {\n  border-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #3f51b5; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #ff4081; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #2196f3; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-stroked-button:not([class*='mat-elevation-z']), .mat-flat-button:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-raised-button:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-raised-button:not([disabled]):active:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-raised-button[disabled]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-fab:not([class*='mat-elevation-z']), .mat-mini-fab:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-fab:not([disabled]):active:not([class*='mat-elevation-z']), .mat-mini-fab:not([disabled]):active:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-fab[disabled]:not([class*='mat-elevation-z']), .mat-mini-fab[disabled]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-standalone,\n.mat-button-toggle-group {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  box-shadow: none; }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-appearance-standard {\n  color: rgba(0, 0, 0, 0.87);\n  background: white; }\n.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n    background-color: black; }\n.mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: solid 1px rgba(0, 0, 0, 0.12); }\n[dir='rtl'] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n    color: rgba(0, 0, 0, 0.87); }\n.mat-button-toggle-disabled {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee; }\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard {\n    background: white; }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  border: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-card.mat-card-flat:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #3f51b5; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff4081; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: rgba(0, 0, 0, 0.54); }\n@media (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #3f51b5; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #ff4081; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #2196f3; }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-disabled {\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip::after {\n    background: black; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #3f51b5;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #ff4081;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #3f51b5;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(63, 81, 181, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #ff4081;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(255, 64, 129, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content-touch {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-datepicker-toggle-active {\n  color: #3f51b5; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #ff4081; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #2196f3; }\n.mat-dialog-container {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #3f51b5; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #ff4081; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #2196f3; }\n.mat-focused .mat-form-field-required-marker {\n  color: #ff4081; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #3f51b5; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #ff4081; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #2196f3; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {\n  color: #3f51b5; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {\n  color: #ff4081; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after {\n  color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #2196f3; }\n.mat-error {\n  color: #2196f3; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #3f51b5; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #ff4081; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #3f51b5; }\n.mat-icon.mat-accent {\n  color: #ff4081; }\n.mat-icon.mat-warn {\n  color: #2196f3; }\n.mat-form-field-type-mat-native-select .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-input-element:disabled,\n.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #3f51b5; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #ff4081; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #2196f3; }\n.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {\n  color: #2196f3; }\n.mat-list-base .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list-base .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list-base .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option:focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item:focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon-no-color,\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #c5cae9; }\n.mat-progress-bar-buffer {\n  background-color: #c5cae9; }\n.mat-progress-bar-fill::after {\n  background-color: #3f51b5; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #ff80ab; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ff80ab; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff4081; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #3f51b5; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #ff4081; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #2196f3; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #3f51b5; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle,\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {\n  background-color: #3f51b5; }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff4081; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle,\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {\n  background-color: #ff4081; }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle,\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {\n  background-color: #2196f3; }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button .mat-ripple-element {\n  background-color: black; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel {\n  background: white; }\n.mat-select-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n    background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #3f51b5; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #ff4081; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer:not(.mat-drawer-side) {\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-drawer-side {\n  border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-drawer-side.mat-drawer-end {\n    border-left: solid 1px rgba(0, 0, 0, 0.12);\n    border-right: none; }\n[dir='rtl'] .mat-drawer-side {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none; }\n[dir='rtl'] .mat-drawer-side.mat-drawer-end {\n    border-left: none;\n    border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #ff4081; }\n.mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(255, 64, 129, 0.54); }\n.mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #ff4081; }\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {\n  background-color: #3f51b5; }\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.54); }\n.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {\n  background-color: #3f51b5; }\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.54); }\n.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {\n  background-color: #2196f3; }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: black; }\n.mat-slide-toggle-thumb {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #3f51b5; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff4081; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(255, 64, 129, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-step-header:hover {\n    background: none; } }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-step-header .mat-step-icon {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white; }\n.mat-step-header .mat-step-icon-selected,\n.mat-step-header .mat-step-icon-state-done,\n.mat-step-header .mat-step-icon-state-edit {\n  background-color: #3f51b5;\n  color: white; }\n.mat-step-header .mat-step-icon-state-error {\n  background-color: transparent;\n  color: #2196f3; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-step-header .mat-step-label.mat-step-label-error {\n  color: #2196f3; }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-horizontal-stepper-header::before,\n.mat-horizontal-stepper-header::after,\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #3f51b5; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ff4081; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #3f51b5; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #ff4081; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #3f51b5;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #ff4081;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node,\n.mat-nested-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-simple-snackbar-action {\n  color: #ff4081; }\n/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.menu-card {\n  background-color: #82b1ff; }\n.main-card {\n  background-color: #e8eaf6; }\n/deep/ .mat-expansion-panel-header {\n  background-color: #82b1ff; }\n/deep/ .mat-expansion-panel-content {\n  background-color: #e3f2fd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbm5vL0dJVFMvZGd3bnUvbmctam9pbnQvbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL190aGVtaW5nLnNjc3MiLCJub2RlX21vZHVsZXMvam9pbnRqcy9kaXN0L2pvaW50LmNzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL29ubm8vR0lUUy9kZ3dudS9uZy1qb2ludC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvb25uby9HSVRTL2Rnd251L25nLWpvaW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXkxQ0Esa0NBQUE7QUFnaERBLDJDQUFBO0FBd0NBLHFCQUFBO0FBeGpEQSxrQ0FBQTtBQWdoREEsMkNBQUE7QUF3Q0EscUJBQUE7QUNqNUZBOzs7Ozs7Q0FNQztBQUNEOzs7OztDQUtDO0FBR0QsdUVBQXVFO0FBQ3ZFO0dBQ0cseUJBQXlCO0dBQ3pCLHNCQUFzQjtHQUN0QixxQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3BCO0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTs7Ozs7Ozs7O0NBU0M7QUFHRCx5RUFBeUU7QUFDekU7R0FDRyxpQkFBaUI7QUFDcEI7QUFDQTtHQUNHLFdBQVc7QUFDZDtBQUVBOzs7Ozs7Q0FNQztBQUVEO0dBQ0csNERBQTREO0dBQzVELFlBQVk7QUFDZjtBQUVBO0dBQ0csZUFBZTtBQUNsQjtBQUVBO0dBQ0csc0pBQXNKO0dBQ3RKLGlDQUFpQztBQUNwQztBQUNBOzs7Ozs7OztDQVFDO0FBRUQ7O0dBRUcsb0hBQW9IO0dBQ3BILGlDQUFpQztBQUNwQztBQUVBLFVBQVU7QUFDVjtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLFVBQVU7QUFFVixtQkFBbUI7QUFDbkI7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EsbUJBQW1CO0FBRW5COzs7O0NBSUM7QUFFRDs7R0FFRyxV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QkFoaEg2QjtFQWloSDdCLG1CQUE4RDtFQTNtSGhFLDJIQUVtRSxFQUFBO0FBOG1IbkU7RUFDRSxjQXIrR1csRUFBQTtBRy9pQmYsOEVBQUE7QUFFQTtFQUFhLFlBQVksRUFBQTtBQUN6QjtFQUFPLFNBQVM7RUFBRSxpREFBaUQsRUFBQTtBQ3BCbkU7RUFDSSx5Qkprc0JXLEVBQUE7QUkvckJmO0VBQ0UseUJKbXBCVyxFQUFBO0FJaHBCYjtFQUNFLHlCSjByQmEsRUFBQTtBSXZyQmY7RUFDRSx5Qko0cUJXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSBjYW4gdXNlIHJlbGF0aXZlIGltcG9ydHMgZm9yIGltcG9ydHMgZnJvbSB0aGUgY2RrIGJlY2F1c2Ugd2UgYnVuZGxlIGV2ZXJ5dGhpbmdcbi8vIHVwIGludG8gYSBzaW5nbGUgZmxhdCBzY3NzIGZpbGUgZm9yIG1hdGVyaWFsLlxuLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjogMTAwMDtcbiRjZGstei1pbmRleC1vdmVybGF5OiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A6IDEwMDA7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGNkay1vdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZCBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFja1xuICAgICAgLy8gdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgdGhlIGBjZGstaGlnaC1jb250cmFzdGBcbiAgICAgIC8vIG1peGluLCBiZWNhdXNlIHdlIGNhbid0IG5vcm1hbGl6ZSB0aGUgaW1wb3J0IHBhdGggdG8gdGhlIF9hMTF5LnNjc3MgYm90aCBmb3IgdGhlXG4gICAgICAvLyBzb3VyY2UgYW5kIHdoZW4gdGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkLiBTZWUgIzEwOTA4LlxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJiwgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbkBtaXhpbiBjZGstYTExeSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vL1xuLy8gQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUpIHtcbiAgQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogJHRhcmdldCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gY2RrLXRleHQtZmllbGQge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQ7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQ7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuXG4gICYuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICB9XG5cbiAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OlxuICAgICAgJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgbWF0ZXJpYWwgZGVzaWduIHRyZWF0bWVudHMgdG8gYW55IGVsZW1lbnQuXG4vLyBNZWRpYSBxdWVyaWVzXG4vLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBDaGFuZ2UgJG1hdC14c21hbGwgYW5kICRtYXQtc21hbGwgdXNhZ2VzIHRvIHJlbHkgb24gQnJlYWtwb2ludE9ic2VydmVyLFxuJG1hdC14c21hbGw6ICdtYXgtd2lkdGg6IDU5OXB4JztcbiRtYXQtc21hbGw6ICdtYXgtd2lkdGg6IDk1OXB4JztcblxuLy8gVE9ETzogUmV2aXNpdCBhbGwgei1pbmRpY2VzIGJlZm9yZSBiZXRhXG4vLyB6LWluZGV4IG1hc3RlciBsaXN0XG5cbiR6LWluZGV4LWZhYjogMjAgIWRlZmF1bHQ7XG4kei1pbmRleC1kcmF3ZXI6IDEwMCAhZGVmYXVsdDtcblxuLy8gR2xvYmFsIGNvbnN0YW50c1xuJHBpOiAzLjE0MTU5MjY1O1xuXG4vLyBQYWRkaW5nIGJldHdlZW4gaW5wdXQgdG9nZ2xlcyBhbmQgdGhlaXIgbGFiZWxzXG4kbWF0LXRvZ2dsZS1wYWRkaW5nOiA4cHggIWRlZmF1bHQ7XG4vLyBXaWR0aCBhbmQgaGVpZ2h0IG9mIGlucHV0IHRvZ2dsZXNcbiRtYXQtdG9nZ2xlLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbi8vIEVhc2luZyBDdXJ2ZXNcbi8vIFRPRE8oamVsYm91cm4pOiBhbGwgb2YgdGhlc2UgbmVlZCB0byBiZSByZXZpc2l0ZWRcblxuLy8gVGhlIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlcyB1c2VkIGJ5IG1hdGVyaWFsIGRlc2lnbi5cbiRtYXQtbGluZWFyLW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMC4xKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LWxpbmVhci1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpICFkZWZhdWx0O1xuXG4kZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0OiBhbGwgJHN3aWZ0LWVhc2Utb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLWR1cmF0aW9uOiAzMDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMikgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbjogYWxsICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uOiA1MDBtcyAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb246ICRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbiAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluLW91dDogYWxsICRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtbGluZWFyLWR1cmF0aW9uOiA4MG1zICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb246IGxpbmVhciAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXI6IGFsbCAkc3dpZnQtbGluZWFyLWR1cmF0aW9uICRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xNCksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAxcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMnB4IDJweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDRweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggNXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCA2cHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA3cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA4cHggMTBweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA5cHggMTJweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggMTBweCAxNHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCAxMXB4IDE1cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDEycHggMTdweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggMTNweCAxOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCAxNHB4IDIxcHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDE1cHggMjJweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggMTZweCAyNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCAxN3B4IDI2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDE4cHggMjhweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggMTlweCAyOXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAyMHB4IDMxcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDIxcHggMzNweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMjJweCAzNXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAyM3B4IDM2cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDI0cHggMzhweCAzcHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb246IDI4MG1zICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBlYXNpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiAkbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1jb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kbWF0LWVsZXZhdGlvbi1vcGFjaXR5OiAxICFkZWZhdWx0O1xuXG4vLyBQcmVmaXggZm9yIGVsZXZhdGlvbi1yZWxhdGVkIHNlbGVjdG9ycy5cbiRfbWF0LWVsZXZhdGlvbi1wcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gIEBpZiB0eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLWdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuQG1peGluIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBBcHBsaWVzIHRoZSBlbGV2YXRpb24gdG8gYW4gZWxlbWVudCBpbiBhIG1hbm5lciB0aGF0IGFsbG93c1xuLy8gY29uc3VtZXJzIHRvIG92ZXJyaWRlIGl0IHZpYSB0aGUgTWF0ZXJpYWwgZWxldmF0aW9uIGNsYXNzZXMuXG5AbWl4aW4gbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsXG4gICAgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICBAcmV0dXJuIGJveC1zaGFkb3cgI3skZHVyYXRpb259ICN7JGVhc2luZ307XG59XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIG5lZWRlZCB0byBoYXZlIGFuIGVsZW1lbnQgdHJhbnNpdGlvbiBiZXR3ZWVuIGVsZXZhdGlvbnMuXG4vLyBUaGlzIG1peGluIHNob3VsZCBiZSBhcHBsaWVkIHRvIGVsZW1lbnRzIHdob3NlIGVsZXZhdGlvbiB2YWx1ZXMgd2lsbCBjaGFuZ2UgZGVwZW5kaW5nIG9uIHRoZWlyXG4vLyBjb250ZXh0IChlLmcuIHdoZW4gYWN0aXZlIG9yIGRpc2FibGVkKS5cbi8vXG4vLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBCb3RoIHRoaXMgbWl4aW4gYW5kIHRoZSBhYm92ZSBmdW5jdGlvbiB1c2UgZGVmYXVsdCBwYXJhbWV0ZXJzIHNvIHRoZXkgY2FuXG4vLyBiZSB1c2VkIGluIHRoZSBzYW1lIHdheSBieSBjbGllbnRzLlxuQG1peGluIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG5cbi8vIENvbG9yIHBhbGV0dGVzIGZyb20gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbG9yL1xuLy9cbi8vIENvbnRyYXN0IGNvbG9ycyBhcmUgaGFyZC1jb2RlZCBiZWNhdXNlIGl0IGlzIHRvbyBkaWZmaWN1bHQgKHByb2JhYmx5IGltcG9zc2libGUpIHRvXG4vLyBjYWxjdWxhdGUgdGhlbS4gVGhlc2UgY29udHJhc3QgY29sb3JzIGFyZSBwdWxsZWQgZnJvbSB0aGUgcHVibGljIE1hdGVyaWFsIERlc2lnbiBzcGVjIHN3YXRjaGVzLlxuLy8gV2hpbGUgdGhlIGNvbnRyYXN0IGNvbG9ycyBpbiB0aGUgc3BlYyBhcmUgbm90IHByZXNjcmlwdGl2ZSwgd2UgdXNlIHRoZW0gZm9yIGNvbnZlbmllbmNlLlxuXG5cbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGRhcmstcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTg3LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkbGlnaHQtcHJpbWFyeS10ZXh0LlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTg3LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuODcpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stMTItb3BhY2l0eTogcmdiYShibGFjaywgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtMTItb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4xMik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay02LW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMDYpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTYtb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC4wNik7XG5cbiRkYXJrLXByaW1hcnktdGV4dDogcmdiYShibGFjaywgMC44Nyk7XG4kZGFyay1zZWNvbmRhcnktdGV4dDogcmdiYShibGFjaywgMC41NCk7XG4kZGFyay1kaXNhYmxlZC10ZXh0OiByZ2JhKGJsYWNrLCAwLjM4KTtcbiRkYXJrLWRpdmlkZXJzOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRkYXJrLWZvY3VzZWQ6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGxpZ2h0LXByaW1hcnktdGV4dDogd2hpdGU7XG4kbGlnaHQtc2Vjb25kYXJ5LXRleHQ6IHJnYmEod2hpdGUsIDAuNyk7XG4kbGlnaHQtZGlzYWJsZWQtdGV4dDogcmdiYSh3aGl0ZSwgMC41KTtcbiRsaWdodC1kaXZpZGVyczogcmdiYSh3aGl0ZSwgMC4xMik7XG4kbGlnaHQtZm9jdXNlZDogcmdiYSh3aGl0ZSwgMC4xMik7XG5cbiRtYXQtcmVkOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcGluazogKFxuICA1MDogI2ZjZTRlYyxcbiAgMTAwOiAjZjhiYmQwLFxuICAyMDA6ICNmNDhmYjEsXG4gIDMwMDogI2YwNjI5MixcbiAgNDAwOiAjZWM0MDdhLFxuICA1MDA6ICNlOTFlNjMsXG4gIDYwMDogI2Q4MWI2MCxcbiAgNzAwOiAjYzIxODViLFxuICA4MDA6ICNhZDE0NTcsXG4gIDkwMDogIzg4MGU0ZixcbiAgQTEwMDogI2ZmODBhYixcbiAgQTIwMDogI2ZmNDA4MSxcbiAgQTQwMDogI2Y1MDA1NyxcbiAgQTcwMDogI2M1MTE2MixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXB1cnBsZTogKFxuICA1MDogI2YzZTVmNSxcbiAgMTAwOiAjZTFiZWU3LFxuICAyMDA6ICNjZTkzZDgsXG4gIDMwMDogI2JhNjhjOCxcbiAgNDAwOiAjYWI0N2JjLFxuICA1MDA6ICM5YzI3YjAsXG4gIDYwMDogIzhlMjRhYSxcbiAgNzAwOiAjN2IxZmEyLFxuICA4MDA6ICM2YTFiOWEsXG4gIDkwMDogIzRhMTQ4YyxcbiAgQTEwMDogI2VhODBmYyxcbiAgQTIwMDogI2UwNDBmYixcbiAgQTQwMDogI2Q1MDBmOSxcbiAgQTcwMDogI2FhMDBmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZGVlcC1wdXJwbGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWluZGlnbzogKFxuICA1MDogI2U4ZWFmNixcbiAgMTAwOiAjYzVjYWU5LFxuICAyMDA6ICM5ZmE4ZGEsXG4gIDMwMDogIzc5ODZjYixcbiAgNDAwOiAjNWM2YmMwLFxuICA1MDA6ICMzZjUxYjUsXG4gIDYwMDogIzM5NDlhYixcbiAgNzAwOiAjMzAzZjlmLFxuICA4MDA6ICMyODM1OTMsXG4gIDkwMDogIzFhMjM3ZSxcbiAgQTEwMDogIzhjOWVmZixcbiAgQTIwMDogIzUzNmRmZSxcbiAgQTQwMDogIzNkNWFmZSxcbiAgQTcwMDogIzMwNGZmZSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYmx1ZTogKFxuICA1MDogI2UzZjJmZCxcbiAgMTAwOiAjYmJkZWZiLFxuICAyMDA6ICM5MGNhZjksXG4gIDMwMDogIzY0YjVmNixcbiAgNDAwOiAjNDJhNWY1LFxuICA1MDA6ICMyMTk2ZjMsXG4gIDYwMDogIzFlODhlNSxcbiAgNzAwOiAjMTk3NmQyLFxuICA4MDA6ICMxNTY1YzAsXG4gIDkwMDogIzBkNDdhMSxcbiAgQTEwMDogIzgyYjFmZixcbiAgQTIwMDogIzQ0OGFmZixcbiAgQTQwMDogIzI5NzlmZixcbiAgQTcwMDogIzI5NjJmZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWJsdWU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtY3lhbjogKFxuICA1MDogI2UwZjdmYSxcbiAgMTAwOiAjYjJlYmYyLFxuICAyMDA6ICM4MGRlZWEsXG4gIDMwMDogIzRkZDBlMSxcbiAgNDAwOiAjMjZjNmRhLFxuICA1MDA6ICMwMGJjZDQsXG4gIDYwMDogIzAwYWNjMSxcbiAgNzAwOiAjMDA5N2E3LFxuICA4MDA6ICMwMDgzOGYsXG4gIDkwMDogIzAwNjA2NCxcbiAgQTEwMDogIzg0ZmZmZixcbiAgQTIwMDogIzE4ZmZmZixcbiAgQTQwMDogIzAwZTVmZixcbiAgQTcwMDogIzAwYjhkNCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXRlYWw6IChcbiAgNTA6ICNlMGYyZjEsXG4gIDEwMDogI2IyZGZkYixcbiAgMjAwOiAjODBjYmM0LFxuICAzMDA6ICM0ZGI2YWMsXG4gIDQwMDogIzI2YTY5YSxcbiAgNTAwOiAjMDA5Njg4LFxuICA2MDA6ICMwMDg5N2IsXG4gIDcwMDogIzAwNzk2YixcbiAgODAwOiAjMDA2OTVjLFxuICA5MDA6ICMwMDRkNDAsXG4gIEExMDA6ICNhN2ZmZWIsXG4gIEEyMDA6ICM2NGZmZGEsXG4gIEE0MDA6ICMxZGU5YjYsXG4gIEE3MDA6ICMwMGJmYTUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmVlbjogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtZ3JlZW46IChcbiAgNTA6ICNmMWY4ZTksXG4gIDEwMDogI2RjZWRjOCxcbiAgMjAwOiAjYzVlMWE1LFxuICAzMDA6ICNhZWQ1ODEsXG4gIDQwMDogIzljY2M2NSxcbiAgNTAwOiAjOGJjMzRhLFxuICA2MDA6ICM3Y2IzNDIsXG4gIDcwMDogIzY4OWYzOCxcbiAgODAwOiAjNTU4YjJmLFxuICA5MDA6ICMzMzY5MWUsXG4gIEExMDA6ICNjY2ZmOTAsXG4gIEEyMDA6ICNiMmZmNTksXG4gIEE0MDA6ICM3NmZmMDMsXG4gIEE3MDA6ICM2NGRkMTcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGltZTogKFxuICA1MDogI2Y5ZmJlNyxcbiAgMTAwOiAjZjBmNGMzLFxuICAyMDA6ICNlNmVlOWMsXG4gIDMwMDogI2RjZTc3NSxcbiAgNDAwOiAjZDRlMTU3LFxuICA1MDA6ICNjZGRjMzksXG4gIDYwMDogI2MwY2EzMyxcbiAgNzAwOiAjYWZiNDJiLFxuICA4MDA6ICM5ZTlkMjQsXG4gIDkwMDogIzgyNzcxNyxcbiAgQTEwMDogI2Y0ZmY4MSxcbiAgQTIwMDogI2VlZmY0MSxcbiAgQTQwMDogI2M2ZmYwMCxcbiAgQTcwMDogI2FlZWEwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQteWVsbG93OiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWFtYmVyOiAoXG4gIDUwOiAjZmZmOGUxLFxuICAxMDA6ICNmZmVjYjMsXG4gIDIwMDogI2ZmZTA4MixcbiAgMzAwOiAjZmZkNTRmLFxuICA0MDA6ICNmZmNhMjgsXG4gIDUwMDogI2ZmYzEwNyxcbiAgNjAwOiAjZmZiMzAwLFxuICA3MDA6ICNmZmEwMDAsXG4gIDgwMDogI2ZmOGYwMCxcbiAgOTAwOiAjZmY2ZjAwLFxuICBBMTAwOiAjZmZlNTdmLFxuICBBMjAwOiAjZmZkNzQwLFxuICBBNDAwOiAjZmZjNDAwLFxuICBBNzAwOiAjZmZhYjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LW9yYW5nZTogKFxuICA1MDogI2ZmZjNlMCxcbiAgMTAwOiAjZmZlMGIyLFxuICAyMDA6ICNmZmNjODAsXG4gIDMwMDogI2ZmYjc0ZCxcbiAgNDAwOiAjZmZhNzI2LFxuICA1MDA6ICNmZjk4MDAsXG4gIDYwMDogI2ZiOGMwMCxcbiAgNzAwOiAjZjU3YzAwLFxuICA4MDA6ICNlZjZjMDAsXG4gIDkwMDogI2U2NTEwMCxcbiAgQTEwMDogI2ZmZDE4MCxcbiAgQTIwMDogI2ZmYWI0MCxcbiAgQTQwMDogI2ZmOTEwMCxcbiAgQTcwMDogI2ZmNmQwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogYmxhY2ssXG4gIClcbik7XG5cbiRtYXQtZGVlcC1vcmFuZ2U6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJyb3duOiAoXG4gIDUwOiAjZWZlYmU5LFxuICAxMDA6ICNkN2NjYzgsXG4gIDIwMDogI2JjYWFhNCxcbiAgMzAwOiAjYTE4ODdmLFxuICA0MDA6ICM4ZDZlNjMsXG4gIDUwMDogIzc5NTU0OCxcbiAgNjAwOiAjNmQ0YzQxLFxuICA3MDA6ICM1ZDQwMzcsXG4gIDgwMDogIzRlMzQyZSxcbiAgOTAwOiAjM2UyNzIzLFxuICBBMTAwOiAjZDdjY2M4LFxuICBBMjAwOiAjYmNhYWE0LFxuICBBNDAwOiAjOGQ2ZTYzLFxuICBBNzAwOiAjNWQ0MDM3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZXk6IChcbiAgNTA6ICNmYWZhZmEsXG4gIDEwMDogI2Y1ZjVmNSxcbiAgMjAwOiAjZWVlZWVlLFxuICAzMDA6ICNlMGUwZTAsXG4gIDQwMDogI2JkYmRiZCxcbiAgNTAwOiAjOWU5ZTllLFxuICA2MDA6ICM3NTc1NzUsXG4gIDcwMDogIzYxNjE2MSxcbiAgODAwOiAjNDI0MjQyLFxuICA5MDA6ICMyMTIxMjEsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNlZWVlZWUsXG4gIEE0MDA6ICNiZGJkYmQsXG4gIEE3MDA6ICM2MTYxNjEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtZ3JheTogJG1hdC1ncmV5O1xuXG4kbWF0LWJsdWUtZ3JleTogKFxuICA1MDogI2VjZWZmMSxcbiAgMTAwOiAjY2ZkOGRjLFxuICAyMDA6ICNiMGJlYzUsXG4gIDMwMDogIzkwYTRhZSxcbiAgNDAwOiAjNzg5MDljLFxuICA1MDA6ICM2MDdkOGIsXG4gIDYwMDogIzU0NmU3YSxcbiAgNzAwOiAjNDU1YTY0LFxuICA4MDA6ICMzNzQ3NGYsXG4gIDkwMDogIzI2MzIzOCxcbiAgQTEwMDogI2NmZDhkYyxcbiAgQTIwMDogI2IwYmVjNSxcbiAgQTQwMDogIzc4OTA5YyxcbiAgQTcwMDogIzQ1NWE2NCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ibHVlLWdyYXk6ICRtYXQtYmx1ZS1ncmV5O1xuXG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgMTAwKSxcbiAgYmFja2dyb3VuZDogbWFwX2dldCgkbWF0LWdyZXksIDUwKSxcbiAgaG92ZXI6ICAgICAgcmdiYShibGFjaywgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIHdoaXRlLFxuICBkaWFsb2c6ICAgICB3aGl0ZSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKGJsYWNrLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogd2hpdGUsXG4gIGZvY3VzZWQtYnV0dG9uOiAkZGFyay1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA0MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgbGlnaHQgdGhlbWVzLlxuJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICBibGFjayxcbiAgZGl2aWRlcjogICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYShibGFjaywgMC4yNiksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkZGFyay1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGRhcmstc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICB0ZXh0OiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1taW46ICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYShibGFjaywgMC4zOCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIHdoaXRlLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKHdoaXRlLCAwLjMpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGxpZ2h0LXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGljb25zOiAgICAgICAgICAgICB3aGl0ZSxcbiAgdGV4dDogICAgICAgICAgICAgIHdoaXRlLFxuICBzbGlkZXItbWluOiAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKHdoaXRlLCAwLjMpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYSh3aGl0ZSwgMC4zKSxcbik7XG5cblxuXG4vLyBGb3IgYSBnaXZlbiBodWUgaW4gYSBwYWxldHRlLCByZXR1cm4gdGhlIGNvbnRyYXN0IGNvbG9yIGZyb20gdGhlIG1hcCBvZiBjb250cmFzdCBwYWxldHRlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJGh1ZVxuQGZ1bmN0aW9uIG1hdC1jb250cmFzdCgkcGFsZXR0ZSwgJGh1ZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkcGFsZXR0ZSwgY29udHJhc3QpLCAkaHVlKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgbWFwIG9mIGh1ZXMgdG8gY29sb3JzIGZvciBhIHRoZW1lLiBUaGlzIGlzIHVzZWQgdG8gZGVmaW5lIGEgdGhlbWUgcGFsZXR0ZSBpbiB0ZXJtc1xuLy8gb2YgdGhlIE1hdGVyaWFsIERlc2lnbiBodWVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkcHJpbWFyeVxuLy8gQHBhcmFtICRsaWdodGVyXG5AZnVuY3Rpb24gbWF0LXBhbGV0dGUoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQ6IDUwMCwgJGxpZ2h0ZXI6IDEwMCwgJGRhcmtlcjogNzAwKSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG5cbiAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAvLyBJZiB0aGUgJGNvbG9yIHJlc29sdmVkIHRvIHNvbWV0aGluZyBkaWZmZXJlbnQgZnJvbSBhIGNvbG9yIChlLmcuIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAvLyB3ZSBjYW4ndCBhcHBseSB0aGUgb3BhY2l0eSBhbnl3YXkgc28gd2UgcmV0dXJuIHRoZSB2YWx1ZSBhcyBpcywgb3RoZXJ3aXNlIFNhc3MgY2FuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3Igb3Igb3V0cHV0IHNvbWV0aGluZyBpbnZhbGlkLlxuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9XG5cbiAgQHJldHVybiByZ2JhKCRjb2xvciwgaWYoJG9wYWNpdHkgPT0gbnVsbCwgb3BhY2l0eSgkY29sb3IpLCAkb3BhY2l0eSkpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXBfZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmICh0eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFV0aWxpdHkgZm9yIGZldGNoaW5nIGEgbmVzdGVkIHZhbHVlIGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgJG5hbWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGNvbmZpZywgJGxldmVsKSwgJG5hbWUpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHNpemUgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1zaXplKTtcbn1cblxuLy8gR2V0cyB0aGUgbGluZSBoZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsaW5lLWhlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgd2VpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC13ZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBsZXR0ZXIgc3BhY2luZyBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxldHRlci1zcGFjaW5nKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udC1mYW1pbHkgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnIGFuZCByZW1vdmVzIHRoZSBxdW90ZXMgYXJvdW5kIGl0LlxuQGZ1bmN0aW9uIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWw6IG51bGwpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXAtZ2V0KCRjb25maWcsIGZvbnQtZmFtaWx5KTtcblxuICBAaWYgJGxldmVsICE9IG51bGwge1xuICAgICRmb250LWZhbWlseTogX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIC8vIEd1YXJkIGFnYWluc3QgdW5xdW90aW5nIG5vbi1zdHJpbmcgdmFsdWVzLCBiZWNhdXNlIGl0J3MgZGVwcmVjYXRlZC5cbiAgQHJldHVybiBpZih0eXBlLW9mKCRmb250LWZhbWlseSkgPT0gc3RyaW5nLCB1bnF1b3RlKCRmb250LWZhbWlseSksICRmb250LWZhbWlseSk7XG59XG5cbi8vIE91dHB1dHMgdGhlIHNob3J0aGFuZCBgZm9udGAgQ1NTIHByb3BlcnR5LCBiYXNlZCBvbiBhIHNldCBvZiB0eXBvZ3JhcGh5IHZhbHVlcy4gRmFsbHMgYmFjayB0b1xuLy8gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBpZiBhIHZhbHVlIHRoYXQgaXNuJ3QgYWxsb3dlZCBpbiB0aGUgc2hvcnRoYW5kIGlzIHBhc3NlZCBpbi5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KSB7XG4gIC8vIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBzZXQgdG8gYGluaGVyaXRgLCB3ZSBjYW4ndCB1c2UgdGhlIHNob3J0aGFuZFxuICAvLyBzbyB3ZSBmYWxsIGJhY2sgdG8gcGFzc2luZyBpbiB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzLlxuICBAaWYgKCRmb250LXNpemUgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LXNpemUgPT0gbnVsbCBvclxuICAgICAgICRmb250LXdlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGxpbmUtaGVpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkZm9udC1mYW1pbHkgPT0gbnVsbCkge1xuXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG4gIEBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBzaG9ydGhhbmQgYGZvbnRgLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGFtb3VudCBvZiBieXRlcy4gTm90ZVxuICAgIC8vIHRoYXQgd2UgbmVlZCB0byB1c2UgaW50ZXJwb2xhdGlvbiBmb3IgYGZvbnQtc2l6ZS9saW5lLWhlaWdodGAgaW4gb3JkZXIgdG8gcHJldmVudFxuICAgIC8vIFNhc3MgZnJvbSBkaXZpZGluZyB0aGUgdHdvIHZhbHVlcy5cbiAgICBmb250OiAkZm9udC13ZWlnaHQgI3skZm9udC1zaXplfS8jeyRsaW5lLWhlaWdodH0gJGZvbnQtZmFtaWx5O1xuICB9XG59XG5cbi8vIENvbnZlcnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBpbnRvIENTUyBzdHlsZXMuXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsICRsZXZlbCkge1xuICAkZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsICRsZXZlbCk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbCk7XG5cbiAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSk7XG4gIGxldHRlci1zcGFjaW5nOiBtYXQtbGV0dGVyLXNwYWNpbmcoJGNvbmZpZywgJGxldmVsKTtcbn1cblxuXG5AbWl4aW4gbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1vcHRpb24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLFxuICAgICY6Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBJbiBtdWx0aXBsZSBtb2RlIHRoZXJlIGlzIGEgY2hlY2tib3ggdG8gc2hvdyB0aGF0IHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgJi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgICYubWF0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0aW9uIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcbiAgJGNvbG9yZWQtYm94LXNlbGVjdG9yOiAnLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCwgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSc7XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZWZhdWx0IHRvIHRoZSBhY2NlbnQgY29sb3IuIE5vdGUgdGhhdCB0aGUgcHNldWRvIGNoZWNrYm94ZXMgYXJlIG1lYW50IHRvIGluaGVyaXQgdGhlXG4gIC8vIHRoZW1lIGZyb20gdGhlaXIgcGFyZW50LCByYXRoZXIgdGhhbiBpbXBsZW1lbnRpbmcgdGhlaXIgb3duIHRoZW1pbmcsIHdoaWNoIGlzIHdoeSB3ZVxuICAvLyBkb24ndCBhdHRhY2ggdG8gdGhlIGBtYXQtKmAgY2xhc3Nlcy5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgJi5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFJlcHJlc2VudHMgYSB0eXBvZ3JhcGh5IGxldmVsIGZyb20gdGhlIE1hdGVyaWFsIGRlc2lnbiBzcGVjLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWxldmVsKFxuICAkZm9udC1zaXplLFxuICAkbGluZS1oZWlnaHQ6ICRmb250LXNpemUsXG4gICRmb250LXdlaWdodDogNDAwLFxuICAkZm9udC1mYW1pbHk6IG51bGwsXG4gICRsZXR0ZXItc3BhY2luZzogbnVsbCkge1xuXG4gIEByZXR1cm4gKFxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZSxcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LFxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQsXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSxcbiAgICBsZXR0ZXItc3BhY2luZzogJGxldHRlci1zcGFjaW5nXG4gICk7XG59XG5cbi8vIFJlcHJlc2VudHMgYSBjb2xsZWN0aW9uIG9mIHR5cG9ncmFwaHkgbGV2ZWxzLlxuLy8gRGVmYXVsdHMgY29tZSBmcm9tIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZ3VpZGVsaW5lcy9zdHlsZS90eXBvZ3JhcGh5Lmh0bWxcbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogICAnUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAkZGlzcGxheS00OiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTEycHgsIDExMnB4LCAzMDApLFxuICAkZGlzcGxheS0zOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNTZweCwgNTZweCwgNDAwKSxcbiAgJGRpc3BsYXktMjogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDQ1cHgsIDQ4cHgsIDQwMCksXG4gICRkaXNwbGF5LTE6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgzNHB4LCA0MHB4LCA0MDApLFxuICAkaGVhZGxpbmU6ICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjRweCwgMzJweCwgNDAwKSxcbiAgJHRpdGxlOiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDIwcHgsIDMycHgsIDUwMCksXG4gICRzdWJoZWFkaW5nLTI6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNnB4LCAyOHB4LCA0MDApLFxuICAkc3ViaGVhZGluZy0xOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTVweCwgMjRweCwgNDAwKSxcbiAgJGJvZHktMjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDI0cHgsIDUwMCksXG4gICRib2R5LTE6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyMHB4LCA0MDApLFxuICAkY2FwdGlvbjogICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTJweCwgMjBweCwgNDAwKSxcbiAgJGJ1dHRvbjogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDE0cHgsIDUwMCksXG4gIC8vIExpbmUtaGVpZ2h0IG11c3QgYmUgdW5pdC1sZXNzIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUuXG4gICRpbnB1dDogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbChpbmhlcml0LCAxLjEyNSwgNDAwKVxuKSB7XG5cbiAgLy8gRGVjbGFyZSBhbiBpbml0aWFsIG1hcCB3aXRoIGFsbCBvZiB0aGUgbGV2ZWxzLlxuICAkY29uZmlnOiAoXG4gICAgZGlzcGxheS00OiAgICAgICRkaXNwbGF5LTQsXG4gICAgZGlzcGxheS0zOiAgICAgICRkaXNwbGF5LTMsXG4gICAgZGlzcGxheS0yOiAgICAgICRkaXNwbGF5LTIsXG4gICAgZGlzcGxheS0xOiAgICAgICRkaXNwbGF5LTEsXG4gICAgaGVhZGxpbmU6ICAgICAgICRoZWFkbGluZSxcbiAgICB0aXRsZTogICAgICAgICAgJHRpdGxlLFxuICAgIHN1YmhlYWRpbmctMjogICAkc3ViaGVhZGluZy0yLFxuICAgIHN1YmhlYWRpbmctMTogICAkc3ViaGVhZGluZy0xLFxuICAgIGJvZHktMjogICAgICAgICAkYm9keS0yLFxuICAgIGJvZHktMTogICAgICAgICAkYm9keS0xLFxuICAgIGNhcHRpb246ICAgICAgICAkY2FwdGlvbixcbiAgICBidXR0b246ICAgICAgICAgJGJ1dHRvbixcbiAgICBpbnB1dDogICAgICAgICAgJGlucHV0LFxuICApO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgbGV2ZWxzIGFuZCBzZXQgdGhlIGBmb250LWZhbWlseWAgb2YgdGhlIG9uZXMgdGhhdCBkb24ndCBoYXZlIG9uZSB0byB0aGUgYmFzZS5cbiAgLy8gTm90ZSB0aGF0IFNhc3MgY2FuJ3QgbW9kaWZ5IG1hcHMgaW4gcGxhY2UsIHdoaWNoIG1lYW5zIHRoYXQgd2UgbmVlZCB0byBtZXJnZSBhbmQgcmUtYXNzaWduLlxuICBAZWFjaCAka2V5LCAkbGV2ZWwgaW4gJGNvbmZpZyB7XG4gICAgQGlmIG1hcC1nZXQoJGxldmVsLCBmb250LWZhbWlseSkgPT0gbnVsbCB7XG4gICAgICAkbmV3LWxldmVsOiBtYXAtbWVyZ2UoJGxldmVsLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xuICAgICAgJGNvbmZpZzogbWFwLW1lcmdlKCRjb25maWcsICgka2V5OiAkbmV3LWxldmVsKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoZSBiYXNlIGZvbnQgZmFtaWx5IHRvIHRoZSBjb25maWcuXG4gIEByZXR1cm4gbWFwLW1lcmdlKCRjb25maWcsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG59XG5cbi8vIEFkZHMgdGhlIGJhc2UgdHlwb2dyYXBoeSBzdHlsZXMsIGJhc2VkIG9uIGEgY29uZmlnLlxuQG1peGluIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZywgJHNlbGVjdG9yOiAnLm1hdC10eXBvZ3JhcGh5Jykge1xuICAubWF0LWgxLCAubWF0LWhlYWRsaW5lLCAjeyRzZWxlY3Rvcn0gaDEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDIsIC5tYXQtdGl0bGUsICN7JHNlbGVjdG9yfSBoMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsICN7JHNlbGVjdG9yfSBoMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAjeyRzZWxlY3Rvcn0gaDQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAvLyBOb3RlOiB0aGUgc3BlYyBkb2Vzbid0IGhhdmUgYW55dGhpbmcgdGhhdCB3b3VsZCBjb3JyZXNwb25kIHRvIGg1IGFuZCBoNiwgYnV0IHdlIGFkZCB0aGVzZSBmb3JcbiAgLy8gY29uc2lzdGVuY3kuIFRoZSBmb250IHNpemVzIGNvbWUgZnJvbSB0aGUgQ2hyb21lIHVzZXIgYWdlbnQgc3R5bGVzIHdoaWNoIGhhdmUgaDUgYXQgMC44M2VtXG4gIC8vIGFuZCBoNiBhdCAwLjY3ZW0uXG4gIC5tYXQtaDUsICN7JHNlbGVjdG9yfSBoNSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjgzLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWg2LCAjeyRzZWxlY3Rvcn0gaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpICogMC42NyxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1ib2R5LXN0cm9uZywgLm1hdC1ib2R5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgI3skc2VsZWN0b3J9IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICB9XG4gIH1cblxuICAubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBjYXB0aW9uKTtcbiAgfVxuXG4gIC8vIE5vdGU6IFRoZSBzcGVjIGRvZXNuJ3QgbWVudGlvbiBsZXR0ZXIgc3BhY2luZy4gVGhlIHZhbHVlIGNvbWVzIGZyb21cbiAgLy8gZXllYmFsbGluZyBpdCB1bnRpbCBpdCBsb29rZWQgZXhhY3RseSBsaWtlIHRoZSBzcGVjIGV4YW1wbGVzLlxuICAubWF0LWRpc3BsYXktNCwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS00IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS00KTtcbiAgICBtYXJnaW46IDAgMCA1NnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTMsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMyk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0yLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTIpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTEsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMSk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxufVxuXG5cblxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gU2VsZWN0ZWQgb3B0aW9ucyBpbiBhdXRvY29tcGxldGVzIHNob3VsZCBub3QgYmUgZ3JheSwgYnV0IHdlXG4gICAgLy8gb25seSB3YW50IHRvIG92ZXJyaWRlIHRoZSBiYWNrZ3JvdW5kIGZvciBzZWxlY3RlZCBvcHRpb25zIGlmXG4gICAgLy8gdGhleSBhcmUgKm5vdCogaW4gaG92ZXIgb3IgZm9jdXMgc3RhdGUuIFRoaXMgY2hhbmdlIGhhcyB0byBiZVxuICAgIC8vIG1hZGUgaGVyZSBiZWNhdXNlIGJhc2Ugb3B0aW9uIHN0eWxlcyBhcmUgc2hhcmVkIGJldHdlZW4gdGhlXG4gICAgLy8gYXV0b2NvbXBsZXRlIGFuZCB0aGUgc2VsZWN0LlxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAgICY6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cbi8vIFRoaXMgY29udGFpbnMgYWxsIG9mIHRoZSBzdHlsZXMgZm9yIHRoZSBiYWRnZVxuLy8gcmF0aGVyIHRoYW4ganVzdCB0aGUgY29sb3IvdGhlbWUgYmVjYXVzZSBvZlxuLy8gbm8gc3R5bGUgc2hlZXQgc3VwcG9ydCBmb3IgZGlyZWN0aXZlcy5cblxuXG5cblxuXG4kbWF0LWJhZGdlLWZvbnQtc2l6ZTogMTJweDtcbiRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ6IDYwMDtcbiRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplOiAyMnB4ICFkZWZhdWx0O1xuJG1hdC1iYWRnZS1zbWFsbC1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSAtIDY7XG4kbWF0LWJhZGdlLWxhcmdlLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplICsgNjtcblxuLy8gTWl4aW4gZm9yIGJ1aWxkaW5nIG9mZnNldCBnaXZlbiBkaWZmZXJlbnQgc2l6ZXNcbkBtaXhpbiBfbWF0LWJhZGdlLXNpemUoJHNpemUpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJHNpemU7XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hYm92ZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHRvcDogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWxvdyB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJvdHRvbTogLSRzaXplIC8gMjtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2Utb3ZlcmxhcCB7XG4gICAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSkge1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtYWNjZW50IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLXdhcm4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1oaWRkZW4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtZGlzYWJsZWQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAkYXBwLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2JhY2tncm91bmQnKTtcbiAgICAgICRiYWRnZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgICAvLyBUaGUgZGlzYWJsZWQgY29sb3IgdXN1YWxseSBoYXMgc29tZSBraW5kIG9mIG9wYWNpdHksIGJ1dCBiZWNhdXNlIHRoZSBiYWRnZSBpcyBvdmVybGF5ZWRcbiAgICAgIC8vIG9uIHRvcCBvZiBzb21ldGhpbmcgZWxzZSwgaXQgd29uJ3QgbG9vayBnb29kIGlmIGl0J3Mgb3BhcXVlLiBJZiBpdCBpcyBhIGNvbG9yICp0eXBlKixcbiAgICAgIC8vIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZCB1c2luZ1xuICAgICAgLy8gdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW5cbiAgICAgIC8vIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLlxuICAgICAgQGlmICh0eXBlLW9mKCRiYWRnZS1jb2xvcikgPT0gY29sb3IgYW5kIHR5cGUtb2YoJGFwcC1iYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgICAkYmFkZ2Utb3BhY2l0eTogb3BhY2l0eSgkYmFkZ2UtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBtaXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWRnZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAvLyBUaGUgYWN0aXZlIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGFkZGVkXG4gIC8vIHNvIGl0IGNhbiBhbmltYXRlIHNjYWxlIHRvIGRlZmF1bHRcbiAgLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICAgIC8vIFNjYWxlIHRvIGBub25lYCBpbnN0ZWFkIG9mIGAxYCB0byBhdm9pZCBibHVycnkgdGV4dCBpbiBzb21lIGJyb3dzZXJzLlxuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLXNtYWxsLXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbGFyZ2Uge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWxhcmdlLXNpemUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6ICRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZTtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgLyAyO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemUgKiAyO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG4kX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk6IDAuMTtcblxuLy8gQXBwbGllcyBhIGZvY3VzIHN0eWxlIHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cblxuICAmW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgJGh1ZSwgJG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIEFwcGxpZXMgYSBwcm9wZXJ0eSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICRwcm9wZXJ0eSwgJGh1ZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAmLm1hdC1wcmltYXJ5IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcHJpbWFyeSwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtYWNjZW50IHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkYWNjZW50LCAkaHVlKTtcbiAgfVxuICAmLm1hdC13YXJuIHtcbiAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkd2FybiwgJGh1ZSk7XG4gIH1cblxuICAmLm1hdC1wcmltYXJ5LCAmLm1hdC1hY2NlbnQsICYubWF0LXdhcm4sICZbZGlzYWJsZWRdIHtcbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAkcGFsZXR0ZTogaWYoJHByb3BlcnR5ID09ICdjb2xvcicsICRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCk7XG4gICAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgICAvLyBCdXR0b25zIHdpdGhvdXQgYSBiYWNrZ3JvdW5kIGNvbG9yIHNob3VsZCBpbmhlcml0IHRoZSBmb250IGNvbG9yLiBUaGlzIGlzIG5lY2Vzc2FyeSB0b1xuICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBidXR0b24gaXMgcmVhZGFibGUgb24gY3VzdG9tIGJhY2tncm91bmQgY29sb3JzLiBJdCdzIHdyb25nIHRvIGFsd2F5cyBhc3N1bWVcbiAgICAvLyB0aGF0IHRob3NlIGJ1dHRvbnMgYXJlIGFsd2F5cyBwbGFjZWQgaW5zaWRlIG9mIGNvbnRhaW5lcnMgd2l0aCB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kXG4gICAgLy8gY29sb3Igb2YgdGhlIHRoZW1lIChlLmcuIHRoZW1lZCB0b29sYmFycykuXG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdjb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJHRoZW1lKTtcblxuICAgIC8vIFNldHVwIHRoZSByaXBwbGUgY29sb3IgdG8gYmUgYmFzZWQgb24gdGhlIHRleHQgY29sb3IuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSByaXBwbGVzXG4gICAgLy8gYXJlIG1hdGNoaW5nIHdpdGggdGhlIGN1cnJlbnQgdGhlbWUgcGFsZXR0ZSBhbmQgYXJlIGluIGNvbnRyYXN0IHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgLy8gKGUuZyBpbiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICB9XG5cbiAgLy8gTm90ZTogdGhpcyBuZWVkcyBhIGJpdCBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB3ZSdyZSBub3QgZ3VhcmFudGVlZCB0aGUgaW5jbHVzaW9uXG4gIC8vIG9yZGVyIG9mIHRoZSB0aGVtZSBzdHlsZXMgYW5kIHRoZSBidXR0b24gcmVzZXQgbWF5IGVuZCB1cCByZXNldHRpbmcgdGhpcyBhcyB3ZWxsLlxuICAubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgLy8gRGVmYXVsdCBmb250IGFuZCBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gbm90IHVzaW5nIGFueSBjb2xvciBwYWxldHRlLlxuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgcmFpc2VkLWJ1dHRvbik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdjb2xvcicsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2JhY2tncm91bmQtY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b24sIC5tYXQtZmxhdC1idXR0b24ge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oOCwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEyLCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uLFxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRkaXZpZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbiwgMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIHtcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtYnV0dG9uKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZSk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWNhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBOZWVkcyBleHRyYSBzcGVjaWZpY2l0eSB0byBiZSBhYmxlIHRvIG92ZXJyaWRlIHRoZSBlbGV2YXRpb24gc2VsZWN0b3JzLlxuICAgICYubWF0LWNhcmQtZmxhdCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYXJkIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHRpdGxlKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSxcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuXG4gIC8vIFRoZSBjb2xvciBvZiB0aGUgY2hlY2tib3gncyBjaGVja21hcmsgLyBtaXhlZG1hcmsuXG4gICRjaGVja2JveC1tYXJrLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcblxuICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICAgIGZpbGw6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgLy8gIWltcG9ydGFudCBpcyBuZWVkZWQgaGVyZSBiZWNhdXNlIGEgc3Ryb2tlIG11c3QgYmUgc2V0IGFzIGFuXG4gICAgLy8gYXR0cmlidXRlIG9uIHRoZSBTVkcgaW4gb3JkZXIgZm9yIGxpbmUgYW5pbWF0aW9uIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgc3Ryb2tlOiAkY2hlY2tib3gtbWFyay1jb2xvciAhaW1wb3J0YW50O1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYmxhY2stb24td2hpdGUpIHtcbiAgICAgIC8vIEhhdmluZyB0aGUgb25lIGFib3ZlIGJlICFpbXBvcnRhbnQgZW5kcyB1cCBvdmVycmlkaW5nIHRoZSBicm93c2VyJ3MgYXV0b21hdGljXG4gICAgICAvLyBjb2xvciBpbnZlcnNpb24gc28gd2UgbmVlZCB0byByZS1pbnZlcnQgaXQgb3Vyc2VsdmVzIGZvciBibGFjay1vbi13aGl0ZS5cbiAgICAgIHN0cm9rZTogIzAwMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLm1hdC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgJi5tYXQtY2hlY2tib3gtY2hlY2tlZCxcbiAgICAmLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBvbmUgaXMgbW92ZWQgZG93biBoZXJlIHNvIGl0IGNhbiB0YXJnZXQgYm90aFxuICAvLyB0aGUgdGhlbWUgY29sb3JzIGFuZCB0aGUgZGlzYWJsZWQgc3RhdGUuXG4gIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgLy8gTmVlZHMgdG8gYmUgcmVtb3ZlZCBiZWNhdXNlIGl0IGhpZGVzIHRoZSBjaGVja2JveCBvdXRsaW5lLlxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTogMThweDtcblxuQG1peGluIG1hdC1jaGlwcy1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCwgMC4xKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJHRoZW1lKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWNvbG9yKCRwYWxldHRlKSB7XG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmFja2dyb3VuZCwgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLy8gVGhlIHByZXYvbmV4dCBidXR0b25zIG5lZWQgYSBiaXQgbW9yZSBzcGVjaWZpY2l0eSB0b1xuICAvLyBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSB0aGUgLm1hdC1pY29uLWJ1dHRvbi5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIsXG4gIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlLFxuICAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcbiAgICAmID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIC8vIE5vdGU6IHRob3VnaCBpdCdzIG5vdCB0ZXh0LCB0aGUgYm9yZGVyIGlzIGEgaGludCBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgdG9kYXkncyBkYXRlLFxuICAgIC8vIHNvIHdlIHVzZSB0aGUgaGludCBjb2xvci5cbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgYm9yZGVyLWNvbG9yOiBmYWRlLW91dCgkY29sb3IsICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBjb2xvciBkaWRuJ3QgcmVzb2x2ZSB0byBhIGNvbG9yIHZhbHVlLCBidXQgc29tZXRoaW5nIGxpa2UgYSBDU1MgdmFyaWFibGUsIHdlIGNhbid0XG4gICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgIC8vICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCwgYmVjYXVzZSBoaW50IHRleHQgdXN1YWxseSBoYXMgc29tZSBvcGFjaXR5IGFwcGxpZWRcbiAgICAgIC8vIHRvIGl0IGFscmVhZHkgYW5kIHdlIGRvbid0IHdhbnQgdGhlbSB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDI0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICAmOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKSB7XG4gICAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGUgdGhlIGhvdmVyIG9uIHRvdWNoIGRldmljZXMgc2luY2UgaXQgY2FuIGFwcGVhciBsaWtlIGl0IGlzIHN0dWNrLiBXZSBjYW4ndCB1c2VcbiAgLy8gYEBtZWRpYSAoaG92ZXIpYCBhYm92ZSwgYmVjYXVzZSB0aGUgZGVza3RvcCBzdXBwb3J0IGJyb3dzZXIgc3VwcG9ydCBpc24ndCBncmVhdC5cbiAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSlcbiAgICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4gIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBUaGlzIG1peGluIHdpbGwgZW5zdXJlIHRoYXQgbGluZXMgdGhhdCBvdmVyZmxvdyB0aGUgY29udGFpbmVyIHdpbGwgaGlkZSB0aGUgb3ZlcmZsb3cgYW5kXG4vLyB0cnVuY2F0ZSBuZWF0bHkgd2l0aCBhbiBlbGxpcHNpcy5cbkBtaXhpbiBtYXQtdHJ1bmNhdGUtbGluZSgpIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8vIE1peGluIHRvIHByb3ZpZGUgYWxsIG1hdC1saW5lIHN0eWxlcywgY2hhbmdpbmcgc2Vjb25kYXJ5IGZvbnQgc2l6ZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSBsaXN0XG4vLyBpcyBpbiBkZW5zZSBtb2RlLlxuQG1peGluIG1hdC1saW5lLWJhc2UoJHNlY29uZGFyeS1mb250LXNpemUpIHtcbiAgLm1hdC1saW5lIHtcbiAgICBAaW5jbHVkZSBtYXQtdHJ1bmNhdGUtbGluZSgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAvLyBhbGwgbGluZXMgYnV0IHRoZSB0b3AgbGluZSBzaG91bGQgaGF2ZSBzbWFsbGVyIHRleHRcbiAgICAmOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogJHNlY29uZGFyeS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gbm9ybWFsaXplcyBkZWZhdWx0IGVsZW1lbnQgc3R5bGVzLCBlLmcuIGZvbnQgd2VpZ2h0IGZvciBoZWFkaW5nIHRleHQuXG5AbWl4aW4gbWF0LW5vcm1hbGl6ZS10ZXh0KCkge1xuICAmID4gKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBwcm92aWRlcyBiYXNlIHN0eWxlcyBmb3IgdGhlIHdyYXBwZXIgYXJvdW5kIG1hdC1saW5lIGVsZW1lbnRzIGluIGEgbGlzdC5cbkBtaXhpbiBtYXQtbGluZS13cmFwcGVyLWJhc2UoKSB7XG4gIEBpbmNsdWRlIG1hdC1ub3JtYWxpemUtdGV4dCgpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC8vIE11c3QgcmVtb3ZlIHdyYXBwZXIgd2hlbiBsaW5lcyBhcmUgZW1wdHkgb3IgaXQgdGFrZXMgdXAgaG9yaXpvbnRhbFxuICAvLyBzcGFjZSBhbmQgcHVzaGVzIG90aGVyIGVsZW1lbnRzIHRvIHRoZSByaWdodC5cbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKSB7IH1cblxuQG1peGluIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZ3JpZC10aWxlLWhlYWRlcixcbiAgLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtaWNvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbi8vIFJlbmRlcnMgYSBncmFkaWVudCBmb3Igc2hvd2luZyB0aGUgZGFzaGVkIGxpbmUgd2hlbiB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4vLyBVbmxpa2UgdXNpbmcgYSBib3JkZXIsIGEgZ3JhZGllbnQgYWxsb3dzIHVzIHRvIGFkanVzdCB0aGUgc3BhY2luZyBvZiB0aGUgZG90dGVkIGxpbmVcbi8vIHRvIG1hdGNoIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbkBtaXhpbiBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDAlLCAkY29sb3IgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gRmlndXJlcyBvdXQgdGhlIGNvbG9yIG9mIHRoZSBwbGFjZWhvbGRlciBmb3IgYSBmb3JtIGNvbnRyb2wuXG4vLyBVc2VkIHByaW1hcmlseSB0byBwcmV2ZW50IHRoZSB2YXJpb3VzIGZvcm0gY29udHJvbHMgZnJvbVxuLy8gYmVjb21pbmcgb3V0IG9mIHN5bmMgc2luY2UgdGhlc2UgY29sb3JzIGFyZW4ndCBpbiBhIHBhbGV0dGUuXG5AZnVuY3Rpb24gX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICBAcmV0dXJuIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbn1cblxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuQG1peGluIHVzZXItc2VsZWN0KCR2YWx1ZSkge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tb3otdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1zLXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIHVzZXItc2VsZWN0OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGN1cnNvci1ncmFiIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuQG1peGluIGN1cnNvci1ncmFiYmluZyB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiBncmFiYmluZztcbn1cblxuQG1peGluIGJhY2tmYWNlLXZpc2liaWxpdHkoJHZhbHVlKSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG5cblxuXG5AbWl4aW4gbWF0LWlucHV0LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgICB9XG5cbiAgICAvLyBPbiBkYXJrIHRoZW1lcyB3ZSBzZXQgdGhlIG5hdGl2ZSBgc2VsZWN0YCBjb2xvciB0byBzb21lIHNoYWRlIG9mIHdoaXRlLFxuICAgIC8vIGhvd2V2ZXIgdGhlIGNvbG9yIHByb3BhZ2F0ZXMgdG8gYWxsIG9mIHRoZSBgb3B0aW9uYCBlbGVtZW50cywgd2hpY2ggYXJlXG4gICAgLy8gYWx3YXlzIG9uIGEgd2hpdGUgYmFja2dyb3VuZCBpbnNpZGUgdGhlIGRyb3Bkb3duLCBjYXVzaW5nIHRoZW0gdG8gYmxlbmQgaW4uXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3QgY2hhbmdlIGJhY2tncm91bmQgb2YgdGhlIGRyb3Bkb3duLCB3ZSBuZWVkIHRvIGV4cGxpY2l0bHlcbiAgICAvLyByZXNldCB0aGUgY29sb3Igb2YgdGhlIG9wdGlvbnMgdG8gc29tZXRoaW5nIGRhcmsuXG4gICAgQGlmIChtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyaykpIHtcbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1wcmltYXJ5LXRleHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZC10ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4gIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG5cbiAgLy8gPGlucHV0PiBlbGVtZW50cyBzZWVtIHRvIGhhdmUgdGhlaXIgaGVpZ2h0IHNldCBzbGlnaHRseSB0b28gbGFyZ2Ugb24gU2FmYXJpIGNhdXNpbmcgdGhlIHRleHQgdG9cbiAgLy8gYmUgbWlzYWxpZ25lZCB3LnIudC4gdGhlIHBsYWNlaG9sZGVyLiBBZGRpbmcgdGhpcyBtYXJnaW4gY29ycmVjdHMgaXQuXG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtJGxpbmUtc3BhY2luZyAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWxpc3QtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWxpc3Qtb3B0aW9uKTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24sXG4gIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0ge1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcblxuICAubWF0LWxpc3QtaXRlbSB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxpc3RcbiAgLm1hdC1saXN0LWJhc2Uge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVuc2UgbGlzdFxuICAubWF0LWxpc3QtYmFzZVtkZW5zZV0ge1xuICAgIC5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbWVudS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW1lbnUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICd0ZXh0Jyk7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAmLCAmOjphZnRlciB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcbiAgLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtOmhvdmVyLFxuICAubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1wYWdpbmF0b3Ige1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcGFnaW5hdG9yLFxuICAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICBmaWxsOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGxpZ2h0ZXIpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciwgLm1hdC1zcGlubmVyIHtcbiAgICBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiBjaXJjbGUge1xuICAgICAgc3Ryb2tlOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1yYWRpby1jb2xvcigkcGFsZXR0ZSkge1xuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbiAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbiAgJjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB0aGUgY2xhc3NlcyBhYm92ZSBhcmUgY29tYmluZWRcbiAgICAvLyAoZS5nLiBgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudGApIHdoaWNoIGluY3JlYXNlcyB0aGVpciBzcGVjaWZpY2l0eSBhIGxvdC5cbiAgICAvLyBUT0RPOiBjb25zaWRlciBtYWtpbmcgdGhlIHNlbGVjdG9ycyBpbnRvIGRlc2NlbmRhbnRzIChgLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tYnV0dG9uYCkuXG4gICAgJi5tYXQtcmFkaW8tZGlzYWJsZWQge1xuICAgICAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbiAgICAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgICAgIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAgIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgJi5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLm1hdC1zZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLWxlZnQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgICAkb3BhY2l0eTogMC42O1xuICAgICRiYWNrZHJvcC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkLCAkb3BhY2l0eSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tkcm9wLWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgLy8gV2UgdXNlIGludmVydCgpIGhlcmUgdG8gaGF2ZSB0aGUgZGFya2VuIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGV4cGVjdGVkIHRvIGJlIHVzZWQuIElmIHRoZVxuICAgICAgLy8gYmFja2dyb3VuZCBpcyBsaWdodCwgd2UgdXNlIGEgZGFyayBiYWNrZHJvcC4gSWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayxcbiAgICAgIC8vIHdlIHVzZSBhIGxpZ2h0IGJhY2tkcm9wLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW52ZXJ0KCRiYWNrZHJvcC1jb2xvcik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdGhlIGJhY2tkcm9wIGNvbG9yIHRvIGEgY29sb3IgdmFsdWUsIGZhbGwgYmFjayB0byB1c2luZ1xuICAgICAgLy8gYG9wYWNpdHlgIHRvIG1ha2UgaXQgb3BhcXVlIHNpbmNlIGl0cyBlbmQgdmFsdWUgY291bGQgYmUgYSBzb2xpZCBjb2xvci5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZHJvcC1jb2xvcjtcbiAgICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpIHtcbiAgJi5tYXQtY2hlY2tlZCB7XG4gICAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgICAvLyBPcGFjaXR5IGlzIGRldGVybWluZWQgZnJvbSB0aGUgc3BlY3MgZm9yIHRoZSBzZWxlY3Rpb24gY29udHJvbHMuXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc3BlY3NcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlLCAwLjU0KTtcbiAgICB9XG5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrOiBtYXBfZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC8vIENvbG9yIGh1ZXMgYXJlIGJhc2VkIG9uIHRoZSBzcGVjcyB3aGljaCBicmllZmx5IHNob3cgdGhlIGh1ZXMgdGhhdCBhcmUgYXBwbGllZCB0byBhIHN3aXRjaC5cbiAgLy8gVGhlIDIwMTggc3BlY3Mgbm8gbG9uZ2VyIGRlc2NyaWJlIGhvdyBkYXJrIHN3aXRjaGVzIHNob3VsZCBsb29rIGxpa2UuIER1ZSB0byB0aGUgbGFjayBvZlxuICAvLyBpbmZvcm1hdGlvbiBmb3IgZGFyayB0aGVtZWQgc3dpdGNoZXMsIHdlIHBhcnRpYWxseSBrZWVwIHRoZSBvbGQgYmVoYXZpb3IgdGhhdCBpcyBiYXNlZCBvblxuICAvLyB0aGUgcHJldmlvdXMgc3BlY2lmaWNhdGlvbnMuIEZvciB0aGUgY2hlY2tlZCBjb2xvciB3ZSBhbHdheXMgdXNlIHRoZSBgZGVmYXVsdGAgaHVlIGJlY2F1c2VcbiAgLy8gdGhhdCBmb2xsb3dzIE1EQyBhbmQgYWxzbyBtYWtlcyBpdCBlYXNpZXIgZm9yIHBlb3BsZSB0byBjcmVhdGUgYSBjdXN0b20gdGhlbWUgd2l0aG91dCBuZWVkaW5nXG4gIC8vIHRvIHNwZWNpZnkgZWFjaCBodWUgaW5kaXZpZHVhbGx5LlxuICAkdGh1bWItdW5jaGVja2VkLWh1ZTogaWYoJGlzLWRhcmssIDQwMCwgNTApO1xuICAkdGh1bWItY2hlY2tlZC1odWU6IGRlZmF1bHQ7XG5cbiAgJGJhci11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXNsaWRlLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkYWNjZW50LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRwcmltYXJ5LCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkd2FybiwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJpcHBsZS11bmNoZWNrZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRtYXQtZ3JleSwgJHRodW1iLXVuY2hlY2tlZC1odWUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFyLXVuY2hlY2tlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQsIDAuMik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIDAuMTIpO1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIDAuNyk7XG4gICRtYXQtc2xpZGVyLXRpY2stc2l6ZTogMnB4O1xuXG4gIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkd2Fybik7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXI6aG92ZXIsXG4gIC5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9O1xuICB9XG5cbiAgLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIElmIHRoZSB2YWx1ZSBpcyBhIGNvbG9yXG4gICAgLy8gKnR5cGUqLCB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmRcbiAgICAvLyB1c2luZyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmRcbiAgICAvLyB3aGVuIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLiBPdGhlcndpc2UsIGlmIGl0IHJlc29sdmVzIHRvIHNvbWV0aGluZyBkaWZmZXJlbnRcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSksIHdlIHVzZSB0aGUgY29sb3IgZGlyZWN0bHkuXG4gICAgQGlmICh0eXBlLW9mKCR0YWJsZS1iYWNrZ3JvdW5kKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkdGV4dC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgICR0ZXh0LW9wYWNpdHk6IG9wYWNpdHkoJHRleHQtY29sb3IpO1xuICAgICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgfVxuXG4gIC8vIFNldCBsYWJlbHMgdG8gY29udHJhc3QgYWdhaW5zdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCBwYWdpbmF0aW9uIGNoZXZyb25zIHRvIGNvbnRyYXN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gIH1cblxuICAvLyBTZXQgcmlwcGxlcyBjb2xvciB0byBiZSB0aGUgY29udHJhc3QgY29sb3Igb2YgdGhlIG5ldyBiYWNrZ3JvdW5kLiBPdGhlcndpc2UgdGhlIHJpcHBsZVxuICAvLyBjb2xvciB3aWxsIGJlIGJhc2VkIG9uIHRoZSBhcHAgYmFja2dyb3VuZCBjb2xvci5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1jb2xvcigkcGFsZXR0ZSkge1xuICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbn1cblxuQG1peGluIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcyB7XG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBhcHAtYmFyKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXM7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2xiYXIsXG4gIC5tYXQtdG9vbGJhciBoMSxcbiAgLm1hdC10b29sYmFyIGgyLFxuICAubWF0LXRvb2xiYXIgaDMsXG4gIC5tYXQtdG9vbGJhciBoNCxcbiAgLm1hdC10b29sYmFyIGg1LFxuICAubWF0LXRvb2xiYXIgaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cblxuXG5cblxuJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQ6IDIycHg7XG4kbWF0LXRvb2x0aXAtZm9udC1zaXplOiAxMHB4O1xuJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc6ICgkbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1mb250LXNpemUpIC8gMjtcblxuJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodDogMzBweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTogMTRweDtcbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc6XG4gICAgKCRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemUpIC8gMjtcblxuQG1peGluIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSkge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkbWF0LWdyZXksIDcwMCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGZpbGwgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMDUsIDAuMDIpKTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFdlIHVzZSBwZXJzcGVjdGl2ZSB0byBmaXggdGhlIHRleHQgYmx1cnJpbmVzcyBhcyBkZXNjcmliZWQgaGVyZTpcbiAgLy8gaHR0cDovL3d3dy51c2VyYWdlbnRtYW4uY29tL2Jsb2cvMjAxNC8wNS8wNC9maXhpbmctdHlwb2dyYXBoeS1pbnNpZGUtb2YtMi1kLWNzcy10cmFuc2Zvcm1zL1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nKSBzY2FsZSgkZm9udC1zY2FsZSkgcGVyc3BlY3RpdmUoMTAwcHgpXG4gIHRyYW5zbGF0ZVooMC4wMDFweCArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuXG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludCgkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHNlZW0gdG8gbWVhc3VyZSBmcm9tIHRoZSBlZGdlXG4gIC8vIG9mIHRoZSB0ZXh0IGl0c2VsZiwgbm90IHRoZSBlZGdlIG9mIHRoZSBsaW5lOyB0aGVyZWZvcmUgd2Ugc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbSAtICRsaW5lLXNwYWNpbmc7XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLiBXZSBhZ2FpbiBuZWVkIHRvIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nIHNpbmNlIHRoZSBtb2NrcyBtZWFzdXJlIHRvIHRoZSBlZGdlIG9mIHRoZVxuICAvLyB0ZXh0LCBub3QgdGhlICBlZGdlIG9mIHRoZSBsaW5lLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlIC0gKCRsaW5lLXNwYWNpbmcgKiAyKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpIHt9XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC42KSk7XG4gICRmb2N1c2VkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkcmVxdWlyZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcblxuICAvLyBVbmRlcmxpbmUgY29sb3JzLlxuICAkdW5kZXJsaW5lLWNvbG9yLWJhc2U6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZzogbnVsbCkge1xuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICAkY29uZmlnOiBtYXQtdHlwb2dyYXBoeS1jb25maWcoKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBDcmVhdGUgYSB0aGVtZS5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpO1xufVxuIiwiLyohIEpvaW50SlMgdjIuMi4xICgyMDE4LTExLTEyKSAtIEphdmFTY3JpcHQgZGlhZ3JhbW1pbmcgbGlicmFyeVxuXG5cblRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbkxpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbmZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4qL1xuLypcbkEgY29tcGxldGUgbGlzdCBvZiBTVkcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBzZXQgdGhyb3VnaCBDU1MgaXMgaGVyZTpcbmh0dHA6Ly93d3cudzMub3JnL1RSL1NWRy9zdHlsaW5nLmh0bWxcblxuSW1wb3J0YW50IG5vdGU6IFByZXNlbnRhdGlvbiBhdHRyaWJ1dGVzIGhhdmUgYSBsb3dlciBwcmVjZWRlbmNlIG92ZXIgQ1NTIHN0eWxlIHJ1bGVzLlxuKi9cblxuXG4vKiAudmlld3BvcnQgaXMgYSA8Zz4gbm9kZSB3cmFwcGluZyBhbGwgZGlhZ3JhbSBlbGVtZW50cyBpbiB0aGUgcGFwZXIgKi9cbi5qb2ludC12aWV3cG9ydCB7XG4gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uam9pbnQtcGFwZXIgPiBzdmcsXG4uam9pbnQtcGFwZXItYmFja2dyb3VuZCxcbi5qb2ludC1wYXBlci1ncmlkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi8qXG4xLiBJRSBjYW4ndCBoYW5kbGUgcGF0aHMgd2l0aG91dCB0aGUgYGRgIGF0dHJpYnV0ZSBmb3IgYm91bmRpbmcgYm94IGNhbGN1bGF0aW9uXG4yLiBJRSBjYW4ndCBldmVuIGhhbmRsZSAnZCcgYXR0cmlidXRlIGFzIGEgY3NzIHNlbGVjdG9yIChlLmcgcGF0aFtkXSkgc28gdGhlIGZvbGxvd2luZyBydWxlIHdpbGxcbiAgIGJyZWFrIHRoZSBsaW5rcyByZW5kZXJpbmcuXG5cbnBhdGg6bm90KFtkXSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiovXG5cblxuLyogbWFnbmV0IGlzIGFuIGVsZW1lbnQgdGhhdCBjYW4gYmUgZWl0aGVyIHNvdXJjZSBvciBhIHRhcmdldCBvZiBhIGxpbmsgKi9cblttYWduZXQ9dHJ1ZV06bm90KC5qb2ludC1lbGVtZW50KSB7XG4gICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblttYWduZXQ9dHJ1ZV06bm90KC5qb2ludC1lbGVtZW50KTpob3ZlciB7XG4gICBvcGFjaXR5OiAuNztcbn1cblxuLypcblxuRWxlbWVudHMgaGF2ZSBDU1MgY2xhc3NlcyBuYW1lZCBieSB0aGVpciB0eXBlcy4gRS5nLiB0eXBlOiBiYXNpYy5SZWN0IGhhcyBhIENTUyBjbGFzcyBcImVsZW1lbnQgYmFzaWMgUmVjdFwiLlxuVGhpcyBtYWtlcyBpdCBwb3NzaWJsZSB0byBlYXNpbGx5IHN0eWxlIGVsZW1lbnRzIGluIENTUyBhbmQgaGF2ZSBnZW5lcmljIENTUyBydWxlcyBhcHBseWluZyB0b1xudGhlIHdob2xlIGdyb3VwIG9mIGVsZW1lbnRzLiBFYWNoIHBsdWdpbiBjYW4gcHJvdmlkZSBpdHMgb3duIHN0eWxlc2hlZXQuXG5cbiovXG5cbi5qb2ludC1lbGVtZW50IHtcbiAgIC8qIEdpdmUgdGhlIHVzZXIgYSBoaW50IHRoYXQgaGUgY2FuIGRyYWcmZHJvcCB0aGUgZWxlbWVudC4gKi9cbiAgIGN1cnNvcjogbW92ZTtcbn1cblxuLmpvaW50LWVsZW1lbnQgKiB7XG4gICB1c2VyLWRyYWc6IG5vbmU7XG59XG5cbi5qb2ludC1lbGVtZW50IC5zY2FsYWJsZSAqIHtcbiAgIC8qIFRoZSBkZWZhdWx0IGJlaGF2aW9yIHdoZW4gc2NhbGluZyBhbiBlbGVtZW50IGlzIG5vdCB0byBzY2FsZSB0aGUgc3Ryb2tlIGluIG9yZGVyIHRvIHByZXZlbnQgdGhlIHVnbHkgZWZmZWN0IG9mIHN0cm9rZSB3aXRoIGRpZmZlcmVudCBwcm9wb3J0aW9ucy4gKi9cbiAgIHZlY3Rvci1lZmZlY3Q6IG5vbi1zY2FsaW5nLXN0cm9rZTtcbn1cbi8qXG5cbmNvbm5lY3Rpb24td3JhcCBpcyBhIDxwYXRoPiBlbGVtZW50IG9mIHRoZSBqb2ludC5kaWEuTGluayB0aGF0IGZvbGxvd3MgdGhlIC5jb25uZWN0aW9uIDxwYXRoPiBvZiB0aGF0IGxpbmsuXG5JbiBvdGhlciB3b3JkcywgdGhlIGBkYCBhdHRyaWJ1dGUgb2YgdGhlIC5jb25uZWN0aW9uLXdyYXAgY29udGFpbnMgdGhlIHNhbWUgZGF0YSBhcyB0aGUgYGRgIGF0dHJpYnV0ZSBvZiB0aGVcbi5jb25uZWN0aW9uIDxwYXRoPi4gVGhlIGFkdmFudGFnZSBvZiB1c2luZyAuY29ubmVjdGlvbi13cmFwIGlzIHRvIGJlIGFibGUgdG8gY2F0Y2ggcG9pbnRlciBldmVudHNcbmluIHRoZSBuZWlnaGJvcmhvb2Qgb2YgdGhlIC5jb25uZWN0aW9uIDxwYXRoPi4gVGhpcyBpcyBlc3BlY2lhbGx5IGhhbmR5IGlmIHRoZSAuY29ubmVjdGlvbiA8cGF0aD4gaXNcbnZlcnkgdGhpbi5cblxuKi9cblxuLm1hcmtlci1zb3VyY2UsXG4ubWFya2VyLXRhcmdldCB7XG4gICAvKiBUaGlzIG1ha2VzIHRoZSBhcnJvd2hlYWRzIHBvaW50IHRvIHRoZSBib3JkZXIgb2Ygb2JqZWN0cyBldmVuIHRob3VnaCB0aGUgdHJhbnNmb3JtOiBzY2FsZSgpIGlzIGFwcGxpZWQgb24gdGhlbS4gKi9cbiAgIHZlY3Rvci1lZmZlY3Q6IG5vbi1zY2FsaW5nLXN0cm9rZTtcbn1cblxuLyogUGFwZXIgKi9cbi5qb2ludC1wYXBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLyogUGFwZXIgKi9cblxuLyogIEhpZ2hsaWdodGluZyAgKi9cbi5qb2ludC1oaWdobGlnaHQtb3BhY2l0eSB7XG4gICAgb3BhY2l0eTogMC4zO1xufVxuLyogIEhpZ2hsaWdodGluZyAgKi9cblxuLypcblxuVmVydGV4IG1hcmtlcnMgYXJlIGA8Y2lyY2xlPmAgZWxlbWVudHMgdGhhdCBhcHBlYXIgYXQgY29ubmVjdGlvbiB2ZXJ0ZXggcG9zaXRpb25zLlxuXG4qL1xuXG4uam9pbnQtbGluayAuY29ubmVjdGlvbi13cmFwLFxuLmpvaW50LWxpbmsgLmNvbm5lY3Rpb24ge1xuICAgZmlsbDogbm9uZTtcbn1cblxuLyogPGc+IGVsZW1lbnQgd3JhcHBpbmcgLm1hcmtlci12ZXJ0ZXgtZ3JvdXAuICovXG4ubWFya2VyLXZlcnRpY2VzIHtcbiAgIG9wYWNpdHk6IDA7XG4gICBjdXJzb3I6IG1vdmU7XG59XG4ubWFya2VyLWFycm93aGVhZHMge1xuICAgb3BhY2l0eTogMDtcbiAgIGN1cnNvcjogbW92ZTtcbiAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICAgY3Vyc29yOiAtbW96LWdyYWI7XG4vKiAgIGRpc3BsYXk6IG5vbmU7ICAgKi8gICAvKiBzZXR0aW5nIGBkaXNwbGF5OiBub25lYCBvbiAubWFya2VyLWFycm93aGVhZHMgZWZmZWN0aXZlbGx5IHN3aXRjaGVzIG9mIGxpbmtzIHJlY29ubmVjdGluZyAqL1xufVxuLmxpbmstdG9vbHMge1xuICAgb3BhY2l0eTogMDtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saW5rLXRvb2xzIC50b29sLW9wdGlvbnMge1xuICAgZGlzcGxheTogbm9uZTsgICAgICAgLyogYnkgZGVmYXVsdCwgd2UgZG9uJ3QgZGlzcGxheSBsaW5rIG9wdGlvbnMgdG9vbCAqL1xufVxuLmpvaW50LWxpbms6aG92ZXIgLm1hcmtlci12ZXJ0aWNlcyxcbi5qb2ludC1saW5rOmhvdmVyIC5tYXJrZXItYXJyb3doZWFkcyxcbi5qb2ludC1saW5rOmhvdmVyIC5saW5rLXRvb2xzIHtcbiAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIDxjaXJjbGU+IGVsZW1lbnQgdXNlZCB0byByZW1vdmUgYSB2ZXJ0ZXggKi9cbi5tYXJrZXItdmVydGV4LXJlbW92ZSB7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBvcGFjaXR5OiAuMTtcbn1cblxuLm1hcmtlci12ZXJ0ZXgtZ3JvdXA6aG92ZXIgLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlIHtcbiAgIG9wYWNpdHk6IDE7XG59XG5cbi5tYXJrZXItdmVydGV4LXJlbW92ZS1hcmVhIHtcbiAgIG9wYWNpdHk6IC4xO1xuICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1hcmtlci12ZXJ0ZXgtZ3JvdXA6aG92ZXIgLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlLWFyZWEge1xuICAgb3BhY2l0eTogMTtcbn1cblxuLypcbkV4YW1wbGUgb2YgY3VzdG9tIGNoYW5nZXMgKGluIHB1cmUgQ1NTIG9ubHkhKTpcblxuRG8gbm90IHNob3cgbWFya2VyIHZlcnRpY2VzIGF0IGFsbDogIC5tYXJrZXItdmVydGljZXMgeyBkaXNwbGF5OiBub25lOyB9XG5EbyBub3QgYWxsb3cgYWRkaW5nIG5ldyB2ZXJ0aWNlczogLmNvbm5lY3Rpb24td3JhcCB7IHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4qL1xuXG4vKiBmb3JlaWduT2JqZWN0IGluc2lkZSB0aGUgZWxlbWVudHMgKGkuZSBqb2ludC5zaGFwZXMuYmFzaWMuVGV4dEJsb2NrKSAqL1xuLmpvaW50LWVsZW1lbnQgLmZvYmoge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uam9pbnQtZWxlbWVudCAuZm9iaiBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xufVxuLmpvaW50LWVsZW1lbnQgLmZvYmogZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcbn1cblxuLyogUGFwZXIgKi9cbi5qb2ludC1wYXBlci5qb2ludC10aGVtZS1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxOTFiO1xufVxuLyogUGFwZXIgKi9cblxuLyogIExpbmtzICAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAuY29ubmVjdGlvbi13cmFwIHtcbiAgICBzdHJva2U6ICM4RjhGRjM7XG4gICAgc3Ryb2tlLXdpZHRoOiAxNTtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogbW92ZTtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLmNvbm5lY3Rpb24td3JhcDpob3ZlciB7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IC40O1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAuY29ubmVjdGlvbiB7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLmxpbmstdG9vbHMgLnRvb2wtcmVtb3ZlIGNpcmNsZSB7XG4gICAgZmlsbDogI0YzMzYzNjtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLmxpbmstdG9vbHMgLnRvb2wtcmVtb3ZlIHBhdGgge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubGluay10b29scyBbZXZlbnQ9XCJsaW5rOm9wdGlvbnNcIl0gY2lyY2xlIHtcbiAgICBmaWxsOiBncmVlbjtcbn1cbi8qIDxjaXJjbGU+IGVsZW1lbnQgaW5zaWRlIC5tYXJrZXItdmVydGV4LWdyb3VwIDxnPiBlbGVtZW50ICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5tYXJrZXItdmVydGV4IHtcbiAgICBmaWxsOiAjNTY1MkRCO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubWFya2VyLXZlcnRleDpob3ZlciB7XG4gICAgZmlsbDogIzhFOENFMTtcbiAgICBzdHJva2U6IG5vbmU7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5tYXJrZXItYXJyb3doZWFkIHtcbiAgICBmaWxsOiAjNTY1MkRCO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubWFya2VyLWFycm93aGVhZDpob3ZlciB7XG4gICAgZmlsbDogIzhFOENFMTtcbiAgICBzdHJva2U6IG5vbmU7XG59XG4vKiA8Y2lyY2xlPiBlbGVtZW50IHVzZWQgdG8gcmVtb3ZlIGEgdmVydGV4ICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5tYXJrZXItdmVydGV4LXJlbW92ZS1hcmVhIHtcbiAgICBmaWxsOiBncmVlbjtcbiAgICBzdHJva2U6IGRhcmtncmVlbjtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlIHtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgICBzdHJva2U6IHdoaXRlO1xufVxuLyogIExpbmtzICAqL1xuLyogUGFwZXIgKi9cbi5qb2ludC1wYXBlci5qb2ludC10aGVtZS1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLyogUGFwZXIgKi9cblxuLyogIExpbmtzICAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAuY29ubmVjdGlvbi13cmFwIHtcbiAgICBzdHJva2U6ICMwMDAwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiAxNTtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogbW92ZTtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLmNvbm5lY3Rpb24td3JhcDpob3ZlciB7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IC40O1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAuY29ubmVjdGlvbiB7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLmxpbmstdG9vbHMgLnRvb2wtcmVtb3ZlIGNpcmNsZSB7XG4gICAgZmlsbDogI0ZGMDAwMDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLmxpbmstdG9vbHMgLnRvb2wtcmVtb3ZlIHBhdGgge1xuICAgIGZpbGw6ICNGRkZGRkY7XG59XG5cbi8qIDxjaXJjbGU+IGVsZW1lbnQgaW5zaWRlIC5tYXJrZXItdmVydGV4LWdyb3VwIDxnPiBlbGVtZW50ICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5tYXJrZXItdmVydGV4IHtcbiAgICBmaWxsOiAjMUFCQzlDO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAubWFya2VyLXZlcnRleDpob3ZlciB7XG4gICAgZmlsbDogIzM0NDk1RTtcbiAgICBzdHJva2U6IG5vbmU7XG59XG5cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLm1hcmtlci1hcnJvd2hlYWQge1xuICAgIGZpbGw6ICMxQUJDOUM7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5tYXJrZXItYXJyb3doZWFkOmhvdmVyIHtcbiAgICBmaWxsOiAjRjM5QzEyO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cblxuLyogPGNpcmNsZT4gZWxlbWVudCB1c2VkIHRvIHJlbW92ZSBhIHZlcnRleCAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAubWFya2VyLXZlcnRleC1yZW1vdmUge1xuICAgIGZpbGw6ICNGRkZGRkY7XG59XG4vKiAgTGlua3MgICovXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0by1saWdodCc7XG4gICAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R1JnQUJBQUFBQUhoZ0FCTUFBQUFBM0h3QUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUJxQUFBQUJ3QUFBQWNhTGU5S0VkRVJVWUFBQUhFQUFBQUhnQUFBQ0FCRmdBRVIxQlBVd0FBQWVRQUFBbzFBQUFSd3RLWDBCSkhVMVZDQUFBTUhBQUFBQ3dBQUFBd3VQKzQvazlUTHpJQUFBeElBQUFBV1FBQUFHRFgwbmVyWTIxaGNBQUFES1FBQUFHSkFBQUI0aGNKZFdKamRuUWdBQUFPTUFBQUFEb0FBQUE2RHZvSXRtWndaMjBBQUE1c0FBQUJzUUFBQW1WVHRDK25aMkZ6Y0FBQUVDQUFBQUFJQUFBQUNBQUFBQkJuYkhsbUFBQVFLQUFBWE1vQUFLM0VzRS9Bc1dobFlXUUFBR3owQUFBQU1nQUFBRFlPQ0NISWFHaGxZUUFBYlNnQUFBQWdBQUFBSkE5aENCTm9iWFI0QUFCdFNBQUFBa0VBQUFPa245Wmg2V3h2WTJFQUFHK01BQUFCeUFBQUFkVGt2ZzE0YldGNGNBQUFjVlFBQUFBZ0FBQUFJQUlHQWV0dVlXMWxBQUJ4ZEFBQUJEQUFBQXhHWXFGaVlYQnZjM1FBQUhXa0FBQUI3d0FBQXRwVEZvSU5jSEpsY0FBQWQ1UUFBQURCQUFBQk9VVm5DWGgzWldKbUFBQjRXQUFBQUFZQUFBQUd1Y2xYS1FBQUFBRUFBQUFBekQyaXp3QUFBQURKS3JBUUFBQUFBTk5QYWtoNDJtTmdaR0JnNEFOaUNRWVFZR0pnQk1JWFFNd0M1akVBQUE1Q0FSc0FBSGphZmRkcmpGVGxIY2Z4UCtLQ0FsMVhiS0xoUlducVVtcHAxWWJhNEdYVjFrdFhLMjFkYnkwZXJadW1pV21GWkx1Tk1hUVFFbGdXSjAwbXROeFJRTVhMY250ejNHVUlqc1ljTmlFbUU1UE5ob0ZsMkdRZ3pLdkp2T25MSms0L000RGlHekw1N3Yvc3pKem4vUDYvNTNlZTgwek1pSWc1Y1hjOEdOYzkrdmhUejBibmEvMy9XQlVMNG5ydlI3TVpyYyt2UHA3eHQ3LzhmVlhjMERwcWMzMWMxNjQzeEl5dS9lMXZ2aHBUTVRXakhsUFgvWFhtYlhpM283dGpiTlkvTzdwbnZUdjdsZG03YnZoOVIvZU5LenE2NThTYzM4NStaZWE3YzkrYXZXdmVuczdiWnRRN3hqcS91T2w2citmVkxaMWZYUDV2dXF1cjY5ODNiZW5xYW8wNTg3YU83dGJmOXRIWU42L1crTis4WEtmOW1yZW5vN3MxenBWWGU3ejI2K3JqUzY5NWUyYmUxaHEzcGZ2UzM5Yi83WGNlalRuTnZ1aHFkc1ROelo2WXI5N2kvKzdtbDdGSVhhd3V3VkxjZy90aVdkeVBIaTQrckQ3Vy9EeCszUnlKWGp5QlovQWNWaGxyTmRaaXZYRTJZQWdiTVl4TmVCTTVZMjdGTm16SER1ekVidXh6amZlTXZ4L3Y0d044aUk4d2dnT3VjeENIY0JoSGtHSVVZemlLQW83aE9ESmpubERIalh1S3JqS205SHNPMDQ2ck9JK0Z1aS9ydkt6enNzN0xPaS9yc3FiTG1pNXJ1cXpwc2taOW1mb3k5V1hxeTlTWHFTOVRYNmF1UmwyTnVocDFOZXBxMU5Xb3ExRlhvNjVHWFkyNkduVTE2c3JVMVdKSnpLSm5ManJiY3pKSXpUZzE0OVNNVXpOT3pYZ3NhL2JHZmJpL21ZK2U1dXZ4c09NVnpYWHhZck1VTDZrcm5idkt1WVBxYW5XTnVsYk5PWGNydG1FN2RtQW5kbU9mY1RKMVhEM2x1MldjZHQ0Wm5FV2w3ZE1nbndiNU5CZ1gvZjhEYW5za3FFSnhEOFU5a2pRb1JZTlNWSkdneW1XbFd5aXR4UVBOazlRbThXQnprdUl0VlBaUTJFTmRLeVVWS2FsSVNVVktLbEpTa1pLS2xGUW9TNmhLcU9taHBqVnJneFQxVU5SajlscEtldUtWbUNXUGM1cDdZNjdhaWE3bUkvemJRczBqMU95Tjd6VkhZeUZ1bDk3dTVnUjFlL2s2d2RlSnVMUDVHbThuZURzaDA1dk45bWF6dmRsc2I0NG5tOVg0VGZPTmVOcTVmWGpHZTgrcXo2blBxeTgwdDhjZnFQeWo0eFhONlVnY3Y2UyszQ3pFU2pwVzBUQ292dUh6MVk3WE9GNnJybmY5RFJqQ1JneGpFOTVFam82dDJJYnQySUdkMkkzM1hIYy8zc2NIK0JBZllRUUhjQkNIY0JoSGtPSmoxeDVWeDNBVUJSekRjWHppc3lJK3hXZklYT09FOTAvUldNWnBlczlnaW85blZYUEs5VWRrWVlzc2JKR0ZMWEhSZTkyeThLVVpxTXJDbC9FZGVlNVV1eVJxUG03eC9pSXNhdzdKdzRRc1ZHWGhpQ3lrc2pBUnYvVDlmcXgwemlEV1lMM3ZiTUFRTm1JWW0vQW05amwzSEtkOTd3eW1YT09zV3NFNXh4ZlZuMUhVUjAwZkpYMnlVSW5idmR2dDdNVllnanU5bHFyM3RKWGw0bDVuM3NmLys1c1pkUU9VN1RXbkJmTnBMbzJ4eWhpRDZtcDFqYnBXelRsM0s3WmhPM1pnSjNiakxlTzlqVDNZMjc3SEJ2aGJwWHlBdnhYK1ZuVFFwNE0rNnZ1bzcrTnJoYThWdmxaMDBSYzNVdDd2eXYydTJ1K0svYzdzZDJhL2IvYjdacjl2OXNkZG5NOXh1NWZidmR6T3lYc203NW04TCtSOFRzYnZrT3RVcmxPNVR1VTVrK2RNbmxONXp1UTVsZWRNampOWnpiaWY0MzZPK3pudTU3aWY0MzZPK3prNVMrVXNsYk5VemxJNVMrVXNsYk5NemxJNVMrVXNsYk5VemxJNVMrVXNrN05NempJNXkyUXNOV3U5WnF2WC9UcUhPMTFXci9tNHhmRWlyTWNHREdFamhyRUpiMkxLOTg3aHA5dzUrYTA1dlRLZnYyNWUwT3NGdlY1d0QwL284NEllTDdoWEMrWjAzRm81Ymw3SE9YdVNzeWM1ZS9LYWMzbkF1UWR4Q0lkeEJDbEdNWWFqS09BWWpxTTF6eWZVVThZdFl4cFZuTWV2WXRaWEV6RVhuZWlLZTNTeE1PYXJ0K3VwVzY0WFl3bVc0aDRzYTc0Z21YMlMrYnBrTHBQTVBoMU82M0JhaDlPNm05YmR0TTdlMGRrUm5iMFRLNDI5eXJpRDZtcDFqYnBXemZsOEs3WmhPM1pnSjNaam43RVBHT2NnRHVFd2ppREZLTVp3RkFVY3czRmt6anVoamp2M2xQSExPTzFhWnpDbHA3TnFCZWNjVC91c2l2TzQ2TDA3elB5d21iL1Z6TjlxNW9mTi9MQ3M5bG1IU3pxczZyQ3F3Nm9PcXpxc1NzV3dWQXhMeGJCVURFdkZzRlFNUzhXd3RiRmtiU3haRzB2V3hwSzFzV1J0TEZrYlM3cXE2cXFxcTZxdXFycXE2cXFxcTZxdXFycXE2cXFxcTZxdVduTlhsYkpicFl3dWN6SnBUaWJOeWFRNW1UUW5rK1prd29wUjVlY2tQeWY1T2NuUFNYNU84bk9TbjVOV2dLb1ZvR29GcUZvQnFyeWFqR2Urdmxkdi90YjltcmhmRTFjYWF0K3ZpOVVsdUxPNTFCV0hYSEVvSHZ2cWZ6enA1a2szVDdvOWwrNTFIeWZ1NDRRLzNlN2poRWZkN3VQRWMra2g5M0lpRWIwU01lQzU5R2VwNlBWY0dwS0tYdmQ0SWhXOUV0Rjd6WHM5NS90YnNRM2JzUU03c1J2djBiTWY3K01EZklpUE1JSURkQnpFSVJ6R0VhVDQySFZIMVRFY1JRSEhjQnlmK0t5SVQvRVpNdGM0NGYxVE5KWnhaYjJZUmhYbjhmRGxKMy94cWlkL25yTTF6dVk1VzdRQy9wQ2pSVTd1bDZwUkR0WTVXT2RnbllPN09WZm5XcDFqWnk0L3NXdnRKL1pxOWRMVHVzYWhJb2VLSENweXFNaWhJb2VLSENwSzNhalVqVXJkcU5TTlN0Mm8xSTFLM1NnWDZseW9jNkhPaFRvWDZseW9jNkRPZ1RvSDZoeW9jNkRPZ2JwdTY3cXQ2YloyMVpNM2Y5V1RONi83bXU1cnVxKzFuN3d2YzJBQkJ3WTRzSUFEQ3pqd09nY1NEcnpPZ1FIWnlzdFd2dTFFYTNWWjVMMHJLOHlsZkYxYVpTN3RmUkx1Sk54SnVQT0NmT1hsSzgrbFJMN3luRXJrSzgrdGY4bFhYcjUyeWRlSWZLMlRyMTBjWE1EQmhJTUxaQ3pQeFlTTEM3aVljSEdBaXdOY0hPRGlBQmNIdURqQXhZRnJya3JYM3ZNa0hFNDRuSEE0NFhEQzRVVE84bHhPdUp4d09lRnl3dVdFeTRtYzVlVXNMMmQ1T2N0ZlhzRVN6aWVjdDlPazl3eW0rSGRXcmVDYzQybWZWWEVlRjczM0V5Nm5sMTB0Y0xUQTBRSTNDOXdzY0xMRXlSSW5TOXdyY2E3RXRUTEhKampWV3B0VDdxU2NTWFZmMEgxQjl3WGRGM1JmMEgxQjl3VWRsblJZMG1GSmh5VWRsblJZMGwxSmR5WGRsWFJYMGwxSmR5WGRGSFJUMGsycW01VHFsT3FVNmxRNlpyWHVGSFJpaFFTOTJQd3ZOVFg3bTZLOVRkRytwbWhQVXJRbktkcVRGTzFKaXZZaHhmaXVNMGVjT1dKdlYzUDJpT2ZSWnMranVtZlJadnUzbXRFYVVwQVpyV0V2MXhweHhJZ2pSaHd4NG9nUlI0dzRZc1FSSTQ3RVRYSzdYR2FYVTdXOG5kbFdYbGM2SHNRYW5NWVpYSnFINWVaaGVYc2VMcXJ6K1p2eE4rTnZheGZUMnNGa3ZNcDRsZkVxNDFYR3E0eFhyVjFKeHF1TVZ4bXZNbDVsdkdydFFyS1k1OXJyWEh0ZCs1bHpyV2ZJbE8rY3cvZmRiWVd2ejdyRjhhTDJmRGZvYWREVG9LZEJUMFBpQ3hKZmtQaUN4QmNrdmlEeEJZbHZ6V3VEMWdhdERWb2J0RFpvYmREYW9MVkJhNFBXQnEwTldodTBOcjVXY1AzWHU2VXJPNkVaOFNvLzUrcW0wNDdpWnY1NGFzV2lXQncvaWgvYjU5NFZkOGZTK0xsbjhDK3NHZmY2TFg5L1BPQzMwSVB4a0RYMHNYZzhub2duNDZuNFhUd2RmWjVSejhienNTSmVqQ1JlaWorWmxWVXhZRjVXbTVlMXNUNDJ4RkJzREUvZXlNVi9ZbXRzaSsyeEkzYkdXL0YyN0ltOWZyMi9FKy9GL25nL1BvZ1A0NlB3V3owT3hlRTRFaC9IYUl6RjBTakVzVGdlbjhjSnY4aFBSZGxjbjdGYk9HdU96OFYwVk9OOFhQdy9mcHB3aWdBQUFIamFZMkJrWUdEZ1l0QmgwR05nY25IekNXSGd5MGtzeVdPUVlHQUJpalA4L3c4a0VDd2dBQUNleWdkcmVOcGpZR1lSWnRSaFlHVmdZWjNGYXN6QXdDZ1BvWmt2TXJneE1YQXdNL0V6TXpFeHNUQXpNVGN3TUt4M1lFandZb0NDa3NvQUh5REYrNXVKcmZCZklRTUR1d2JqVWdXZ0FTQTU1dCtzSzRHVUFnTVRBQnZDRE1JQUFBQjQybU5nWUdCbWdHQVpCa1lHRUxnRDVER0MrU3dNQjRDMERvTUNrTVVEWlBFeTFESDhad3htckdBNnhuUkhnVXRCUkVGS1FVNUJTVUZOUVYvQlNpRmVZWTJpa3VxZjMwei8vNFBONFFYcVc4QVlCRlhOb0NDZ0lLRWdBMVZ0Q1ZmTkNGVE4vUC9yL3lmL0QvOHYvTy83aitIdjZ3Y25IaHgrY09EQi9nZDdIdXg4c1BIQmlnY3REeXp1SDc3MWl2VVoxSVZFQTBZMmlOZkFiQ1lnd1lTdWdJR0JoWldObllPVGk1dUhsNDlmUUZCSVdFUlVURnhDVWtwYVJsWk9Ya0ZSU1ZsRlZVMWRRMU5MVzBkWFQ5L0EwTWpZeE5UTTNNTFN5dHJHMXM3ZXdkSEoyY1hWemQzRDA4dmJ4OWZQUHlBd0tEZ2tOQ3c4SWpJcU9pWTJMajRoTVltaHZhT3JaOHJNK1VzV0wxMitiTVdxTmF2WHJ0dXdmdU9tTGR1MmJ0KzVZKytlZmZzWmlsUFRzdTVWTGlyTWVWcWV6ZEE1bTZHRWdTR2pBdXk2M0ZxR2xidWJVdkpCN0x5Nis4bk5iVE1PSDdsMi9mYWRHemQzTVJ3Nnl2RGs0YVBuTHhpcWJ0MWxhTzF0NmV1ZU1IRlMvN1RwREZQbnpwdkRjT3g0RVZCVE5SQURBRVhZaW84QUFBQUFBQVA3QmFrQVZ3QStBRU1BU1FCTkFGRUFVd0JiQUY4QXRBQmhBRWdBVFFCVkFGc0FZUUJvQUd3QXRRQlBBRUFBWlFCWkFEc0FZd1VSQUFCNDJsMVJ1MDViUVJEZERROERnY1RZSURuYUZMT1prTVo3b1FVSnhOV05ZbVE3aGVVSWFUZHlrWXR4QVI5QWdVUU4ycThab0tHa1NKc0dJUmRJZkVJK0lSSXphNGlpTkRzN3MzUE9tVE5MeXBHcWQrbHJ6MVBuSkpEQzNRYk5OdjFPU0xXekFQZWs2K3VOakxTREIxcHNadlRLZGZ2K0N3YWIwWlE3YWdEbFBXOHBEeGxOTzRGYXRLZiswZndLaHZ2OEgvTTdHTFEwMC9UVU9nbnBJUVRtbTNGTGcrOFp6YnJMRC9xQzFlRmlNRENrbUtiaUxqK21VdjYzTk9kcXk3QzFrZEc4Z3pNUitjazBRRk5yYlFTYS90UWgxZk54RkV1UXk2YXhOcGlZc3Y0a0U4R0Z5WFJWVTdYTStOckJYYkt6NkdDREtzMkJCOWpEVm5rTUhnNFBKaFRTdHlUS0xBMFI5bUtyeEFnUmt4d0tPZVhjeWY2a1FQbElFc2E4U1VvNzQ0YTFCc2FSMThDZ05rK3ovenliVFcxdkhjTDRXUnpCZDc4WlN6cjR5SWJhR0JGaU8ySXBnQWxFUWtaVitZWWF6NzBzQnVSUys4OUFsSURsOFk5L25RaTA3dGhFUEplMWRRNHhWZ2g2ZnR2YzhzdUt1MWE1em90Q2QyK3FhcWpTS2MzN1hzNit4d09lSGd2RFFXUEJtOC83L2txQitqd3NyalJvRGdSRGVqZDYvNksxNm9pcnZCYytzaWZUdjdGYUFBQUFBQUVBQWYvL0FBOTQyc1I5QjJBYjE1SDJ2bDBzT2hhNzZBQkpnQ2dFU0lJRVNJQUVDUFlxaWsya1NGRWlxUzVSbmFxMmJNbmRsbnZOSlU3YzI3bktqcE5ka083bFpQdEsydVhTTE9mdWtseHl5ZDBmM085YzdEZ1hSeElKL2ZQZUFpUkZTeTczTjlra3RvRFllVFB6WnI2Wk4yOUEwVlFuUmRHVDdDakZVQ29xSWlFcTJwaFdLZGpmeFNRbCs3UEdORVBESVNVeCtES0xMNmRWeXNMWnhqVEMxK09DVnlqeEN0NU91amdiUVBkbWQ3S2pwNS9yVlB3OUJSOUp2WC8yUTNTY1BVNEpsSWRhUWFXTkZCV1dXSDBtYmFhcE1CS0xveUoxVXRKYU0vaG4ycXFsMUdISlpNaUlwcWhZRUplc2NPU0tTVjRVbHF3bXdTUVoyVlNLa3N5c1lCSmRxYXJxWkUwekhZKzVhYXVGby8yK29GbUlDM0NrOGtlWTl6bW56MnIydTR4R2w5OWNtb2h0cEJrbDB3RS85R0QrcXNYbjRoSk1IZDA3OTJKa2VIUkRLclZoZEJqVCt6THpPcDBBZXJXVWxhcWlZSUJVV05USFoxUjZTcU1JaTZZWUVtMkVab2JQaUF3djZZQTJqczlJZGhTbXFxb3hDU29PQVRHaGtvWERsMGMxTkdmaWVCcDVja2VNNGlvVXpyNzdrR0N4Q0EvTkh4RitqVkdVWWpVOFAwSFZveUVxSFFOK2lTWHh0Qkhva0hoelBENVRvNGdaRGVGcDFwT3NDOWpqVW8weU14Mm9xSXdIN0xFWnJZcmNVcnBUOWZpV0ZtN3BCSk1UYmlHeElTcVduWlJLakpsMFNaazJQTjFhNHRQQUIvT1NHUVpnTTJha1JoUVdFNjVYbXgvN3d3OHBhMWdyeGlLY3FEOGhSZFNuV0pFLzhXcnpiWCtZSXRkTmNCMytMSXl2bTNqSnFUNGx4dmhwTnFZM3c0UEpieDMrTFViNGFTSENtL0V6cHQwbFRyanVJYjhEK0xjWTVxY3J3aWI1YlpYa2JmQWg4ZndmSnNrVmVFOGRmczkwS3YvT2VueWRvZEw2Y0FUK29WWXJxOVRwZVJpaDJ4TUlWMVJHWXZGa1hhbytjcjUvWXFzTHk2Y1J0YUM0Mlp0TTJPUG1adFNBR0s4NUhyTmFWRXhjcFF6NUdUaFdlUm1RV1cxTjB1eGxPQlJHWmpncjhacTlZelR6TDZ1eWMwcEYrVCtOSzV5bThHWlV2VGxjak1iL1hjbVd2YkhxZjNqWTdIOXRLdWZNYUN6N0QyT3NVd2h2ZW8wVFVBSlZyOHIrQS9vTnE5WHk2SzZRRDZHSHpaWnNBL29iajFxUjNRN24yWU91eW15OUlLZ1U2TDdzVnJzSi9hMmhIdDFGd1N4OE1IdEs0VmNlb3hxb1pkUks2bStwdEJWcklreUtkazFHRElKQWg2TWlmMUpxRkRKaUl5L1ZnUlJyT0JCM1RaMDZQTE9TbzRwQldVTXhzWWFYK3VGV1JNaElJN0tBVy81ajloa3NTSVVZQWttNlRraHQ3Q25SZG9LZHRyYlpnTXNoZnJvZzVBS21CL0Z2c1kyZmJzZlhHV3JhNWdxMUViYS9hTFc1Q29KdDdRdWNsUnBCQ0tJeUplbnE0Rldia2xiV3dHdDNTdXdYUkg5S2pKZ2tyeHRtYmxWMUMwckFoRlhZelJHbUZpWnZDOEl5VUxtUlhhWDAreUowaUhHemVESWJFZVo4TW9MTUZqZHROM01NYW9iM3cvMEhDL1NDcGpCVTJ6MlI4aTY3ZmtkcjdjNTd0bWlRMFZpaTMvRmdtMTNMNjh0YU4zYTRxN2FNOTljVk4rNS9mS2NlR1EwbCttUHZqRmF1Mko0cVduSHhpaEJLRGwrenBySm05ZjdtNTB1Tk5sOXB3TVhRdDlscVI0NnU3ejYyczRYNU9tZit2bXFnMVM5NHk0THMzRXRHWDFudDhnMU5ZdzllMHMzKzFHRCtzM0tTK1gzTDJ0YUloYTVWVkE5c09mUFhiTjNhSTEyZDY5c3J6QlRGVXVObmY4OSttMzJGTWxNaHNCMmRNSmUvVEtWTFlRYW5XN0haNjJVejZRcVFZcHJGazluUFptWldKVnBaUTFoYUJZZE9Jemwwc2hra2poTUxZekZtUkFzdnVVRitXampVOGxJMUhIYkJZUmN2RGNKaEEwemJDWGgxV3dSVDJzaVdwbElwYWJBTGpoT3RsU2xzS1ZmMWd0RnNxSWJMZmljY2Fha1VXRTN6T1ZZelFpZUJ4L0ZZTTQwWjdQZHh0SmtJQlNuOTZEUGVPQjRkUHREU3NuK2txbnJWdnVhV0E4UFJ3VURUY0NReTBoSUl0SXhFSXNOTmdUS0ZVV25pdXM3ODNtQ2pWMWF0UE5BSzc0NVdqK3h2YWptNHNtcEZvSGs0R2hscENnU2E0TjBqelFIRndNUXRheU9SdGJkTWpOK01YMjhlSHp6UTdmTjFIeGdjUE5EajgvVWNPRFBKM3FQV250NWxRbU1UdDZ5TFJOYmhkMDVFSWhQd3p2M0x2ZDdsK3djSER5MzMrWllmQWp1Njkrd0g3R0dRUlNzMVRGMUhwZU5ZQ28xWUNzdFVtYlFCQzhBTkIyNEQyRUxLYmRPQUx4b2hYRzhEbjlQR1MycmdxeC9tbGg5TUhCeWF3TnFEdFN2SGN3bXMvU3A0ZGZvRjA0eUJiVnkySW1CUGlTWkI3RXVKNWFaMHFEcEplTzllQnJjcGRYVVMzNWE1RGdwZG0rT3BYWWsxUGhpS01KaVRWb3ZORGx4UFlzWnpTSVdkUmhSeHpHS21KMUV3eERGN2E5ZGQzZHZUVTdQNXhwR3V5OVltYVU3dk1LZzVSdVZ2SEc5czJyYThkUFZhOUsxSVVrM3I5U202cXdWVnJ6VTUrQjlGOWwzN2xaVURYNzFrK2RiR3pZZnJsMTk5WUgwb1c2NWtPL2YybDZHTGVtL2NQMVk0ZlAvWThzc200dEdoWFNsR3dScDBCVjNONFdEWGhycFY5NDlsbTNvZjdUTVlOMzF2ZmZaZHRmSHZheWZhQXZHdGY3Rmw4UEJneU5zd1dJMytubFVWRFcwK0NLNkxRdGgzSWdQeG5YN1pjK2JjSmhKMWVaOUpmdlJMbmVXOGgxemtGK0h6dnBIOWtFYktBc29KTXdxSkx2SVpCdmo3QXZudk1VdnROckRlU3VDZ0NSOFpVWVQ1aHJ0dGFqQnNVRjEyeFJXWHE3anc0RlNibTc3aHlMLys4dGRIQzFSR3JlNXZzbXYvL2QreWEvOWFweldxWFVmLzlaZS9ndWRNWmo5RUw1SG5KT1RuYUUrS1ZHekdJSnRSQXkreHNncmdCMHNHTGN3d1dtMEhLWXVzSURMWXJ0bHJrZ2xUYlEwZENvWnFXcENid1ZOR0ZRcE9xaSsvL0lxaktzU0ZWMHkxRnhXMVQ2MEljNy9RNnY0YVBmbHYvNDZlL0J1ZGxsTVhIUDMxTC8vMXlKRmYvZkxYUjF3cXpNT3JtSHZvTkh1S3FxV1NsRmdTbmRIb0tSWG1ZQ0lxbHB5VTFMRlliQ1pBNkpLMDlsaE1TZ0pGZ1JMQk5NMXl4V1dnYVpndlNUdFkxQWhxUW5HclJhbHFCcGRuQno2RG1mVWdWU2lDUW01VWhQeTFOWWtraDR3b0JGb0hpaG02cXVBdDNzS3BWYldzV20vbDMzS2RNQmFZVEM3K0xlYzdScXRCaVMvcmJNWVRycmM0bDluczR0aUJ5RUd0MldSMm0vNzVuMHh1czJEUkhJZ2MwR2hwUnFNK0VEMm9FUVJUZ2ZEUC95UVVDRVpCczcveWdGckRNRm8xMFpFRDFDdUthc1ZmVWpxWWx5SVZGVlZ4Q1NreklodExVd2pqRWtxckNhY1JoUThSZzZlbG5vaURqa2thc0h5S1dGcWp4ZmMwS25pYlZvTVB0WlFHcENLclJLMFhsTXByOVFwKzRRQjZlUWk5a3UwZW9tL3BROS9QeHZxeVZlZ0hzcDRlek02aElQVU5xb0NLVTJrbk5ncU1Ic3h1SVZZd2tRUElDM2dVL3hRQmM1VVV1REliVEdqR1NYd2NocDNneEd3NUVXTTJOak5Kb3NZSHEwc3JxbXhsS2I5UnJWUm9pNHVkQ3FWUkU2eGFFNGczVnBlUGphendHdFZhVnF2UWxpYmJTbWc2THRPeW5VN1FIZlF0NFBGOW1COFMwbVR3RHhJVlVZbEM0Um5HaW1jUTFrQjVmTmJ0Nk9kMFltUUUvKzBVWU9zeUdJZEFsUzFDMXZrRGhGSDBBcnJHU0kvNkJHaWVPaGNwbnd1UDRSbG56NXg5bHY1SDlrZVVtakpTSWhORm9pWXFhY2tucVZBQy9BU01uS1d2TkphV3oxMnY5Z3FybFhUd05HV3hVQVRMOXAzOVVER2U4NGVkT1FxZG1rek8vNm1Cd2xMWjB4a1dQSjA1STVYbGZGb083NS9qdTB6TkNLaEhKcXVGeGp5UG9FKzRwYjZWZDd3K05mWEdIY1BEZDd5NVorcjFPMVpPZGg2NmQ5V3FldzkxNWwvcGQ5OUU5aGZIeDEvTVp0NThNNXZCUjhqK3BuVHFrZVhMSHprbGlhY2Y2ZWw1NURUbTd5eGc4UkQ3VFlxbkFJa3JNZlVxRmFEK0dMRnQwNXdTcVVFL2hhaW9CdE5teUtRWk5WWkhoZ1hOVkRQNFVLMEV6VFRCYUJnMTZBNkNzU0FPRG5SNEpJam9LZWhyVFJKOHJTODBpeDd2UTAxelZqVEFaTi9Td3JSUk5LRkRweC9xNzFmYzR3OWxmd05tQUZIWEF6MWg0R2VNV2srbEtVeFBwVGFUOW1CdUdySEt4S09pUytabWVTenRzbUFTWERBNU1HKzEyRTRZTWxJTjVqSG1MZXZCdkswRTdaWVU1V0RLak1JMGEzTUZpTE9LWTYzT1lTN01VdUtyL0tGbUpxODRLdkJXY1cvTVZvU3UxMm5RZnpidEdxaW9IYis0dGV1aThYcTkxa01yNldyOXdPSDd4a2Z1dWFnanR2cFFjN2JlMngyZ0QvSVd2ODZoUnYvVmZQalNLN3FITHVrUGxQZnViQW9nOWZvdlQ5WlViZjd5MXVIYnI3MnNKVnV0VnB2NUZKa2IxNS85UUJHRjhTNm5icWZTblhpOEhHZ1AxNGtIeG9GeFNNZUlJbWtBUFRrNlkzbjAxQk1WSzA5S3BjQ0ZVbG1ua2lBYmR4TC9rZHNCM0hEem9ybjRwQ0MxQUR0NjRYWnBKZkNBVVFNUDNNSTBGMnZzeEdaVWNvQ2tKS29GcmpvRnNURWwrazNwOGtyczJyR0J4UWJBZzl6c3ZON1Zuc3VzS0ZyRUt6ZktJNmpyUTNxOXpzS3FsYlpBN2NET2puVzNyWStVYjNuc2tnMWYybFFkWDMxUmM5ZEZZdzJjMnExaVk0Yit3L2VQajN6bFFHdkZ3TTZtUng5ZmZ1WHh5U3VlM04yQXRnaXMxbWd4SmVzYklvVk5HeTlKZGx3MFhMMk1qZ3p0Yng4NDJPc3I2OW5aa21NbnhrYmRoMWJYRzkydjNURis3LzdtOWozWHczeHNBLzA1eWo0SCtteWplcW0wRG1NaTRxWU5nZzRad2lJVGx3eWc0R3FJTHV4UlVYY1N3bDFKQzhnSGpLOEQ2NDB1cDhXQ0FRNm9sSWdFc0l4NVhiWW93d2pNcmhmY2VSSzBPcEZzbzMrNkJta014dCtOelkwYUJXWXp2WmRtMEcrWmQyWTdFanBEZGhONjFLQkwwSDhTU2kxRTF2ZUNyQldBSGFMVVAxSHBNSmExbXNtazdWakFSZHJNak5jVXRnT0Y1cmprVldmRVlxQ3dLaW9hVGtwQkVHSjFMblNkK3lPSmJFUTdCRFlRMFVoRm1sT2M2RDd4cXVGWGI5MkliN0JpY1VSeUY2bmhHaXVaYlhEVGVrSzA4dE1XcTlrY2ZsWDdsUk8vZ25mcFFEK21QZTVpY3pnTnY0dHZMYjdWcndSVlNLWGhYZkJDelZodGJvc25JZ2VnR3F2Tlh1UTJXenpGaXdOTkJGU0I4amljZUlhWllPcW5LU1pJTkVlT2Z4YVpLNlVxWk1hczgzc1pZdGptd2ZhOWhWcUxJVFk0MWIzcXkzdWFJdXZ2MmxSL2ZVL3JJZnEyQXZmY0g5ZDBYVlozOE9zWE53emQvT0tPeHIyYmhnNldHajBsN3NUMmV6YXVPTGErQnB2RzY4b3RoZGtpd2RoNjhhTWJMbnJoNmc1cklJcnQ4VzNBNHlyZ2NTRkVKMkRSSEpqTFBuVW1yY1E2d0ZVNGxEQ0ZPQ1ZNb1dwaWxvdGdDaFh4VWdoRWJ3WTJ4K0ExVkFSUVE4YzVWR1NPVlBqdzJNdzZlVlpnbXlGN0JOVzVZMWxxb1c5YnZSWGRKdmhYWjRlS2EyMk5UMjlaLy9DaDF1NHJwVjNibmpuU3ZqRys3b2FSc1RzbWEyczJIUnVhdUhOTERmcjcwWk0zMEJiSDNQZktld1BOM1UwSEh0NjY1YW1qSFcyWFMyTXJiOW1hVEc2K2NYRGt4dlh4bHExWHkvNzBCdER4SHBKdmNpM1NjTW1vSmY0dzV3U3hId1ZvUk1KTWxFaUN6dDdBL0xWS09iZFRYV2h2cHg4eW1HYmYwUEhzN3BZS3dhVTUvVFBleW5vS3JEeitmSWE2SEhoWUJqWXBCSkg1SVBVbWxmWVRPd3l4QkVuUjlDa3pNMjFKdnhGMHRTNHV0YW5ncVVPRW1iSTlFaHV4NWRIQ3NUWXFOY29tQ3ZQVmJjaE1XOXd4TllRbmNIRlpGQnR4YWFXczE4THpiMStKMVpjVFdWN3NPQ0dsN0tkRUp3VHNkU2tuQ2N4Wlo2cURxT01NNjZ5VEQwbFF2cXdSWkdYMFZ5YUpySkxZeXJuQmkwcDliWEJrMGFibW94S21kaEVtVU1ubzlieVI0Wkx6eXlPckx1NXEyZHJ1cjkvN3dPWk5EK3h0OEhkdWFWbDIwYXJvc2l1ZTM3bnpHNWN2bTZ6ZGNzdkl5TTFiRXN2MkhtdHF1bjVxV1RRNGRObXFrY3VHU3NMRFJ3WUdqbzZFMGRWRFY2NXI0azJ0WTN1YUIyNmFUS1VtYis1dm1ocHJOUm1iMTEwNXRPN3VuY25renJ2WDkxd3lHbzJPWHRLejhlcis0dUwrcSttZDlYdEhZN0hScVlibXFhSEt5cUVwck5zaXlEMEdjbkdEZHdUZE5sUDVPRHVpenN5NEFtWWNYTHRVc3BNRWNYaUF6UjZlUUExdHppMldlVENNdHJ2TWhGK1JBT2kybHJLbmxzYk1LZ1NHRGtkckJIOThna2xpMStYSEp6YzlkbkdyUGRKZW5yM2U2QjlEWC9mVVdCdU9ieHEvWjIvejV0ajRWZjFyYnRsUUZWOTNWZC9RalJzVEN1WDZSdzYzdHgxNWVudmRqdTFUVFhNL2R0Q3J3d09COXVVTlUvZE5EbDB6SG0zY2RLUnBFS1oxZk4wMUJGUGREWmh2bVBrRjZMZWZxbHhBZmFJM0t0a3g1Z3NRRUlzTnR6VWpGcElYcWVSOHlFODQ5L1J1NDJJZ21EejNiRW5XZEd3SlNpUjBBYWFXNmFxa09uSVczQXAwR2FNeUZvMUVSZE5KaVNxR21NVUJsR25KaXhRRnZqdE04K2tMU3JLR3diVTRQcEdtQ0pvdkJMcVgwSzA4UHdabnJqNkg1RG5xVXpINUU4aklQS0VZQkQ5Sm1Xc1JzUlJLRllUb09IQjZncUgwL054M2ZLVmhENTB3R3VnSHl0R3RIVHBlay8xWFFhdmhzNzlVQzdvT3pJOW4wWDh5cDVqTFNEN2RKU043Q0hNQTFMTllDZFZSU1ROdmlSRDhQTXNNemtyTUlQclB2ajdVMnQ5UDZJQi9SZ1dTNlVBRWtpVndwSWFDVFFoWkVkSWI2V1J4bVNVZ3pIMjdnS0dRc1VOblVxRmlYc055YXVUbWJCM1pTOHFCRHQvWkQra2Z3THdvcGVxcEtTcGRoK1VTMGVjd3VCZGo4SWFvYUQ0cG1UaWM0WmkybStJY1RBV1FVRmxVaWx0SjFxTVFUeEtCcElnbGt4bFBFbStrRGljOTRvTElwOFJDQU9yRTFYa2pjSS9TbW9KeXhtTWVBaW1NeUI4Q0c2UEl6eEdBdTB2RTZ5dnNHdGxTdi95cVRYVlZ2YXY3YW1oOUIxdmRNOXBUSGU3ZFZOdTVwVE9rTXFwZjVGemVSWkVLR3k2TWw5ckRReGN0WDNGZ3RLMnUzdmZNTjlueWxzYW1nY211NUpvbWo3OGlvRDh6Y0I0OTNYOVdyeXhsUjZnVjFHYnEyNVRZRzVWYTJFeTZwUmZEdzVaT2dJZkdxR2lOUzJGRlJsd1ZFOWRISlErYkVXdEJiQmhhYmlHMm94NVlWYzlMTG1ESElNU2tnenpHK0ROQk9Wc1E1S1VxekM4dUkyMlY3WGRUNXZmZmt1MzNPQzlPbkpEOHlsT2k3d1ExN2ZPUFR4QzdQWDlFc0lOcFVEQzl5Rm85dFMyOTY0R1JVbFVRVDQvMmJqSTlqQzBrc1NxdGgybnlncFp5bWFycWMra2xVeUt3aUo4aDJUakpodDFtWnpqUTRuUHNGTUlwRTVzaUhrdGdNT3RCU29YZkZ3alNKZmwwa3ptQ3NLVDJIL2toc2o5eXkreGJGemZzdkcxd1lpMmQrb3RWcVZWMUJlM1h2SFpKWWxOd3ZWNXZEMWE3NnZjTVYyMTk3dGZYM0Q3N3hvR0wvdzVwdm5ydm1lMHFIYWZrTDhxKy84eng3TS8rOFVyMG5xV3NzYXhrc0tmRk51eXM4YSs3WjFjOUhYc09sYngzMmVqeDAwOGVlUG42bm8zakcwZEx1ellrMTN6ejlqR1RLZnRRdE05ZFdlZlZOUjM2eThsNy8vVnJQVlB2WkQ5NjdJWHMrNjlzWE5iT2NzSCs0YW52bzRvMVpkMXh0N04xM3locVVxbjdqbjROeXhjTUl1c0MvMjhBakZzaFIwbUFhMldZcStFb2dMbVNCczlBZXhSajJseEVac1pCRDRxVFhCU0Q4LzUrc3hmQlZBTW9ZNlJYN3FKWHJ1VE03SE56ZGM4cUxNWVA2VnV5UDFWeGFoV25ZbytmWG1NMG9DZXphM1VDemRFL0V5cWRUcHdKeGpqaFBmQkhYd002TEpTSEtxZjI1T0kxSzhRdkJJK1VROUJTN0NIa0ZHTnl3a1N6ckdhTWJRR1RrcVNqMFp5WlZobWRBQXFDY0QwWWxWUVFIRmZBamFBVmFOYURPbmp3Z1RFbEZndHdLcGFiUkJVZWlPQmRFbnFVZUdNSkluZUlONGtLQlAzZTk5QmpWN3h3YVgxcC85N3U1MTVwdi9MRmk3TmZSbE4vOVU3TmxpK3R6WDRGTlV6ZXRUYjg2bHZadjJPUFYyKzhkVTFxejBTN3lmWE52MWozbFIySlZVOSt0V3RmZjlsQWZOV2V1aS9mUSt6bDFXYy9ZQ01rTG8xVDZRZ2VwMXVic3pBVzdiekxkVnFJbjZVa2kxc3d6V2dwUTdEc1hOMlZWd0VVY2tZMHA0Y1lTWHJrWENpaXI5N3hPbUlmSGp4MmNGdFZzZHFrS2Fwb1huMncrL3BmUERJeC9zQlBybGh4MmZheE1LdFZhbFZsbGJ1dnVtZmludE16ay9TN1R5TCtyL2ZZSzlyREViMjFPRmhzWFh2OHc2L2UvK0hUNDZDT0lZVlNWVkUxa0N6YTlUWXlFZHNBTW1NZkFKbnBLU2RWbDVPWWdjbEp6TWxrNW5PUUlBNkR2SFNtc3NqcFNNbUpZNko1OXVjVEZDWGUvSlR6dmtmekQyUmYzTGJ0eGV3RDJRbjAxTEdmNG1URVQ0OWxKOWpqazI5ay8vajBNOWsvdmpFNXV2cUozOTEzNysrZVdFMzRpbldvQWVqUlVkMDVhalI1YWhSTVpvWlZFLzFoTVdGNlFwakdMS2ZJU1BwTW93TnJSc2ZrWEZrdVFTWW54K1NmOTVqSk9TVjkyZHlOOUduMitKcTVGMGZubmxoRG5mTmNEZFVxUDNmaG1XcVdQRk9ObjZrOXp6TWhLczg5VUxma2dmTGo3cDZid2c5N1pNM2NkbXBlZDdhQzd0UlErNmwwRmRFZFprRjNaa3JLcWpCeUs4R09xamF2UnFLVGwvekEvREFFOXY0d2ZxNi9GSjZZd0RsN0oxaExnYTNDMmRtd0lCbTAyR3FXZ01LSjRaUmtLU01PeXVBOGo5N05wK0p6aW9jRDJTYmtGYkRxZ1dHOGV2c2J5UEQweU8xSGQxVVZhZ1NOMnRpdzlXdTc3L2pObzJQakQvL0xqWDJYN2Q1WWxmMFBIWSsrbERoOHczM3JIc3BtWDkxT3Yvc01FdDdlWmF0b0s2ODBLcFNWMWFHSlp6Njg1LzZQams4WVBSVUY2Q1pPazVxYkN6YVVXblBxSi9PZHJTWHlic2xaTHBWc3VVUTJQc05vQ2VjWjFieTBkV1ljbW9zNnNsb0JNaUQySVM5bnZDZ2Z4L0c0OE41dTVyWmR1MllQczhmbjF0RlBuRjVEdnpqWEt6OXZEbjV0aCtjeGxIZVJuSEhxa1dUcjRkUHdEenYvaVhPN3NNV1QvM2J0MlEvbzc4TGZ1aUFPa2lOSkhaTUJXa1Fsam5Bb2lDb0Y4bGtGWkpuU0RKOVRpS2VKRHFkVG1aU29GRVFGenFXU1ZZLzVtRmhld1FjcnZKWm1FSzNuTks1QXhMM2l5ckhJN3FiOWowMUdOaHE0SXFPR1U2bFYxZHNlMk1sOGE3YitzbGV2YnVVSVBYOEMzdm5ZNXlnZmxjcnh6cGJqblFGNDU1VjVoN1hJVHdibkk3eVRBcGdteGdzMG1WTHlHT1hGRnJJRVJuTG1kdUlVVUlRSkkrRlBPMWViaXh3V1BiMmNMN1NPenQxa2RwdHRQb0YrY0xUQVpwaDdRR2UyZTUzcndVMXNaclNjamg3bnVibExMS0JiTHV2Y2NnQ0toM1NDanAxYmxwTXo4M3ZnSFp2M1VCS1RtOWRJVk9aNW4yYW9mRHBSVWkwSTFmcmVUbG9FTVlqajh6cWozQStmNWNuUFZWSElqZHNZejlkWGVBUVM3T0JNcEFBNER0ZFRtQ0RZRWRVNEk0a3pnT3JDbER4OHdBcklaZ2VoRUE2QSt1RHNaQmo1UXNobUZkNWJ6Z2thZXJsUnJ6Um82SlJhNEhyV0srYitoaXZnWGNhNUZ4bjJ1Tkl3eXhkNWVTL0gvTjZnUEwxRzhlT0NvbGw5UVFIelgrNkNNNVdMOWR1VXQ2NmlMa2VyQm1nMUUxcE5Bc0djZVAxTkI3UmFpSS9HTkNxTmkyZ01ZbFh4NThpS0Exbk1zOHk2bUlPYkhRWTZWUG96RGsraDRzVHBOUmJGZjNnS3pqUmkyMzdWMlEvWlh5L05SZWU5bEYrN2tJdTJMT1NpTGYrN3VlaXJ0cjJVdlJlcy91UWtXUDM3NWw3YXRtZjBnWlBYSG52dnZsV3I3bnZ2MkxVbkh4aWwzMzBhck1UdVhlOWtmdzhlNFBkdjd3SnJJRHh6M3dmUGpJMDk4OEY5OTM3NHpQajRNeDlpK2tHL0ZmdUliN0pUN1l1dHNoMlFoTTVBOUZ1SGs4QU9NZ3c5ZGxFeFVTOTdLUmFtbnhOejBvNjlGQ3Q3cVdJRkFRZGVKNW9IQlg5Q2wxQm5FZE45dzE5ZG12MEQ0amJkczd2dSs5L04vb0U5L2kvL3NQSFJpMXZuWHFZZnJOMXdUZi9UTXpLV3ZpcjdsdElEUE1YNXBNRjhQaW5QMHdydFFpTEpNcDlJd2p5ZFR5U3hWb2VSQk5zK0I1QmxUWWtWUWxwcnBGSkwyWXVEYmpJTFA0dk5GY09IZTlIUk1ZdFBuLzF1MjExRG44bnhmVzg5Zm0wa3UxZkhvUlVGaGVmbmZKNzNQd2ZlMjhHNnJNMXBya0hXWE1rSDdMYzVDUHR0cW5uellnZjJPMktpWFZZa3pQNEFWaVE3YUk5Skt5OGNDampKYkNQMUVxSlB5QXNsRitQYThtWUhoWkVUeFJma2MvRE1uMU5UOTJ4eW10RkhhM21ITGxzbGxKYS9PYnZwdmwxMTMzMDcrekY3L08zWFJtN1oyYTQxdXVidWdQaXd6MjZhTzBqL1BMTDZhUDhEWDVYdHhmalpENWgzUVdaTjFENHEzWUFscGdYYm8yMGdLMms0cDE2RVIxVUsxMHFMOExWU1AxNkVhNDZLanBOU3BTRWpWdktTRVlhU01HU2tGbml0ZEpCVk1kRW92S0MxRkpYRUduQmNtRENKeFRDNlVpMTJ0NDdpQkhHM3VkcVBuTnlVK2RCRXBWVDVaQ21DNjFYbXdwZnhJajJ2S1Nxcjc5dmF2UHFtRGRVdDI2Kzc1Ym9kemNuZEQwMGVuTzUxYWdSRCtmS3B3Y0ZMVjVZMzd5QjNtaS85K3Y2Ny91SDVTcU1qVUI1dzFFeGMwVDJ3dGIweW5CaStZa1BQalR1YnUzdWpBZ3BHUXBVcnR0ZjFidXFNVkNhR2o0eXZmZXpTem0weVR3SWczMXRBdmlxSWtjazZqeXhhaXNHTFBUaFlGNVVuc1JEVHJCS3poTVZzVXJMNFVJblhIaGNpZWJ6dUdGQnN5ekk3MmFIeDhkTWlPMFErL3p0bmY4K2E0Zk9kVkpKS1cwbHVXeXZiZTVHTDUwRWxtSHhjVUFiK1crTE51YVZtaGt5TDNGcTVaWW1Uak5EZjJkVjA4S21kTzUrOHFIRm4zMTNmdmZycTc5M1pUNWN4MTh4ZXUrMmIxL1VzdjFiY0JzZlhIUG5CL1dOajkvOEEwNEZqSXlmUXdXTi96K054VXJLRHhLdFkyRDFRRXNYbllLdzU1d3NTT1dmb040NUFESVQrMDJ6UW1kRHZXTE54ZU83WkRleHhvK0hNaW1odHNsS1IxZ2tBRGNCU1U1VHF4L0NNRVBWektoM0N6L0FVQitQeE9IbVV4TG5qY1d4cHNWM0ZzZkhiSDc5L2d1VHNxUWduS25pUjRpWEdjWXFGUXlua09QVnE0Ky9lMzBWdUIzSFYyUWxKeTU4U2RTZGVmY2YzZmlxZjBPZEU3d25KckQwbG1rNjgybFR4dXlyNXVnZlhOdkhZNlRsMThIRXVtSWU2VXd3RkdxN1E2a3htcDh0YnNsQWJobHA1S24vZDdTbjJsZ1JENXlzZms2Z1FZRXVWelMvYnAzZ01KNFRtZldYTWRzNHA4cU5nU0FsbVMxampWcU45U2czTDZsVG9mb1dGSzhKc3ZGK2xZMW0xQ3UxbGJOeFF0bTVEZHBWYXFkUmtSOWF6eHd2UGpGdWlMbGZVb25oYUp3Qjd4eTJWTG1lRW5JRlB6VGdMQzUxbjdMTGVBcThWcjVCOGZuREI5OU41dFNxS1l1TkRTVFQybmlvYjhaNGFSTVNhcDFJald4bVNDZmNMdEQ2cjM4RnhMSHFaVWJQb3VKTFRUV1oxdEdZSEo3RFpwRUtiYlZXWjlmVC9vTi9XYStadVZCdlY5SVNhbSt1Y013TW1lTURJelYybkVUQk5McUFwVGVMZXFsd1dsc3FERWF1Y2FBTGx0dVV5U1FTQlVQSkJYdVVXTXhHbWsyc3RlSGYwTUdkVnE2MGNlbGhwNXRiTlpYYXp4dzJHdVIyT0Nwczk3S0R2MHhsbm41OTdsbDZObjM4SlBQOXBFdis3YzlnS2NDbFo0WkFESlM2SzdSZEZGam1UeUlzWEFsVElhNzFFejl3L2U3SEN6czN1WkI0T21rMnNhazNBWmprOXV3Wi81alE0dzFOS0FUNHpTako1YWpZanFxSVNZc25uNGNtcjVqTnBOY0ZyYWdPSnVuSVBNZWNYeHVKNHNYUWFMVE54UC80eFo4citRZVVKR0lSVDIzaERDWVhPL3Zuc3MvVEovQm83dFhpTm5jRmFobVdrTGk4MTBsZVdDbDQxKzZQZ3FhelppdW5hQjNTbDgzUVpvaElEZENuaFQzTjBLUUFHQUYwS1BhWkxnZW5TNU9teTF5UXd2Sk5ESE84K0hsUEZvODdzNnhrRHIzeUE1d0oveG5VeFAyRGl6TGNJWHN2WDgxQ2tHb1ZZUlhOMEFaemxsN1RsQklxY09NRlpsQitnOVUxb3d6S2RpZjFZdzdFc3Ava1R5eHVZT0gzSjNLMmNGcjBwZUFTK1dNaTJxM2xabjZuc2I1blEyUWpFSTNaY2F5QlJiQWIva0ZvSU9RcXhnbzFsUXJQLytDT0NvOGNVVDZLdmdDL1RnRjhtYWphajFGTkdYQzFEUXRNWjFrb1pGUGxJMUV6V2JER0JZeHVjRHYyalNiMUp6YjdDbWY2bzBtSWZ2dy84NGhxRkh1eFdrcnFCU2hmZzJlU041MVozMkV6YWdpaVNPVXByeUxxNmh0T0VaOWk0MzRJRGNFeGkzYUpWSG94d1JEWW11WEQ5TWk4VkdUTjRNcWJ3V2pObWxwQVNZMEthczJCREloYVpSRGRNZ2poZW5xSGNxWlNrWWNsYjVIeDlFcnQ5a2pHTm90eWltb0NQbHhTSFFaUzZyK2VoajUrLzdFanZqdVdWUm90T0dCTDNEMSsrc2l6a1VYSGxJeE83bW11MjlrVTIrSks5cFExYlIzc0RmL0hqbTFzL2J0czNYSzNZYzhlOVpkVmw1cUtoNFpyTnQ0N083U3k2cnF5OTB1NXUzZG9iNzZ1eXV5SXRKVWlyQ0RTUEVod2tudjFJd1lLZVdrQWZWbEpwRHZPSWlrc080SW9TczZkWWxSRlJOTGNHZ2F1M0pWcUlrWFFXcnFUUkdNaEtoRlJreFdpZXczQzZHTkJEV2lNd3FSeTBGL0FZVGJrWU1BUmhlZEk5RDM1OFNwVzRwVE45NExVZjFSOTZjcy91Kyt1VWpDTllmK2U2aVp2WFJwNTVhTnNUYmV5UDVpNmQySm1keTg0ZWVPdk80WkdWVjdwK01kYmRmdVRweVYrZjNMbWU2TmZFMlkrWXZRb2RSRjFOY2wybVZBQ2tzNWgwQVE0RTR0SUZQUVk4bFdRSU5pQTVncFZjS0FBb282YUsvZlBGZkFTN3lGbld4WG1EK1d3VlBkRjgrTG45V3g5SU9WbXRXaHRvR0c4ZHUzbDlMTDd1MkZEdjF0YWd6cUF1Y0N5ZjJGVy8rYkdMMmxEMjhJbmJCbG9TZmxaZDZDMW9QdnpVanFrbkR6WDZ5L3hhcjZjMlpGMTI0enZBKzNHZy9SczUzcStoMGlZNWVpSzhKd1B3QU84MWkzbVAyWTVCaEpxTHhTUmRqdmNGbVBlc0NmUk9KNGhHbkVIRUVxRFV4a1hMWERZN2lhMmlCRzNUWm9zTko0a0ZPUjg4RHJ5ZjJuRlAzWmFFUzZIdGZPSGdheithSkx4dnVHdGk0cWExVVhRR3MzNmdoMTUzT2xMdzZMb3BwRUFLekgzYXRhYTc3Y2pUV0lld0RGNEVHWlNBZjVpazBsNHNCVXQrRUJYS3pFeVE4K0tNVDFBeEh6NFlEYmppV1RUbUlnZytGMEVZZ1hMVzRzV1RTQ3RJemtLc1VCd3VoYVh3Y1VvTUNnQ3RGeThrS2YzZVQ0b3A2YzBGRVJNdGg1L2J1L3JMVTQwR2JzNlQySExiNm9HRC9aVTZnNnJBdVhMcm9kVE9yMS9lTVVrL1dqbDhhTm5nbFd2cmFOTytWMjdzYnpqMDFCNDdiN25vK1VzYXZPVStMSzJnYmZudDMvN0o4SFVUMWJGMTF4S2Q4OENncjJSZmc5YzJLbDJJcFFad3J5Z3UyWlV3VjJJWWQ2bFZHVW1IUnd2QmVpR3BkQ3VBQWR0aTZZSkNySThGVG9DWTNoekVqQytHemNReUZDRVpkb2FDbnVjcmh5OWFWdHpxWkpCWlgrNkpqVGI1VUYvMnBjMWZjalBUcGRldXVYNnNRcWVONHB4Rys2NkJxM3BtOXpGZjB0Snlybm9nZXozek03Qjk5ZFFRTlluaTRMZXhNRFlwTTlOMjh5WjFXSElwTW1JaUtyVUN5WDFScVFJMExSeURRRWRhalEzZk5pS2pCajRqTnZDU1VnYzJqaWNyM1N0eEhvaURhQjQ4N2txQm1NVzFPQWFDUXpjdmRjRmh0WkJKVjNmaE1WWTdZSXpiWlVqNHB3OU9QQ2t2bC9UejR2SVRVcm42bEJnNXdVNkh5eVBtOEt1bnpDYzI0U3FONlVwOENtK1o3dWxmYmc2bjRYUlJyUVpjdzdVYUwvU1hWMGFXOStSUTNvdjk1ZUdGVTNteFpXMnBZR3JWTUdhYlg1ZG9YYjBKQnk5dVFTd0FUZXByQlUycWJzREJLSVNsT0dYbEI2dFZDbWVyQlVsWEFxOHUwelRuWHJtV1dBVHdwN25xM3ZraVg1dmRpd3RTODlVL0liSUVvenpQMnJvaXhERkxsOVlIZHErUE4vTGVpS2RuWmMybW00WTdEbFlpdHVqK0luZnR4aHRXamkwUFZ6ZHR2KzdHNjdZMXR4NTVkdGZVWS91U2F5TGoxNjVhY2VQV1ZIelYzaU5IYTBMdFZhNldrdTd0YmUzYnV3SWx5N2EzdG0zdkxwbGFlYmhZYUsrM1JTTmxmUGx0RzNvdlhSMHRkdnRjdEM2ME9kbDdaRFJhNE96MFZFUnRTcFU1TXRMWmNzbEVvcUp2UzBmbFFKM1gzekpXVTlYZ05RQkFOWmJHR2hrcXRiR3pwS1J6UTczOHVsSDIzVStCSXYwZDJDY3IxWlhEb3ZxNDdCV0VuRmV3elZzbW12Z0VIT25vRFdUcmpHU3drakFTREsyY0gxendCc1RqQ2JMOUY1N2EzUDNDd1ZYWHJBcHZPWGJUNU5jN3dlSmZ2bVpIN2VTZDQzT0g2ZHZ1ZW56SHhKd0MyNWo3Z2FCQjlnWEtERGlpbVVwYjVtc0JqUHBNMm9wd21zMXh6c1lqQzlsNFpEZVFMSWxrbjgvM2ZMSmFIZ2RpOTNQT1lyUEo2K0I1aDlkazhqcTVzczNzaE1ubjVEaW56MlFxeHEvRnAxOW16c3l5RkgzMjc3TTM1bWdKNGF5dWs2U2JnQXd0d25BZE1Kc0dNRnVNWko4MEp6RS9wdTBhQ3dmenhDb25uL1FhSU1icEo4UXdwUEFNelBGQ29uUXBmWEVXR2RSdTE4alFaay9qMm1aMzlLV2x0R1lmck5hckowWVVWNTQ1Vmp2UkVkUXF2N09FY3BDbENMSjhFMlRwbnMrbFd1SnBIUkE4d3hSUk9weElaV1dSZWdnWDNVU2tVakhKcFJhQi9QajVYR3JpZktsVUJIaFkzRkxGT1hsMHI4NWhYcDF0MXBwMXZGMlBmanJLMmZUWlZVS1JPOHIrYVBaaXRSRmRyek5tUjdVbXBkcHVtTXZxRE9nN0ptNHVTL1R0SGZnVkFCb1pzS3d5alppZ1hPWWFCSWwvRmpMWDcyeG1mM1E2a3ROVDlvY0VBK3pMeFFjT1AwU25DRVlueThRVWwwcEJZNHRpZVJCUVljQUxIR0lGVDNJNGZzUDhwZ0NIakE2a0Nvb2sxY1FBZGpoZ0prUURLUm8wNFJRSWpyMVlRejV6NlNGMWdUWjdibWs4cDlqY09TcGVXNkRRdURzRzFsUWR1TUZoNmxpOXJiYi82R2psbG11UDFHN3BxOWg4NmNHUk81UE1HZGRYeXJ2aUJkZGQxTEt1cVNpMjVVdnJzUHAvN2NIZ3dFWDkrT2p1aDdlT3pXYnpjeExHYXFjR2NqemljaU5WNDRscFZzMm5DKzN5R08xeWNvZkxUNFRjd0l3Q0NkVE0xSHp5a0F6bEU3TVRrNzdzbFVNTEV4UW92VzlzejVJSkttT1owMERYT2JuWVBBYndxODViRjJ6NDlGenNaMnhWYWJuMCtYMzducitrcGVVUy9IcHB5MlIwN2MxcjE4cmJUUEJyRkdXUHZIVnJiKyt0YngwNWN1TFducDViVHh6Wi91VGhscGJEVDI3ZjloVCtzNmV3WFhrcWV5L1FyUWNiRjZER3FiU1FwNXV3VklPSjk0TG00QUN1WkI0QnN6WVpBYnR6MWk2SU56TlNjdExNTFVnYWdWUk80RlVydlVVcG96Q0JSQ3JuUUdFbk9nY0lQMVZyRUpBRzhOZnJQMnc0OE9UVXpudVQ5WGV0eFFEczZZZTNQZG1hdlpmZHFqTSt0RzRxT3l0ajRiNitySkh1SGxzdWcrRmRHL0JZeG1FczM0Q3hZRHc1THVOSkFpYnhORjlBbE54U1JNbGhJRjhBaU5LUVE1VGNQS0kweUZweVhrU1pKT0dtY0NGRXVldUJwQVlWSmJaMFR1L1BJOHJrbDljdUlNcWhnVU91MHcvUlJSTTc1eEZsd2FvZWdpaHpjNXIrUFl6RmdhMjluQm1mbDRoRmx3RWJ5aGVmaU1vMTBrNHlHcGk2SkVEREpzdElWaGZzODZzTE11c1hNcE5ZcytNQ2o5VFZUeHlKclBCempLQzArNnFMTDc0N3dwemhUTzlkY2J2WjNNRWpqVlo5MTAxenUvSnJZd3dMK3QxSS9aQksxNU4xV3lVRWp2VWtjRlJvd3VsQ1RGa0lyb1VJeEF2NWNNalJGQlh0WUcwQUgxWElmSzRWTWxLekRJcmVuM3pISW9NaU15OEtKNlNvODVSWWZRSk9wazFtQVhCUWxKK3VpbFlERG9MZmkzQVEzQ1E0U0RDWm8xWFZPUngwemhsQlFSVTRMNjFVZ0F3NVlWcFRHTUExSldLdFNmTDRzSEtHTkRpTmEvZlU1dEs0aTlicnpzbmoraitaeDEzcllQVTZRMm56K3E2MkxXMis2cUZ0VTl1R3FxTnJybHl4L2t0Tk5wVlJWMUkvMnBSYzF4cUFPM3ZnVHRYYUcwYW5IcGp5cVRYZW9EZlFQQktKZDBTOTNsRERhR3Rpc3IreU51a0Q5K1FxcnUwT1ZiVldGbnRMRzFjM2RSeGFWZDFKZUY1NzlnUDZRWFlUNWFNT3lkRzdITklWa0pET3BnbmpMVWlldUtRbXNEdXQxdVhyODBuRzNrMDhyNmlLcGZWdWZFT1BONkc0U2Q3RWpRdm85YnpFY0JtY2tzQXVnTUhMeVRSd1JpZmtpOVZxazJRN0tWbm96dGtlSEdGZ2gxZUwweXkxMzNBaWd6NkNXck1uck1HNHU2UTI1T0RWQmFFamJUc3UvckxPeUR3YjFLTzlHaTU3ZWMvY1FIbGp5R3h6V2JYaGNNMmhJL1RMQmhqYjdhQlAzMkRPeUhiY2dQVWJKOVlrWmM3MGlOcDQzbzZEMThOSlpBMW9qVEZHN0EyMjR4cUcxTGlJZWx5dlJVbEltZlBSSktzc1Q4YUZpQzlDMzc3MTJJMWJ2OTYxSlZHRU5OMnZIQnE5ZWxVWUhhQnZtenQ4MXhQYkoranNMRnR3ejlodU1PcFVMdC9IZkE5b00rR2Nzb25rKzFBdTM1ZlBFRkdtQ3liNC9LNSt6cVJBUTFvZHkrbzBhSmcxNlh1enc2dVpNMGJ0N004YzVUWmJoWTBKNkRoQVV2aFpkdkRkL3dBSXI1ejZNNVV1eC82c01FNGVKM0VGT0s4Y2p1THlHRHhmM3RHK2YydytyOHlTdkxMQ2NJcUZRNm5jY09yVnQzLzR1NVE4blh5ODZEa2hDY3BUb3VYRXE0M1o5eCtTODhlRjhHY09YaXprSlR2ZTZPeUFVRnA5NnRWM3l0OHZKaVhpQXN3N3dRTHp6c2RQRi9zODV2QzBGLzlPdzhWRnN3L3V3SXZvVFZHdE9nVXJtQ3gyaDZmWTY0c3N6andicWR5ZGdrSlBjZms1Ti9QVEV4aFlqdGRvL2FtbExBU2pHc3V2MStMS2E3d2dLaWZmOEtLdHZaY3pNd2lwTkFwV3IwWW1sYlhVcmtJR28xYWhVU05hWGJBOCs5eHlYcFg5TGF0bUdEV2IvWGVsdVhPQjdXRTdFN2JiWjkrTmhHMFZkaWJnbkdWdFRJUFJZNFQvWi8vR2xsc3pZVzREdVJmTTU1NzVlSnBHdWVXRXdpaE8rZVJ6ejliRnVlZkVlVkxQQVhRZysvQjZuSG9PS3poa1ozbnRSUFpCZEdnOXpqeC9sOVZtMzFQeE9scUQvcURYWkljRUM3cFZZOGlhNS80Z2FORGJGbU4ybzhhSWRRUDgyZmVCSGh2Qmc3SUtpdGJvUXFFWFpiMmdGcEo5M3ZZaEkyamlHcVZXd2VxVWFJUTE2L3JtWGxSYVRNdG1DRnQrYXl3VytHS2VjZWk0MDI5d0puUW5QS01mZUxBQ25ya28xNXhQaFpFcXp3dmttdnVOOURWelg2Ri9hWnc3Umg4S0NWWm04MENaVFpqOXl3SE0xN2JzSDlBWnBVQXRSNGNvc1Q0cTFiQVpVandLSWJndEt2RzVEUzR0RUx1MGdoZU84aG1wTUJLTHBWdWlwSUFSYWNMVG5kRVdDR1pVSGZHNFZBNjNQV0c0WFU3MnpKU253SllKTWJ6cmhXeVllT09qZGZKVzhOYUlHQVpkNDZXSTVwUVk1cVVPemFsWDMxcjFrWVpNSVcxRTlFVHc5dU5DdU9uaEpSVytXZnhIQTVrSlduNWFyVlhCQk5EZzN6Qmhwb3NLOFh4dzQ5K3ZOcy8rOFhIeXRnZy9YUkVKdy9WSy9CdWVOTjNXMmdHbjdmaDNHbzRYcG8zWW5rckR1L0JSUlNvTm43Ym9sanVWaHVmZ0kwQWFyYnhLcmRFV0ZyazllTzkvYTF0N3g5SlZHL1NTV2xQa3JxaWMzNnVlbjA4MW9KWGxlRzhQQkNJbEtkRm1rblRGWkhiVjVrQWo5bW9OaUtUdWM4bTlSYlh4K0JRditCVE4xMWppUDJrTE5KVGJ6SFp6cUdlcXM4Nms5bFVzcjNHYjdDWm5lYkxJblNoM3dxRzdabm1GVDIycTY1enFDY0ViYmVXTjlKWVdXM25LVzdkbno1NzY1ajByS3NJNnZTYzFIS3ZmUDdVbkdXeUpGcXVVeFZYTndjVFUzbjMxc2VHVVI2OExWd3p1YmtuQjIrdDhkZVY0SGlKOTlsNDBEdnJDeUZYRzh5R1FNVU4rNUJBSWdYMUgrb0hzdmFxamY3NUp4a3hUMlQvUUpVVFBycVBFNWZMYVFWMVVTb0tlK2FOU0tLZG5FSkpxQzBIUDJrR1JJbTJnU08xa3kyVjdIZWhaVTd0R1RacGZZRDAzT0VIZG11QmQxYzN3THE2SmJORmFEdW9XWEZDM2IzOTBqNnh1em9nSW9uRHlValZvVklRbzFxdHZSVC82SzZKdWhvallGc0hsZGMxd3M0Mlh0UGltNFk4WEVUMHk4Tk02Z3hZVVI0OS92OXI4NFI5M2srdE9mdHJsTElUckJmaTNXTTFQUjZzamNGcUZmNy82VnRsSFB5ZHZhK2FuVzVyYjRIb3IvcDJHUDFta1hBV3BOTHdkSDBWVGFYamJvbHV0cWJRZTcvdE5pVHFzZDFxZDN1QjBGUlJHQUVZMXQ3UzJmVkx2ZEhwWFFiU3FwZlZjdmFzRFB5eHg3YUIzU1FIN1k3OUpjbFNtVXJubG1FV3FsOXVUZ1U5QkFZTk44OXRwU1A3U3VrZ2x3MmlLMS9ncWVtcmNacHZaV1o1d1kxMkRRM2ROVDRWUHc5ZDE3dWtOV1d3V2UzbDlJRkJmYm9mRFVPOVVSOTJ2WlVWTDdkOExpdFpjVmF4VUZVZGJTeEpUVS9zYThvcTJZazl6YW1yUDdoUldOTkJTVURoUXUxVHpuc0VLb2o5M29kY1ZGbm9Pck8xcUN1eXNwRlZuMGxheU5kZUtFWk1yS3JGd2hYV1JCWE5lTTkvcnhXTWt0VWc0ek9TTmNpMlMwWU5EQ0N2R21pNHQ5blNPeFRFZEFacnhYR0JITnRqZDVXMGVUOVh1MjcydEl0Z2NkZ3dXTjAra2F2YnQyVllSYWd3N0VIcTlidlB5c3RMcTBvTHF6dEs2emQzNHNCQU9TUzhhbUN2SEFaZHpWQ0hZN2pTRERiVmVud0Z2aFZkTHlUcWVOWU4vcGd2VU9DRlVhTUQzUkV1Y1pHU3RNUkxFRlJRQ2lYb0dVNnVIUTlFaTczM0NwQzZrWkpKeE1CV0MvLzFFNmFJdU5QTk5hRFl5ejVjbU9KZXZGTzdWelMyYjd6OFRtWk43NWp5ZW5XUE9LTEpVbEtxbmJwTDNVb2dsY2FrV0FqSjdMRjFMS2g1ckN6VnluSVpYQVJJcW5EQW1wZnd3aUNvZ3RrcHVWaEFFMUZwYmZGSVF3M0hKRHNkQlhsTEsxZWxpQXVkbmJYQ2dpNUhLL21DQ1JQZVNIYVBERWhoZG9oWndQMGNKeGZOckhvdjZkWENJOU9zZzZReWNTcyszN0dDU3VaWWRqN2RkOWZKaEhUSnlKZnJ4V3hNT1ZtUHkxUTJuS2daMmRwWHExR3FGMDdGc1lrK0RmSC9MWHg1dTJWUzE5cHFoeWcxZm5xeEIyWXYrNnRaQitrY0d5NS9VRFZFZnEzYTRDOWpaYTJsL3FWZkJGcnRqUVR2OUhtN0YwWC9EYTVkT1BuS29UY1ZjeWJSZS9BVFd5UzZLVWt5eEx3UFhMcEk3UGtpVlRFWStBRGVhMXVIY20wdVRtYUVVY1owaExCYkg4ZXFpV0NJekxuVVNSNFFodkM4b2xnNmw4bkZaT2hYQ2h5a0tGN2FtNHBvd1poWWxWZUlPSitVcHlhVUFiZUROc3ZNZ2k2cjVEZytMaTBvRmVZK2ZRTGJqeCtVVHZHVlU2RElMeHhPN0h0bTU0dEx4Vmx0SVl4QTRTN1JsckhubzB1RXk5QitDSVZ2VDIyb1BPNWlnMHpycjhiZkhpK2lidkVZcnF0ejR4SkhPWU50WXRaMFZpcHVpQmJVYmIxeVovWEdwenBUOTl0b3JLaFNLTW1OUmg2R3NZYWdXclpEMUNWRVFObStBU0Q5SnJhQXdJaXFETUNnT1UxUXByMXdXbjVRQ29Ba0JudVN6T0M1REZpdnhGcWlYYUxWZ2NSWDVkYVJPSzE0R1Y5UTZjb1dXMVNKcGw2UGxwSjFVbXl0VmRsVklidXFnQ3BGY2VDS3BXcEtOZVR6MmNPUkFXOHVCeU1PeGgwckM1U1VQeHgrT0hHeUI4MGRpRDVlVWw1V3dGWDNiVTZudGZSWDVWMFY1L0dGNFkrQ2grRU81UDR5VE56NmNQLzk1YWx0dlJVWHZObmgzZjBWRi8zYlFoVFdnQyszc2NhcVl1bGl1VE12WHVzeTRDaHlVdkpVVXIydFlZek51RDdsZ2pFdHV1Q0NBT25oeHVSUGVQWVh6WXFaWTJ1N0FPbUMzZ21IalkybUhIWjg1WEhndmNVenk0VVNaZzFUTkFMTHdMSlRQRUl5WlQ0QjZyZVEvWEpCYlMvNWJzN0xBZ0xhb09WWWpvQzI0bkNhN0FrMW1iMEdYWm0vWkxML0E1ZU91dVRXV2dPQUwwY2QxeHRudk54NXB6QjVGTjhFTHFVdGI1UHRWTUU3aS9kVmsrNWNpaHAyL3FJeEpLckN4bW5rTXdNZzRZQUNRQUZNdysyK0s5VXpoN0cva0dyYzd6MTdHWEVQMldxK2pIcUhrdVdKVFp0STJFaW5iQkJoc05DbzF3SlVHQWpVYkV0aW1yeWNHcDRmUFRDdDdzTVVzQURUUXcrTmVRMUlBTHBZSFJ1QmlLMXhzaldJd2lwc3JiTWczVllpbHhCNUJUSURqTllsMTRHT0ZWcjNPekhoQzBZYXV3YUh4Q1p5REdER1JNamxiZzJCNlFjbVZ4NFltY3JZb3NXaVpaV25tUVRtLzR6b1lTcDZickFEanBBQjlsUmRkMEowYmR0VjFMOHBHQkJwR20xSWIyZ0x4Vlh2Mjcxa1ZYNzBxMlVVeUVnODIyVm1EemhCcTNiQ3NaV3VIdjNic3dNWDd4eEpyU3JzbXRteVA5TFNVTkkrczIxU3h0cC8rNThHcmdzRnQvY210QTVXSmhOL2c5TGlLRTh0TG84dnFvdFdwN2swdG8xY0ZRcFBkSkdOUjUxZXJ2Y0ZpWC9OSVZjMkt4dXBZYmZmYXZ2TDJSQ1JjNGZKdWFZNHNUMVdXbDlwRG03RmNTaFUvcEtQc0VZaXZTNmdhQ3U5TzhzWEpoajlIREw5SWpDMEdDaHVNaW9nc1oyQ2NiaUdMN0JtOFdncHlONTJiRzBXQkplZWxCa2NSUkRaMmpyTVg4N3piZ1ZZYUhPNzVDNExid1pwOEhuemlFWGkzM1dDd0Y1MTdDdHEzNXV3ZmxFVmdkd3ZBWTYzRFBZOUlqWnRYa1VtcmNGRkdXRUVGRk9HWnNYNnJ5aENXeGtDRitzZXdDdld2eENqU3FsS0haMnJieWIxYWJJK0lUczBVeXR1cEN1WHRWTjFDUnV6bWNmSjBocE83bjJBMUNuYURPYko2VmVIYSt0RXhZcUNhK2dYVGkxeGhzSXJxSHNVSzFDNkk5Ykx6VXVEaVE3d1pEVzh4V1pvZnRpODIyb3NYOUJPNXJmNXlZbVJON2FhYm5uaDkrL1kzbnJ4cFl5S3g4YVluWDkreDdZMG5idHBVMjdqNzVZL3Z1T1BVSzd0M3YvTG5PKy80K09YZEgzUmQvdXkyMnZIK2RvOUR4V2w5RGV1WGpkNDJtVWhzdm41d3pWVkp2WTdWME1XTlQxNnk1YW5EN2ZTNzI5N0VINEUvK3MxdDI5L0lINyt4L2M1VHIrN2UvZXFwTys4ODlkcWVQYStkdW1QN3M1ZDE4a1hsaFQ1ZGdhY2dzZTJ1OFhWZjJscFREbmdhUG10NXg5Rm41WG04bHhtbU8wQVdRZENXcTZtMEJjOWpqV0p4Mllyb2k4NVVFSkdJc2VnTVM0N3lteXRDNEFWQ2NxTXBGdU4rQjdnQ3ZLMGloT040VGdEa1dpM0FSL253cXFqREpCYmxOb0ZMVG9Cc1lreVFxS0xGRlN6bTgxU3cySEFCeXlmYkc5VnlhRzk0NHoxVHkvb3FHc3NLZFVhVm9YcHYxNDQ5WHAyTzFicGlpWmFBcnpsYXVNemlEVHQ4cVZpRjdlc1BNTDhyYVk4VjB6VXJWdHFkZHM1ZUhibDBXL1pxdGI3TEVYQWFUTUdHaXNKU2w4N285RnZ1WkpjUnZqeEMzVUovaDNtWXpLTWdsWnN4TXk0cnBRWStGTWRJYVlFTDRhSmtzNk1vMTBpbjFteTMyUzBxQm0vK05NT1JFUzI1aEJkNEgvbll6U1AxYXdhTlZ2K2FDZ2x1RHArclhzZm5yNnNFTjIzZzBERmVhOVRyc3oreGFOV1c3STkxQnFPV1I5ZWY5N0ljbXoyRDFqS242SjlRTEZXVjN6bWE3NDZqME1oN0JCU2ttMUphUWZxTUtLajVQUUs0QTQ1ZmVJWlp1WXErcFM5N0U0cUFHenhuZmk2akJxa25MekJEdTdySkxPd0NyTlRWalQrNHF3clVwVEUyVXoxSWJsU3orZTNzUzZibk1qRHQzVEZ4R1MvMTRidzFuTldlTTFsWHd0VytaV0RFcmQ2d3FvM3NIYTBWSUtvU2d5YXhFWFNvdTBzd3pjQzBwY2l0UVVHcy9SeVRsaFRWeWVaK1NiVjBBblF1akQ3L2JFVmZuWHZvMGV1UDZDMGFGQmpXR3BYWi82bDJGUnk4OTRxais0NCs5Ym5uNTl6enpHMlhITjErVEZDWmpkbWJWRnEwUThkbDk2TWZUYTdmc0Jwa2FtRnBtSmRkQzMxKzJJeGNRTGpRNTBkOVRwOGZDNWg5dW9Qc0pWN1BqTkYveTc1SzFzdmFxZm4yY1hodk5lbDRrbHN0NHhaV3k3ai9uZFd5OVZVakIxdmJEbzVVd1d0YjI0R1JxcDZTbHRYVjFXdWFTMHFhVjhlcVY3ZVVLRzVwT1RBU2pZN3N4eDNkNEczN1cvQlY4cTdWYlNVbGJhdGxXM1NBR2xaVUt4NkNNUnVwall2MlFPT1FCYUNucUltbEZhVG1Tc0hoWUVaQllrVVYxbkErS25Jbk1YNHhHSEUva3JTQncvY01ES2lqTnBibURDUzlnT05NUURxQ3ZMdGQza2k5MFA2SmVXdTJKZDhDYXJpdmo5N1VoeDdOYnVyTGJrTVA0RG0ybGJtZjdsRmVSVlZTdllTeU11Q25KU3BxNDVpckJRcDV4N3IycEZUTVpkTGE0dmsrVTFFTS9zdEkxNXdnbUR5TElDbFozRDBIVjd6TElVRExmT01jdWNmYmZPRWVhV3hJK3VZVW9hMUt6UWRGc2FETlVWcGIxTkpyVlZsb0ErUG1ydDVZT2RUZ2RZYnIzVDh4bDFxUjA4bmM3MUFMcW8rS1V2Vk4za0N0MzlTVE1pUEVidGxWRU91ckxsdlcxdWg1ajJVZFlXSXpKcG0vb1B0Z1BDM1VTZ3JDR2NrQVVOWWVuWEhJaHI0RU1INFViMnBHZ01SRTAwbXhJQ1lsQUJwV2dhSzA1VGVHcENsRmdoaDJRWXlucE9JU0dHUkJsZHp3aGxodUQzSXppenJlb1BsUnFoYXFFeGVocndnOTZWR29XTFdSWVJTV2tzWkllV3VaelJidFM2NWZaeSt0Y2JmMW1wUm1GZS9rcmxwZnVTSlYzTlBjTnhoc0g2dHVHa2w1RlNzTU5LMVdxL1hsSlVVRkZiVk9YMjNRR3FNSFd2MXhIOS9lYUVHTVlzc3VWMVZuUmVlNFJWamRXVDFZNS9IVWRHRWUvRVR4SkMzazYwRVZ1WHJWQzlhRGtuWjd1RXIxSjQvcG5JNU5QMWNMQnNXVGZ6UngyVG10U3JiRHQrTTFVdVlNVllSWFNNMXlUUXZJZTM3VlJTd0F4TzBtazg4bGtMSVcxemxyTHg3c1UrVCtZYUtHWkh6MHB2a1ZHSW0zcFM2MEJoTU1BUk94bjF5OEZMUDhHenNuYnc2eVRMWEZrWDJIclZ1OEhET3hZYkNuWXFJa0s5a0kzY216VFlwZlFleGp4clU0eEZyb05mTHFGcGx0ZW82VUFpT3M3eHpwcUNjYStCbEtkb1ZVRk9mZWNMc29EWitSclBPZDlpQnE5WlB0aEg0Qm00eVdpNS9aVGYvYnY2L0ppbU83amwvY29tZ2J2bUZEZk5XcDN5b2RwMzdMM0pXYXZBWFRjUno5R1IyaHZ3VjBSREJ5bldIMWxBWGNqUHhDSGc5QzBWckpSZmxsOFFNWFdhampmR0dKeFJZcUZJVENrTTFTVXNqVEcrYlBnb1U4RDU0RFArK203TjNvcCtBMWk2aWpGTWhtUmsyVVA2MG1pNEJxMGswT3BDV2NuREhKM3NzazkrL0Y3Vzg5dWIzNnNkOTF5amxLSWNLSi9BbUZaSEtkNGtUekNXcWFGMHhta3R5RGNEKy9WVi9BMmFvQ2JGN1ZCYVFsVXE0NUZJR09wR05wTXI0UWpkeWtWV2xab2JETVhWUHZpcldYaHB2ZGF6Y1d4cnJLeW9leWYxV2sxeGwwbFNHWDEyWmdiOW5DTnpkNnFuMW1CNHpwUHJCVEhjcWpZRUY3S0hEOE15cDVRak80QXpNZWxncmw3S1dhSkgwdjBJUk1XTlNFRE5NWUYrSldiMjFjU09MSkc3cnZwdzMzWksvNFM4VlgxR3FkbW4zOWpibVJXSXd1QzE2clJGcGl4OGVaUWZvSjlpV1FvMmZlL3hRcGlQK3g1d29YRi9xVnV1UitwU1N6NTFyd1AwWDJUL0UvTnRsbmd6RVpMeDJZV3RZNTFWOWEyai9WdVd4cW9IVEZubjI3cDZaMjc5dWpPTlo5Y0dVNHZQSmdkLzcxOFBYWEg3NzRoaHRrWHpNRCtPNlhnTzhzVkJrZ1BDU1drMEJZRzVzSnlvNDFqT01GbUl0cEpXOU5rV3FxWkExZXRNVWROWmhnYlUwTE1sdVpVTEJrMGNWUS91S002blVsWHFCVXZxNHl1VC8rMkMwZ2hmbzErUXBBUHZuU3RFNlBLblVHQmN2cFVJWE93R3Y0N0pWYzlncGVJMXpvQnFaYlFjRkVZYi9NUGcveWRWS2w0STBlbDNmbWlQN2N6a2hMWEFyeXVIeEI5TVpueW1UaEY4WFNaVUVzMjdKQ1RYaEdwZVNSSWJ5Z0dNUnpmWm8yNEJYaUFPaDdlV3pHbjROeE1kS0pKYWNoWWtCSXV3cktzQ3Z3ay8xSFVsbVF0TnpHdTNZclUwdjBCemZ6eUMraitVc1F2bU1KSTZ1LzF1c2pqY0NTdC95MDhXdlpLN0YyYVhTcXg1aTQxbVVKejM1WFYyaENaOUN1em11RkE2M1phUWZkamtvWXhZZXZ6NnVlNWt5VXZVRXduNzdVeEoxQ3Y4NTZTL2h2ZllzdlFXc2NSWExOS3ViYlZJNXYzZFJqVk5vbHIwRktIV3dtejdtWnNsb1gzcGhYQmppM3JKWXdMRUlZNWxyQ3NPV2ZpMkZTUGJ3aFFLbzRBaTZZVkQzbnNHemFHcXR0SlVGb2h3dTNXbW9GOXBVSmFVK3NQdGMwN2tJODh5NEZEYW9MZ0laekdIbUFxZEU2clRJajZRR2wra09BRTFZN2hoTjlGcVdWdHRJTzdocUFFL1UrZ0JPZW41akxMTWpsdkFCL25XcWVZSXhtakRHRTloWXpvbW5GbHAwdURESzZXNXNBWkNpZFlheXJvMFJYMDFRYjFVZE5BS0o3alVxM1k2NlB4dE9WbU9QTDRsS3hJaU9OdFJOOUhZblBySlZaUEJoTHJ5VVIvOW9Wd0g1RFUzc2xDQVVBeW96RGpnOXpJQVdKbTZKaXdVbVJqMGt4M0l3RzU2ZnI0Q0RHUzZ0Qlc5ZkZaa1psYlYwUmt6WUQ2MWZYd1d6dUgxaUw5WFJVRUx1QjgydkhRQnI5S2JGSkVEZW04cGltTG9kcGFsTmlzU2xkVWg1TGZTNU1VNDZYMHMrSGFqNWQyMGZuTVkrNXBDbFMzbElPbUtjL3NYNnREVEJQUzc5WkJiWkRheklTMUZQbjdXM3FXMUdDVWMrcU9sOW1ZV1lJNkE5TFpnWnpYUTRTbFFXTENzTzFMb0JFRm9CRWJmNjRWK2hKV0VCZ3pKWmR6bXFNaWN6Q21vN3F3WlRiWGRzNSsvaUZwaEJJSzNzNy9ZOEtIVmpMQm1vVGxZN2l0WkNVUGdOSVViTGpiZktOUzNkamE3ak10RjFkem9XbEdtdEdhb0lyNWJnblAyc0U3cW9GWE02bU1VM2JTNklwTWdkU2RsdzBwQzRzenBWSE55dGFVTnlPUTdtRkVueGJ2Z2IvM0U3VHdYQjF6K3IrR2xyWG9ZUUQwZ09vcG50emU0bFdvMUc0U0orZzdxczMxU0VmNS9KWkZsWlgybGJzRzZ5UEoveFBmNE1OTnlVUzNSczdrbU9OeFlHS2dFcFpXaGd2ZFpRUEhsTFVmcUlmRUNQM2kxRlpTTCtZNGsvdEdPT040bHp2WjNlTVFmTWJqVDZ0ZDB6MlB5OTIycm4vNk5FTDJ2TzNrYUhER3NPUEZlci9PelF5QlB5eWNPblRhQnpMY0U3SFJkbDN0U2I5K1dsRTdUODJhSDZ1WXZNMEtqOG1OSVkrbFVaNTkrZm40R015YmlmeEU1emk1YVZQSlRVNysrRzZEL3ZVRnRWeFdrR3JubFdaMVJlaStIdmZZOWtiWU1Ld043QUxkUCtDMEIyakRsNlFiZ3dvN0hISkMyRmlOQ29Wd2tzZ1JqcmIyRS9PeEdTN0ZDTmVZcVpFem5uZ2xuS0JtR0I2QVpub1FuTTVtUlc1SVV0Ukw4d2NEMW42dlpDQTVsYy9FOG1GeFUvbHA3WWoramR6U2NMbmIwN1ZGb1lyVWRMa1QvaDlUZldKd25BRmZRRmVEUGliSTA1dmliZXVJdEFZY1htRDN2b3d3U1F5VCtZSVQ4cXBSbXJzd2x3SlJuR2Z3MEl3SEpGWXZvVFJhODJJWHA0Z3JyaVZsREJLWVJqd05HMUM1c1ZzdUxEa2x3REVFbmw1TlgvNnFYcndrY0h1NW5rNVE4M2pERFY2dHRySHV4MEdnOFBOQzNCK0FWNmM0RDM0UGZodmJBYUR6YzM3WW92T3FBVytxRXB6ZkVsOG1yWUVvek1SMmZuVlJHY0tjLzR0U2JRbExHdExtS1JaWjd5eXR1QXZjS2pHVGIyQVNZWEJjOWdrMVVSQVc3ejJ6NkV0NTBQVW44YXRMeFZHbXYzK2xraGhZYVRGRDhwUW1HaXZpYmUzeDJ2YUw4Q2xCLzJOWWFjejNPZ1BOSVFkam5CREFMOGJmZ2dHUC9zN2lsTCtodlRldEZOZm9kTDYzUDdBeFUyTFJFdHNoalBwa2J3QXg2bHdsNG9aVnEyZmIyVGtpT0tTUlJ5TG5iajI0ek9rSXNRU0VUVVJIRm9vQ2s2SkdsN1N3NHVDbjJZVkduTjRXbzEvdzgxcGd3Vi8rWWdaLzJaZVVyQnFqZDVndHB6NzlSOSt2QXhuenYwQUM1VndBZmlvTWpQRnpIdXpiL2JTUithK01rQS9PcWVwbjNzNFkzQ2pGcnB5U20zUnpYZEhRbTlseDEwMHgvUVZSTzJrZDFIMmJ0TDNhcEM2bEVyMzRkRkc0dWUwTHdLSno3VExRV2c3YVVEYzNvU2p0YUhGall6d1RxaVlrWFQ3bExxY2VEdVNoWFZIb3NuNjNqNmlCZTFKMElMNmxOZ25pTEhVZjZ0MzFzSW1wR0JvU1hRYW9UOS9VNjBkVjl5OXhwNlBXQXZPaldWTGJzODh0ZTZ6dTIxRis1TnVOSkNQYnMyTGc5NUwxQWZlUW1vcTM0ZEwwUUQrVGtkWlA3dnpsZTJ6T2wvWlA5SDVhc0ZETCtxQk5WZSt5Q0huQks2eTVIencvd09hNWozeVlwcCtzOWdENTRoU2huTk9kNEZYNEhkMVZPRm4wMVgwV1hTNXowUFhFaSs4bUx5NlR6cmRlU0tYK0ZtWnpqbWcwME5WVXpzK25WTGNOYW95TGduZ1Z2emdWbUlYSkp1WUE1ekNBWmRqNC9FV0pLblVTaGErNDU4Y3lhZDdsY1hqaW42MkU4bVA4L2huK2cyYXdsL3M4RGpvamdZOFJ4R1YxdUpxQkIzcDlzU1JITFBCbk1uM0M1alhUTHhVcjVyWHlNU3VuQ3FlK2pacHdVVlRiOEVIci90OG56bXZXZmd6MzFyUUtQMnV2Q3FkZWpmWDJJc0c3YWJvRWRBbm5tUlN5QjZYdElsOHJoV256aVJMcm4yRFJjQmZnNEYwY2k3RnZGUkxjRnJUdWxRN0h0eDFybHJNUHhiMFE0L0hBL3FCOSt5VjRWNVdaTmNlK2RJall4UlhQK0UxNzRKWUxyR3plS2tiOTlxeDg2UkRlVEhBamZCNU00aVlIdk81QXRjdkZmS0h1NGJPbGZJbmhIdHFCeVpZZWZ3OE1vNEJOdmh4cnJmS2p0eWVKZ0cwbXlISk10QnVSQmtadWVnSUFYaDB3MGg4VWRGSTl2c0tacnpmTEMwWXlXYUZZazA0YlJUd29SR3ZjQWc4MlNHcHNXUnd6N3RjTXl5TlhhNDRPcWZab0Zjd0w3UWJ4RW9mK3prdFBERDMwdVRrUzluNzUzNi9HejE5N0QzY2RQQzlZOWx4OUhCMkMvMUdPLzNzUXU5QitvMjVlL1B0QitlZWE4LzFRNndGYkd5aUl0UVZuK2pZaGJFZitQQWlHRTA0S2psWXVTMTdkSEhjYUFhQUU1SGhUb1RNemh6Y3dmQXczK0VMcng4V1k0VGpDS1pTaTNwOVNlRWl2QUJSZG9HdVgrWUxBT1FsM2NCT2ZRb20va1NmTUdYaWZJQ1lrWHVId1Z6RDYyL1YyTXFlcDN0WTdIemR3K0s1TmJocEkxdGFTYno1RjJ3Z3R1Q3BQcnVWR0NxY054ZWZxNnNZODdUczNQNi9qbS9lTm4yTzhaMWNNRjJmYTREMG0vT09NamRHc0d0NGpIVVhHR1BxZkdPc1h6VEc4SDl2akV0czQrY1lhdmxTMC9rNUIzeU8wMTAwN2wrUWNYZFF4ODR6Ymx6OFdCcVhZaXlwMHFyRTdZNWhIbmN1NWtVcHpOd09lZVoyOEZJdG5DWGtzOFFDbnpDT3JlMkFDTWJvOUZleURlZHlTbXFGU0ZpcWF2N2NQTHZBN1A0Y3JPdTU0SXovZkR6ODl2bHNnQ0xIeHpuQ3h3WnFnTnA5UGs1Q2dOY1RseXJCVTdVQUMxY3NZYUVVczVKc0pxNjI3WVREemdYbTRhOXphNHhoSlhQNjJmK1drbjA2dVBrY2ZQTitGdWI1ZkVhbDhUUHhFS0llb2s0ckdNVUd3SUtVV1lPU0dtVFhJSlVHUFlTdXl0NlVRRWZScFluc3plakttdXgxMld0UkZGMk5qaWF6TjZJanlld3QyV08xNk1yc3RiSmUzODMrbW4wZnZHMGxsYUkyVUdrYmxrWjFYaHBsZUQ3WHk2MCtRUUErbnBReENjRHFCbmoxNFVWWmQwcE1DQytwV1p1VDh3UWp1UEJFd0Z1M0thbXNXakM5UkhHQzA2TXVTZVhEckZ5Vkt5bUF0dVVGRVF5cHlONmhJSTY0N1VqZTBXcWUzNm9yRyswcjNoMDlwRGRaNjQ3dk9JUzVmOGwzUjI0MCtJVEtOL1lmM2JONURUM2I4OUplelAvLzJmM043VmdlWTBNNVBuZTIzY2NiZjdNbCsrc1p3dXptK2htQnA4NXVRU1d2UFhGbWxZS3Rid1p1ei9YVUpERHpIL3hvRmNZZ3BNOGMySEVuNWNkZFdUL1phUzV3dms1ekpibE9jMm1yeTVORGMrZnROcmVBVGMvVGQrN2pCZDl6b1E1MDdGYlozL3pmcG5QQnA1eUhUaVF0Y2lJWG9sUnhXZDV4NUdnRnYrR2t5czlQYS9oOHRGWXMwRnIwNmJRdThRM25JMW41Q1dkd1ljS1hPQUFtUi84YzBGOUp0VkRyUGprQ3NTd3FOc1FsRHhpdDZoZ3BEMWtZRGw3TERWam5DOE1UY0poWUdHUmJya1pjc3FvL1RXMCszVEtkWjhCem4ybUpMamorUDMrRzlhSGwvblNnZXhiSy9ja09kWjc1RG5YRm43OUQzVUl1L2Z5OTZwb1h4L0RuYTF2SHZEdVBVeGI2dkhJZ3NiNUZmVjVuREVZU0hSczBtUm5HS2JjejFzeDNKT2VBWk5vWWk0a2NqMHNvU0Nkb3VTMjVjYjR0K1FWYXZ1NUUzUGw3dm1aL0xuZDl6ZjR6T2txNnZrNWoyLzI5c3g4bzJ0alhxRjdxOGh4MXhaVGN1UWtnZzZURUJieDloS1JlUTBic2xiK1psbnlqczF4VldpQmtwblVGMWVxdzFBSWhRa3VVaEFENEsycnI4SGVWbHZsVCtLczBKV1VudkxZQWxMQVZWOVEyRW4vWVdZRy9lYWpBSDVLL29XelJ0NWNvRm0wNFgxTHdyVmo4clJOVzRYc2RSNTdlc3VibWRkR3FubFU5VmI2NjdyNWxLVi9OdW1zSGQzeTF5Y1p5T2tPd2VXMXI0OFkyYitQRXJvbkc2cjdWZmRWRnJidjZlcTdlbkZTZ0hVOGVhcXdaMlI1djJkaVRxbXNNbHNSSzNMN3k1dEhHWlJldmluVFc1ZmFzdDZ5cTZocXVEY1g3MjJLOUxZMWRvL1hGdlczaGlvazdOczBpbUl1a3h4ejU3cUFrMVViZGZaNHVjM1g0NjJFL3E5VmMrMmUybXVzNHA5WGNER2Z4MXpWaEIzZWhabk5TSFFCY3Nla0xONTFiY0FsZnVQM2NqdmttZkYrc0VaM2k1bHpMdnMvRno4Yi9UL3hzeFB5cysrTDhuSzlKKzhMOC9QVjhFZHNYNHlkemNiN2tMYy9QNDRTZnk2a0h6c1BQMU9maFo4OW44clAzSEg2K2dQbFozemJQVU5FbGlBM25aV3Zxdjh0VzdHV2orQ3QwRWZHeVg1aTdWZit5NWhmdHZQNVJKVXNyNmNkWVR2TUZtWHpGN0t6K2FZVmFvYVNmWmxXTGRQZFd3dXNSNnQwdjNIRVNXOW02dU5RT2RuY29LalhCaFM3dzNxc1dzeDVNNzh5SUhLZU5MQmJFOURKWFRCMmU2Wkp2ZFVWbmxzbEhDL0laWFNTZk9rSGtVbExYQ0VSMkZuOWxrd2F2U2toRk1lRkNxai9VRGxkYVY2Uyt1SlF1RVBOOVlXRWxMS0U2bjc4cFVWTlFVWWthemNHazM5ZFlWMU1RcnFTL29OU2VMV21MdW53aFgxMVZTV3Uwd0ZmcWE0aVFkVUJaZGtlSTdIcXA5ZFRiWDF4NjNWRnhJaTQxQWVnYUFyRnRXQ3cydlBXdUhaQlcremt5RzhVeWsvcmhlai9JeDdwNE5tMWNKSzBVbHBiWWJwSXFzU3Z0RnlTTEJ1L01NRWxERTNLWnpQK1JacU9mdGFmb0M0c3MrVm1ia0w2ZzVINzE2VnVXNW1YNGN5TERQbXJOZVdmZ0tNWmRUZkw2M2FmTGMyYXdtMnN5aEdjR2N5dTlZMHZuWWI4OHhmcDVhUmpPMnVXejlndVl4L0dsMDAvc040bitsRGdzekZncW03bzFuekVEUndmaFNudmRmMzhHbm04WitRdUw5TmJDcXRaQW9MV3FxRWgrTFd6SXJ5MS9RWWV2S0dtdWNEb3Jta3RLR2l1ZHpzckdrbmhiVzM3Tm1kaFJwVkdocDlxcFlaaUpJcFZ1eGxKTXhLWGxNTXZLWXFUZG4xZ1FKNHZ5NDdHMHhqb3Z2WkZBczlVUUZsZkVwUkVGN2dhVm40WWRJSXNPWGhxUUpSTUFtRG9Td3hFUS90TDNZajVEcGxzSFJiNHlSQndRMHB5MUdSZVlCVXlTQTcrdUV0SUZaYVNNdnRna1JhcHhTanV3SE5kQ3dUSFowaWlJeGJoVVNqTE43M0pmRUZDdTdzOW1uNjg3ODN1WGRDekZYd08vV0c1TmNCWGxlNWd1RnBMT3lBcUR6KzI5OW01NzFTczNEdHl3cFU3THphMnJucmg2UmMvMlpTRXRwM1k2K3RidHJMM3g3U3JMbXYzL3E3ZHpENDZxdXVQNGZlNHorN2paWjdKNWJUYko1cjNaZTVNc2VVTUNoSVFrQkJMQVBBUkRFUkdDZ0JnRVg0aENLMGxGS3loaTI5RlNGZWhVdTNmSmpOYmE2WUJWMjA3L2NxYTBVMXVuNDlST00rTk15MWluTFVqbytaMXo5NWw5Sk5YMkQyRHZKc3k5djk4NTk1emZPZWYzKzN3ZldvYWF4TGVsdUcxWVhIbi9pQVROeDV4Z3RsZjA3R3p2UFRnczBwck9BeU1CcnZ2SkZ5ckVTcjBHTmRteGUrOTl2TzNnNi9jNnpBZGVtMnB4bHhmckNnRisrdVEzMTAydXpDOWN1V3RkMDNvcHAyYnprZlhIK1lxdU1kcXdlWHFyMUhqSENXRHd6cC9HRE41dTZpZ1Y2b0syS3BOa2x5b3BoamZvODgwMms5ZXZHUmVkTmpmQThmbWFNSnNYanZ4d0lwcHBEaWRqdHRuaCtGemdYV1ZlbjlqWmhkY056VDVTYXRvbFFMbjIwamkrZExxVGN6WWo0TGYyaDVNNVkzZmtpYXNyS2dkemRTb2RuNTFYa1YvZjR2SjNscGVPbk5yVmxJYjcyekxJclU5NlRINVkxWC84SjlEdk1VY1h4YjdBMGNYMTdoR1NycDhKRTl3U2Nib3RLWEM2clFwT2Q1YTN1djJnMXBBR3FDdjdZWlJwWEFKWU43cElXQkppZHlheVFGZ1ViSmZsbyt1QzFMNXArTi82cGdGODQxK0NiK2hJd0w4azM5RHFTTFMvS09mUTEyTHFXc0wrdVlqOXN5TE9QMkpLLzNTbThFOVhySC9xTS9oSFhLcC9Ga1R1UzNMVGNHTFV2amhuL1RzK1dPY1VmeDNDL3VxaU5sSFQ2Ym5Wc0ljMkpNbU5LTGpyUWJQSzVnVFBBYnk2eFlaeHlYQm1Nb0ErRGtUOWVSdWtBYldnVWNycXJvYVRBRm5uaGZyYUwwdTN6aFN4TGNtdlk1bWl0VVg1bWRtU1BraGpLQlNJMFZ0d1BaZUJxbFJ5SEdDdkRrTXFJNGtPQnBMb0lGTjZCVThhbjBUaGlZd2o3Uk1LNy85R0w0YnpLblhCRlAySGhIdHdLZS9CNlNObFB1RVhGKzd4WXVSMXRFOUVhc2h1akpHN01MYytoUnZoM0FBcjFhamtWTUNlWGlpYmprbXNNTVFsVm1peDNpZWRyZHlQVFh3UjhHWnJZdjgrTmNHOUZ0dDVid3dwaHJLM1BrTjJYc2NjQVR2SnI4QTduMWFhNUZlVWtmeUtQSkpmRVVVSmdIaVVNdEZDZm9VN2tsL0JKUFFmZUp6RVBtWkk2Q2J2VE5Sa1FBdmMwTVB6Sm42TDIybnMxai9Zdi9Ndkl2LzFBcnRIaFBldlZZMjFzakZyald3NkJ0Q3pCc3l3TXcwS3d6WEszdUtLQUZxODZ2bmMwbklSeHdTZ2pCMmlhblJ4MnM2T1d0cUx0WVU3WURNZWswczZZS3MzNE1CbDNndGxzUU1FN2pMV3V2L1ZYWTE3ZHR6bU5qMjkvNEtnempyYWRtS3RUa0JOTWo0NytCMExiN3h2eGU1MVZTMzN5Vk8zZi8rQjFSTk5FNDkyajU3WUlyR20xdEhEQTZOUGpOZlNIMng3L2JHMWVjMmpiVC8rVjkvcGZJMU9sN1czdU03TW1JeXNuYk1hMjhTWkFvMUdiOWhSOS9DNTl3ODkrWmRYUmpvZmt2ZHVmVzVINCtwalA3dS9mdWNHcVczUE02UXZFd2IzTk9XZ0pPcGtDdUl2bkZjNEpibFlOUmVzOCtIa0RlRGYxQ2RRZ0ZGanowcGtrU0taNGVRbFJ0NDJUQWh1aUJLQzVWSUo0cXA4Q3prZ1YwREJjaDJnQVlwcW0xSWpnMU90K1JlaWhMMHBGL1hKSU1QY2gwbVg3bWp1dyt4aFJRZk9UdzNIMElmTEkzTWZSaENMeVJERWFSSWU1SEtZM0dvV1VWOGRIWjh5YzRtL0hSbTlNaEtLMlUwa0FrcG5ZL1dYdExFYWJDeGZoSTNSd0dZUjdHVkhaUGpNYUNUVEdZbGt3blplVkhJNll1MnNpTGV6S1ptZGFSSTc1SXJGMnJrZ1FNbHM3dmJFVVR1ejBiMEoyNGNSMjZjVDh6cGlLTnJodkE1VnNyd093K0x5T2d4THl1dkk0S29VNzNwbWorMUsrZTVuZHQyaEZIdDR4SCtIc1ArYVkvTTVZajBZOEFWN1NUN0g4bWcrQjNGZFJYdyt4eXIwY1ZYVWFSbnlPZEk3S2xPc2x0bGh1ek1GYUpuOTlxTU1PMmpRQi9kUkgzTitEalR1TFNoV3E2VkF6MENkTlJjR1BiaDlzaU5yRHAvbWMxZURWbEhPc2tHSUFkT0p3cmlnWTgrQ3k0UzRxMzNzNVp1WFkvbDVzWitaRTJ2WHpyOVp2c3ljVTJLeGVuSk1BWmFPdVNEdnh5WE93SFhnZXFsR2FxT1NIK0lMYnpTVXcwRmxBTmNJNTR1eTI0QXJWcUJrUjBDdEIyZVc5VzVBbmZGMnA3R2dsSXlDNVQ2U0Z1SXMwSlEweHUwZkJCUXNucUwwb1NZb1BEbzJKOFJPR3BpTStLT25sbzNvclJicDZiYmwwSVN2M0ROazhBamU2ZFhkVyt0RWhxczkzRDgydmNYMzFNajAyUFR0dmcya3FjVGErMDNHeTZ1dUhJYjJXcjlQTUwrMTZsZVA3YnJRd3J4UlZidmk0UGw1ZC9meXFWZDMvSHdLeHdHWUY0M0dmd2ZsaGhQL2VHSzBrMUg0NkJnYlhad0NHKzFSc05FaGl4TVNHQkxRMFZCT21aOGFJQjJkNEpLZ3BOK056bWpKb05MY3VmQTZQb01kZVYrRkhYa0M0WGNudHlNNmlTVkRZcStJemxySkRHRlB4cXk1dzdhQWhtajVRbHR5NG15cFNHRkxaZFFXVnhKYmN0TGFzbUNpU21MU3lRVXpVMUxEbm91ZmpWakZ0a1BJdGtxcURYaDdTUm5sUWE4djJDekorV2lBcUJPeHBHalVTcUNVRjl0d25oYWt6alRZTUVFb3huYlFHc1drS1lzS3pUb2dpcklvbEhtbW9UU0pFNTdOT0hZbWRjcU5qT01sUXhqVnFEOURGU2RhYTdxWUtDMGRvNnJEMVpzS3Fqcm9Fb0tPMU1CcU50STdVNk9yaFVnZlRRNng1bzVFTzZtaWI4Ri9nRm51aXI0YmlOb1NvblVCbHJiQUtpdmtaY3NHZlRlTEtFSnFoMHZSZDRQWHpaVWQwWGNyc01mb3Uxa1M5ZDBTUlMwbVZvYjJwUkMwVURmZlBEaDZkMWpiYmJCL1hoT3ZaOEVxdmoyRVY3ZXQxRUFzQXh3UzFadElrYUtQRkNrNjQ0b1U2NVVpUmJlaVFsd2x5Qm83UEg0bVpEaVRvWGVsYnBlZlp1cGtLWnJyMHd5OURIU3VQOVBjamZwWUVWVlBQYUVvanRra3VZeWRDMXBFZ25VMGhpdlU2dGk1V1ZOMkhteGJtYUE4aUREZzNGYnNHVURBMkt0RUVkWjZ3TUEwWXJpdkVSaVlXU0w2SUdpcmNFNmxEbXBaZWJ3L2xRMllDQWZveFlRb2R4VU1VY1pzWlplS1pMQXlqcGg2SExlQTk2aVN5RG1QdmZ6bm1hM25aL2FVc1NQaGtwd3Z6cGZ0bVRtL2RmcVRsOGQyOTg5Y21UcDRlYnF2Yi9yeXdha3JNLzFLd3FSLy9OZ3d2VEZjcXJkcCtOaFkzYzRydFBuQzJXdm5SMGJPWHp2Ny9MV0xvNk1YcjVIWVdmVUlwNmRFYWpYcTU2ZXBVQzE0Q2NYS3k5UlFZMEt3dWdaSjdrU1gvZUpzdDcwV1hOUU4yNkFic0lzazVCS0puRDNBN2tpM0NCc2theURUeVR5SDRaZHRhRDBzMXdJWnlvNDZFM0pGY0UxMnlPQXFieUw1VFVXZzV5VGJsNkdvbWlyeVZFazRtYVFiSklPQ25VcVBVMElMUlNrbytVRVFuU3g2NU1OYmZpTXQrODdkZWVyOUt1dWFPeDdvN2YvNjE1YnBUVGR2OTQ4ZEdWaDE1K3BLZlpiRzVld2J2NnR4K3IzYXFsODh2LzJsZlMzYkt6Y2UyVGo4eUhCbEpmb0xmYXhrVmN5ZEZXdDN0dmRPRFlza0N2bnV6TXJKZ2NxWWc1L3d0dDd6ejUxOEtVa1VhUW1mKzdBazcwNTFrN0tpK2ErWkdvclB2SU1Rc1ZHU2M5RWJXazFvdkxhcmNxRU5rNkl0T0JNUEo1QkJ6TzIza1QzNXhTYm5wYzgrVEo2eHQ0Z2E0bVI1Zk56UUluS2YzZHhyVEFQZUM2eUphcW9LQ29kRXdFUWtCUVdYSFZGWDFUYUZLNnhpNW05MzRtUWR2L1VIOS9KeXYyTUNhSTNvb3Zxb29NVUh0Ymc2RkpjN2ZUZ0Z3U0NDVGdQYzBFVVdmUzZjMmhsbTlvRmtwOEVGNzdZRk9xc1RrN250OFdUdStJVmM2aTJhcE5zeE5MV0RhV1M2R09nZEZLd0dkdEIvWkJxSGhvaWYvdHVmbldHcTJiZVpLYUloU3hZaThDZEdReGIreXhtMmxLbnU2U0cvejcrZitmZjVPdVgzajNQTmRBUC9PZXJIelZRdzJ6ZkxabEU2am16aW9vRkJiNW9MNlhHQm9oNjRNWlI1MW1TbEpPUk4yTm5WazBOamlnQnNZVnRSRGFLQVpIK3hsajQrMEo2blVYbWxFdDYwM0c3bGZqTjRxczJpMHFoVjlYY0ZXanMwV3FQSzVlMG5OdTduYW1rMy8xZjBERzM0R2JLaXo4QmZsVTJtdWFESlBLdkZOdzVxZlNFdHJpdlRBcjRPSHNNRWV4dFo1REVDUUR3aG01NkUzdXd0MjA4ZW9jTmhIZWpJVTNQck5DcHBaNkNsUTZNeHFuTzlmZDdCMDYwV0ZUekQvSFhhVGMxKzZXZHdaSDZHVHhZK1FyWUs1anJVRmt3UGJvc0t0QlpGVHhIMFNrcURCSjJSVXNGVWJSTFVrMXpaSXZUeklwd1dVT1JDUDdlWlowdXNWTDJDakZMYVRMYVpVUGRuSVplbVNBaDZVN1poYWVhR3BhMzlIWEJaRHdhbWFtZHZpc1pub08yWmV0ejJGZFR1c00zRStVRTNzVG05LytFSUN1ZDFJN056UytEYlhCdXd6WE1MdE1Sa3BXMGdDODhMZVEwZ1lKT2lyNVNHdi9TbWJEemFnaTQ5UEcxdVI5ZnQrU2s2bENacEw4UDJ6bDluNm5FLysvL2E2L2lLN0UzYWViWEplelRvZVpUU3k5aEgyRy9obXN1Z0VUUHoxSVNacDRiWHk0SUhiSzBOZjBuK3dTSkxkWDZvQUlxWjJlaFMzNGJKaC9adThQazI3RzF2MjdQQngyeHIzd3ZNem5zNjJpYmgyMG15aHpONTZ4cHZwMTZuQk1wRE5RQXZFTytDdVNVSm53akpqZ3BSSkYveHNKWFRHRnQ4aXlZb09RKzJkQWdkcXhiTnpBSEM0b3puK1pTbXZadzA1aFRib2pzNzlPZW1uR0tycFNUSGJNN3hXTkgxUHpIbkozSzlMbzdoVTU3bWlveVZMMUluNkhjeDk5ZE5oZDFuc2xGR0RtZjNRUDB3NkwraEtEVTU4RGVSN3BzQzUwdnVOWXZ1OVNGbTBNRzliR0VDbllCdmg4YzlnU2ovcGFMUExRRE5YVW9EajZPcG9sdlh1R24rRGJUYU9VYUZlcUNSbXJWeklST0U5b1VvdEtmb0hwT2hLdWlUWklxYkM5YUxzMW9OL3FKQ0FpSTA1dGVzdzIrUGJnQ0YrZFdXT2Jta0FiVjJOYzYvcWZiRFMxSmRCbURXYWd4bWhYZEpJOHFEZUlYYWpJYkRGU3ZSVXJ3UTlFbXRUcVVjR1k3TkFwNEdpWVN0U21JTnBsS29pZXFCeW1iRndyam9Jd1p2Y2RHemFtL1I5MmlHTzNmQlBIN3lyZjJkZTdjT2xSVnhPcTNHN2hGWGpiV012M0JmbjRuWmFSSnVobGlhWmdTemFkNWk2RDF3ZHJ4alcyOURhYTVXcHkwcjNiVHp3VFgzdlQyOXljaDB0MXJMN2FLLzlSdS9mWGJRVWROVlhjS3JiWVZsaGJibEQ3OTV1RkNmWFNmWnZiYkNMT0hJNWFNcm5HWFZaVGs2ajY4L2tEOTQ5cU9uOEpqVHk0N3pwU2hHVTZOMzRnQ0owbVN0VFNKK1pNVXdpeG5BaWhxSGlCWkRWQUhrSmFFZ1ZuVlY1bzFvZFlYUmpEeUxuS2ZDM2xTQjgzaFM5T3d4WWdWUk9HSnprRkFMS3B1Y0hrQWw1cE5DbWdZQzI4U0VZNGZGMGFpb3kzbUVBT3Fhbm1JdjZ4QjY2WTkvdllZKzNhelRxVC9TODlyZjgxcGR5M0wrVHhvaFM5QjhvdUwzdExiZS9Cc2pvRC85bkdaK3BzQnNwS2MwM00xTDlIczE4dythYVlGK3ZHcStHZm9RREFJMzJCdG9KUERHYUNjcU1rSVFpc0pBUS81UjRpRy80QmJndjhEQk10YTNaaC9sZjRuKzNhcXNOaDJTSW5GdGkwcGNxeExscmEwaWhKdHdwdXd3eklVVkZTaWlkQzA3VWRnWjBnaVlMU0JyUUdSUDM1U2dmdTBCOVd0VlB1MVdtS1FnZngzWWRXYWl1TWZKMFFaOWRmRzVJTE54Mjd5SnFGOXYzbkxtN3FZc25WK25mdlVIdzErVXNzK0UxYS9KODEvaTM2R0tRWTI4a01MTGtaQUJXbHhBTWJKZ2htZWZ6YzB2MUpEYS9WeHNFeFlOTE1UR2dQaHRqaGdxS01SaWdYbWdDV0dXelRDc0dPYndzR2d1UU1ib05WYWxEQ3hzQkVoSW9lY20yOE94SXQ0Tk84NXU4Nnp0YnJQMVRnUWU4UGNmSHFxbXZmTWZFanU2UmwvWXY1eFhjZGY3K0gyTXBtN3M2R0JYUk1qN1A2MXkvVmNBQUhqYVkyQmtZR0JnWk9vLy83RFpLNTdmNWl1RFBBY0RDRnoyei9LQTBmL1AvbXZoeUdUWEFISTVHSmhBb2dCcm5BeDNBQUI0Mm1OZ1pHQmcxL2dYemNEQThlTC8yZi9QT0RJWmdDSW80Q1VBb2dvSGhuamFiWk5mU0pOUkdNYWY3L3o1VmpENkE2YlFqY3RXQ2xGZ0VWMUxpVlIyRlRIbk1DalhydVkvaENDQ1JkQ3dVQXB5WUVXeVpEVXNLS1VzcEp1STZNWUt1Z2dHSWw1RWt5NFdYZ1FqYXJHZTkydUxKWDd3NHpublBkODU1ejN2YzQ0cTRBaHFQbWNVVUNrVTFDcm1UUVpkNUs3YmhMQzlpajduTGVaVkRFOUlWQjlBZ21PRFRncERhaG94YWx3dGxuOHhkcHlVeUpVS2JlUVdHU1ZKY3BITU9pdElDV3pmSjQ5TXhuRlVFVTN1VFF6WVpteTJBZVRzUFZ4eTY1QXpMOGs0K3lYMi9jaXBLSDdyS1VSc0I0cW1BVGxmTzNJU2Q4OHdwMWNvaWxvL3gvWWhiQjRqYUpleElHdjY4dGhxM25sc3QxdHdudWQ0cHBiS1A2ajl6T0dqM3Myemg5Q2x2N0IvR3JNNmcyNXEyTlNqVzQyajBXekVDWE1TV2VaOXgvbGMvcUJYdlhPOGNYdVFsVGdKbXc0cTUraTl5T3BCUk5RaURqSStwdlBjTTQ4R1BZT2dGcDFFSi9kdFV6SEhUNDF6L3h0U2Y2azkyeG5TWHRHUS9HTVVyak8zRm5lWS9SbjA2UVRTSEp1V09WNHNoRG9kUkk5NG9oNmdsMFFaK3lSNzIwMDRwQUo0eVA0STQ3ZFZpZmtsTUdlZjRwckhDNXhpN2ZkNGRWOEhYMi81bTNqaCtWQURmZkNSMTJRYjhidWQyRi8xWVMzTWE5THpSYnlvUWJ3UXo4d1Uza3ZkMThNZG9Jb1g5Zi9EMnU4a2FXZWxYQ0RmelZGRS92bXdGdGFsMGg2clJid1F6MFEzZkdXdXkveUhPYkZXTzBpelRnRytGcUNxNml6ZnlBSnAvUXZ5MUg3cU9ZN3hIVlRoMmhPOEZ4TjhGMGw1STVWM2tpU2lRN3p2dSt4bHhHV3V1b0EwbVpOMW1XZkFQc2N4L1pQdHc3eHpJMmo4QXlWMjVPQUFBQUI0Mm1OZ1lOQ0J3eGFHSTR3bm1CWXhaN0Fvc1hpeDFMRWNZVFZoTFdQZHczcUxqWWROaTYyTDdSSzdGL3NuRGdlT1Q1d3BuRk80RXJpdWNDdHd0M0d2NEQ3Ri9ZYW5oRGVGZHdXZkhGOFQzeWwrTm40Yi9rUDh2d1FrQkJJRXRnbmNFVFFTTEJDOElDUWwxQ2YwUmJoT2VKM3dKeEVWa1Z1aUtxSXBvbjJpKzBSdmlYR0pPWWxGaVRXSUM0a1hpVitRTUpGWUkvRlBTa0VxVFdxTk5KdDBoSFNKOUNzWk01bEpNajlrNDJTWHlTWEluWk9Ya1E5U2tGQklVSmlsY0VUeGp1SVBaUW5sSWlBOHBwS2s4azQxUS9XV0dvUGFHWFU1OVNjYUJSckhOTjVwdk5QY29IbE9TMHVyUXV1QmRwSjJsL1l6SFMyZEpKMHp1bnk2Q2JwNzlDTDBoZlIvR05RWW5ETlVNS3d4WWpPYVpLeGtQTXZFeldTQ3lSMVRBOU4xcGpmTVdNd2N6QmFZYzVuM21mK3pLTEI0WXpuQnlzd3F3dXFSdFpsMWovVWJteEtiSTdZaXRwdnNvdXlaN0hjNFRIT3NjSXB4Tm5HKzRaTG04czIxejgzTHJjWnRuZHNIOXdEM1J4NGxIczg4b3p4dmVGVjRTM2xuZUQvejhmTFo0Q3ZudThtUHlTL0I3NGwvV1lCQndKYUFWNEZXT0tCSFlGaGdTbUJONEpUQWEwRVNRVkZCVjRKOWdvOEUvd25KQWNKRkliZENib1cyaGY0Smt3bXJDWHNFQU9JMG02RUFBUUFBQU9rQVpRQUZBQUFBQUFBQ0FBRUFBZ0FXQUFBQkFBR0NBQUFBQUhqYTFWYk5idU5rRkwxT081QkpTd1VJellMRnlLcFl0RkpKVTlSQnFLd1FhTVJJL0drRzBTV1QyRTVpTllrenNkMU1FUXNlZ1NVUHdCS3hZc1dDTlQ5Yk5yd0RqOENDYzgrOWpwT213MHlSV0tBbzl2WDMzZC96blh0dEVia1Y3TWlHQkpzM1JZSnRFWmNEZVFWUEpqZGtKd2hkM3BEN1FkdmxUWGt0K01ybEcvSis4SzNMejhIMlQ1ZWZsNGVOeW1kVE9vMkhMdCtVMjQydlhXN2QrTEh4dmN0YjBta09YZDZXdVBtTnl5OEVYemIvY25sSGpsdVBYWDVSbXEzdlhINUpXcTBmWFA1WmJyVitjdmtYNmJSK2QvbFgyZG5hZFBrMzJkNTYyZVEvTnVUVnJkdnlybVF5bFF1WlNTb0RHVW9ob2V4SkpQdTR2eUVkT2NJL2xCNDBRdXhkeUNmUUgwbFhKaEpqNVFNcDVReFB1WHlCcC9kd1RTWEJqdDRqck14eEwrQTFsUHRZei9HZnlUazFRcmtMVHhQRyt3Z2V4bGdOWlJjZXUxakxJTFhwWC8wazBNdmRxbVJrOVJQU3MxbzlrSHZRRE9WalZLSzZ5NzVYUFJ4ZzVUTmE1MWpQcUh1RVNFY2V6V0tibGFHaGVROFFWV3VlUFFXQnkvV2ZQTUhueVJLMlYrMkhsNkplbGJGWnY0Mm5VeUpiVUVkM0kvaFFxeTZrd3BIUzJvdEZyTmVYWXRYeFUyaUZlRkpjMVZwUkh0UFRHZFl5NmY4TEJyU3ZiZkcwM2ZWc2MzbzJicVdMTEpVSmZXS2dET21UWVNteVVCN0hSRXdSbURpclVpSlg4Nm1FOXRpeHU5d0ZwOFJFbzg2QlpJKzVtcGRWdjdObjZJKzlGY2FIakduVmFDOHM1N0c3eU5MUTFQcUg2RkxsN1QxeXBtRDlDVzBObzRpWktnN0tKS3RkODdXek1HUnlhRnJ2VFNFVjdKUUNmcm9MaTRpczZ6Tm14TDBKS2xUOUdSazVZNDliNUJObVdkRHZFSHNhTjNiK0tadENlWVMxbEhHMFFtT2ExanYxWERYNkxpZkgwSHU1WE9CcjlmZmdOL1o1bE1oalJ1dEJxNkJWSFRNbVJsTldlN0ZTYWViVFR2MXBuUlhqTmEvOEgyTmJQdzRXWFpYaUpMVnVQWVZQblQwUnRYTHVSdTVmc2NxSThJeFlaYXo1Z0R0ZFg0c1cvVzY0bnpQL0ZMV042SGVWb3lVc3A4d2pjZ2FxTjYzcG5QdVYzb2lkYjNPZ3ovaGoxbGgzUk1xWW9VK05NWE83WUc5WnZ5YjBNVmh3Um10OXh4azNkQTVWODF2ckdIc3VGWm81N1JOT2tmVmVIU0ZleGoyZE5XZk8zNFRWeDg2SE9sTGZwNXF0ZEgzQ1Z6TmhUaVNlM045Vkp4OTRoR1NCcUxKbXdQZVVzVGZHaW1VeVlWZUV4RzdFYk9lT2pmVkdpVXBtUzNtYUhLOHdJaWYzVTB5TEdTUFpHNnlhR0FXWk4ySzBhc3F1bjEyK2NycDF6VjNtbHZDVXFzNDBMM00vVC9WMjRLeE9uVXYxeVJYTXllenNxU1RDSlN1cG1GdWRSdTVhWGJEU3VGT3NjS1U2Mll5ZE02R0ZkY2VRbFV3eElRN3htL1BYOWtsZHZ4M2FuRFpqYUZ4WC8vTHN6YkcyUEgwL1g1dStoLy94dDgvZXRXdlkvMTk5TWExWG1NTk9zWnl5ODl1MEdPR2VjV1llSXRwZGVOKy9nZy9QWmxsVlduKzk2TGRQajcxcHVkdVgwYWxYL3FGUC9sQ084ZS9nZWlKMzVDMWNqM0d0enZoTm9xT1RSZWR2UVhhWDdJTjhDWlVIL3VheWJoLzlEZWVpRk5KNDJtM1FWMHhUY1JUSDhlK0Iwa0xaZStQZXEvZVdNdHd0NWJyM3dLMG8wRllSc0ZnVkZ4ckJyZEdZK0taeHZhaHh6MmpVQnpYdUZVZlVCNS9kOFVGOTFjTDkrK1o1K2VUMy8rZWNuQndpYUs4L0ZaVHp2L29FRWlHUllpRVNDMUZZc1JGTkRIWmlpU09lQkJKSklwa1VVa2tqblF3eXlTS2JISExKSTU4Q090Q1JUblNtQzEzcFJuZDYwSk5lOUtZUGZlbEhmd2JnUUVQSFNTRXVpaWltaEZJR01vakJER0Vvd3hpT0d3OWxlTU03R294Z0pLTVl6UmpHTW83eFRHQWlrNWpNRktZeWplbFVNSU9aekdJMmM1akxQT2F6Z0VxSjRpZ3R0SEtEL1h4a003dlp3UUdPYzB5c2JPYzltOWduTm9sbWw4U3dsZHQ4RURzSE9jRXZmdktiSTV6aUFmYzR6VUlXc1ljcUhsSE5mUjd5ak1jODRXbjRUalc4NURrdk9JT1BIK3psRGE5NGpaOHZmR01iaXdtd2hLWFVVc2NoNmxsR0EwRWFDYkdjRmF6a002dFlUUk5yV01kYXJuS1ladGF6Z1kxODVUdlhPTXM1cnZPV2R4SXJjUkl2Q1pJb1NaSXNLWklxYVpJdUdaSXBXWnpuQXBlNXdoMHVjb203Yk9Ha1pIT1RXNUlqdWV5VVBNbVhBcXV2dHFuQnI5bENkUUdIdytFMW85T01ib2ZTYStyUmxlcmY0MUtXdHFtSCs1V2FVbGM2bFlWS2w3SklXYXdzVWY2YjV6YlYxRnhOczljRWZLRmdkVlZsbzk5ODBnMVRsMkVwRHdYcjI0UExLR3ZUOEpoN2hOWC9BdGJPbkhFQWVOcEZ6cXNPd2tBUUJkRGRscjdwdTZTS3BPalZDSUtsTlRVRVRKdVE0SkVJTEJna1dCemZNRXNRaEEvaU44cVViaGMzNTA3bVpsNjBPUU85a0JMTVpjVXB2ZGE4MEZrMWdhQXVJVm5oY0tySG9MTk5SVUROY2xEWkFxd3NmeE9WK2tSaFA1dFovckM0Z0lFd2R3STZ3bGdMYUFoOUxqQkFhQjhCdXl2MCtrSUhsL1pOWUlodzBnNFVYUEZEaUtuN1ZCaFhpd015UUlaYlNSOFpUQ1c5dHQrbk15S1RxRTNjWS9OUFlqeUo3cElKTXQ1TGpwQkoyck9HaEgwQnMzVlg3UUFBQUFBQlZ5bTV5QUFBKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLyogIExpbmtzICAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLmNvbm5lY3Rpb24td3JhcCB7XG4gICAgc3Ryb2tlOiAjMDAwMDAwO1xuICAgIHN0cm9rZS13aWR0aDogMTU7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IG1vdmU7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAuY29ubmVjdGlvbi13cmFwOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBzdHJva2Utb3BhY2l0eTogLjQ7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAuY29ubmVjdGlvbiB7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5saW5rLXRvb2xzIC50b29sLXJlbW92ZSBjaXJjbGUge1xuICAgIGZpbGw6ICNDNjQyNDI7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAubGluay10b29scyAudG9vbC1yZW1vdmUgcGF0aCB7XG4gICAgZmlsbDogI0ZGRkZGRjtcbn1cblxuLyogPGNpcmNsZT4gZWxlbWVudCBpbnNpZGUgLm1hcmtlci12ZXJ0ZXgtZ3JvdXAgPGc+IGVsZW1lbnQgKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5tYXJrZXItdmVydGV4IHtcbiAgICBmaWxsOiAjZDBkOGU4O1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLm1hcmtlci12ZXJ0ZXg6aG92ZXIge1xuICAgIGZpbGw6ICM1ZmE5ZWU7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAubWFya2VyLWFycm93aGVhZCB7XG4gICAgZmlsbDogI2QwZDhlODtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5tYXJrZXItYXJyb3doZWFkOmhvdmVyIHtcbiAgICBmaWxsOiAjNWZhOWVlO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cblxuLyogPGNpcmNsZT4gZWxlbWVudCB1c2VkIHRvIHJlbW92ZSBhIHZlcnRleCAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlLWFyZWEge1xuICAgIGZpbGw6ICM1ZmE5ZWU7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAubWFya2VyLXZlcnRleC1yZW1vdmUge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuLyogIExpbmtzICAqL1xuXG4vKiAgTGlua3MgICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLmNvbm5lY3Rpb24td3JhcCB7XG4gICAgc3Ryb2tlOiAjMDAwMDAwO1xuICAgIHN0cm9rZS13aWR0aDogMTU7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IG1vdmU7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLmNvbm5lY3Rpb24td3JhcDpob3ZlciB7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IC40O1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5jb25uZWN0aW9uIHtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5saW5rLXRvb2xzIC50b29sLXJlbW92ZSBjaXJjbGUge1xuICAgIGZpbGw6ICNGRjAwMDA7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLmxpbmstdG9vbHMgLnRvb2wtcmVtb3ZlIHBhdGgge1xuICAgIGZpbGw6ICNGRkZGRkY7XG59XG5cbi8qIDxjaXJjbGU+IGVsZW1lbnQgaW5zaWRlIC5tYXJrZXItdmVydGV4LWdyb3VwIDxnPiBlbGVtZW50ICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLm1hcmtlci12ZXJ0ZXgge1xuICAgIGZpbGw6ICMxQUJDOUM7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLm1hcmtlci12ZXJ0ZXg6aG92ZXIge1xuICAgIGZpbGw6ICMzNDQ5NUU7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLm1hcmtlci1hcnJvd2hlYWQge1xuICAgIGZpbGw6ICMxQUJDOUM7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLm1hcmtlci1hcnJvd2hlYWQ6aG92ZXIge1xuICAgIGZpbGw6ICNGMzlDMTI7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuXG4vKiA8Y2lyY2xlPiBlbGVtZW50IHVzZWQgdG8gcmVtb3ZlIGEgdmVydGV4ICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlIHtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cbi8qICBMaW5rcyAgKi9cbiIsIi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG5AaW1wb3J0IHVybCh+am9pbnRqcy9kaXN0L2pvaW50LmNzcyk7XG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogNnB4OyB9XG5cbi5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAyNHB4OyB9XG5cbi5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsIC5tYXQtdHlwb2dyYXBoeSBoMSB7XG4gIGZvbnQ6IDQwMCAyNHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDE2cHg7IH1cblxuLm1hdC1oMiwgLm1hdC10aXRsZSwgLm1hdC10eXBvZ3JhcGh5IGgyIHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTZweDsgfVxuXG4ubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgLm1hdC10eXBvZ3JhcGh5IGgzIHtcbiAgZm9udDogNDAwIDE2cHgvMjhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTZweDsgfVxuXG4ubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgLm1hdC10eXBvZ3JhcGh5IGg0IHtcbiAgZm9udDogNDAwIDE1cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTZweDsgfVxuXG4ubWF0LWg1LCAubWF0LXR5cG9ncmFwaHkgaDUge1xuICBmb250OiA0MDAgMTEuNjJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxMnB4OyB9XG5cbi5tYXQtaDYsIC5tYXQtdHlwb2dyYXBoeSBoNiB7XG4gIGZvbnQ6IDQwMCA5LjM4cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTJweDsgfVxuXG4ubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gIGZvbnQ6IDUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgLm1hdC10eXBvZ3JhcGh5IHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuICAubWF0LWJvZHkgcCwgLm1hdC1ib2R5LTEgcCwgLm1hdC10eXBvZ3JhcGh5IHAge1xuICAgIG1hcmdpbjogMCAwIDEycHg7IH1cblxuLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgZm9udDogNDAwIDEycHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWRpc3BsYXktNCwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00IHtcbiAgZm9udDogMzAwIDExMnB4LzExMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCA1NnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTsgfVxuXG4ubWF0LWRpc3BsYXktMywgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0zIHtcbiAgZm9udDogNDAwIDU2cHgvNTZweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07IH1cblxuLm1hdC1kaXNwbGF5LTIsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMiB7XG4gIGZvbnQ6IDQwMCA0NXB4LzQ4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDY0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbTsgfVxuXG4ubWF0LWRpc3BsYXktMSwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xIHtcbiAgZm9udDogNDAwIDM0cHgvNDBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgNjRweDsgfVxuXG4ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICBmb250OiA0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4ubWF0LWZsYXQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWNhcmQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZSxcbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5tYXQtY2hlY2tib3gge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4OyB9XG5cbi5tYXQtY2hpcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuICAubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gIC5tYXQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7IH1cblxuLm1hdC10YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4ubWF0LWNhbGVuZGFyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keSB7XG4gIGZvbnQtc2l6ZTogMTNweDsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4ubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLm1hdC1kaWFsb2ctdGl0bGUge1xuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwOyB9XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBmb250OiA0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLFxuLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE1MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24sXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24ge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07IH1cbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbixcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbiB7XG4gICAgaGVpZ2h0OiAxLjEyNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjVlbSAwO1xuICBib3JkZXItdG9wOiAwLjg0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnQ7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMyU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzJTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTAuODQzNzVlbTtcbiAgcGFkZGluZy10b3A6IDAuODQzNzVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMzQzNzVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAxLjM0Mzc1ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIG1hcmdpbi10b3A6IDAuNjY2NjY2NjdlbTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAxLjc5MTY2NjY3ZW0pOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNDM3NWVtIDA7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMyU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzJTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNTMzMyU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS4yODEyNWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAxLjI1ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDAuNTQxNjY2NjdlbTtcbiAgdG9wOiBjYWxjKDEwMCUgLSAxLjY2NjY2NjY3ZW0pOyB9XG5cbkBtZWRpYSBwcmludCB7XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTIyZW0pIHNjYWxlKDAuNzUpOyB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyMWVtKSBzY2FsZSgwLjc1KTsgfVxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyZW0pIHNjYWxlKDAuNzUpOyB9IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjI1ZW0gMCAwLjc1ZW0gMDsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS4wOTM3NWVtO1xuICBtYXJnaW4tdG9wOiAtMC41ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjU5Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzJTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjU5Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzJTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAwOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjg0Mzc1ZW07XG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjU5Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzJTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjU5Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzJTsgfVxuXG4ubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4ubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICBmb250LXNpemU6IDE0cHg7IH1cbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZSxcbiAgLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLFxuICAgIC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG5cbmlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgbWFyZ2luLXRvcDogLTAuMDYyNWVtOyB9XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLm1hdC1wYWdpbmF0b3IsXG4ubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBoZWlnaHQ6IDEuMTI1ZW07IH1cblxuLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LXN0ZXAtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtdG9vbGJhcixcbi5tYXQtdG9vbGJhciBoMSxcbi5tYXQtdG9vbGJhciBoMixcbi5tYXQtdG9vbGJhciBoMyxcbi5tYXQtdG9vbGJhciBoNCxcbi5tYXQtdG9vbGJhciBoNSxcbi5tYXQtdG9vbGJhciBoNiB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDsgfVxuXG4ubWF0LXRvb2x0aXAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDsgfVxuXG4ubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDsgfVxuXG4ubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG4gIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7IH1cbiAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6IDEycHg7IH1cblxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7IH1cbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6IDEycHg7IH1cblxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtc3ViaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuXG4ubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgZm9udDogNTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtdHJlZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LXRyZWUtbm9kZSxcbi5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4ubWF0LXJpcHBsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cbiAgQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7IH1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwOyB9XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cblxuLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwOyB9XG5cbi5jZGstb3ZlcmxheS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XG5cbi5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgb3BhY2l0eTogMDsgfVxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjsgfSB9XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTsgfVxuXG4uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsIC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMDsgfVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDFweDsgfVxuXG4uY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxuXG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHtcbiAgLyohKi8gfVxuXG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7XG4gIC8qISovIH1cblxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0OyB9XG5cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQ7IH1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgcmVzaXplOiBub25lOyB9XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50OyB9XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuLm1hdC1vcHRpb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLCAubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XG4gIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cbiAgLm1hdC1vcHRpb24ubWF0LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXBzZXVkby1jaGVja2JveCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gIC5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlciB7XG4gICAgY29sb3I6ICNmYWZhZmE7IH1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4ubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZjQwODE7IH1cblxuLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7IH1cblxuLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7IH1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLFxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2IwYjBiMDsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejIge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXozIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16NCB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXo1IHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA1cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejYge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejcge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDdweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejgge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejkge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejEwIHtcbiAgYm94LXNoYWRvdzogMHB4IDZweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMHB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTEge1xuICBib3gtc2hhZG93OiAwcHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDExcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDRweCAyMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxMiB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejEzIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxM3B4IDE5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTQge1xuICBib3gtc2hhZG93OiAwcHggN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE0cHggMjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxNSB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejE2IHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejE3IHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTdweCAyNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejE4IHtcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejE5IHtcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTlweCAyOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejIwIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIwcHggMzFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCAzOHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoyMSB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MjIge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjJweCAzNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejIzIHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIzcHggMzZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoyNCB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7IH1cbiAgICAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTsgfVxuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfSB9XG5cbi5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZjQwODE7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjE5NmYzOyB9XG5cbi5tYXQtYmFkZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNiOWI5Yjk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogbm9uZTsgfVxuXG4ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLThweDsgfVxuXG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBib3R0b206IC04cHg7IH1cblxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xNnB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTE2cHg7IH1cblxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0xNnB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTZweDsgfVxuXG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLThweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC04cHg7IH1cblxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC04cHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC04cHg7IH1cblxuLm1hdC1iYWRnZS1tZWRpdW0gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7IH1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLTExcHg7IH1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTExcHg7IH1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMjJweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMjJweDsgfVxuXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0yMnB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTIycHg7IH1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTFweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTFweDsgfVxuXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0xMXB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTExcHg7IH1cblxuLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDsgfVxuXG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IC0xNHB4OyB9XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTE0cHg7IH1cblxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0yOHB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTI4cHg7IH1cblxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0yOHB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMjhweDsgfVxuXG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTE0cHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTRweDsgfVxuXG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTE0cHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xNHB4OyB9XG5cbi5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgLm1hdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkge1xuICAgIGNvbG9yOiAjM2Y1MWI1OyB9XG4gIC5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IHtcbiAgICBjb2xvcjogI2ZmNDA4MTsgfVxuICAubWF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiB7XG4gICAgY29sb3I6ICMyMTk2ZjM7IH1cbiAgLm1hdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0ge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XG4gIC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG4gIC5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG4gIC5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG4gIC5tYXQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjsgfVxuXG4ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7IH1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1mYWIubWF0LWFjY2VudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWZhYi5tYXQtd2FybiwgLm1hdC1taW5pLWZhYi5tYXQtd2FybiB7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sIC5tYXQtZmFiLm1hdC13YXJuLCAubWF0LW1pbmktZmFiLm1hdC13YXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1taW5pLWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pLCAubWF0LWZsYXQtYnV0dG9uOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZmFiOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSksIC5tYXQtbWluaS1mYWI6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSksIC5tYXQtbWluaS1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSwgLm1hdC1taW5pLWZhYltkaXNhYmxlZF06bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuICAubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlOyB9XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LWNhcmQ6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAubWF0LWNhcmQubWF0LWNhcmQtZmxhdDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gIGZpbGw6ICNmYWZhZmE7IH1cblxuLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gIHN0cm9rZTogI2ZhZmFmYSAhaW1wb3J0YW50OyB9XG4gIEBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6IGJsYWNrLW9uLXdoaXRlKSB7XG4gICAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgICBzdHJva2U6ICMwMDAgIWltcG9ydGFudDsgfSB9XG5cbi5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuXG4ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjBiMDsgfVxuXG4ubWF0LWNoZWNrYm94LWRpc2FibGVkOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6ICNiMGIwYjA7IH1cblxuLm1hdC1jaGVja2JveC1kaXNhYmxlZCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNTsgfSB9XG5cbkBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7IH0gfVxuXG4ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBvcGFjaXR5OiAwLjQ7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41NDsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjazsgfVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjQ7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjQ7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC40OyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuXG4ubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cblxuLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbm1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcblttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbi5tYXQtdGFibGUtc3RpY2t5IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDsgfVxuXG5tYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG50aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlciA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksXG4uY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCksXG4uY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE4KTsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC40KTsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggd2hpdGU7IH1cblxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY0LCAxMjksIDAuNCk7IH1cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB3aGl0ZTsgfVxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMTUwLCAyNDMsIDAuNCk7IH1cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggd2hpdGU7IH1cblxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICBjb2xvcjogIzNmNTFiNTsgfVxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtYWNjZW50IHtcbiAgICBjb2xvcjogI2ZmNDA4MTsgfVxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2FybiB7XG4gICAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWRpdmlkZXItdmVydGljYWwge1xuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWFjdGlvbi1yb3cge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pLmNkay1rZXlib2FyZC1mb2N1c2VkLCAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKS5jZGstcHJvZ3JhbS1mb2N1c2VkLCAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cblxuQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlOyB9IH1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiBpbmhlcml0OyB9XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7IH1cblxuLm1hdC1oaW50IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTsgfVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICMzZjUxYjU7IH1cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50IHtcbiAgICBjb2xvcjogI2ZmNDA4MTsgfVxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC13YXJuIHtcbiAgICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQsXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWVycm9yIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA2KTsgfVxuXG4ubWF0LWljb24ubWF0LXByaW1hcnkge1xuICBjb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LWljb24ubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtaWNvbi5tYXQtd2FybiB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICMzZjUxYjU7IH1cbiAgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7IH1cbiAgLm1hdC1pbnB1dC1lbGVtZW50OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTsgfVxuICAubWF0LWlucHV0LWVsZW1lbnQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpOyB9XG4gIC5tYXQtaW5wdXQtZWxlbWVudDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpOyB9XG5cbi5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4ubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTsgfVxuXG4ubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLCAubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLFxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3Zlcixcbi5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XG5cbi5tYXQtbWVudS1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XG4gIC5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sIC5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXTo6YWZ0ZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtbWVudS1pdGVtIC5tYXQtaWNvbi1uby1jb2xvcixcbi5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSksXG4ubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cblxuLm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuXG4ubWF0LXBhZ2luYXRvcixcbi5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4ubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjYzVjYWU5OyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWNhZTk7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNmZjgwYWI7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MGFiOyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjYmJkZWZiOyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmRlZmI7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xuICBzdHJva2U6ICMzZjUxYjU7IH1cblxuLm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUge1xuICBzdHJva2U6ICNmZjQwODE7IH1cblxuLm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC13YXJuIGNpcmNsZSwgLm1hdC1zcGlubmVyLm1hdC13YXJuIGNpcmNsZSB7XG4gIHN0cm9rZTogIzIxOTZmMzsgfVxuXG4ubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybjphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1yYWRpby1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyB9XG5cbi5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTsgfVxuXG4ubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuICAubWF0LXNlbGVjdC1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1kcmF3ZXI6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5kIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG5cbltkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yaWdodDogbm9uZTsgfVxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5kIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA2NCwgMTI5LCAwLjU0KTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC41NCk7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjU0KTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZTpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cblxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY0LCAxMjksIDAuMik7IH1cblxuLm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbi5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxuXG4ubWF0LXNsaWRlci1kaXNhYmxlZDpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyIC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwgLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XG5cbi5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyB9XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7IH1cblxuLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7IH1cblxuLm1hdC1zdGVwLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTsgfVxuXG5AbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7IH0gfVxuXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogIzc1NzU3NTsgfVxuXG4ubWF0LXRhYi1uYXYtYmFyLFxuLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLW5hdi1iYXIsXG4ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IH1cblxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbi5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMjAyLCAyMzMsIDAuMyk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI4LCAxNzEsIDAuMyk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMjIsIDI1MSwgMC4zKTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAyMDIsIDIzMywgMC4zKTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI4LCAxNzEsIDAuMyk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjIyLCAyNTEsIDAuMyk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTsgfVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtdG9vbGJhci5tYXQtYWNjZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY0MDgxO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LXRvb2xiYXIubWF0LXdhcm4ge1xuICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7IH1cbiAgLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogaW5oZXJpdDsgfVxuICAubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yOyB9XG5cbi5tYXQtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTcsIDk3LCA5NywgMC45KTsgfVxuXG4ubWF0LXRyZWUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuXG4ubWF0LXRyZWUtbm9kZSxcbi5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJhY2tncm91bmQ6ICMzMjMyMzI7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICBjb2xvcjogI2ZmNDA4MTsgfVxuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWVudS1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYjFmZjsgfVxuXG4ubWFpbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWFmNjsgfVxuXG4vZGVlcC8gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYjFmZjsgfVxuXG4vZGVlcC8gLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7IH1cbiIsIlxuLy8gQ3VzdG9tIFRoZW1pbmcgZm9yIEFuZ3VsYXIgTWF0ZXJpYWxcbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uOiBcbi8vIC0gaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL3RoZW1pbmdcbi8vIC0gaHR0cHM6Ly9tZWRpdW0uY29tL0B0b21hc3RyYWphbi90aGUtY29tcGxldGUtZ3VpZGUtdG8tYW5ndWxhci1tYXRlcmlhbC10aGVtZXMtNGQxNjVhOWQyNGQxXG4vL1xuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuLy8gUGx1cyBpbXBvcnRzIGZvciBvdGhlciBjb21wb25lbnRzIGluIHlvdXIgYXBwLlxuXG4vLyBJbmNsdWRlIHRoZSBjb21tb24gc3R5bGVzIGZvciBBbmd1bGFyIE1hdGVyaWFsLiBXZSBpbmNsdWRlIHRoaXMgaGVyZSBzbyB0aGF0IHlvdSBvbmx5XG4vLyBoYXZlIHRvIGxvYWQgYSBzaW5nbGUgY3NzIGZpbGUgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwgaW4geW91ciBhcHAuXG4vLyBCZSBzdXJlIHRoYXQgeW91IG9ubHkgZXZlciBpbmNsdWRlIHRoaXMgbWl4aW4gb25jZSFcbkBpbmNsdWRlIG1hdC1jb3JlKCk7XG5cbi8vIGltcG9ydCBhcHAgdGhlbWVcbkBpbXBvcnQgJ3RoZW1lLnNjc3MnO1xuXG4vLyBJbmNsdWRlIHRoZW1lIHN0eWxlcyBmb3IgY29yZSBhbmQgZWFjaCBjb21wb25lbnQgdXNlZCBpbiB5b3VyIGFwcC5cbi8vIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gaW1wb3J0IGFuZCBAaW5jbHVkZSB0aGUgdGhlbWUgbWl4aW5zIGZvciBlYWNoIGNvbXBvbmVudFxuLy8gdGhhdCB5b3UgYXJlIHVzaW5nLlxuQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkbmctam9pbnQtYXBwLXRoZW1lKTtcblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5odG1sLCBib2R5IHsgaGVpZ2h0OiAxMDAlOyB9XG5ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLy8gam9pbnRqcyBsaWJyYXJ5IHN0eWxlcyBpbXBvcnRcbkBpbXBvcnQgJ35qb2ludGpzL2Rpc3Qvam9pbnQuY3NzJzsgIiwiLy8gSW1wb3J0IGFuZ3VsYXIgbWF0cmlhbCB0aGVtaW5nIGZ1bmN0aW9uc1xuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuLy8gSW1wb3J0IGFwcCBjdXN0b20gdGhlbWVcbkBpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcblxuLm1lbnUtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRuZy1qb2ludC1hcHAtd2FybiwgQTEwMCk7XG59XG5cbi5tYWluLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG5nLWpvaW50LWFwcC1wcmltYXJ5LCA1MCk7XG59XG5cbi9kZWVwLyAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG5nLWpvaW50LWFwcC13YXJuLCBBMTAwKTtcbn1cblxuL2RlZXAvIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG5nLWpvaW50LWFwcC13YXJuLCA1MCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-generic.service */ "./src/app/app-generic.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(service, router) {
        this.service = service;
        this.router = router;
        this.initialized = false;
        this.menuOptions = [
            {
                title: 'Overview Library',
                description: 'ng-joint',
                path: '',
            },
            {
                title: 'shapes.Standard',
                description: 'jointjs',
                path: 'shapes-standard-examples',
                childs: [
                    {
                        title: 'Elements',
                        path: 'standard-elements'
                    },
                    {
                        title: 'Links',
                        path: 'standard-links'
                    }
                ]
            },
            {
                title: 'shapes.uml',
                description: 'jointjs',
                path: 'shapes-uml-examples',
                childs: [
                    {
                        title: 'UML Class Diagram',
                        path: 'uml-class-diagram'
                    }
                ]
            },
            {
                title: 'shapes.Angular',
                description: 'ng-joint',
                path: 'shapes-angular-examples',
                childs: [
                    {
                        title: 'Template Only',
                        path: 'angular-template-only'
                    },
                    {
                        title: 'Bi-Directional Bind',
                        path: 'angular-bi-dir-bind'
                    }
                ]
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initialized = true;
    };
    AppComponent.prototype.onOverview = function (menuOption) {
        this.router.navigate([menuOption.path]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_3__["AppGenericService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-generic.service */ "./src/app/app-generic.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _shapes_standard_examples__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shapes-standard-examples */ "./src/app/shapes-standard-examples/index.ts");
/* harmony import */ var _shapes_uml_examples__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shapes-uml-examples */ "./src/app/shapes-uml-examples/index.ts");
/* harmony import */ var _shapes_angular_examples__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shapes-angular-examples */ "./src/app/shapes-angular-examples/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [_app_generic_service__WEBPACK_IMPORTED_MODULE_6__["AppGenericService"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
                _shapes_standard_examples__WEBPACK_IMPORTED_MODULE_9__["ShapesStandardExamplesModule"],
                _shapes_uml_examples__WEBPACK_IMPORTED_MODULE_10__["ShapesUmlExamplesModule"],
                _shapes_angular_examples__WEBPACK_IMPORTED_MODULE_11__["ShapesAngularExamplesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/overview.component.html":
/*!*****************************************!*\
  !*** ./src/app/overview.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  overview works!\n</p>\n"

/***/ }),

/***/ "./src/app/overview.component.scss":
/*!*****************************************!*\
  !*** ./src/app/overview.component.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/overview.component.ts":
/*!***************************************!*\
  !*** ./src/app/overview.component.ts ***!
  \***************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-generic.service */ "./src/app/app-generic.service.ts");



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(appService) {
        this.appService = appService;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Overview';
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: "\n    <p>\n      page-not-found works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [height]=\"600\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n\n    <ng-joint-dia-graph>\n\n        <ng-joint-shapes>\n            <ng-joint-shapes-angular>\n\n                <ng-joint-angular-element *ngFor=\"let customNgEl of customNgEls\"\n                    [id]=\"customNgEl.id\"\n                    [(x)]=\"customNgEl.x\"\n                    [(y)]=\"customNgEl.y\"\n                    [(width)]=\"customNgEl.width\"\n                    [(height)]=\"customNgEl.height\">\n                    <mat-card>\n                        <mat-card-header>\n                            <mat-card-title>\n                                ({{ customNgEl.id }}): {{ customNgEl.testFieldA }} \n                            </mat-card-title>\n                            <mat-card-subtitle>\n                                ({{ customNgEl.x }}, {{ customNgEl.y }})\n                            </mat-card-subtitle>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Input\">\n                            </mat-form-field>\n                        </mat-card-content>\n                        <mat-card-footer>\n                            <button mat-mini-fab color=\"accent\" (click)=\"onClickMatButtonXPlus10(customNgEl)\">\n                                x + 10\n                            </button>\n                            <button mat-mini-fab color=\"accent\" (click)=\"onClickMatButtonYPlus10(customNgEl)\">\n                                y + 10\n                            </button>\n                        </mat-card-footer>\n                    </mat-card>\n                </ng-joint-angular-element>\n\n            </ng-joint-shapes-angular>\n\n        </ng-joint-shapes>\n\n    </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>"

/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1hbmd1bGFyLWV4YW1wbGVzL2FuZ3VsYXItYmktZGlyLWJpbmQvYW5ndWxhci1iaS1kaXItYmluZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AngularBiDirBindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularBiDirBindComponent", function() { return AngularBiDirBindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");



var AngularBiDirBindComponent = /** @class */ (function () {
    function AngularBiDirBindComponent(appService) {
        this.appService = appService;
        this.customNgEls = [
            {
                id: 'Element 1',
                x: 100,
                y: 100,
                height: 10,
                width: 200,
                testFieldA: 'TestField1'
            },
            {
                id: 'Element 2',
                x: 200,
                y: 350,
                height: 10,
                width: 200,
                testFieldA: 'TestField2'
            }
        ];
    }
    AngularBiDirBindComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Angular Bi-Directional Bind Example';
    };
    // example how to use events inside Angular Elements
    AngularBiDirBindComponent.prototype.onClickMatButtonXPlus10 = function (customNgEl) {
        customNgEl.x = customNgEl.x + 10;
    };
    // example how to use events inside Angular Elements
    AngularBiDirBindComponent.prototype.onClickMatButtonYPlus10 = function (customNgEl) {
        customNgEl.y = customNgEl.y + 10;
    };
    // you can handle paper:elementpointerclick events
    // (other events will be added in later versions of this Library)
    AngularBiDirBindComponent.prototype.onElementPointerClick = function (id) {
        console.log('onElementPointerClick(id: ' + id + ')');
    };
    AngularBiDirBindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-bi-dir-bind',
            template: __webpack_require__(/*! ./angular-bi-dir-bind.component.html */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.html"),
            styles: [__webpack_require__(/*! ./angular-bi-dir-bind.component.scss */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], AngularBiDirBindComponent);
    return AngularBiDirBindComponent;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-bi-dir-bind/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-bi-dir-bind/index.ts ***!
  \**********************************************************************/
/*! exports provided: AngularBiDirBindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-bi-dir-bind.component */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularBiDirBindComponent", function() { return _angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_0__["AngularBiDirBindComponent"]; });




/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [height]=\"600\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n    <ng-joint-dia-graph>\n        <ng-joint-shapes>\n            <ng-joint-shapes-angular>\n                <ng-joint-angular-element\n                    [id]=\"'ng1'\"\n                    [x]=\"400\"\n                    [y]=\"100\"\n                    [width]=\"250\"\n                    [height]=\"200\">\n                    <h1>Standard Angular HTML</h1>\n                    <button>Standard Button</button>\n                    <input type=\"text\" name=\"fname\">\n                </ng-joint-angular-element>\n                <ng-joint-angular-element\n                    [id]=\"'mat1'\"\n                    [x]=\"700\"\n                    [y]=\"50\"\n                    [width]=\"200\"\n                    [height]=\"150\">\n                    <mat-card>\n                        <mat-card-header>\n                            <mat-card-title>\n                                Angular Material \n                            </mat-card-title>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Input\">\n                            </mat-form-field>\n                        </mat-card-content>\n                        <mat-card-footer>\n                            <button mat-mini-fab color=\"accent\">\n                                FAB\n                            </button>\n                        </mat-card-footer>\n                    </mat-card>\n                </ng-joint-angular-element>\n            </ng-joint-shapes-angular>\n        </ng-joint-shapes>\n    </ng-joint-dia-graph>\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1hbmd1bGFyLWV4YW1wbGVzL2FuZ3VsYXItdGVtcGxhdGUtb25seS9hbmd1bGFyLXRlbXBsYXRlLW9ubHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AngularTemplateOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTemplateOnlyComponent", function() { return AngularTemplateOnlyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");



var AngularTemplateOnlyComponent = /** @class */ (function () {
    function AngularTemplateOnlyComponent(appService, el) {
        this.appService = appService;
        this.el = el;
        console.log('AngularTemplateOnlyComponent.el', this.el);
    }
    AngularTemplateOnlyComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Angular Template Only Example';
    };
    AngularTemplateOnlyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-template-only',
            template: __webpack_require__(/*! ./angular-template-only.component.html */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.html"),
            styles: [__webpack_require__(/*! ./angular-template-only.component.scss */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AngularTemplateOnlyComponent);
    return AngularTemplateOnlyComponent;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-template-only/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-template-only/index.ts ***!
  \************************************************************************/
/*! exports provided: AngularTemplateOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_template_only_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-template-only.component */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularTemplateOnlyComponent", function() { return _angular_template_only_component__WEBPACK_IMPORTED_MODULE_0__["AngularTemplateOnlyComponent"]; });




/***/ }),

/***/ "./src/app/shapes-angular-examples/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shapes-angular-examples/index.ts ***!
  \**************************************************/
/*! exports provided: AngularBiDirBindComponent, AngularTemplateOnlyComponent, ShapesAngularExamplesComponent, ShapesAngularExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_bi_dir_bind_angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-bi-dir-bind/angular-bi-dir-bind.component */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularBiDirBindComponent", function() { return _angular_bi_dir_bind_angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_0__["AngularBiDirBindComponent"]; });

/* harmony import */ var _angular_template_only_angular_template_only_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-template-only/angular-template-only.component */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularTemplateOnlyComponent", function() { return _angular_template_only_angular_template_only_component__WEBPACK_IMPORTED_MODULE_1__["AngularTemplateOnlyComponent"]; });

/* harmony import */ var _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes-angular-examples.component */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesComponent", function() { return _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_2__["ShapesAngularExamplesComponent"]; });

/* harmony import */ var _shapes_angular_examples_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes-angular-examples.module */ "./src/app/shapes-angular-examples/shapes-angular-examples.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesModule", function() { return _shapes_angular_examples_module__WEBPACK_IMPORTED_MODULE_3__["ShapesAngularExamplesModule"]; });







/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ShapesAngularExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesRoutingModule", function() { return ShapesAngularExamplesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes-angular-examples.component */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.ts");
/* harmony import */ var _angular_template_only__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-template-only */ "./src/app/shapes-angular-examples/angular-template-only/index.ts");
/* harmony import */ var _angular_bi_dir_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-bi-dir-bind */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/index.ts");






var demoModuleRoutes = [
    { path: 'shapes-angular-examples', component: _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_3__["ShapesAngularExamplesComponent"],
        children: [
            { path: 'angular-template-only', component: _angular_template_only__WEBPACK_IMPORTED_MODULE_4__["AngularTemplateOnlyComponent"] },
            { path: 'angular-bi-dir-bind', component: _angular_bi_dir_bind__WEBPACK_IMPORTED_MODULE_5__["AngularBiDirBindComponent"] }
        ]
    }
];
var ShapesAngularExamplesRoutingModule = /** @class */ (function () {
    function ShapesAngularExamplesRoutingModule() {
    }
    ShapesAngularExamplesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(demoModuleRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ShapesAngularExamplesRoutingModule);
    return ShapesAngularExamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Shapes Angular Examples\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1hbmd1bGFyLWV4YW1wbGVzL3NoYXBlcy1hbmd1bGFyLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShapesAngularExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesComponent", function() { return ShapesAngularExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-generic.service */ "./src/app/app-generic.service.ts");



var ShapesAngularExamplesComponent = /** @class */ (function () {
    function ShapesAngularExamplesComponent(appService) {
        this.appService = appService;
    }
    ShapesAngularExamplesComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Angular Examples';
    };
    ShapesAngularExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shapes-angular-examples',
            template: __webpack_require__(/*! ./shapes-angular-examples.component.html */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.html"),
            styles: [__webpack_require__(/*! ./shapes-angular-examples.component.scss */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], ShapesAngularExamplesComponent);
    return ShapesAngularExamplesComponent;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples.module.ts ***!
  \***************************************************************************/
/*! exports provided: ShapesAngularExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesModule", function() { return ShapesAngularExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes-angular-examples.component */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.ts");
/* harmony import */ var _angular_template_only_angular_template_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-template-only/angular-template-only.component */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts");
/* harmony import */ var _angular_bi_dir_bind_angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-bi-dir-bind/angular-bi-dir-bind.component */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts");
/* harmony import */ var _shapes_angular_examples_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapes-angular-examples-routing.module */ "./src/app/shapes-angular-examples/shapes-angular-examples-routing.module.ts");









var ShapesAngularExamplesModule = /** @class */ (function () {
    function ShapesAngularExamplesModule() {
    }
    ShapesAngularExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_5__["ShapesAngularExamplesComponent"],
                _angular_template_only_angular_template_only_component__WEBPACK_IMPORTED_MODULE_6__["AngularTemplateOnlyComponent"],
                _angular_bi_dir_bind_angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_7__["AngularBiDirBindComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__["ShapesAngularModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _shapes_angular_examples_routing_module__WEBPACK_IMPORTED_MODULE_8__["ShapesAngularExamplesRoutingModule"]
            ],
            exports: [
                _shapes_angular_examples_routing_module__WEBPACK_IMPORTED_MODULE_8__["ShapesAngularExamplesRoutingModule"]
            ]
        })
    ], ShapesAngularExamplesModule);
    return ShapesAngularExamplesModule;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shapes-standard-examples/index.ts ***!
  \***************************************************/
/*! exports provided: ShapesStandardExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shapes_standard_examples_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes-standard-examples.module */ "./src/app/shapes-standard-examples/shapes-standard-examples.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardExamplesModule", function() { return _shapes_standard_examples_module__WEBPACK_IMPORTED_MODULE_0__["ShapesStandardExamplesModule"]; });




/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ShapesStandardExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardExamplesRoutingModule", function() { return ShapesStandardExamplesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes-standard-examples.component */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.ts");
/* harmony import */ var _standard_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./standard-elements */ "./src/app/shapes-standard-examples/standard-elements/index.ts");
/* harmony import */ var _standard_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standard-links */ "./src/app/shapes-standard-examples/standard-links/index.ts");






var demoModuleRoutes = [
    { path: 'shapes-standard-examples', component: _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_3__["ShapesStandardExamplesComponent"],
        children: [
            { path: 'standard-elements', component: _standard_elements__WEBPACK_IMPORTED_MODULE_4__["StandardElementsComponent"] },
            { path: 'standard-links', component: _standard_links__WEBPACK_IMPORTED_MODULE_5__["StandardLinksComponent"] }
        ]
    }
];
var ShapesStandardExamplesRoutingModule = /** @class */ (function () {
    function ShapesStandardExamplesRoutingModule() {
    }
    ShapesStandardExamplesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(demoModuleRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ShapesStandardExamplesRoutingModule);
    return ShapesStandardExamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shapes-standard-examples works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1zdGFuZGFyZC1leGFtcGxlcy9zaGFwZXMtc3RhbmRhcmQtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShapesStandardExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardExamplesComponent", function() { return ShapesStandardExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-generic.service */ "./src/app/app-generic.service.ts");



var ShapesStandardExamplesComponent = /** @class */ (function () {
    function ShapesStandardExamplesComponent(appService) {
        this.appService = appService;
    }
    ShapesStandardExamplesComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Standard Examples';
    };
    ShapesStandardExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shapes-standard-examples',
            template: __webpack_require__(/*! ./shapes-standard-examples.component.html */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.html"),
            styles: [__webpack_require__(/*! ./shapes-standard-examples.component.scss */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], ShapesStandardExamplesComponent);
    return ShapesStandardExamplesComponent;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ShapesStandardExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardExamplesModule", function() { return ShapesStandardExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes-standard-examples.component */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.ts");
/* harmony import */ var _standard_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standard-elements */ "./src/app/shapes-standard-examples/standard-elements/index.ts");
/* harmony import */ var _standard_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standard-links */ "./src/app/shapes-standard-examples/standard-links/index.ts");
/* harmony import */ var _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shapes-standard-examples-routing.module */ "./src/app/shapes-standard-examples/shapes-standard-examples-routing.module.ts");








var ShapesStandardExamplesModule = /** @class */ (function () {
    function ShapesStandardExamplesModule() {
    }
    ShapesStandardExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_4__["ShapesStandardExamplesComponent"],
                _standard_elements__WEBPACK_IMPORTED_MODULE_5__["StandardElementsComponent"],
                _standard_links__WEBPACK_IMPORTED_MODULE_6__["StandardLinksComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["ShapesStandardModule"],
                _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShapesStandardExamplesRoutingModule"]
            ],
            exports: [
                _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShapesStandardExamplesRoutingModule"]
            ]
        })
    ], ShapesStandardExamplesModule);
    return ShapesStandardExamplesModule;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/index.ts ***!
  \*********************************************************************/
/*! exports provided: StandardElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_elements_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-elements.component */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardElementsComponent", function() { return _standard_elements_component__WEBPACK_IMPORTED_MODULE_0__["StandardElementsComponent"]; });




/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Based on https://resources.jointjs.com/docs/jointjs/v2.2/demo/shapes/shapes.standard.js -->\n<ng-joint-dia-paper\n    [width]=\"650\"\n    [height]=\"800\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n\n    <ng-joint-dia-graph (cellAdd)=\"onCellAdd($event)\">\n\n      <ng-joint-shapes>\n\n        <ng-joint-shapes-standard>\n\n          <ng-joint-standard-bordered-image\n            [id]=\"'bordered-image'\"\n            [x]=\"225\" [y]=\"410\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.BorderedImage' }\"\n            [label]=\"{ text: 'Bordered\\nImage' }\"\n            [border]=\"{ rx: '5' }\"\n            [image]=\"{ xlinkHref: 'assets/image.png' }\">\n          </ng-joint-standard-bordered-image>\n\n          <ng-joint-standard-circle (elementPointerClick)=\"onElementPointerClick('circle')\"\n            [id]=\"'circle'\"\n            [x]=\"200\" [y]=\"10\"\n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Circle' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n            [label]=\"{ text: 'Circle' }\">\n          </ng-joint-standard-circle>\n\n          <ng-joint-standard-cylinder\n            [id]=\"'cylinder'\"\n            [x]=\"525\" [y]=\"75\"\n            [width]=\"100\" [height]=\"200\"\n            [root]=\"{ title: 'standard.Cylinder', tabindex: '7' }\"\n            [body]=\"{ fill: 'fe854f', fillOpacity: '0.5' }\"\n            [top]=\"{ fill: 'fe854f', fillOpacity: '0.8' }\"\n            [label]=\"{ text: 'Cylinder' }\"\n            [topRy]=\"'10%'\">\n          </ng-joint-standard-cylinder>\n\n          <ng-joint-standard-ellipse\n            [id]=\"'ellipse'\"\n            [x]=\"350\" [y]=\"10\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Ellipse' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n            [label]=\"{ text: 'Ellipse' }\">\n          </ng-joint-standard-ellipse>\n\n          <ng-joint-standard-embedded-image\n            [id]=\"'embedded-image'\"\n            [x]=\"425\" [y]=\"340\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.EmbededImage' }\"\n            [label]=\"{ text: 'Embedded\\nImage' }\"\n            [body]=\"{ fill: '#fe854f', fillOpacity: '0.5', stroke: '#fe854f' }\"\n            [image]=\"{ xlinkHref: 'assets/image.png' }\">\n          </ng-joint-standard-embedded-image>\n\n          <ng-joint-standard-headered-rectangle\n            [id]=\"'headered-rectangle'\"\n            [x]=\"25\" [y]=\"610\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.HeaderedRectangle' }\"\n            [header]=\"{ fill: '#000000', fillOpacity: '0.1' }\"\n            [headerText]=\"{ text: 'Header' }\"\n            [body]=\"{ fill: '#fe854f', fillOpacity: '0.5' }\"\n            [bodyText]=\"{ text: 'Headered\\nRectangle' }\">\n          </ng-joint-standard-headered-rectangle>\n\n          <ng-joint-standard-image\n            [id]=\"'image'\"\n            [x]=\"25\" [y]=\"410\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Image' }\"\n            [label]=\"{ text: 'Image' }\"\n            [image]=\"{ xlinkHref: 'assets/image.png' }\">\n          </ng-joint-standard-image>\n\n          <ng-joint-standard-inscribed-image\n            [id]=\"'inscribed-image'\"\n            [x]=\"450\" [y]=\"450\"\n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Image' }\"\n            [image]=\"{ xlinkHref: 'assets/image.png' }\"\n            [border]=\"{ strokeWidth: '5' }\"\n            [background]=\"{ fill: 'lightgray' }\"\n            [label]=\"{ text: 'Inscribed Image' }\">\n          </ng-joint-standard-inscribed-image>\n          \n          <ng-joint-standard-path\n            [id]=\"'path'\"\n            [x]=\"50\" [y]=\"210\"\n            [width]=\"100\"\n            [height]=\"100\"\n            [root]=\"{ title: 'standard.Path' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5', refD: 'M 0 5 10 0 C 20 0 20 20 10 20 L 0 15 Z' }\"\n            [label]=\"{ text: 'Path' }\">\n          </ng-joint-standard-path>\n\n          <ng-joint-standard-polygon\n            [id]=\"'polygon'\"\n            [x]=\"200\" [y]=\"210\" \n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Polygon' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: 0.5, refPoints: '0,10 10,0 20,10 10,20' }\"\n            [label]=\"{ text: 'Polygon' }\">\n          </ng-joint-standard-polygon>\n\n          <ng-joint-standard-polyline\n            [id]=\"'polyline'\"\n            [x]=\"375\" [y]=\"210\"\n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Polyline' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: 0.5, refPoints: '0,0 0,10 10,10 10,0' }\"\n            [label]=\"{ text: 'Polyline' }\">\n          </ng-joint-standard-polyline>\n\n          <ng-joint-standard-rectangle\n            [id]=\"'rectangle'\"\n            [x]=\"50\" [y]=\"10\"\n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Rectangle' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n            [label]=\"{ text: 'Rectangle' }\">\n          </ng-joint-standard-rectangle>\n\n        </ng-joint-shapes-standard>\n\n      </ng-joint-shapes>\n\n    </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1zdGFuZGFyZC1leGFtcGxlcy9zdGFuZGFyZC1lbGVtZW50cy9zdGFuZGFyZC1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StandardElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardElementsComponent", function() { return StandardElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");



var StandardElementsComponent = /** @class */ (function () {
    function StandardElementsComponent(appService) {
        this.appService = appService;
    }
    StandardElementsComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Standard Elements Examples';
    };
    StandardElementsComponent.prototype.onElementPointerClick = function (cid) {
        console.log('onElementPointerClick.cid', cid);
    };
    StandardElementsComponent.prototype.onCellAdd = function (cid) {
        console.log('onCellAdd.cid', cid);
    };
    StandardElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standard-elements',
            template: __webpack_require__(/*! ./standard-elements.component.html */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html"),
            styles: [__webpack_require__(/*! ./standard-elements.component.scss */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], StandardElementsComponent);
    return StandardElementsComponent;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/index.ts ***!
  \******************************************************************/
/*! exports provided: StandardLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-links.component */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardLinksComponent", function() { return _standard_links_component__WEBPACK_IMPORTED_MODULE_0__["StandardLinksComponent"]; });




/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [width]=\"650\"\n    [height]=\"800\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n    \n    <ng-joint-dia-graph>\n        <ng-joint-shapes>\n            <ng-joint-shapes-standard>\n\n                <ng-joint-standard-rectangle (elementPointerClick)=\"onElementPointerClick($event)\"\n                    [id]=\"'rect'\"\n                    [x]=\"10\"\n                    [y]=\"30\"\n                    [width]=\"100\"\n                    [height]=\"40\"\n                    [body]=\"{ fill: 'blue' }\"\n                    [label]=\"{ text: 'Hello', fill: 'white' }\">\n                    </ng-joint-standard-rectangle>\n\n                <ng-joint-standard-rectangle \n                    [id]=\"'rect2'\"\n                    [x]=\"310\"\n                    [y]=\"30\"\n                    [width]=\"100\"\n                    [height]=\"40\"\n                    [body]=\"{ fill: 'red' }\"\n                    [label]=\"{ text: 'World!', fill: 'white' }\">\n                </ng-joint-standard-rectangle>\n\n                <ng-joint-standard-link\n                    [id]=\"'link'\"\n                    [sourceId]=\"'rect'\"\n                    [targetId]=\"'rect2'\"\n                    [line]=\"{ stroke: '#222138', sourceMarker: { fill: '#31d0c6', stroke: 'none', d: 'M 5 -10 L -15 0 L 5 10 Z' } }\"\n                    >\n                </ng-joint-standard-link>\n\n                <ng-joint-standard-embedded-image\n                    [id]=\"'embedded-image'\"\n                    [x]=\"425\" [y]=\"340\"\n                    [width]=\"150\" [height]=\"100\"\n                    [root]=\"{ title: 'standard.EmbededImage' }\"\n                    [label]=\"{ text: 'Embedded\\nImage' }\"\n                    [body]=\"{ fill: '#fe854f', fillOpacity: '0.5', stroke: '#fe854f' }\"\n                    [image]=\"{ xlinkHref: 'assets/image.png' }\"\n                    >\n                </ng-joint-standard-embedded-image>\n    \n                <ng-joint-standard-headered-rectangle\n                    [id]=\"'headered-rectangle'\"\n                    [x]=\"25\" [y]=\"610\"\n                    [width]=\"150\" [height]=\"100\"\n                    [root]=\"{ title: 'standard.HeaderedRectangle' }\"\n                    [header]=\"{ fill: '#000000', fillOpacity: '0.1' }\"\n                    [headerText]=\"{ text: 'Header' }\"\n                    [body]=\"{ fill: '#fe854f', fillOpacity: '0.5' }\"\n                    [bodyText]=\"{ text: 'Headered\\nRectangle' }\">\n                </ng-joint-standard-headered-rectangle>\n\n                <ng-joint-standard-double-link\n                    [id]=\"'double-link'\"\n                    [sourceId]=\"'embedded-image'\"\n                    [targetId]=\"'headered-rectangle'\"\n                    [root]=\"{ title: 'standard.DoubleLink' }\"\n                    [line]=\"{ stroke: '#30d0c6' }\">\n                </ng-joint-standard-double-link>\n\n            </ng-joint-shapes-standard>\n        </ng-joint-shapes>\n    </ng-joint-dia-graph>\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1zdGFuZGFyZC1leGFtcGxlcy9zdGFuZGFyZC1saW5rcy9zdGFuZGFyZC1saW5rcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StandardLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLinksComponent", function() { return StandardLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StandardLinksComponent = /** @class */ (function () {
    function StandardLinksComponent() {
    }
    StandardLinksComponent.prototype.ngOnInit = function () {
    };
    StandardLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standard-links',
            template: __webpack_require__(/*! ./standard-links.component.html */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.html"),
            styles: [__webpack_require__(/*! ./standard-links.component.scss */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StandardLinksComponent);
    return StandardLinksComponent;
}());



/***/ }),

/***/ "./src/app/shapes-uml-examples/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shapes-uml-examples/index.ts ***!
  \**********************************************/
/*! exports provided: ShapesUmlExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shapes_uml_examples_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes-uml-examples.module */ "./src/app/shapes-uml-examples/shapes-uml-examples.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlExamplesModule", function() { return _shapes_uml_examples_module__WEBPACK_IMPORTED_MODULE_0__["ShapesUmlExamplesModule"]; });




/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ShapesUmlExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlExamplesRoutingModule", function() { return ShapesUmlExamplesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shapes_uml_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes-uml-examples.component */ "./src/app/shapes-uml-examples/shapes-uml-examples.component.ts");
/* harmony import */ var _uml_class_diagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uml-class-diagram */ "./src/app/shapes-uml-examples/uml-class-diagram/index.ts");





var demoModuleRoutes = [
    { path: 'shapes-uml-examples', component: _shapes_uml_examples_component__WEBPACK_IMPORTED_MODULE_3__["ShapesUmlExamplesComponent"],
        children: [
            { path: 'uml-class-diagram', component: _uml_class_diagram__WEBPACK_IMPORTED_MODULE_4__["UmlClassDiagramComponent"] }
        ]
    }
];
var ShapesUmlExamplesRoutingModule = /** @class */ (function () {
    function ShapesUmlExamplesRoutingModule() {
    }
    ShapesUmlExamplesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(demoModuleRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ShapesUmlExamplesRoutingModule);
    return ShapesUmlExamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shapes-uml-examples works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy11bWwtZXhhbXBsZXMvc2hhcGVzLXVtbC1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShapesUmlExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlExamplesComponent", function() { return ShapesUmlExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShapesUmlExamplesComponent = /** @class */ (function () {
    function ShapesUmlExamplesComponent() {
    }
    ShapesUmlExamplesComponent.prototype.ngOnInit = function () {
    };
    ShapesUmlExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shapes-uml-examples',
            template: __webpack_require__(/*! ./shapes-uml-examples.component.html */ "./src/app/shapes-uml-examples/shapes-uml-examples.component.html"),
            styles: [__webpack_require__(/*! ./shapes-uml-examples.component.scss */ "./src/app/shapes-uml-examples/shapes-uml-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShapesUmlExamplesComponent);
    return ShapesUmlExamplesComponent;
}());



/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShapesUmlExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlExamplesModule", function() { return ShapesUmlExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _shapes_uml_examples_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes-uml-examples-routing.module */ "./src/app/shapes-uml-examples/shapes-uml-examples-routing.module.ts");
/* harmony import */ var _shapes_uml_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes-uml-examples.component */ "./src/app/shapes-uml-examples/shapes-uml-examples.component.ts");
/* harmony import */ var _uml_class_diagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uml-class-diagram */ "./src/app/shapes-uml-examples/uml-class-diagram/index.ts");







var ShapesUmlExamplesModule = /** @class */ (function () {
    function ShapesUmlExamplesModule() {
    }
    ShapesUmlExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shapes_uml_examples_component__WEBPACK_IMPORTED_MODULE_5__["ShapesUmlExamplesComponent"],
                _uml_class_diagram__WEBPACK_IMPORTED_MODULE_6__["UmlClassDiagramComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["ShapesUmlModule"],
                _shapes_uml_examples_routing_module__WEBPACK_IMPORTED_MODULE_4__["ShapesUmlExamplesRoutingModule"],
            ],
            exports: [
                _shapes_uml_examples_routing_module__WEBPACK_IMPORTED_MODULE_4__["ShapesUmlExamplesRoutingModule"]
            ]
        })
    ], ShapesUmlExamplesModule);
    return ShapesUmlExamplesModule;
}());



/***/ }),

/***/ "./src/app/shapes-uml-examples/uml-class-diagram/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/shapes-uml-examples/uml-class-diagram/index.ts ***!
  \****************************************************************/
/*! exports provided: UmlClassDiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uml_class_diagram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uml-class-diagram.component */ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UmlClassDiagramComponent", function() { return _uml_class_diagram_component__WEBPACK_IMPORTED_MODULE_0__["UmlClassDiagramComponent"]; });




/***/ }),

/***/ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  {{ umlClasses[0].name }}({{ umlClasses[0].x }}, {{ umlClasses[0].y }})\n</div>\n\n<ng-joint-dia-paper\n  [width]=\"800\"\n  [height]=\"600\"\n  [gridSize]=\"10\"\n  [drawGrid]=\"true\">\n\n  <ng-joint-dia-graph>\n\n    <ng-joint-shapes>\n\n      <ng-joint-shapes-uml>\n\n        <ng-joint-uml-interface *ngFor=\"let umlInterface of umlInterfaces\"\n          [id]=\"umlInterface.id\"\n          [x]=\"umlInterface.x\"\n          [y]=\"umlInterface.y\"\n          [width]=\"umlInterface.width\"\n          [height]=\"umlInterface.height\"\n          [name]=\"umlInterface.name\"\n          [attributes]=\"umlInterface.attributes\"\n          [methods]=\"umlInterface.methods\"\n          [attrs]=\"umlInterface.attrs\">\n        </ng-joint-uml-interface>\n\n        <ng-joint-uml-abstract *ngFor=\"let umlAbstract of umlAbstracts\"\n          [id]=\"umlAbstract.id\"\n          [x]=\"umlAbstract.x\"\n          [y]=\"umlAbstract.y\"\n          [width]=\"umlAbstract.width\"\n          [height]=\"umlAbstract.height\"\n          [name]=\"umlAbstract.name\"\n          [attributes]=\"umlAbstract.attributes\"\n          [methods]=\"umlAbstract.methods\"\n          [attrs]=\"umlAbstract.attrs\">\n        </ng-joint-uml-abstract>\n\n        <ng-joint-uml-class *ngFor=\"let umlClass of umlClasses\"\n          [id]=\"umlClass.id\"\n          [(x)]=\"umlClass.x\"\n          [(y)]=\"umlClass.y\"\n          [width]=\"umlClass.width\"\n          [height]=\"umlClass.height\"\n          [name]=\"umlClass.name\"\n          [attributes]=\"umlClass.attributes\"\n          [methods]=\"umlClass.methods\"\n          [attrs]=\"umlClass.attrs\">\n        </ng-joint-uml-class>\n\n        <ng-joint-uml-generalization *ngFor=\"let umlGeneralization of umlGeneralizations\"\n          [id]=\"umlGeneralization.id\"\n          [sourceId]=\"umlGeneralization.sourceId\"\n          [targetId]=\"umlGeneralization.targetId\">\n        </ng-joint-uml-generalization>\n\n        <ng-joint-uml-implementation *ngFor=\"let umlImplementation of umlImplementations\"\n          [id]=\"umlImplementation.id\"\n          [sourceId]=\"umlImplementation.sourceId\"\n          [targetId]=\"umlImplementation.targetId\">\n        </ng-joint-uml-implementation>\n\n        <ng-joint-uml-aggregation *ngFor=\"let umlAggregation of umlAggregations\"\n          [id]=\"umlAggregation.id\"\n          [sourceId]=\"umlAggregation.sourceId\"\n          [targetId]=\"umlAggregation.targetId\">\n        </ng-joint-uml-aggregation>\n\n        <ng-joint-uml-composition *ngFor=\"let umlComposition of umlCompositions\"\n          [id]=\"umlComposition.id\"\n          [sourceId]=\"umlComposition.sourceId\"\n          [targetId]=\"umlComposition.targetId\">\n        </ng-joint-uml-composition>\n\n      </ng-joint-shapes-uml>\n\n    </ng-joint-shapes>\n\n  </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy11bWwtZXhhbXBsZXMvdW1sLWNsYXNzLWRpYWdyYW0vdW1sLWNsYXNzLWRpYWdyYW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UmlClassDiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlClassDiagramComponent", function() { return UmlClassDiagramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");

/**
 * Angular Component supported by NgJoint Library: JointJs UML Class Diagram Demo
 * Based on @see https://resources.jointjs.com/demos/joint/demo/umlcd/src/umlcd.js
 */


var UmlClassDiagramComponent = /** @class */ (function () {
    function UmlClassDiagramComponent(appService) {
        this.appService = appService;
        this.umlInterfaces = [
            {
                id: 'mammal',
                x: 300, y: 50,
                width: 240, height: 100,
                name: 'Mammal',
                attributes: [
                    'dob: Date'
                ],
                methods: [
                    '+ setDateOfBirth(dob: Date): Void',
                    '+ getAgeAsDays(): Numeric'
                ],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#feb662',
                        stroke: '#ffffff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fdc886',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fdc886',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-text': {
                        ref: '.uml-class-attrs-rect',
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    },
                    '.uml-class-methods-text': {
                        ref: '.uml-class-methods-rect',
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    }
                }
            }
        ];
        this.umlAbstracts = [
            {
                id: 'person',
                x: 300, y: 300,
                width: 260, height: 100,
                name: 'Person',
                attributes: [
                    'firstName: String',
                    'lastName: String'
                ],
                methods: ['+ setName(first: String, last: String): Void', '+ getName(): String'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#68ddd5',
                        stroke: '#ffffff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#9687fe',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#9687fe',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-text, .uml-class-attrs-text': {
                        fill: '#fff'
                    }
                }
            }
        ];
        this.umlClasses = [
            {
                id: 'bloodgroup',
                x: 20, y: 190,
                width: 220, height: 100,
                name: 'BloodGroup',
                attributes: ['bloodGroup: String'],
                methods: ['+ isCompatible(bG: String): Boolean'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#ff8450',
                        stroke: '#fff',
                        'stroke-width': 0.5,
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-text': {
                        ref: '.uml-class-attrs-rect',
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    },
                    '.uml-class-methods-text': {
                        ref: '.uml-class-methods-rect',
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    }
                }
            },
            {
                id: 'address',
                x: 630, y: 190,
                width: 160, height: 100,
                name: 'Address',
                attributes: ['houseNumber: Integer', 'streetName: String', 'town: String', 'postcode: String'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#ff8450',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-text': {
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    }
                }
            },
            {
                id: 'man',
                x: 200, y: 500,
                width: 180, height: 50,
                name: ['Man'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#ff8450',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    }
                }
            },
            {
                id: 'woman',
                x: 450, y: 500,
                width: 180, height: 50,
                name: ['Woman'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#ff8450',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    }
                }
            }
        ];
        this.umlGeneralizations = [
            { id: 'gen1', sourceId: 'man', targetId: 'person' },
            { id: 'gen2', sourceId: 'woman', targetId: 'person' }
        ];
        this.umlImplementations = [
            { id: 'impl1', sourceId: 'person', targetId: 'mammal' }
        ];
        this.umlAggregations = [
            { id: 'aggr1', sourceId: 'person', targetId: 'address' }
        ];
        this.umlCompositions = [
            { id: 'comp1', sourceId: 'person', targetId: 'bloodgroup' }
        ];
    }
    UmlClassDiagramComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'UML Class Diagram Example';
    };
    UmlClassDiagramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uml-class-diagram',
            template: __webpack_require__(/*! ./uml-class-diagram.component.html */ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.html"),
            styles: [__webpack_require__(/*! ./uml-class-diagram.component.scss */ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], UmlClassDiagramComponent);
    return UmlClassDiagramComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/onno/GITS/dgwnu/ng-joint/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map