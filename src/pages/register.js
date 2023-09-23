import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import backBtn from "public/icons/back_btn.svg";
import Image from "next/image";
import FormLayout from "@/layout/formLayout";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { register_validate } from "../../lib/validate";
import register from "public/images/regiser_ill.svg";
import movement from "public/images/movement.svg";
import axios from "axios";
import whiteStar from "public/white_star.svg";
import purpleStar from "public/primaryStar.svg";
import grayStar from "public/gray_star.svg";
import blueStar from "public/blue_star.svg";
import Glow from "@/components/Glow";
import Star from "@/components/Star";
import Spinner from "@/components/Spinner";
import SuccessMessage from "@/components/SuccessMessage";

export default function Contact() {
  const router = useRouter();
  const [isFormValid, setIsFormValid] = useState(false);
  const [pending, setPending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const maxGroupSize = 10;
  const goBack = () => {
    router.back();
  };

  const formik = useFormik({
    initialValues: {
      teamName: "",
      phone: "",
      topic: "",
      email: "",
      category: "",
      size: "",
      agreement: "",
    },
    validate: register_validate,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values) {
    setPending(true);
    try {
      const size = +values.size;
      const { teamName, phone, topic, email, category, agreement } = values;
      const response = await axios.post(
        " https://backend.getlinked.ai/hackathon/registration",
        {
          team_name: teamName,
          phone_number: phone,
          project_topic: topic,
          email,
          category,
          group_size: size,
          privacy_poclicy_accepted: agreement,
        }
      );
      if (response.data) {
        setPending(false);
        setShowSuccess(true)
        // console.log(response);
      }
    } catch (error) {
      setPending(false);
      // console.log(error);
    }
  }

  //   "email":"sample@eexample.com",
  //     "phone_number":"0903322445533",
  //     "team_name": "Space Explore",
  //     "group_size": 10,
  //     "project_topic":"Web server propagation",
  //     "category": 1,
  //     "privacy_poclicy_accepted": true

  useEffect(() => {
    async function getCategory() {
      const response = await fetch(
        " https://backend.getlinked.ai/hackathon/categories-list"
      );
      const res = await response.json();
      //   console.log(res);
      setCategories(res);
    }
    getCategory();
  });

  //   console.log(categories);

  const renderCategories = () => {
    return categories?.map((c) => (
      <option key={c?.id} value={c?.id}>
        {c?.name}
      </option>
    ));
  };

  const renderSize = () => {
    const options = [];
    for (let i = 0; i <= maxGroupSize; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

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
          <NavBar regPage={true} />
        </div>
      </header>
      <div>
        <section className="container pb-20 px-5 mx-auto lg:px-12 pt-10  overflow-hidden">
          <div className="lg:hidden">
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="text-purple text-base font-bold px-10"
            >
              Register
            </div>
          </div>
          <div className="lg:flex">
            <div className="bg-blue-40 lg:w-1/2 items-center  flex justify-center ">
              <div data-aos="zoom-in" className="w-3/5 lg:w-full">
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

            <div className="bg-red-00    lg:py-10 px-4 lg:px-12 form-bg  ">
              <div className="bg-reen-300  mx-auto ">
                <div className="hidden lg:block">
                  <div
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="text-purple text-[32px] font-bold "
                  >
                    Register
                  </div>
                </div>
                <div className="flex items-end lg:justify-start justify-center space-x-3">
                  <p className=" text-xs whitespace-nowrap">
                    Be part of this movement!
                  </p>
                  <div data-aos="fade-left" className="w-20 pb-1">
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
                      <label htmlFor="teamName">Team&apos;s Name</label>
                      <input
                        type="text"
                        placeholder="Enter the name of your group"
                        id="teamName"
                        name="teamName"
                        className={`${getInputClassNames(
                          "teamName"
                        )} reg-input`}
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
                          {renderCategories()}
                        </select>
                        {formik.touched.category && formik.errors.category && (
                          <div className="text-red-500 text-xs">
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
                          {renderSize()}
                        </select>
                        {formik.touched.category && formik.errors.category && (
                          <div className="text-red-500 text-xs">
                            {formik.errors.category}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="lg:row-start-4 lg:col-span-full">
                      <p className="text-pink text-[9px] italic text-center lg:text-start">
                        Please review your registration details before
                        submitting
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
                          I agreed with the event terms and conditions and
                          privacy policy
                        </label>
                        {formik.touched.agreement &&
                          formik.errors.agreement && (
                            <div className="text-red-500 text-xs">
                              {formik.errors.agreement}
                            </div>
                          )}
                      </div>
                    </div>
                    <div
                      // data-aos="flip-down"
                      data-aos-delay="100"
                      className="flex justify-center mt-3 w-full bg-gren-300  place-self-center  lg:row-start-6 lg:col-span-full"
                    >
                      <button
                        type="submit"
                        className="btn lg:w-full primary-bg text-base flex justify-center"
                      >
                        {pending ? <Spinner /> : "Register Now"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* stars */}
          <div className="absolute right-10 bottom-[19%] w-2.5 lg:bottom-[10%] lg:right-[54%] lg:w-4">
            <Star s={blueStar} h={32} w={26} />
          </div>
          <div className="absolute right-[10%] top-[103%] w-2.5 hidden lg:block ">
            <Star s={whiteStar} h={32} w={26} />
          </div>
          <div className="absolute right-20 top-[22%] w-3 lg:top-[30%] lg:left-[12%] lg:w-5">
            <Star s={purpleStar} h={32} w={26} />
          </div>
          <div className="absolute left-4 top-[43.5%] w-3 lg:top-[25%] lg:left-[80%] lg:w-4">
            <Star s={grayStar} h={32} w={26} />
          </div>
          <div className="absolute left-36 bottom-10 hidden lg:block w-4 ">
            <Star s={grayStar} h={32} w={26} />
          </div>
        </section>

        {/* glows */}
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute top-[12%] -left-[8%]  -z-10 lg:bottom-60 lg:-left-16">
          <Glow />
        </div>
        <div className=" mix-blend-hard-light bg-blend-hard-light hidden lg:block absolute top-[60%] -right-40  -z-10 ">
          <Glow />
        </div>
      </div>
      {showSuccess && <SuccessMessage />}
    </FormLayout>
  );
}
