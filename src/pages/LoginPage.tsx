import { Alert, Button, Checkbox, LoadingOverlay } from "@mantine/core";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdAlternateEmail, MdError, MdOutlineLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "../utils/schemas/schemas";
import SpecialHeader from "../components/common/SpecialHeader";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { api } from "../api/axios";
import { UserContext } from "../hooks/userContext";

const LoginPage = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(""); // Initialize error state with empty string
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginUser = async (data: LoginSchemaType) => {
    setIsLoading(true);
    try {
      const response = await api.post("/auth/login", data);
      login(response?.data);
      toast.success(response?.data?.message || "Login successful!");
      reset();
      response?.data?.user?.isAdmin == true ? navigate("/admin-dashboard", { replace: true })  : navigate("/dashboard", { replace: true });
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const submitData: SubmitHandler<LoginSchemaType> = (data, e) => {
    e?.preventDefault();
    setError("");
    loginUser(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="flex flex-col gap-6">
      <Toaster/>
      <SpecialHeader />
      <div className="flex flex-col gap-6 lg:mt-6 relative justify-center items-center w-full custom-font-jakarta">
        <LoadingOverlay
          visible={isLoading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <div className="w-full max-w-screen-md">
          <header className="text-center">
            <h1 className="font-bold text-2xl mb-2 text-[#2a3547]">Login into Account</h1>
            <p className="text-sm font-medium text-[#2a3547]">Sign in using your email and password.</p>
          </header>
          <div className="relative flex items-center justify-center my-6">
            <div className="border-[0.2px] border-[#dfe5efaf] w-full absolute top-1/2 transform -translate-y-1/2"></div>
            <p className="bg-white px-3 text-dark z-10 relative">Login</p>
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
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-1 relative">
                <input
                  type="email"
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg pl-10 py-3 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.email &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="Email address"
                  {...register("email")}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                  <MdAlternateEmail className="text-[#5d87ff]" />
                  <span className="ml-2 h-4 border-l border-gray-300"></span>
                </div>
                {errors.email && (
                  <div className="error-message absolute top-full left-3 mt-1 text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.email.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1 relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`border-[0.5px] border-[#dfe5ef] rounded-lg pl-10 py-2 px-3 
                    placeholder:text-[#5a6a85] placeholder:text-[14px] text-[14px] focus:outline-none focus:border-[0.5px] 
                    focus:border-[#0912ff] focus:shadow-active-input ${errors.password &&
                    `focus:border-error-color focus:shadow-error-input`
                    }`}
                  placeholder="Password"
                  {...register("password")}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                  <MdOutlineLock className="text-[#5d87ff]" />
                  <span className="ml-2 h-4 border-l border-gray-300"></span>
                </div>
                <div
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </div>
                {errors.password && (
                  <div className="error-message absolute top-full left-3 mt-1 text-[#E30101] text-xs flex items-center gap-1">
                    <MdError /> {errors.password.message}
                  </div>
                )}
              </div>

            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-2 mt-8 mb-5">
              <span className="flex text-sm"><Checkbox mr={10} defaultChecked /> Remember Me</span>
              <Link to='/auth/login' className="text-sm text-[#5d87ff]">Forgot Password ?</Link>
            </div>
            <div className="flex justify-center gap-2 mt-10 mb-5">
              <Button type="submit" w="100%" color='#5d87ff' size="md">
                Log In
              </Button>
            </div>
          </form>
          <div className="gap-2 mt-4 mb-5 px-[15px]">
            <p className="text-sm text-[#2a3547]">
              Don't have an account? <Link to="/auth/register" className="text-[#306ee8]">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
