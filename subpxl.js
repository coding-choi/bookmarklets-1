void(d=document);
void(cs='//alanhogan.com/files/perm/subpixel.css');
void(d.g=d.getElementsByTagName);
void(l='link');
void(H=d.g('head').item(0));
void(c=(d.all)?c=d.all.tags(l):d.g(l));
with(c){
  for(i=0;i<length;i++){
    if(item(i).getAttribute('href')==cs) location.reload();
  }
}
void(L=d.createElement(l));
void(L.s=L.setAttribute);
void(L.s('rel','StyleSheet'));
void(L.s('href',cs));
void(H.appendChild(L));
