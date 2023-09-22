import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import backBtn from "public/icons/back_btn.svg";
import Image from "next/image";
import FormLayout from "@/layout/formLayout";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { contact_validate } from "../../lib/validate";
import register from "public/images/regiser_ill.svg";
import movement from "public/images/movement.svg";

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
    <FormLayout title="Register" className="min-h-screen ">
      <header className="hidden lg:flex lg:items-end bg-red-40  h-[8vh] lg:h-[12vh] lg:py-3 ">
        <div className="container px-8 lg:px-10  bggreen-400  mx-auto flex justify-between items-center">
          <Logo height={120} width={120} />
          <NavBar />
        </div>
      </header>
      <section className="container pb-20 px-5 mx-auto lg:px-12 pt-10  ">
        <div className="lg:hidden">
          <div
            // data-aos="fade-left"
            // data-aos-delay="500"
            className="text-purple text-base font-bold px-10"
          >
            Register
          </div>
        </div>
        <div className="lg:flex">
          <div className="bg-blue-40 lg:w-1/2 items-center  flex justify-center ">
            <div
              // data-aos="zoom-in"
              className="w-3/5 lg:w-full"
            >
              <Image
                src={register}
                width={700}
                height={700}
                alt="Judges"
                // onClick={handleImageClick}
                className=" object-center w-full object-contain "
              />
            </div>
          </div>

          {/* Form */}

          <div className="bg-red-00 lg:mt0  lg:w-[617px] lg:py-10 px-10 lg:px-12 form-bg  ">
            <div className="bg-reen-300  mx-auto ">
              <div className="hidden lg:block">
                <div
                  // data-aos="fade-left"
                  // data-aos-delay="500"
                  className="text-purple text-[32px] font-bold "
                >
                  Register
                </div>
              </div>
              <div className="flex items-end lg:justify-start justify-center space-x-3">
                <p className=" text-xs">Be part of this movement!</p>
                <div
                  // data-aos="zoom-in"
                  className="w-20 pb-1"
                >
                  <Image
                    src={movement}
                    width={700}
                    height={700}
                    alt="Judges"
                    // onClick={handleImageClick}
                    className=" object-center w-full object-contain "
                  />
                </div>
              </div>
              <div className="mt-1">
                <h3 className="text-center lg:text-start text-xl">
                  CREATE YOUR ACCOUNT
                </h3>
              </div>
              <div className="mt-5 lg:mt-5">
                <form
                  onSubmit={formik.handleSubmit}
                  className="lg:grid grid-cols-2 gap-x-5"
                >
                  <div className="mb-3">
                    <label htmlFor="teamName">Team's Name</label>
                    <input
                      type="text"
                      placeholder="Enter the name of your group"
                      id="teamName"
                      name="teamName"
                      className={`${getInputClassNames("teamName")} reg-input`}
                      {...formik.getFieldProps("teamName")}
                    />
                    {formik.touched.teamName && formik.errors.teamName && (
                      <div className="text-red-600 text-xs">
                        {formik.errors.teamName}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      id="phone"
                      name="phone"
                      className={`${getInputClassNames("phone")} reg-input`}
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className="text-red-600 text-xs">
                        {formik.errors.phone}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="tel"
                      placeholder="Enter your email address"
                      id="email"
                      name="email"
                      className={`${getInputClassNames("email")} reg-input`}
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-600 text-xs">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className="mb-3 ">
                    <label htmlFor="topic">Project</label>
                    <input
                      type="tel"
                      placeholder="Enter your group project topic"
                      id="topic"
                      name="topic"
                      className={`${getInputClassNames("topic")} reg-input`}
                      {...formik.getFieldProps("topic")}
                    />
                    {formik.touched.topic && formik.errors.topic && (
                      <div className="text-red-600 text-xs">
                        {formik.errors.topic}
                      </div>
                    )}
                  </div>
                  <div className="flex space-x-5 lg:col-span-full">
                    <div className="mb-6 w-2/3 lg:w-1/2 ">
                      <label className="" htmlFor="category">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        placeholder="Select your category"
                        className={`${getInputClassNames("category")} px-2`}
                        {...formik.getFieldProps("category")}
                      >
                        <option
                          value="Select your category"
                          className="text-xs"
                        >
                          Select your category
                        </option>
                        <option value="Development">Development</option>
                        <option value="Design">Design</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="others">Others</option>
                      </select>
                      {formik.touched.category && formik.errors.category && (
                        <div className="text-error text-sm">
                          {formik.errors.category}
                        </div>
                      )}
                    </div>
                    <div className="mb-6 w-2/5 lg:w-1/2">
                      <label className="" htmlFor="size">
                        Group Size
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={formik.values.size}
                        onChange={formik.handleChange}
                        placeholder="Select"
                        className={`${getInputClassNames("size")} px-4`}
                        {...formik.getFieldProps("size")}
                      >
                        <option value="Select ">Select</option>
                        <option value="1 - 5">1 - 5</option>
                        <option value="6 - 10">6 - 10</option>
                        <option value="10 - 20">10 - 20</option>
                        <option value="20 - 50">20 - 50</option>
                      </select>
                      {formik.touched.category && formik.errors.category && (
                        <div className="text-error text-sm">
                          {formik.errors.category}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:row-start-4 lg:col-span-full">
                    <p className="text-pink text-[9px] italic text-center lg:text-start">
                      Please review your registration details before submitting
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-start mx-1 mt-2 lg:row-start-5 lg:col-span-full ">
                    <div>
                      <input
                        name="checkbox"
                        id="checkbox"
                        type="checkbox"
                        className={`h-[14px] w-[14px] bg-darkBlue rounded-md ${getInputClassNames(
                          "agreement"
                        )}`}
                        {...formik.getFieldProps("agreement")}
                      />
                    </div>
                    <div className="text-sm  ml-2 text-primaryColor">
                      <label
                        htmlFor="checkbox"
                        className="text-[10px] block leading-3  "
                      >
                        I agreed with the event terms and conditions and privacy
                        policy
                      </label>
                    </div>
                  </div>
                  {formik.touched.agreement && formik.errors.agreement && (
                    <div className="text-error text-sm">
                      {formik.errors.agreement}
                    </div>
                  )}
                  <div
                    // data-aos="flip-down"
                    data-aos-delay="100"
                    className="flex justify-center mt-3 w-full bg-gren-300  place-self-center  lg:row-start-6 lg:col-span-full"
                  >
                    <button
                      type="submit"
                      className="btn w-full primary-bg text-base"
                    >
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FormLayout>
  );
}
