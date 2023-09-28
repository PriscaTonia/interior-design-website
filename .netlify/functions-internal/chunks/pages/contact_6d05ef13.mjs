/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_3054e7fa.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$MainLayout } from './about_ec27b0be.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
/* empty css                             */
const ArrowSec = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2 8.43536L15.7232 8.29851M10.6182 1.91132L17.1412 8.4343L10.4868 15.0887",
          stroke: "#CDA274",
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

const ArrowPri = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M2 8.43536L15.7232 8.29851M10.6182 1.91132L17.1412 8.4343L10.4868 15.0887",
          stroke: "#292F36",
          strokeWidth: "2",
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
};

const Button = (props) => {
  const { variant = "primary", text = "Default Text", type = "button" } = props;
  const defaultStyles = "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px]";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;
  return /* @__PURE__ */ jsxs("button", { className, type, children: [
    text,
    variant === "primary" ? /* @__PURE__ */ jsx(ArrowSec, {}) : /* @__PURE__ */ jsx(ArrowPri, {})
  ] });
};

const Mail = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "52",
      height: "52",
      viewBox: "0 0 52 52",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "26", cy: "26", r: "26", fill: "white" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M34.8846 18H17.1154C15.9471 18 15 18.9514 15 20.125V32.875C15 34.0486 15.9471 35 17.1154 35H34.8846C36.0529 35 37 34.0486 37 32.875V20.125C37 18.9514 36.0529 18 34.8846 18Z",
            stroke: "#CDA274",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18 21L26 28L34 21",
            stroke: "#CDA274",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
};

const Phone = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "52",
      height: "52",
      viewBox: "0 0 52 52",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "26", cy: "26", r: "26", fill: "white" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M35.3445 33.4554C34.5429 32.6478 32.6013 31.4691 31.6593 30.9941C30.4326 30.3762 30.3317 30.3258 29.3675 31.0421C28.7243 31.5201 28.2967 31.9471 27.5441 31.7866C26.7914 31.6261 25.1558 30.721 23.7236 29.2935C22.2914 27.8659 21.3338 26.183 21.1727 25.4329C21.0117 24.6828 21.4458 24.2603 21.9194 23.6156C22.5867 22.707 22.5362 22.5556 21.9658 21.329C21.521 20.3749 20.308 18.4517 19.4972 17.6541C18.6299 16.7975 18.6299 16.9489 18.0711 17.1811C17.6162 17.3725 17.1797 17.6052 16.7672 17.8762C15.9594 18.4128 15.5112 18.8585 15.1977 19.5284C14.8842 20.1982 14.7433 21.7686 16.3623 24.7095C17.9813 27.6504 19.1171 29.1542 21.468 31.4984C23.819 33.8426 25.6268 35.1031 28.2695 36.5851C31.5387 38.416 32.7927 38.0591 33.4646 37.7461C34.1365 37.4331 34.5843 36.9889 35.1219 36.1813C35.3936 35.7695 35.6268 35.3335 35.8186 34.8789C36.0513 34.3222 36.2027 34.3222 35.3445 33.4554Z",
            stroke: "#CDA274",
            strokeWidth: "2",
            strokeMiterlimit: "10"
          }
        )
      ]
    }
  );
};

const Web = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "52",
      height: "52",
      viewBox: "0 0 52 52",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "26", cy: "26", r: "26", fill: "white" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M36 26.5C36 20.7013 31.2987 16 25.5 16C19.7013 16 15 20.7013 15 26.5C15 32.2987 19.7013 37 25.5 37C31.2987 37 36 32.2987 36 26.5Z",
            stroke: "#CDA274",
            strokeWidth: "2",
            strokeMiterlimit: "10"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M35.4475 22.331C34.6349 22.3361 34.7148 23.844 33.7025 23.1325C33.3265 22.8689 33.0953 22.4857 32.6233 22.3692C32.2109 22.2674 31.7885 22.3732 31.3812 22.444C30.9183 22.5244 30.3693 22.5605 30.0182 22.9132C29.6787 23.2526 29.4991 23.7081 29.1379 24.0496C28.4392 24.7111 28.1442 25.4333 28.5965 26.3686C29.0316 27.2679 29.9418 27.7559 30.9238 27.6918C31.8887 27.6272 32.8909 27.0643 32.8631 28.4745C32.853 28.9732 32.9567 29.3193 33.109 29.7829C33.2501 30.2103 33.2405 30.6246 33.2729 31.0658C33.3326 31.8902 33.4834 32.8144 33.8902 33.5426L34.6491 32.4658C34.7427 32.3325 34.9385 32.1457 34.985 31.9885C35.0675 31.7101 34.9051 31.2317 34.8864 30.9198C34.8676 30.6078 34.8767 30.2918 34.8292 29.9798C34.7624 29.5427 34.5054 29.133 34.47 28.7009C34.4047 27.8964 34.5509 27.2541 33.9347 26.5814C33.3397 25.9325 32.4675 25.7768 31.6342 25.9086C31.2142 25.9747 29.5239 26.2465 30.2024 25.2811C30.3364 25.0913 30.5707 24.9356 30.7215 24.7549C30.8525 24.5976 30.9663 24.3086 31.1201 24.1859C31.2739 24.0633 31.9802 23.9223 32.1826 23.9849C32.385 24.0475 32.596 24.3412 32.7715 24.4714C33.0959 24.7172 33.4744 24.8806 33.875 24.9478C34.5661 25.0496 36.0111 24.6455 35.9999 23.7539C35.9979 23.3264 35.6033 22.731 35.4475 22.331ZM27.4475 29.6673C27.1778 28.5254 25.6352 28.1437 24.8035 27.5244C24.3254 27.1681 23.8999 26.618 23.272 26.5732C22.9826 26.5523 22.7402 26.6155 22.4534 26.5406C22.1903 26.4724 21.9839 26.33 21.7036 26.3671C21.1799 26.4363 20.8495 26.9992 20.2869 26.9228C19.7532 26.8506 19.2032 26.2226 19.0818 25.7111C18.926 25.0536 19.443 24.8404 19.997 24.7819C20.2282 24.7574 20.4878 24.731 20.7099 24.816C21.0023 24.9254 21.1405 25.2134 21.403 25.359C21.8953 25.6302 21.995 25.1966 21.9196 24.7569C21.8068 24.0984 21.6752 23.8297 22.2591 23.3768C22.6638 23.0643 23.0099 22.8384 22.9451 22.277C22.9067 21.9473 22.7271 21.7982 22.8946 21.4699C23.0215 21.2201 23.3701 20.9946 23.5973 20.8455C24.1837 20.4608 26.1093 20.4893 25.3226 19.4124C25.0913 19.0964 24.6648 18.5315 24.2601 18.4542C23.7541 18.358 23.5295 18.9259 23.1769 19.1763C22.8126 19.4353 22.1033 19.7295 21.7385 19.329C21.2477 18.79 22.0638 18.6129 22.2444 18.2369C22.425 17.8608 21.826 17.1498 21.5052 16.9697L19.997 18.671C19.9537 18.9559 19.9688 19.2467 20.0414 19.5255C20.1139 19.8044 20.2424 20.0653 20.419 20.2923C20.719 20.6806 21.1966 20.8053 21.2184 21.3356C21.2396 21.8445 21.1607 22.105 20.8298 22.4628C20.6866 22.6155 20.5854 22.8323 20.4397 22.9753C20.2611 23.1498 20.3274 23.0964 20.0486 23.1442C19.5245 23.2333 19.0782 23.3707 18.5718 23.5111C17.7279 23.7457 17.65 22.359 17.2655 21.815L16.0006 22.8424C15.9869 23.0109 16.208 23.3208 16.2682 23.504C16.6138 24.5508 17.311 25.3605 17.7613 26.362C18.2353 27.4226 19.5083 27.1284 20.0704 28.0577C20.5693 28.8821 20.0365 29.9259 20.4099 30.789C20.6811 31.4154 21.3206 31.5523 21.7618 32.0103C22.2125 32.4729 22.2029 33.106 22.2717 33.708C22.3493 34.4162 22.4753 35.1181 22.6487 35.8088C22.7099 36.0475 22.766 36.363 22.9285 36.5599C23.0398 36.6953 23.4217 36.8118 23.2674 36.8566C23.483 36.8923 23.867 37.0948 24.0466 36.9462C24.2834 36.7508 24.2201 36.1493 24.2611 35.8775C24.384 35.0683 24.7868 34.277 25.3302 33.6714C25.867 33.0739 26.6026 32.6694 27.0559 31.992C27.4976 31.3315 27.6307 30.4404 27.4475 29.6673ZM25.7582 31.0068C25.4546 31.5518 24.7787 31.9167 24.3441 32.3498C24.2262 32.4673 23.9752 32.8745 23.8275 32.7864C23.7218 32.7233 23.6858 32.1951 23.6469 32.074C23.4459 31.464 23.0622 30.9316 22.5485 30.5498C22.3901 30.4292 21.9975 30.2724 21.907 30.107C21.8058 29.9274 21.8968 29.5035 21.9004 29.3081C21.9059 29.0231 21.7769 28.5493 21.8468 28.2903C21.9277 27.9915 21.7719 28.1717 22.0375 28.1126C22.1776 28.0811 22.7564 28.1834 22.931 28.22C23.2082 28.278 23.361 28.4516 23.5796 28.6271C24.1543 29.0908 24.7873 29.4495 25.4313 29.8047C25.9302 30.0826 26.0769 30.4343 25.7582 31.0068ZM22.2368 16.985C22.4766 17.2206 22.7023 17.4995 23.06 17.5229C23.3985 17.5458 23.7177 17.3615 24.0132 17.5931C24.341 17.8475 24.5773 18.1697 25.0124 18.2491C25.4334 18.3259 25.8791 18.0786 25.9833 17.6455C26.0845 17.2328 25.8665 16.7839 25.8533 16.3697C25.8533 16.3122 25.8842 16.0567 25.8447 16.0135C25.8154 15.9809 25.5705 16.0175 25.533 16.0185C25.2588 16.0267 24.9853 16.0457 24.7124 16.0755C23.7176 16.1838 22.7434 16.4349 21.8194 16.8211C21.9424 16.9066 22.0967 16.9407 22.2368 16.985ZM30.936 19.844C31.3655 19.844 31.8016 19.6506 31.663 19.1509C31.5466 18.732 31.3483 18.2776 30.8657 18.5035C30.5585 18.647 30.1234 19.0124 30.0875 19.3748C30.0465 19.786 30.6496 19.844 30.936 19.844ZM30.5929 22.0307C31.0316 22.2949 31.6822 22.1707 32.0131 21.7936C32.2717 21.4984 32.4239 20.986 32.8889 20.9865C33.0936 20.986 33.2903 21.0667 33.4363 21.2109C33.6286 21.4109 33.5906 21.5987 33.6316 21.8491C33.7232 22.4114 34.3227 21.8811 34.4791 21.6633C34.5803 21.5213 34.7174 21.3106 34.6713 21.1259C34.6288 20.9534 34.4285 20.7697 34.3394 20.6114C34.0794 20.1534 33.8654 19.6206 33.4758 19.2506C33.1009 18.8944 32.64 18.9356 32.2843 19.3056C31.9929 19.6109 31.6544 19.8526 31.4551 20.2241C31.3144 20.4852 31.1561 20.6099 30.8712 20.6776C30.7144 20.7147 30.5353 20.7285 30.4037 20.8343C30.0374 21.1244 30.2459 21.8211 30.5929 22.0307Z",
            fill: "#CDA274"
          }
        )
      ]
    }
  );
};

const ContactInfo = () => {
  return /* @__PURE__ */ jsxs("div", { className: "col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full", children: [
    /* @__PURE__ */ jsxs("h5", { className: "flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight", children: [
      " ",
      /* @__PURE__ */ jsx(Mail, {}),
      " info@yourdomain.com"
    ] }),
    /* @__PURE__ */ jsxs("h5", { className: "flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight", children: [
      " ",
      /* @__PURE__ */ jsx(Phone, {}),
      " +1 (378) 400-1234"
    ] }),
    /* @__PURE__ */ jsxs("h5", { className: "flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight", children: [
      " ",
      /* @__PURE__ */ jsx(Web, {}),
      " www.yourdomain.com"
    ] })
  ] });
};

const ContactForm = () => {
  return /* @__PURE__ */ jsx("div", { className: "col-span-1 lg:col-span-2", children: /* @__PURE__ */ jsxs("form", { className: "w-full grid grid-cols-2 gap-x-10 gap-y-[50px]", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "name", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "name",
        className: "col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray",
        placeholder: "Name"
      }
    ) }),
    /* @__PURE__ */ jsx("label", { htmlFor: "email", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        name: "email",
        className: "col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray",
        placeholder: "Email"
      }
    ) }),
    /* @__PURE__ */ jsx("label", { htmlFor: "subject", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "subject",
        className: "col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray",
        placeholder: "Subject"
      }
    ) }),
    /* @__PURE__ */ jsx("label", { htmlFor: "phone", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        name: "phone",
        className: "col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray",
        placeholder: "Phone"
      }
    ) }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        name: "message",
        className: "col-span-2 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray",
        cols: 30,
        rows: 10,
        placeholder: "Hello, I am interested in..."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "w-full flex justify-end col-span-2", children: /* @__PURE__ */ jsx(Button, { text: "Submit", type: "submit" }) })
  ] }) });
};

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Interior Design Contact Us", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="w-full bg-contact h-[50vh] flex justify-center items-end" data-astro-cid-uw5kdbxl><div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[152px] flex flex-col justify-center items-center bg-white rounded-tl-[37px] rounded-tr-[37px] gap-2.5" data-astro-cid-uw5kdbxl><h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-primary-200 " data-astro-cid-uw5kdbxl>Contact Us</h1><p class="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray" data-astro-cid-uw5kdbxl><a href="/" data-astro-cid-uw5kdbxl>Home</a> / Contact</p></div></section><section class="lg:max-w-[1200px] flex flex-col gap-8 lg:gap-10 px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[200px]" data-astro-cid-uw5kdbxl><h2 class="text-[30px] text-center capitalize font-dm tracking-wide lg:max-w-[60%] leading-8 md:leading-[62.50px] md:text-[50px] mx-auto text-text-blue " data-astro-cid-uw5kdbxl>We love meeting new people and helping them.</h2><!-- main section --><div class="grid grid-cols-1 gap-[55px] pt-20 lg:grid-cols-3 place-content-center" data-astro-cid-uw5kdbxl>${renderComponent($$result2, "ContactInfo", ContactInfo, { "data-astro-cid-uw5kdbxl": true })}${renderComponent($$result2, "ContactForm", ContactForm, { "data-astro-cid-uw5kdbxl": true })}</div></section>` })}`;
}, "C:/Users/USER-PC/Desktop/interior-design-website/src/pages/contact.astro", void 0);

const $$file = "C:/Users/USER-PC/Desktop/interior-design-website/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ArrowSec as A, Button as B, contact as c };
