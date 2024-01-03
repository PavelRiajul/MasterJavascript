// (Browser) a ja  kiso add  korbo  (document obj) er vitore add korbo
//         Document  holo js obj -> (Document)  ke bolbo->  Root Node
//document er bito sob html code ke save kore   |chiled node of document<-(HTML)->Root element
//chield node of html <- (head)
//                         |
//                       title


//Traversing Dom Tree...........................................................
const rootNode = document.getRootNode();
//console.log(rootNode)    //root node holo Document
const htmlElementNode =rootNode.childNodes[0]  //chilednood holo HTML
console.log(htmlElementNode.childNodes)
