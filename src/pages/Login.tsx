import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../redux/hooks/useTypeSelector";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { loggin } from "../redux/reducer/authSlices";
import { clearMessage } from "../redux/reducer/messages";
export default function LoginPage() {
    const [successful, setSuccessful] = useState(false);
  const { message } = useAppSelector((state) => state.message);
  const { user } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  useEffect(() => {
    if (user) navigate('/')

  }, []);
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
    type intialStateType = {
        email: string;
        password: string;
    }

    const initialValues: intialStateType = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string().required("Password is required"),
    });
    const handleLogin = (formValue: intialStateType) => {
        setSuccessful(false);
    
        dispatch(loggin(formValue))
          .unwrap()
          .then(() => {
            setSuccessful(true);
            setTimeout(() => {
              navigate(from, { replace: true });
            }, 1000);
          })
          .catch((err) => {
            console.log(err)
            setSuccessful(false);
            <Navigate to="/login" state={{ from: location }} replace />;
          });
      };
    return (
        <>
            <div
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                        <p className="mt-2 text-gray-500">Sign in below to access your account</p>
                    </div>
                    <div className="mt-5">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            <Form placeholder={undefined}>
                                <div className="relative mt-6">
                                    <Field type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                                    <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                </div>
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="alert wrap-msg"
                                />
                                <div className="relative mt-6">
                                    <Field type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                    <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                </div>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert wrap-msg"
                                />
                                <div className="my-6">
                                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                                </div>
                                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                                    <a href="/register"
                                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                                        up
                                    </a>
                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}