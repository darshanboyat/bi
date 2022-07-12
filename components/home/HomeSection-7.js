import { useEffect } from "react";
// import { Controller, Scene } from "scrollmagic";
import BigHeadingScroll from "../common/BigHeadingScroll";
import { gsap } from "gsap";


const HomeSectionSeven = () => {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();
    var tween = gsap.to("#animate2", 1, { x: 800 });

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: 100,
      offset: 30,
    })
      .setTween(tween)
      // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
      .addTo(controller);

    //

    var controller = new ScrollMagic.Controller();
    var tween = gsap.to("#animate3", 1, { x: 680 });
    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      duration: 100,
      offset: 50,
    })
    .setTween(tween)
    // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
    .addTo(controller);

    //

    var controller = new ScrollMagic.Controller();
    var tween = gsap.to("#animate4", 1, { x: 680 });
    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger4",
      duration: 150,
      offset: 70,
    })
      .setTween(tween)
      // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
      .addTo(controller);

    //

    var controller = new ScrollMagic.Controller();
    var tween = gsap.to("#animate5", 1, { x: 1100 });

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      duration: 200,
      offset: 90,
    })
      .setTween(tween)
      // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
      .addTo(controller);

    //

    var controller = new ScrollMagic.Controller();
    var tween = gsap.to("#animate6", 1, { x: 1100 });

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger6",
      duration: 120,
      offset: 150,
    })
      .setTween(tween)
      // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
      .addTo(controller);

    //

    var controller = new ScrollMagic.Controller();
    var tween = gsap.to("#animate7", 1, { x: 1100 });

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger7",
      duration: 150,
      offset: 180,
    })
      .setTween(tween)
      // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
      .addTo(controller);

    //

    var controller = new ScrollMagic.Controller();
    var tween = gsap.to("#animate8", 1, { x: 1100 });

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger8",
      duration: 180,
      offset: 180,
    })
      .setTween(tween)
      // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
      .addTo(controller);

    //

    var controller = new ScrollMagic.Controller();
    var tween = gsap.to("#animate9", 1, { x: 1100 });

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger9",
      duration: 210,
      offset: 180,
    })
      .setTween(tween)
      // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
      .addTo(controller);
    //

     //

     var controller = new ScrollMagic.Controller();
     var tween = gsap.to("#animate10", 1, { x: 1100 });
 
     // build scene
     var scene = new ScrollMagic.Scene({
       triggerElement: "#trigger10",
       duration: 250,
       offset: 180,
     })
       .setTween(tween)
       // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
       .addTo(controller);
     //
      //

      var controller = new ScrollMagic.Controller();
      var tween = gsap.to("#animate11", 1, { x: 1100 });
  
      // build scene
      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger11",
        duration: 280,
        offset: 180,
      })
        .setTween(tween)
        // .addIndicators({name: "tween css class"}) // add indicators (requires plugin)
        .addTo(controller);
      //
  }, []);
  return (
    <div className="">
      <BigHeadingScroll
        text={"Design interaction betweens humans and brands."}
      />
      <div className="container md:px-0 px-7">
        <p className="2xl:text-4xl xl:text-3xl text-2xl Gilroy-Light 2xl:leading-relaxed 2xl:px-0 lg:px-10 2xl:py-10">
          at development, we go beyond boundaries in everything we do. by
          constantly pushing limits and exploring new territory, we help
          ambitious partners succeed in multi-platform software development and
          branding.
        </p>
      </div>
      {/* <p className="2xl:mt-28 mt-0 lg:mt-20 2xl:text-8xl xl:text-7xl text-4xl lg:text-6xl 2xl:p-10 p-8 2xl:leading-tight leading-snug">
        There is no singular <br /> process that fits <br /> every challenge —{" "}
        <br /> there are no silver bullets. <br />
        Organizations are different. <br /> People are <br /> different.
        Business <br /> challenges are different. <br /> And that shapes <br />{" "}
        how we work.
      </p> */}
      <div className="container md:px-0 px-7 ">
        <div className="intro 2xl:mt-28 mt-0 lg:mt-20 lg:px-10 2xl:px-0 2xl:py-10 py-8">
          <span className="line1 manifestoLine">
            <span className="content">
              <span id="trigger2">There is no singular</span>
              <span id="animate2" className="mask" />
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger3"> process that fits</span>{" "}
              <span id="animate3" className="mask"></span>
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger4"> every challenge —</span>{" "}
              <span id="animate4" className="mask"></span>
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger5">there are no silver bullets.</span>{" "}
              <span id="animate5" className="mask"></span>
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger6"> Organizations are different. </span>{" "}
              <span id="animate6" className="mask"></span>
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger7"> People are </span>{" "}
              <span id="animate7" className="mask"></span>
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger8"> different. Business </span>{" "}
              <span id="animate8" className="mask"></span>
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger9"> challenges are different. </span>{" "}
              <span id="animate9" className="mask"></span>
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger10"> And that shapes </span>{" "}
              <span id="animate10" className="mask"></span>
            </span>
          </span>
          <span
            data-scroll=""
            data-scroll-offset="20%"
            data-scroll-position="top"
            data-scroll-class="manifestoLine"
            className="line1 manifestoLine"
          >
            <span className="content">
              <span id="trigger11"> how we work.</span>{" "}
              <span id="animate11" className="mask"></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSeven;
