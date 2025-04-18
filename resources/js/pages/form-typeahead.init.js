"use strict";
$(function () {
    var o, e = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    $("#typeahead-1").typeahead({
        hint: !0,
        highlight: !0,
        minLength: 1
    }, {
        name: "states", source: (o = e, function (e, a) {
            var t = [], n = new RegExp(e, "i"); o.forEach(function (e) { n.test(e) && t.push(e) }), a(t)
        })
    });
    var e = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace, queryTokenizer: Bloodhound.tokenizers.whitespace, local: e
    }),
        e = ($("#typeahead-2").typeahead({
            hint: !0,
            highlight: !0,
            minLength: 1
        }, {
            name: "states", source: e
        }),
            new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"), queryTokenizer: Bloodhound.tokenizers.whitespace, prefetch: "https://twitter.github.io/typeahead.js/data/films/post_1960.json"
            })),
        t = ($("#typeahead-3").typeahead(null, {
            name: "best-pictures",
            display: "value",
            source: e
        }),
            $("#typeahead-4").typeahead(null, {
                name: "best-pictures",
                display: "value",
                source: e,
                templates: {
                    empty: '<div class="tt-empty-message">Not found</div>',
                    suggestion: Handlebars.compile('\n        <div class="tt-menu-item">\n          <div class="tt-menu-content">\n            <h4 class="tt-menu-title">{{value}}</h4>\n            <span class="tt-menu-subtitle">{{year}}</span>\n          </div>\n        </div>\n      ')
                }
            }),
            new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("team"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                identify: function (e) { return e.team },
                prefetch: "https://twitter.github.io/typeahead.js/data/nfl.json"
            }));
    $("#typeahead-5").typeahead({
        minLength: 0,
        highlight: !0
    }, {
        name: "nfl-teams",
        display: "team",
        source: function (e, a) { "" === e ? a(t.get("Detroit Lions", "Green Bay Packers", "Chicago Bears")) : t.search(e, a) }
    });
    var e = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("team"),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: "https://twitter.github.io/typeahead.js/data/nba.json"
    }),
        a = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace("team"),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: "https://twitter.github.io/typeahead.js/data/nhl.json"
        });
    $("#typeahead-6").typeahead({
        highlight: !0
    }, {
        name: "nba-teams",
        display: "team",
        source: e,
        templates: { header: '<h3 class="tt-header">NBA Teams</h3>' }
    }, {
        name: "nhl-teams",
        display: "team",
        source: a,
        templates: { header: '<h3 class="tt-header">NHL Teams</h3>' }
    })
});
