(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_notes_[id]_page_tsx_b53fce._.js", {

"[project]/app/notes/[id]/page.tsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>NotePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$Notes$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/app/notes/Notes.module.css (css module, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function getNote(noteId) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${noteId}`, {
        next: {
            revalidate: 10
        }
    });
    const data = await res.json();
    return data;
}
async function NotePage({ params }) {
    const note = await getNote(params.id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                children: [
                    "notes/",
                    note.id
                ]
            }, void 0, true, {
                fileName: "<[project]/app/notes/[id]/page.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$notes$2f$Notes$2e$module$2e$css__$28$css__module$29$__["default"].note,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                        children: note.title
                    }, void 0, false, {
                        fileName: "<[project]/app/notes/[id]/page.tsx>",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h5", {
                        children: note.content
                    }, void 0, false, {
                        fileName: "<[project]/app/notes/[id]/page.tsx>",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: note.created
                    }, void 0, false, {
                        fileName: "<[project]/app/notes/[id]/page.tsx>",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/app/notes/[id]/page.tsx>",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/notes/[id]/page.tsx>",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_notes_[id]_page_tsx_b53fce._.js.map