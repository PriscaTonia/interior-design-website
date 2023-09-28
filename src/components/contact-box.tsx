import Mail from "../icons/mail";
import Phone from "../icons/phone";
import Web from "../icons/web";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] ">
      <h5 className="flex gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> info@yourdomain.com
      </h5>
      <h5 className="flex gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Phone /> info@yourdomain.com
      </h5>
      <h5 className="flex gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Web /> info@yourdomain.com
      </h5>
    </div>
  );
};

export default ContactInfo;
