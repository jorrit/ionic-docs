(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[98678],{16239:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(22122),a=i(19756),o=i(86010),s=i(67294),l="docsButton_2Emz",r="docsButtonRound_3i9G";function c(e){var t,i=e.href,c=e.round,p=void 0!==c&&c,u=(0,a.Z)(e,["href","round"]);return u.className=(0,o.Z)(((t={})[u.className]=Boolean(u.className),t[l]=!0,t["docs-button"]=!0,t[r]=p,t["docs-button--round"]=p,t)),i?s.createElement("a",(0,n.Z)({href:i,className:"docsButton"},u),u.children):s.createElement("button",(0,n.Z)({className:"docsButton"},u),u.children)}},78888:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return h}});var n=i(22122),a=i(19756),o=(i(67294),i(3905)),s=i(28312),l=i(16239),r=i(41395),c=i(58215),p=i(81840),u={title:"File"},d={unversionedId:"native/plugins/file",id:"native/plugins/file",isDocsHomePage:!1,title:"File",description:"This plugin implements a File API allowing read/write access to files residing on the device.",source:"@site/docs/native/plugins/file.md",sourceDirName:"native/plugins",slug:"/native/plugins/file",permalink:"/docs/native/plugins/file",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/native/plugins/file.md",version:"current",frontMatter:{title:"File"},sidebar:"native",previous:{title:"File Transfer",permalink:"/docs/native/plugins/file-transfer"},next:{title:"Firebase Analytics",permalink:"/docs/native/plugins/firebase-analytics"}},m=[{value:"Supported Platforms",id:"supported-platforms",children:[]}],f={toc:m};function h(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This plugin implements a File API allowing read/write access to files residing on the device."),(0,o.kt)("p",null,"The File class implements static convenience functions to access files and directories."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { File } from '@ionic-native/file/ngx';\n\nconstructor(private file: File) { }\n\n...\n\nthis.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>\n  console.log('Directory doesn't exist'));\n\n")),(0,o.kt)("p",null," This plugin is based on several specs, including : The HTML5 File API http: //",(0,o.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/FileAPI/"},"www.w3.org/TR/FileAPI/"),"\nThe (now-defunct) Directories and System extensions Latest: http: //",(0,o.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/2012/WD-file-system-api-20120417/"},"www.w3.org/TR/2012/WD-file-system-api-20120417/"),"\nAlthough most of the plugin code was written when an earlier spec was current: http:\n//",(0,o.kt)("a",{parentName:"p",href:"http://www.w3.org/TR/2011/WD-file-system-api-20110419/"},"www.w3.org/TR/2011/WD-file-system-api-20110419/")," It also implements the FileWriter spec : http:\n//dev.w3.org/2009/dap/file-system/file-writer.html"),(0,o.kt)("p",null,(0,o.kt)("a",{href:"https://github.com/apache/cordova-plugin-file",target:"_blank",rel:"noopener",className:"git-link"},(0,o.kt)("svg",{viewBox:"0 0 512 512"},(0,o.kt)("path",{d:"M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}))," https://github.com/apache/cordova-plugin-file")),(0,o.kt)("h2",null,"Stuck on a Cordova issue?"),(0,o.kt)(s.Z,{className:"cordova-ee-card",header:"Don't waste precious time on plugin issues.",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Native",mdxType:"DocsCard"},(0,o.kt)("div",null,(0,o.kt)("img",{src:"/docs/icons/native-cordova-bot.png",class:"cordova-ee-img"}),(0,o.kt)("p",null,"If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic\u2019s experts offer premium advisory services for both community plugins and premier plugins."),(0,o.kt)(l.Z,{className:"native-ee-detail",mdxType:"DocsButton"},"Contact Us Today!"))),(0,o.kt)("h2",{id:"installation"},(0,o.kt)("a",{href:"#installation"},"Installation")),(0,o.kt)(r.Z,{defaultValue:"Capacitor",values:[{value:"Capacitor",label:"Capacitor"},{value:"Cordova",label:"Cordova"},{value:"Enterprise",label:"Enterprise"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"Capacitor",mdxType:"TabItem"},(0,o.kt)(p.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ npm install cordova-plugin-file ","\n","$ npm install @ionic-native/file ","\n","$ ionic cap sync")),(0,o.kt)(c.Z,{value:"Cordova",mdxType:"TabItem"},(0,o.kt)(p.Z,{className:"language-shell",mdxType:"CodeBlock"},"$ ionic cordova plugin add cordova-plugin-file ","\n","$ npm install @ionic-native/file ","\n")),(0,o.kt)(c.Z,{value:"Enterprise",mdxType:"TabItem"},(0,o.kt)("blockquote",null,"Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. \xa0",(0,o.kt)("a",{class:"btn",href:"https://ionic.io/docs/premier-plugins"},"Learn More")," or if you're interested in an enterprise version of this plugin ",(0,o.kt)("a",{class:"btn",href:"https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"},"Contact Us")))),(0,o.kt)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android"),(0,o.kt)("li",{parentName:"ul"},"Browser"),(0,o.kt)("li",{parentName:"ul"},"iOS"),(0,o.kt)("li",{parentName:"ul"},"macOS"),(0,o.kt)("li",{parentName:"ul"},"Windows")))}h.isMDXComponent=!0}}]);