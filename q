[1mdiff --git a/flask_app.py b/flask_app.py[m
[1mindex cf542dc..d39eee4 100644[m
[1m--- a/flask_app.py[m
[1m+++ b/flask_app.py[m
[36m@@ -30,7 +30,8 @@[m [mdef knooppunten():[m
             link_van_naar = link_van_naar,[m
             link_naar_van = link_naar_van,[m
             link_van_naar_mijn_locatie = link_van_naar_mijn_locatie,[m
[31m-            link_naar_van_mijn_locatie = link_naar_van_mijn_locatie[m
[32m+[m[32m            link_naar_van_mijn_locatie = link_naar_van_mijn_locatie,[m
[32m+[m[32m            filename = input_file.filename[m
         )[m
 [m
     return render_template("knooppunten-get.html")[m
\ No newline at end of file[m
[1mdiff --git a/static/css/styles.css b/static/css/styles.css[m
[1mindex 94f2544..afbf85f 100644[m
[1m--- a/static/css/styles.css[m
[1m+++ b/static/css/styles.css[m
[36m@@ -2,50 +2,12 @@[m
     height: 1.25em;[m
 }[m
 [m
[31m-.tooltip {[m
[31m-  position: relative;[m
[31m-  display: inline-block;[m
[31m-}[m
[31m-[m
[31m-.tooltip .tooltiptext {[m
[31m-  visibility: hidden;[m
[31m-  width: 140px;[m
[31m-  background-color: #555;[m
[31m-  color: #fff;[m
[31m-  text-align: center;[m
[31m-  border-radius: 6px;[m
[31m-  padding: 5px;[m
[31m-  position: absolute;[m
[31m-  z-index: 1;[m
[31m-  bottom: 150%;[m
[31m-  left: 50%;[m
[31m-  margin-left: -75px;[m
[31m-  opacity: 0;[m
[31m-  transition: opacity 0.3s;[m
[31m-}[m
[31m-[m
[31m-.tooltip .tooltiptext::after {[m
[31m-  content: "";[m
[31m-  position: absolute;[m
[31m-  top: 100%;[m
[31m-  left: 50%;[m
[31m-  margin-left: -5px;[m
[31m-  border-width: 5px;[m
[31m-  border-style: solid;[m
[31m-  border-color: #555 transparent transparent transparent;[m
[31m-}[m
[31m-[m
[31m-.tooltip:hover .tooltiptext {[m
[31m-  visibility: visible;[m
[31m-  opacity: 1;[m
[31m-}[m
[31m-[m
 #dont-click-button:hover {[m
   background-color: pink;[m
 }[m
 [m
 .custom-file-input ~ .custom-file-label::after {[m
[31m-    content: "Zoek";[m
[32m+[m[32m    content: "Upload";[m[41m[m
     color: #ffffff;[m
     background-color: var(--secondary);[m
     border-color: var(--secondary);[m
[36m@@ -57,10 +19,16 @@[m
 }[m
 [m
 #copy-to-clipboard{[m
[31m-  visibility: hidden;[m
[32m+[m[32m  display:none;[m[41m[m
[32m+[m[32m}[m[41m[m
[32m+[m[41m[m
[32m+[m[32m#copy-button{[m[41m[m
[32m+[m[32m    margin-top: 0.75em;[m[41m[m
[32m+[m[32m    width: 100%;[m[41m[m
[32m+[m[32m    font-weight:600;[m[41m[m
 }[m
 [m
 .full-width{[m
   width:100%;[m
   border-color:white;[m
[31m-}[m
\ No newline at end of file[m
[32m+[m[32m}[m[41m[m
[1mdiff --git a/static/js/copy_to_clipboard.js b/static/js/copy_to_clipboard.js[m
[1mindex 1e6ec3b..464427f 100644[m
[1m--- a/static/js/copy_to_clipboard.js[m
[1m+++ b/static/js/copy_to_clipboard.js[m
[36m@@ -1,10 +1,10 @@[m
 function myCopyFunction() {[m
     var copyText = document.getElementById("copy-to-clipboard");[m
[31m-    copyText.style.visibility = "visible";[m
[32m+[m[32m    copyText.style.display = "block";[m
     copyText.select();[m
     copyText.setSelectionRange(0, 99999)[m
     document.execCommand("copy");[m
[31m-    copyText.style.visibility = "hidden";[m
[32m+[m[32m    copyText.style.display = "none";[m
 }[m
 [m
 function dontClickFunction() {[m
[1mdiff --git a/templates/knooppunten-post.html b/templates/knooppunten-post.html[m
[1mindex f057ffa..a554958 100644[m
[1m--- a/templates/knooppunten-post.html[m
[1m+++ b/templates/knooppunten-post.html[m
[36m@@ -4,31 +4,35 @@[m
 [m
 {% block uploaded_file %}[m
     <div>[m
[32m+[m[32m        <span class="badge badge-info">{{ filename }}</span>[m
         <div class="row">[m
[31m-            <div class="col-xl-3">[m
[32m+[m[32m            <div class="col-xl-12">[m
                 <span class="badge badge-light">Route vanaf</span>[m
             </div>[m
[31m-            <div class="col-xl-4">[m
[32m+[m[32m            <div class="col-xl-6">[m
                 <a href="{{link_van_naar}}" target="_blank" class="btn btn-secondary btn-lg full-width" role="button">Startpunt</a>[m
             </div>[m
[31m-            <div class="col-xl-4">[m
[32m+[m[32m            <div class="col-xl-6">[m
                 <a href="{{link_naar_van}}" target="_blank" class="btn btn-secondary btn-lg full-width" role="button">Uw locatie</a>[m
             </div>[m
         </div>[m
         <div class="row">[m
[31m-            <div class="col-xl-3">[m
[32m+[m[32m            <div class="col-xl-12">[m
                 <span class="badge badge-light">Omgekeerde route vanaf</span>[m
             </div>[m
[31m-            <div class="col-xl-4">[m
[32m+[m[32m            <div class="col-xl-6">[m
                 <a href="{{link_van_naar_mijn_locatie}}" target="_blank" class="btn btn-secondary btn-lg full-width" role="button">Eindpunt</a>[m
             </div>[m
[31m-            <div class="col-xl-4">[m
[32m+[m[32m            <div class="col-xl-6">[m
                 <a href="{{link_naar_van_mijn_locatie}}" target="_blank" class="btn btn-secondary btn-lg full-width" role="button">Uw locatie</a>[m
             </div>[m
         </div>[m
     </div>[m
     <textarea id="copy-to-clipboard" readonly>Route:&#13;&#10;{{link_van_naar}}&#13;&#10;&#13;&#10;Omgekeerde route:&#13;&#10;{{link_naar_van}}&#13;&#10;&#13;&#10;Route (Start op uw locatie):&#13;&#10;{{link_van_naar_mijn_locatie}}&#13;&#10;&#13;&#10;Omgekeerde route (Start op uw locatie):&#13;&#10;{{link_naar_van_mijn_locatie}}</textarea>[m
     <div>[m
[31m-        <button onclick="myCopyFunction()">Kopieer routes naar klembord</button>[m
[32m+[m[32m        <button class="btn btn-info btn-sm" id="copy-button" onclick="myCopyFunction()"">[m
[32m+[m[32m            Kopieer routes naar klembord[m
[32m+[m[32m        </button>[m
     </div>[m
[32m+[m[32m</div>[m
 {% endblock %}[m
\ No newline at end of file[m
