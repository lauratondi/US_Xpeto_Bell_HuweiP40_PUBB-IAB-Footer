"use strict";
var Premium = Premium || {};

Premium.creative = {
  init: function () {
    /* START OF CUSTOM JS */

    Premium.jpxApi.on("expand", doExpand);

    Premium.jpxApi.on("default", doCollapse);

    var expAni1 = new TimelineMax({
      duration: 1,
      ease: "power2.out",
    });

    expAni1.to(
      ["#phone1 img", "#content1 p"],
      { left: -100, opacity: 0, stagger: 0.2 },
      "+=2"
    );
    expAni1.to(["#phone2 img", "#content2 p"], { opacity: 1 });
    expAni1.to(
      ["#phone2 img", "#content2 p"],
      { left: -100, opacity: 0, stagger: 0.2 },
      "+=2"
    );
    expAni1.to(["#phone3 img", "#content3 p"], { opacity: 1 });
    expAni1.to(
      ["#phone3 img", "#content3 p"],
      { left: -100, opacity: 0, stagger: 0.2 },
      "+=2"
    );
    expAni1.to(["#phone4 img", "#content4 p"], { opacity: 1 });
    expAni1.to(
      ["#phone4 img", "#content4 p"],
      { left: -100, opacity: 0, stagger: 0.2 },
      "+=2"
    );
    expAni1.to(["#phone5 img", "#content5 p", "#huaLogo img"], { opacity: 1 });

    function doExpand() {
      gsap.to("#bellBlue img", 0.5, { top: "38%" });
      gsap.to("#cta img", 0.5, { top: "49%" });

      gsap.to(["#phone0 img", "#content0 p"], { opacity: 0 });
      gsap.to(["#phone1 img", "#content1 p"], { opacity: 1 });
      gsap.to(["#phone2 img", "#content2 p"], { opacity: 0 });
      gsap.to(["#phone3 img", "#content3 p"], { opacity: 0 });
      gsap.to(["#phone4 img", "#content4 p"], { opacity: 0 });
      gsap.to(["#phone5 img", "#content5 p", "#huaLogo img"], 0.4, {
        opacity: 0,
      });

      expAni1.play();
      expAni1.restart();
    }

    function doCollapse() {
      gsap.to("#bellBlue img", 0.5, { top: "23%" });
      gsap.to("#cta img", 0.5, { top: "34%" });

      gsap.to(["#phone0 img", "#content0 p"], 0.4, { opacity: 1 });
      gsap.to(["#phone1 img", "#content1 p"], 0.4, { opacity: 0 });
      gsap.to(["#phone2 img", "#content2 p"], 0.4, { opacity: 0 });
      gsap.to(["#phone3 img", "#content3 p"], 0.4, { opacity: 0 });
      gsap.to(["#phone4 img", "#content4 p"], 0.4, { opacity: 0 });
      gsap.to(["#phone5 img", "#content5 p", "#huaLogo img"], 0.4, {
        opacity: 0,
      });

      expAni1.pause();
    }

    window.addEventListener("DOMContentLoaded", function () {
      doCollapse();
    });
    window.addEventListener("load", function () {
      doCollapse();
    });
    // window.addEventListener("expand", function () {
    //   doExpand();
    // });

    return;
    /* END OF CUSTOM JS */
  },
};
