
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/wesleysimeontan/personal-website-clone/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/wesleysimeontan/personal-website-clone/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/wesleysimeontan/personal-website-clone/src/pages/projects.js")),
  "component---src-pages-tutoring-js": preferDefault(require("/Users/wesleysimeontan/personal-website-clone/src/pages/tutoring.js"))
}

