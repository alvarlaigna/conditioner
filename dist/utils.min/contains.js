define(function(){"use strict";var n=document?document.body:null;return n&&n.compareDocumentPosition?function(n,t){return!!(16&n.compareDocumentPosition(t))}:n&&n.contains?function(n,t){return n!=t&&n.contains(t)}:function(n,t){for(var e=t.parentNode;e;){if(e===n)return!0;e=e.parentNode}return!1}});