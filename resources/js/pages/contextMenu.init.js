"use strict";
$(function () {
    function e(e, t, n) {
        t = c ? t - e.$menu.outerWidth() : t,
            e.$menu.css({ top: n, left: t })
    }
    function t(e, t) { alert("clicked: ".concat(e)) } var c = "rtl" === $("html").attr("dir");
    $.contextMenu({
        selector: "#context-menu-1",
        position: e,
        callback: t,
        items: {
            edit: { name: "Edit", icon: "edit" },
            cut: { name: "Cut", icon: "cut" },
            copy: { name: "Copy", icon: "copy" },
            paste: { name: "Paste", icon: "paste" },
            delete: { name: "Delete", icon: "delete" },
            sep1: "---------",
            quit: {
                name: "Quit",
                icon: function (e, t, n) { return "context-menu-icon context-menu-icon-quit" }
            }
        }
    }),
        $.contextMenu({
            selector: "#context-menu-2",
            position: e,
            callback: t,
            items: {
                edit: { name: "Edit", icon: "mdi mdi mdi-account-edit-outline" },
                cut: { name: "Beer", icon: "mdi mdi mdi-beer" },
                copy: { name: "Cloud download", icon: "mdi mdi mdi-cloud-check" },
                paste: { name: "Certificate", icon: "mdi mdi mdi-file-certificate-outline" }
            }
        }),
        $.contextMenu({
            selector: "#context-menu-3",
            position: e,
            callback: t,
            items: {
                edit: {
                    name: "Edit",
                    icon: "edit",
                    accesskey: "e"
                },
                cut: {
                    name: "Cut",
                    icon: "cut",
                    accesskey: "c"
                },
                copy: {
                    name: "Copy",
                    icon: "copy",
                    accesskey: "c o p y"
                },
                paste: {
                    name: "Paste",
                    icon: "paste",
                    accesskey: "p t"
                },
                delete: {
                    name: "Delete",
                    icon: "delete"
                }, sep1: "---------",
                quit: {
                    name: "Quit",
                    icon: function (e, t, n) { return "context-menu-icon context-menu-icon-quit" }
                }
            }
        }),
        $.contextMenu({
            selector: "#context-menu-4",
            position: e,
            callback: t,
            items: {
                edit: {
                    name: "Clickable", icon: "edit", disabled: !1
                },
                cut: {
                    name: "Disabled", icon: "cut", disabled: !0
                }
            }
        }),
        $.contextMenu({
            selector: "#context-menu-5",
            position: e,
            callback: t,
            items: {
                edit: {
                    name: "Closing on Click", icon: "edit",
                    callback: function () { return !0 }
                },
                cut: {
                    name: "Open after Click", icon: "cut",
                    callback: function () { return !1 }
                }
            }
        }),
        $.contextMenu({
            selector: "#context-menu-6",
            position: e,
            callback: t,
            items: {
                edit: {
                    name: "Edit", icon: "edit"
                },
                cut: {
                    name: "Cut", icon: "cut"
                },
                sep1: "---------",
                quit: {
                    name: "Quit", icon: "quit"
                },
                sep2: "---------", fold1: {
                    name: "Sub group",
                    items: {
                        fold1_key1: { name: "Foo bar" },
                        fold2: {
                            name: "Sub group 2", items: {
                                fold2_key1: { name: "alpha" },
                                fold2_key2: { name: "bravo" }, fold2_key3: { name: "charlie" }
                            }
                        },
                        fold1_key3: { name: "delta" }
                    }
                },
                fold1a: {
                    name: "Other group",
                    items: {
                        fold1a_key1: { name: "echo" },
                        fold1a_key2: { name: "foxtrot" },
                        fold1a_key3: { name: "golf" }
                    }
                }
            }
        }),
        $.contextMenu({
            selector: "#context-menu-7",
            position: e,
            callback: t,
            trigger: "left",
            items: {
                edit: {
                    name: "Edit", icon: "edit"
                },
                cut: {
                    name: "Cut", icon: "cut"
                },
                copy: {
                    name: "Copy", icon: "copy"
                },
                paste: {
                    name: "Paste", icon: "paste"
                },
                delete: {
                    name: "Delete", icon: "delete"
                },
                sep1: "---------",
                quit: {
                    name: "Quit",
                    icon: function (e, t, n) { return "context-menu-icon context-menu-icon-quit" }
                }
            }
        }),
        $.contextMenu({
            selector: "#context-menu-8",
            position: e,
            callback: t,
            trigger: "hover",
            delay: 200,
            autoHide: !0,
            items: {
                edit: {
                    name: "Edit", icon: "edit"
                },
                cut: {
                    name: "Cut", icon: "cut"
                },
                copy: {
                    name: "Copy", icon: "copy"
                },
                paste: {
                    name: "Paste", icon: "paste"
                },
                delete: {
                    name: "Delete", icon: "delete"
                },
                sep1: "---------",
                quit: {
                    name: "Quit", icon: function (e, t, n) { return "context-menu-icon context-menu-icon-quit" }
                }
            }
        })
});