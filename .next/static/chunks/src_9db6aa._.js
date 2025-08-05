(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_9db6aa._.js", {

"[project]/src/components/HelloBeauty/Styled.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StyledButtonWrapper": (()=>StyledButtonWrapper),
    "StyledH1": (()=>StyledH1),
    "StyledImage": (()=>StyledImage),
    "StyledP": (()=>StyledP),
    "StyledSection": (()=>StyledSection),
    "StyledSpan": (()=>StyledSpan),
    "StyledWrapper": (()=>StyledWrapper),
    "StyledWrapperLeft": (()=>StyledWrapperLeft),
    "StyledWrapperRight": (()=>StyledWrapperRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
;
const StyledSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('section', {
    shouldForwardProp: (prop)=>prop !== 'isMobile'
})(({ isMobile })=>({
        // backgroundColor: '#F5F5F5',
        paddingTop: '20px',
        paddingBottom: isMobile ? '10px' : '60px'
    }));
const StyledWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    shouldForwardProp: (prop)=>prop !== 'isMobile'
})(({ isMobile })=>({
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
        gridTemplateRows: isMobile ? 'repeat(11, 1fr)' : 'repeat(5, 1fr)',
        gap: isMobile ? '0' : '10%'
    }));
const StyledWrapperLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    shouldForwardProp: (prop)=>prop !== 'isMobile'
})(({ isMobile })=>({
        gridArea: isMobile ? '2 / 1 / 7 / 2' : '1 / 1 / 6 / 2',
        width: isMobile ? '264px' : 'auto',
        height: isMobile ? '264px' : 'auto',
        margin: isMobile ? '0 auto' : '0'
    }));
const StyledWrapperRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    shouldForwardProp: (prop)=>prop !== 'isMobile'
})(({ isMobile })=>({
        gridArea: isMobile ? '8 / 1 / 12 / 2' : '2 / 2 / 6 / 3',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }));
const StyledH1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
    shouldForwardProp: (prop)=>prop !== 'isMobile'
})(({ isMobile })=>({
        gridArea: isMobile ? '1 / 1 / 2 / 2' : '1 / 2 / 2 / 3',
        fontFamily: 'Great Vibes',
        color: '#F49D6A',
        textAlign: 'left',
        fontSize: isMobile ? '40px !important' : '48px',
        margin: isMobile ? '0 auto' : '0'
    }));
const StyledP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"])(()=>({
        fontFamily: 'Montserrat',
        color: '#000000'
    }));
const StyledImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('img')(()=>({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '10px'
    }));
const StyledSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')(()=>({
        fontFamily: 'Montserrat',
        fontWeight: 500,
        color: '#000000'
    }));
const StyledButtonWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HelloBeauty/HelloBeauty.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HelloBeauty": (()=>HelloBeauty)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/HelloBeauty/Styled.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/contexts/ResponsiveContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript) <export default as Button>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const HelloBeauty = ()=>{
    _s();
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledSection"], {
        isMobile: isMobile,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledWrapper"], {
                    isMobile: isMobile,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledWrapperLeft"], {
                            isMobile: isMobile,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledImage"], {
                                src: "/img/aboutpage/hellobeauty.jpg",
                                alt: "hellobeauty"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledH1"], {
                            variant: "h2",
                            isMobile: isMobile,
                            children: "Hello, Beauty!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledWrapperRight"], {
                            isMobile: isMobile,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledP"], {
                                    variant: "body1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledSpan"], {
                                            children: "I'm Anastasiia,"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        " your bridal stylist. Originally from Ukraine, now call the Netherlands home."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledP"], {
                                    variant: "body1",
                                    children: "My mission is to craft more than just a beautiful image—I design a look that feels like you. A look that captures your essence, enhances your natural beauty, and makes you feel confident and radiant on your most important day. "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledP"], {
                                    variant: "body1",
                                    children: "My work has been featured in Vogue, brand campaigns, and across Pinterest, inspiring brides worldwide. I continuously invest in education and growth, staying ahead of trends while perfecting timeless elegance. "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledButtonWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        href: "/contact#form",
                        children: "let's work together"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HelloBeauty/HelloBeauty.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_s(HelloBeauty, "zh1QXCqfW6ylXeAP9/dx0AvnWg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"]
    ];
});
_c = HelloBeauty;
var _c;
__turbopack_refresh__.register(_c, "HelloBeauty");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Swiper/Styled.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StyledImage": (()=>StyledImage),
    "StyledItem": (()=>StyledItem),
    "StyledSwiperWrapper": (()=>StyledSwiperWrapper),
    "StyledText": (()=>StyledText),
    "StyledTextTitle": (()=>StyledTextTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
;
;
const StyledItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ height })=>({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: height
    }));
const StyledImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('img')(({ isRound, imgHeight, imgWidth })=>({
        width: imgWidth,
        height: imgHeight,
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: isRound ? '100%' : '10px'
    }));
const StyledTextTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>({
        fontFamily: 'Great Vibes',
        fontWeight: 400,
        lineHeight: '120%',
        color: '#F49D6A',
        fontSize: '40px !important'
    }));
const StyledText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp: (prop)=>prop !== 'isMobile'
})(({ isMobile })=>({
        fontFamily: 'Montserrat',
        fontWeight: 500,
        lineHeight: '136%',
        color: '#000000',
        textAlign: 'center',
        height: isMobile ? '120px' : '240px'
    }));
const StyledSwiperWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ theme })=>({
        position: 'relative',
        '& .swiper-pagination-bullet-active': {
            backgroundColor: theme.palette.primary.dark
        },
        '& .swiper-button-next, & .swiper-button-prev': {
            color: '#000000',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            border: '2px solid #000000',
            width: '40px',
            height: '40px',
            top: '34%',
            transform: 'translateY(-50%)',
            zIndex: 9999,
            display: 'flex',
            '&::after': {
                fontSize: '20px',
                fontWeight: 'bold'
            }
        },
        '& .swiper-button-prev': {
            left: '10px'
        },
        '& .swiper-button-next': {
            right: '10px'
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Swiper/Swiper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SwiperComponent": (()=>SwiperComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Import Swiper React components
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Swiper$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Swiper/Styled.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/contexts/ResponsiveContext.tsx [app-client] (ecmascript)");
// import required modules
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__ = __turbopack_import__("[project]/node_modules/swiper/modules/free-mode.mjs [app-client] (ecmascript) <export default as FreeMode>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
const swiperConfiguration = {
    hairstylesMobile: {
        navigation: false,
        slidesPerView: 2.3,
        centeredSlides: false,
        freeMode: false,
        spaceBetween: 10,
        loop: true,
        pagination: {
            clickable: true
        },
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
        ],
        height: '250px',
        imgHeight: '210px',
        imgWidth: '160px'
    },
    // hairstyles: {
    //   navigation: false,
    //   slidesPerView: 3,
    //   centeredSlides: false,
    //   freeMode: false,
    //   spaceBetween: 10,
    //   loop: true,
    //   pagination: {
    //     clickable: true,
    //   },
    //   modules: [Pagination],
    //   height: '250px',
    //   imgHeight: '350px',
    //   imgWidth: '480px',
    // },
    reviewMobile: {
        navigation: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        freeMode: false,
        loop: true,
        pagination: {
            clickable: true
        },
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
        ],
        height: '450px',
        imgHeight: '230px',
        imgWidth: '230px'
    },
    review: {
        navigation: false,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        freeMode: true,
        loop: true,
        pagination: {
            clickable: true
        },
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__["FreeMode"]
        ],
        height: '580px',
        imgHeight: '260px',
        imgWidth: '260px'
    },
    processMobile: {
        navigation: false,
        slidesPerView: 1.5,
        centeredSlides: false,
        freeMode: false,
        spaceBetween: 10,
        loop: true,
        pagination: {
            clickable: true
        },
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
        ],
        height: '210px',
        imgHeight: '172px',
        imgWidth: '250px'
    },
    process: {
        navigation: false,
        slidesPerView: 2.3,
        centeredSlides: false,
        freeMode: false,
        spaceBetween: 0,
        loop: true,
        pagination: {
            clickable: true
        },
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
        ],
        height: '380px',
        imgHeight: '350px',
        imgWidth: '480px'
    }
};
const SwiperComponent = ({ config, id })=>{
    _s();
    const { slidesPerView, spaceBetween, freeMode, pagination, loop, centeredSlides, modules, navigation, height, imgHeight, imgWidth } = swiperConfiguration[id];
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"])();
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwiperComponent.useEffect": ()=>{
            // Force Swiper to update after component mounts
            const timer = setTimeout({
                "SwiperComponent.useEffect.timer": ()=>{
                    if (swiperRef.current && swiperRef.current.swiper) {
                        swiperRef.current.swiper.update();
                        // Only initialize navigation if it exists and navigation is enabled
                        if (navigation && swiperRef.current.swiper.navigation) {
                            swiperRef.current.swiper.navigation.init();
                            swiperRef.current.swiper.navigation.update();
                        }
                    }
                    setIsReady(true);
                }
            }["SwiperComponent.useEffect.timer"], 100);
            return ({
                "SwiperComponent.useEffect": ()=>clearTimeout(timer)
            })["SwiperComponent.useEffect"];
        }
    }["SwiperComponent.useEffect"], [
        navigation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SwiperComponent.useEffect": ()=>{
            // Re-initialize when config or id changes
            if (isReady && swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.update();
                // Only initialize navigation if it exists and navigation is enabled
                if (navigation && swiperRef.current.swiper.navigation) {
                    swiperRef.current.swiper.navigation.init();
                    swiperRef.current.swiper.navigation.update();
                }
            }
        }
    }["SwiperComponent.useEffect"], [
        config,
        id,
        isReady,
        navigation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Swiper$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledSwiperWrapper"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            ref: swiperRef,
            navigation: navigation,
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
            freeMode: freeMode,
            pagination: pagination,
            loop: loop,
            centeredSlides: centeredSlides,
            modules: modules,
            className: "mySwiper",
            children: config.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Swiper$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledItem"], {
                        height: height,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Swiper$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledImage"], {
                                isRound: item.isRound,
                                src: item.image,
                                alt: item.title,
                                imgHeight: imgHeight,
                                imgWidth: imgWidth
                            }, void 0, false, {
                                fileName: "[project]/src/components/Swiper/Swiper.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Swiper$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledTextTitle"], {
                                variant: "h2",
                                children: item.textTitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/Swiper/Swiper.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Swiper$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledText"], {
                                variant: "body2",
                                isMobile: isMobile,
                                children: item.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/Swiper/Swiper.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Swiper/Swiper.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this)
                }, item.title, false, {
                    fileName: "[project]/src/components/Swiper/Swiper.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this))
        }, `${id}-${isReady}`, false, {
            fileName: "[project]/src/components/Swiper/Swiper.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Swiper/Swiper.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
};
_s(SwiperComponent, "PTPnf0aFCcBzP7dCLH2UlX6/tcE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"]
    ];
});
_c = SwiperComponent;
var _c;
__turbopack_refresh__.register(_c, "SwiperComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Process/Styled.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StyledH1": (()=>StyledH1),
    "StyledH2": (()=>StyledH2),
    "StyledSection": (()=>StyledSection),
    "StyledWrapper": (()=>StyledWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript)");
;
;
const StyledSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('section', {
    shouldForwardProp: (prop)=>prop !== 'isMobile'
})(({ isMobile })=>({
        paddingTop: isMobile ? '20px' : '50px',
        paddingBottom: isMobile ? '10px' : '70px'
    }));
const StyledH1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>({
        fontFamily: 'Playfair Display',
        textTransform: 'uppercase',
        color: '#000000',
        textAlign: 'center'
    }));
const StyledH2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>({
        fontFamily: 'Great Vibes',
        color: '#F49D6A',
        textAlign: 'center',
        textTransform: 'lowercase',
        marginBottom: '30px'
    }));
const StyledWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Process/Process.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Process": (()=>Process)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Swiper$2f$Swiper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Swiper/Swiper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Process$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Process/Styled.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/contexts/ResponsiveContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript) <export default as Button>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const config = [
    {
        title: '1. Consultation',
        image: '/img/aboutpage/process1.jpg',
        isRound: false
    },
    {
        title: '2. Consultation',
        image: '/img/aboutpage/process2.jpg',
        isRound: false
    },
    {
        title: '3. Consultation',
        image: '/img/aboutpage/process3.jpg',
        isRound: false
    },
    {
        title: '4. Consultation',
        image: '/img/aboutpage/process1.jpg',
        isRound: false
    },
    {
        title: '5. Consultation',
        image: '/img/aboutpage/process2.jpg',
        isRound: false
    },
    {
        title: '6. Consultation',
        image: '/img/aboutpage/process3.jpg',
        isRound: false
    }
];
const Process = ()=>{
    _s();
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Process$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledSection"], {
        isMobile: isMobile,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Process$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledH1"], {
                    variant: "h2",
                    children: "process"
                }, void 0, false, {
                    fileName: "[project]/src/components/Process/Process.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Process$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledH2"], {
                    variant: "h2",
                    children: "my favorite part"
                }, void 0, false, {
                    fileName: "[project]/src/components/Process/Process.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Swiper$2f$Swiper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperComponent"], {
                    config: config,
                    id: isMobile ? 'processMobile' : 'process'
                }, void 0, false, {
                    fileName: "[project]/src/components/Process/Process.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, this),
                !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Process$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledWrapper"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        href: "/contact#form",
                        children: "let's work together"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Process/Process.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Process/Process.tsx",
                    lineNumber: 52,
                    columnNumber: 15
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Process/Process.tsx",
            lineNumber: 47,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Process/Process.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
};
_s(Process, "zh1QXCqfW6ylXeAP9/dx0AvnWg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ResponsiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"]
    ];
});
_c = Process;
var _c;
__turbopack_refresh__.register(_c, "Process");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MenuOpen.tsx/Styled.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StyledLi": (()=>StyledLi),
    "StyledLink": (()=>StyledLink),
    "StyledMenu": (()=>StyledMenu),
    "StyledUl": (()=>StyledUl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
;
;
const StyledMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        position: 'fixed',
        top: '75px',
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000
    }));
const StyledUl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('ul')(()=>({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        padding: '30px',
        backgroundColor: 'white'
    }));
const StyledLi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('li')(()=>({}));
const StyledLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>({
        fontFamily: 'Playfair Display',
        textTransform: 'uppercase',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '120%',
        letterSpacing: '6%',
        color: 'black'
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MenuOpen.tsx/MenuOpen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MenuOpen": (()=>MenuOpen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuOpen$2e$tsx$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MenuOpen.tsx/Styled.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/contexts/MenuContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const navItems = [
    {
        label: 'Home',
        url: '/'
    },
    {
        label: 'About',
        url: '/about'
    },
    {
        label: 'Services',
        url: '/services'
    },
    {
        label: 'Portfolio',
        url: '/portfolio'
    },
    {
        label: 'FAQS',
        url: '/services#faqs'
    },
    {
        label: 'Contact',
        url: '/contact'
    }
];
const MenuOpen = ()=>{
    _s();
    const { setIsMenuOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuOpen"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuOpen$2e$tsx$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledMenu"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuOpen$2e$tsx$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledUl"], {
            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuOpen$2e$tsx$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledLi"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuOpen$2e$tsx$2f$Styled$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledLink"], {
                        href: item.url,
                        onClick: ()=>setIsMenuOpen(false),
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuOpen.tsx/MenuOpen.tsx",
                        lineNumber: 41,
                        columnNumber: 15
                    }, this)
                }, item.label, false, {
                    fileName: "[project]/src/components/MenuOpen.tsx/MenuOpen.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/MenuOpen.tsx/MenuOpen.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MenuOpen.tsx/MenuOpen.tsx",
        lineNumber: 37,
        columnNumber: 7
    }, this);
};
_s(MenuOpen, "JP2PSvBc2vnfBAfH+v+oK9FGRHI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuOpen"]
    ];
});
_c = MenuOpen;
var _c;
__turbopack_refresh__.register(_c, "MenuOpen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Pages/AboutPage/AboutPage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AboutPage": (()=>AboutPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$HelloBeauty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/HelloBeauty/HelloBeauty.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Process$2f$Process$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Process/Process.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/contexts/MenuContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuOpen$2e$tsx$2f$MenuOpen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/MenuOpen.tsx/MenuOpen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const AboutPage = ()=>{
    _s();
    const { isMenuOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuOpen"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HelloBeauty$2f$HelloBeauty$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelloBeauty"], {}, void 0, false, {
                fileName: "[project]/src/components/Pages/AboutPage/AboutPage.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Process$2f$Process$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Process"], {}, void 0, false, {
                fileName: "[project]/src/components/Pages/AboutPage/AboutPage.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuOpen$2e$tsx$2f$MenuOpen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuOpen"], {}, void 0, false, {
                fileName: "[project]/src/components/Pages/AboutPage/AboutPage.tsx",
                lineNumber: 14,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Pages/AboutPage/AboutPage.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_s(AboutPage, "BlXLzfygGBB3DJu8XNVlL16HK5w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$MenuContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuOpen"]
    ];
});
_c = AboutPage;
var _c;
__turbopack_refresh__.register(_c, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/[locale]/about/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_9db6aa._.js.map