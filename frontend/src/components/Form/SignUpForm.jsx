import { FormInput, TermsOfService } from "../../components";

const SignUpForm = ({
  formData,
  handleInputChange,
  handleWarningOnFocus,
  handleWarningOnBlur,
  errors,
  warnings,
}) => {
  const { name, email, password } = formData;
  console.log("Here is the formData", formData);

  return (
    <form>
      <div className="mx-auto max-w-xs">
        <FormInput
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onFocus={handleWarningOnFocus}
          onBlur={handleWarningOnBlur}
          onChange={handleInputChange}
          errorMessage={errors.name?.length > 0 ? errors.name[0] : null}
          warnings={warnings.name}
        />

        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onFocus={handleWarningOnFocus}
          onBlur={handleWarningOnBlur}
          onChange={handleInputChange}
          errorMessage={errors.email?.length > 0 ? errors.email[0] : null}
          warnings={warnings.email}
        />

        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onFocus={handleWarningOnFocus}
          onBlur={handleWarningOnBlur}
          onChange={handleInputChange}
          errorMessage={errors.password?.length > 0 ? errors.password[0] : null}
          warnings={warnings.password}
        />

        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          <svg
            className="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></svg>
          <span className="ml-3">Sign Up</span>
        </button>

        <TermsOfService />
      </div>
    </form>
  );
};

export default SignUpForm;
