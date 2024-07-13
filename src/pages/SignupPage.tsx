import { Alert, Autocomplete, Button, LoadingOverlay, Select } from "@mantine/core";
import { Country } from "country-state-city";
import React, { useState } from "react";
import { PiCaretDown } from "react-icons/pi";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdError, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { registerSchema, RegisterSchemaType } from "../utils/schemas/schemas";
import SpecialHeader from "../components/common/SpecialHeader";
import toast, { Toaster } from 'react-hot-toast';
import { api } from "../api/axios";


const SignupPage: React.FC = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const [country, setCountry] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(""); // Initialize error state with empty string
  const [gender, setGender] = useState<string | null>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const countries: string[] = Country.getAllCountries().map((country) => country.name);

  const registerUser = async (data: RegisterSchemaType) => {
    delete data.confirmPassword;
    console.log(data)
    setIsLoading(true);
    try {
      const response = await api.post("/auth/register", data);
      console.log(response)
      toast.success(response?.data?.message || "Registration successful!");
      reset();
      setCountry("");
      setGender("");
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Registration failed. Please try again.";
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const submitData: SubmitHandler<RegisterSchemaType> = (data, e) => {
    e?.preventDefault();
    setError("");
    registerUser(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <main className="flex flex-col gap-10">
      <Toaster />
      <SpecialHeader />
      <div className="flex flex-col gap-6 lg:mt-6 relative justify-center items-center w-full custom-font-jakarta">
        <LoadingOverlay
          visible={isLoading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <div className="w-full max-w-screen-md">
          <header className="text-center">
            <h1 className="font-bold text-2xl mb-2 text-[#2a3547]">Create an Account</h1>
            <p className="text-sm font-medium text-[#2a3547]">Sign up with your email and get started.</p>
          </header>
          <div className="relative flex items-center justify-center my-6">
            <div className="border-[0.2px] border-[#dfe5efaf] w-full absolute top-1/2 transform -translate-y-1/2"></div>
            <p className="bg-white px-3 text-dark z-10 relative">Registration</p>
          </div>
          {error && (
            <Alert
              variant="light"
              color="red"
              title="Error"
              icon={<MdError />}
              withCloseButton
              styles={{ label: { fontSize: "16px" }, body: { gap: ".25rem" } }}
              className="mb-4"
            >
              {error}
            </Alert>
          )}
          <form action="" onSubmit={handleSubmit(submitData)} className="px-[15px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg py-2 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.firstName &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="First Name"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.firstName.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg py-2 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.lastName &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="Last Name"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.lastName.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 lg:col-span-2">
                <input
                  type="email"
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg py-2 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.email &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="Email address"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.email.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Autocomplete
                  value={country}
                  onChange={(country) => {
                    setCountry(country);
                    setValue("country", country);
                  }}
                  size="md"
                  placeholder="Select Country"
                  data={countries}
                  rightSectionPointerEvents="none"
                  rightSection={<PiCaretDown />}
                  comboboxProps={{
                    position: "bottom",
                    middlewares: { flip: false, shift: false },
                    shadow: "md",
                  }}
                  styles={{
                    input: {
                      '::placeholder': {
                        color: '#5a6a85',
                      },
                      cursor: 'pointer',
                      border: '0.5px solid #dfe5ef',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      fontSize: '14px',
                      ':focus': {
                        borderColor: '#0912ff',
                        boxShadow: '0 0 0 1px #0912ff',
                      },
                    },
                  }}
                />
                {errors.country && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.country.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg py-2 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.phoneNumber &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="Phone Number"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.phoneNumber.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Select
                  size="md"
                  placeholder="Gender"
                  value={gender}
                  onChange={(gender) => {
                    setGender(gender);
                    setValue("gender", gender);
                  }}
                  data={["male", "female", "other"]}
                  rightSectionPointerEvents="none"
                  rightSection={<PiCaretDown />}
                  styles={{
                    input: {
                      '::placeholder': {
                        color: '#5a6a85',
                      },
                      cursor: 'pointer',
                      border: '0.5px solid #dfe5ef',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      fontSize: '14px',
                      ':focus': {
                        borderColor: '#0912ff',
                        boxShadow: '0 0 0 1px #0912ff',
                      },
                    },
                  }}
                />
                {errors.gender && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.gender.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg py-2 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.address &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="Address"
                  {...register("address")}
                />
                {errors.address && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.address.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg py-2 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.password &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="Password"
                  {...register("password")}
                />
                <div
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </div>
                {errors.password && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.password.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg py-2 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.confirmPassword &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                <div
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </div>
                {errors.confirmPassword && (
                  <div className="text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.confirmPassword.message}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-10 mb-5">
              <Button type="submit" w='100%' color='#5d87ff' size="md" loading={isLoading}>Sign Up</Button>
            </div>
          </form>
          <div className="gap-2 mt-4 mb-5 px-[15px]">
            <p className="text-sm text-[#2a3547]">
              Already have an account? <a href="/auth/login" className="text-[#306ee8]"> Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;

