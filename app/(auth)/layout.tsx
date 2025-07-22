import Logo from "../components/UI/Logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
   <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className=" bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 h-full">
          <Logo />
          <div className="flex justify-center items-center h-full">
            {children}
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/images/undraw_designer_life.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}