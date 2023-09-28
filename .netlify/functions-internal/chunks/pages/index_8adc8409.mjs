/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_3054e7fa.mjs';
import 'html-escaper';
import { $ as $$MainLayout } from './about_ec27b0be.mjs';
import { B as Button, A as ArrowSec } from './contact_6d05ef13.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import CountUp from 'react-countup';
/* empty css                           */import 'clsx';
import 'react';
import 'framer-motion';
/* empty css                           *//* empty css                             */
const CallIcon = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "93",
      height: "93",
      viewBox: "0 0 93 93",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "46.5", cy: "46.5", r: "46.5", fill: "#F4F0EC" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M61.0012 55.0749C59.7796 53.8442 56.8211 52.0482 55.3857 51.3243C53.5164 50.3828 53.3625 50.3059 51.8933 51.3974C50.9133 52.1258 50.2617 52.7766 49.1148 52.532C47.9678 52.2874 45.4754 50.9082 43.2931 48.7329C41.1107 46.5576 39.6514 43.9931 39.4061 42.8501C39.1607 41.7071 39.8222 41.0632 40.5438 40.081C41.5607 38.6964 41.4838 38.4657 40.6145 36.5965C39.9368 35.1427 38.0883 32.2121 36.8529 30.9967C35.5313 29.6914 35.5313 29.9222 34.6798 30.276C33.9865 30.5677 33.3214 30.9222 32.6928 31.3352C31.462 32.1529 30.7789 32.8321 30.3012 33.8528C29.8235 34.8735 29.6089 37.2665 32.0759 41.7478C34.5429 46.2292 36.2737 48.5206 39.8561 52.0928C43.4385 55.6649 46.1931 57.5856 50.2202 59.844C55.2018 62.6339 57.1126 62.09 58.1365 61.6131C59.1604 61.1362 59.8427 60.4593 60.662 59.2286C61.076 58.6011 61.4314 57.9368 61.7235 57.2441C62.0781 56.3957 62.3089 56.3957 61.0012 55.0749Z",
            stroke: "#CDA274",
            strokeWidth: "2",
            strokeMiterlimit: "10"
          }
        )
      ]
    }
  );
};

const Experience = ({
  text = "Default Text",
  num,
  i
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex min-w-[243px] flex-col ${i === 3 ? "" : "border-r"} border-primary-100 items-center justify-center gap-4`,
      children: [
        /* @__PURE__ */ jsx("h5", { className: "text-primary-100 text-[50px] lg:text-[85px] tracking-widest leading-[70px] font-dm lg:leading-[106.25px] ", children: /* @__PURE__ */ jsx(
          CountUp,
          {
            duration: 3,
            start: 0,
            end: num,
            enableScrollSpy: true,
            scrollSpyDelay: 0
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-text-gray-200 text-base text-center lg:text-lg font-jost tracking-tight lg:leading-9", children: text })
      ]
    }
  );
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const services = [
    {
      title: "Project Plan",
      text: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
      title: "Interior Work",
      text: "There are many variations of the passages of lorem Ipsum from available, majority."
    },
    {
      title: "Realization",
      text: "There are many variations of the passages of lorem Ipsum from available, majority."
    }
  ];
  const reviews = [
    {
      img: "/natasha.png",
      name: "Nattasha Mith",
      location: "Sydney, USA",
      review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
    },
    {
      img: "/benny.png",
      name: "Benny Roll",
      location: "Sydney, New York",
      review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
    },
    {
      img: "/raymond.png",
      name: "Raymond Galario",
      location: "Sydney, Australia",
      review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
    }
  ];
  const projects = [
    {
      img: "/project1.png",
      name: "Modern Kitchen",
      text: "Decor / Artchitecture"
    },
    {
      img: "/project2.png",
      name: "Modern Bedroom",
      text: "Decor / Artchitecture"
    },
    {
      img: "/project3.png",
      name: "Modern Dining Hall",
      text: "Decor / Artchitecture"
    },
    {
      img: "/project4.png",
      name: "Modern Living Room",
      text: "Decor / Artchitecture"
    }
  ];
  const clientLogos = [
    {
      img: "/clientLogo1.svg"
    },
    {
      img: "/clientLogo2.svg"
    },
    {
      img: "/clientLogo3.svg"
    },
    {
      img: "/clientLogo4.svg"
    },
    {
      img: "/clientLogo5.svg"
    }
  ];
  const experiences = [
    {
      num: 12,
      text: "Years Of Experiance"
    },
    {
      num: 85,
      text: "Success Project"
    },
    {
      num: 15,
      text: "Active Project"
    },
    {
      num: 95,
      text: "Happy Customers"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Interior Design Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="w-full bg-hero bg-no-repeat bg-cover h-screen lg:min-h-[110vh] px-12 xl:px-0 flex items-center " data-astro-cid-j7pv25f6><div class="lg:max-w-[1200px] w-full mx-auto flex flex-col" data-astro-cid-j7pv25f6><h1 class="text-[40px] leading-[50px] md:text-[60px] xl:text-[85px] pb-4 font-dm md:leading-[106.25px] w-full xl:max-w-[50%] text-primary-200" data-astro-cid-j7pv25f6> Let Your Home Be Unique </h1><p class="text-base md:text-[22px] pb-5 font-jost text-text-gray-200 w-full lg:max-w-[50%]" data-astro-cid-j7pv25f6>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>${renderComponent($$result2, "Button", Button, { "text": "Get Started", "data-astro-cid-j7pv25f6": true })}</div></section><section class="lg:max-w-[1200px] flex flex-col gap-8 lg:gap-10 lg:flex-row px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] justify-between " data-astro-cid-j7pv25f6>${services.map((service) => {
    return renderTemplate`<div class="w-full max-w-[358px] mx-auto flex flex-col justify-center items-center gap-3 md:gap-5" data-astro-cid-j7pv25f6><h3 class="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose" data-astro-cid-j7pv25f6>${service.title}</h3><p class="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px] text-center" data-astro-cid-j7pv25f6>${service.text}</p><a href="/services" class="text-text-gray-200 leading-snug text-lg tracking-tight font-jost font-semibold gap-2 py-4 md:py-8 startCenter" data-astro-cid-j7pv25f6>Read More ${renderComponent($$result2, "ArrowSec", ArrowSec, { "data-astro-cid-j7pv25f6": true })}</a></div>`;
  })}</section><section class="w-full lg:max-w-[1200px] mx-auto px-12 xl:px-0 flex flex-col-reverse justify-center items-center lg:grid grid-cols-2 gap-[75px] pt-[100px] lg:pt-[200px]" data-astro-cid-j7pv25f6><div class="flex flex-col gap-8 max-w-[472px] items-center lg:items-start py-6" data-astro-cid-j7pv25f6><h2 class="text-[30px] text-center capitalize lg:text-left font-dm tracking-wide leading-8 md:leading-[62.50px] md:text-[50px] text-text-blue " data-astro-cid-j7pv25f6>We Create The Art Of Stylish Living Stylishly</h2><p class="text-base md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]" data-astro-cid-j7pv25f6>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p><div class="flex gap-4 pt-3 items-center" data-astro-cid-j7pv25f6>${renderComponent($$result2, "CallIcon", CallIcon, { "data-astro-cid-j7pv25f6": true })}<p class="flex flex-col text-text-gray-200 font-jost tracking-tight" data-astro-cid-j7pv25f6><span class="text-2xl font-bold leading-9 " data-astro-cid-j7pv25f6>012345678</span><span class="text-[22px] leading-8" data-astro-cid-j7pv25f6>Call Us Anytime</span></p></div>${renderComponent($$result2, "Button", Button, { "text": "Get Free Estimate", "data-astro-cid-j7pv25f6": true })}</div><div data-astro-cid-j7pv25f6><img src="/about-img.png" alt="" data-astro-cid-j7pv25f6></div></section><section class="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] " data-astro-cid-j7pv25f6><div class="w-full flex flex-col bg-primary-300 rounded-[48px] px-6 py-[88px]" data-astro-cid-j7pv25f6><h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] pb-9 mx-auto" data-astro-cid-j7pv25f6>What the People Thinks About Us</h2><div class="flex flex-col gap-8 lg:gap-10 lg:flex-row justify-between" data-astro-cid-j7pv25f6>${reviews.map((rev) => {
    return renderTemplate`<div class="w-full bg-white max-w-[370px] px-[37px] py-[53px] rounded-3xl mx-auto flex flex-col justify-center gap-4 md:gap-6" data-astro-cid-j7pv25f6><div class="flex flex-col sm:flex-row gap-6 items-center" data-astro-cid-j7pv25f6><img${addAttribute(rev.img, "src")} alt="" data-astro-cid-j7pv25f6><p class="flex flex-col tracking-tight leading-9" data-astro-cid-j7pv25f6><span class="text-primary-200 text-lg lg:text-[25px] font-dm" data-astro-cid-j7pv25f6>${rev.name}</span><span class="text-text-gray-200 text-base lg:text-lg font-jost" data-astro-cid-j7pv25f6>${rev.location}</span></p></div><p class="font-jost tracking-tight leading-8 text-base text-center sm:text-left text-text-gray lg:text-[22px]" data-astro-cid-j7pv25f6>${rev.review}</p></div>`;
  })}</div></div></section><section class="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] " data-astro-cid-j7pv25f6><div class="w-full flex flex-row justify-between items-center gap-12 max-w-[1200px] overflow-x-scroll no-scrollbar" data-astro-cid-j7pv25f6>${clientLogos.map((logo) => renderTemplate`<img${addAttribute(logo.img, "src")} alt="" data-astro-cid-j7pv25f6>`)}</div></section><section class="lg:max-w-[1200px] px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px] " data-astro-cid-j7pv25f6><h2 class="font-dm tracking-wide text-center leading-[37px] lg:leading-[62.50px] text-[30px] lg:text-[50px] w-full lg:max-w-[50%] pb-2 mx-auto" data-astro-cid-j7pv25f6>Follow Our Projects</h2><p class="text-base md:text-[22px] text-center tracking-tight font-jost text-text-gray leading-[33px] lg:max-w-[60%] mx-auto" data-astro-cid-j7pv25f6>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p><div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-[104px] lg:gap-y-[56px] mt-12 lg:mt-[93px]" data-astro-cid-j7pv25f6>${projects.map((proj) => {
    return renderTemplate`<div class="w-full flex flex-col gap-4" data-astro-cid-j7pv25f6><img${addAttribute(proj.img, "src")} alt="" data-astro-cid-j7pv25f6><p class="flex flex-col tracking-tight leading-9" data-astro-cid-j7pv25f6><span class="text-primary-200 text-lg lg:text-[25px] font-dm" data-astro-cid-j7pv25f6>${proj.name}</span><span class="text-text-gray-200 text-base lg:text-lg font-jost" data-astro-cid-j7pv25f6>${proj.text}</span></p></div>`;
  })}</div></section><section class="w-full bg-primary-300 px-12 xl:px-0 mx-auto mt-[100px] lg:mt-[200px] py-[151px]" data-astro-cid-j7pv25f6><div class="w-full max-w-[1200px] mx-auto flex lg:justify-center items-center overflow-x-scroll no-scrollbar" data-astro-cid-j7pv25f6>${experiences.map((exp, i) => {
    return renderTemplate`${renderComponent($$result2, "Experience", Experience, { "text": exp.text, "num": exp.num, "i": i, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/USER-PC/Desktop/interior-design-website/src/components/experience.tsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })}`;
  })}</div></section>` })}`;
}, "C:/Users/USER-PC/Desktop/interior-design-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER-PC/Desktop/interior-design-website/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
