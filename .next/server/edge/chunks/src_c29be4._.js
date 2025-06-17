(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_c29be4._.js", {

"[project]/src/utils/languageNegotiator.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultLocale": (()=>defaultLocale),
    "getPreferredLocale": (()=>getPreferredLocale),
    "isValidLocale": (()=>isValidLocale),
    "supportedLocales": (()=>supportedLocales)
});
const supportedLocales = [
    'en',
    'nl',
    'uk',
    'ru'
];
const defaultLocale = 'en';
function getPreferredLocale() {
    if ("TURBOPACK compile-time truthy", 1) {
        return defaultLocale;
    }
    "TURBOPACK unreachable";
    // Get browser's preferred languages
    const browserLanguages = undefined;
    const lang = undefined;
}
function isValidLocale(locale) {
    return supportedLocales.includes(locale);
}
}}),
"[project]/src/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languageNegotiator$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/languageNegotiator.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/web/exports/index.js [middleware] (ecmascript)");
;
;
// Get the preferred locale from the request headers
function getLocale(request) {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
        const languages = acceptLanguage.split(',').map((lang)=>lang.split(';')[0].trim());
        for (const lang of languages){
            const locale = lang.split('-')[0];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languageNegotiator$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["supportedLocales"].includes(locale)) {
                return locale;
            }
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languageNegotiator$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["defaultLocale"];
}
function middleware(request) {
    const pathname = request.nextUrl.pathname;
    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languageNegotiator$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["supportedLocales"].every((locale)=>!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${locale}${pathname}`, request.url));
    }
}
const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|.*\\..*).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=src_c29be4._.js.map