webpackJsonp([0xc260c743ec7c],{272:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=l(2),r=a(n),u=l(22),d=a(u);t.default=function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement("h1",null,"Prjcts"),r.default.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.default.createElement("div",{key:t.id},r.default.createElement(d.default,{to:t.fields.slug},r.default.createElement("h3",{style:{display:"inline",textDecoration:"none"}},t.frontmatter.title),r.default.createElement("p",{style:{display:"inline",textDecoration:"none"}}," - ",t.frontmatter.date),r.default.createElement("p",null,t.excerpt)))}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-projects-js-f37c23f5dcfbe78c2173.js.map