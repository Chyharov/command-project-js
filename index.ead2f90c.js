var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return s[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,s){i[e]=s},e.parcelRequired7c6=t);var a=t("eaRF0"),c=t("ijfRJ");c=t("ijfRJ");const r=document.querySelector(".header"),d=r.querySelector(".js-home"),l=r.querySelector(".js-library"),n=r.querySelector(".button__menu"),o=r.querySelector(".search__form"),L=r.querySelector(".navigation__logo"),u=r.querySelector(".navigation__link.js-library"),v=r.querySelector(".navigation__link.js-home"),m=r.querySelector(".search__icon"),f=r.querySelector(".watched-button"),h=r.querySelector(".queue-button");document.querySelector(".hero__votes"),document.querySelector(".js-main-container-list");r.classList.add("header1"),v.classList.add("library"),L.addEventListener("click",(function(){n.classList.add("js-is-hidden"),r.classList.add("header1"),r.classList.remove("header2"),o.classList.remove("js-is-hidden"),u.classList.remove("home"),v.classList.add("library"),f.classList.add("accent"),h.classList.remove("accent"),f.classList.add("blick"),h.classList.remove("blick"),(0,c.moveBtnFilmotekaToFirstPage)()})),d.addEventListener("click",(function(){n.classList.add("js-is-hidden"),r.classList.add("header1"),r.classList.remove("header2"),o.classList.remove("js-is-hidden"),u.classList.remove("home"),v.classList.add("library"),f.classList.add("accent"),h.classList.remove("accent"),f.classList.add("blick"),h.classList.remove("blick"),(0,c.renderFilmCard)()})),l.addEventListener("click",(function(){n.classList.remove("js-is-hidden"),r.classList.add("header2"),r.classList.remove("header1"),o.classList.add("js-is-hidden"),u.classList.add("home"),v.classList.remove("library"),(0,a.default)(),f.classList.add("accent"),f.classList.add("blick")})),m.addEventListener("click",(function(){o.reset()})),f.addEventListener("click",(function(){f.classList.add("accent"),h.classList.remove("accent"),f.classList.add("blick"),h.classList.remove("blick")})),h.addEventListener("click",(function(){f.classList.remove("accent"),h.classList.add("accent"),f.classList.remove("blick"),h.classList.add("blick")})),o.addEventListener("click",(function(){o.classList.add("input-anime")}));
//# sourceMappingURL=index.ead2f90c.js.map