import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import backBtn from "public/icons/back_btn.svg";
import Image from "next/image";
import FormLayout from "@/layout/formLayout";
import Link from "next/link";
import insta from "public/icons/mdi_instagram.svg";
import x from "public/icons/x_icon.svg";
import fb from "public/icons/fb.svg";
import linkedIn from "public/icons/linkedIn.svg";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { contact_validate } from "../../lib/validate";

export default function Contact() {
  const router = useRouter();
  const [isFormValid, setIsFormValid] = useState(false);
  const [pending, setPending] = useState(false);

  const goBack = () => {
    router.back();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: contact_validate,
    onSubmit: handleSubmit,
  });

  function handleSubmit(values) {
    console.log(values);
  }

  useEffect(() => {
    setIsFormValid(formik.isValid);
  }, [formik.values, formik.errors, formik.isValid]);

  const getInputClassNames = (fieldName) =>
    `${
      formik.errors[fieldName] && formik.touched[fieldName]
        ? "border-red-500 w-full"
        : "w-full"
    }`;

  return (
    <FormLayout title="Contact" className="min-h-screen ">
      <header className="hidden lg:flex lg:items-end bg-red-40  h-[8vh] lg:h-[12vh] lg:py-3 ">
        <div className="container px-8 lg:px-10  bggreen-400  mx-auto flex justify-between items-center">
          <Logo height={120} width={120} />
          <NavBar />
        </div>
      </header>
      <section className="container pb-20 mx-auto lg:px-12 pt-10 ">
        <div className="lg:hidden mb-12 px-10">
          <div
            onClick={goBack}
            data-aos="fade-left"
            // data-aos-delay="500"
            className="cursor-pointer"
          >
            <Image
              src={backBtn}
              width={700}
              height={700}
              alt="Judges"
              // onClick={handleImageClick}
              className=" object-center w-6 object-contain "
            />
          </div>
        </div>
        <div className="lg:flex">
          <div className="w-1/2 bg-reen-400 px-10 hidden lg:block ">
            <div className="flex justify-center space-y-4 items-start flex-col h-full">
              <div>
                <h3 className="clash text-purple text-[32px] font-semibold">
                  Get in touch
                </h3>
              </div>
              <div>
                <p className=" text-base">
                  Contact <br /> Information
                </p>
              </div>
              <div>
                <p className=" text-base">
                  27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                </p>
              </div>
              <div>
                <p className=" text-base">
                  Call Us : <Link href="tel:07067981819">07067981819</Link>
                </p>
              </div>
              <div>
                <p className=" text-base">
                  we are open from Monday-Friday <br /> 08:00am - 05:00pm
                </p>
              </div>

              <div className="items-start flex-col mt-12 lg:flex hidden">
                <div className="text-purple text-base">Share on</div>
                <div className=" text-purple flex mt-1 space-x-3 items-center">
                  <Link href="#">
                    <div
                      data-aos="zoom-in"
                      // data-aos-delay="500"
                      className=""
                    >
                      <Image
                        src={insta}
                        width={700}
                        height={700}
                        alt="Judges"
                        // onClick={handleImageClick}
                        className=" object-center w-[22px] object-contain "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div
                      data-aos="zoom-in"
                      // data-aos-delay="500"
                      className=""
                    >
                      <Image
                        src={x}
                        width={700}
                        height={700}
                        alt="Judges"
                        // onClick={handleImageClick}
                        className=" object-center w-[17px] object-contain "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div
                      data-aos="zoom-in"
                      // data-aos-delay="500"
                      className=""
                    >
                      <Image
                        src={fb}
                        width={700}
                        height={700}
                        alt="Judges"
                        // onClick={handleImageClick}
                        className=" object-center w-[10px] object-contain "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div data-aos="zoom-in" className="">
                      <Image
                        src={linkedIn}
                        width={700}
                        height={700}
                        alt="Judges"
                        // onClick={handleImageClick}
                        className=" object-center w-[22px] object-contain "
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="bg-red-00 lg:mt-20 lg:max-h-[611px] lg:w-[617px] lg:py-20 px-10 lg:px-20 form-bg  ">
            <div className="bg-reen-300  mx-auto ">
              <h3 className="clash font-semibold text-xl text-purple w-2/3 lg:w-full lg:text-xl">
                Questions or need assistance? <br /> Let us know about it
              </h3>
              <p className=" text-xs lg:hidden mt-6 w-2/3">
                Email us below to any question related to our event
              </p>
              <div className="mt-10 lg:mt-5">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-8">
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      name="name"
                      className={getInputClassNames("name")}
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-red-600 text-xs">
                        {formik.errors.name}
                      </div>
                    )}
                  </div>
                  <div className="mb-8">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      className={getInputClassNames("email")}
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-600 text-xs">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="mb-8">
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Message"
                      className={getInputClassNames("message")}
                      {...formik.getFieldProps("message")}
                    />
                    {formik.touched.message && formik.errors.message && (
                      <div className="text-red-600 text-xs">
                        {formik.errors.message}
                      </div>
                    )}
                  </div>
                  <div
                    // data-aos="flip-down"
                    data-aos-delay="100"
                    className="flex justify-center mt-6  bg-gren-300  place-self-center"
                  >
                    <button type="submit" className="btn primary-bg text-base">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex items-center flex-col mt-12 lg:hidden">
                <div className="text-purple">Share on</div>
                <div className=" text-purple flex mt-1 space-x-3 items-center">
                  <Link href="#">
                    <div
                      data-aos="zoom-in"
                      // data-aos-delay="500"
                      className=""
                    >
                      <Image
                        src={insta}
                        width={700}
                        height={700}
                        alt="Judges"
                        // onClick={handleImageClick}
                        className=" object-center w-[22px] object-contain "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div
                      data-aos="zoom-in"
                      // data-aos-delay="500"
                      className=""
                    >
                      <Image
                        src={x}
                        width={700}
                        height={700}
                        alt="Judges"
                        // onClick={handleImageClick}
                        className=" object-center w-[17px] object-contain "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div
                      data-aos="zoom-in"
                      // data-aos-delay="500"
                      className=""
                    >
                      <Image
                        src={fb}
                        width={700}
                        height={700}
                        alt="Judges"
                        // onClick={handleImageClick}
                        className=" object-center w-[10px] object-contain "
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div data-aos="zoom-in" className="">
                      <Image
                        src={linkedIn}
                        width={700}
                        height={700}
                        alt="Judges"
                        // onClick={handleImageClick}
                        className=" object-center w-[22px] object-contain "
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FormLayout>
  );
}
