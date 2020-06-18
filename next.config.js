//  使用sass需此配置项
const withSass = require("@zeit/next-sass")
// module.exports = withSass();

module.exports = {
  withSass: withSass(), //  使用sass需此配置项
  useFileSystemPublicRoutes: false // 禁止路由链接到/pages下的文件
}