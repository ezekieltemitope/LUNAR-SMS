import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Panel */}
        <div className="p-10 flex flex-col justify-center">
          <p className="text-green-600 font-semibold text-center mb-2 tracking-wide">
            LUNAR SMS
          </p>

          <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
            YOUR CLASSROOM, JUST
            <br />
            ONE LOGIN AWAY
          </h1>

          {/* Role Selector */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { label: "Admin" },
              { label: "Student", active: true },
              { label: "Teacher" },
            ].map((role, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div
                  className={`w-12 h-12 rounded-full border flex items-center justify-center text-sm font-medium ${
                    role.active
                      ? "bg-green-600 text-white border-green-600"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {role.label[0]}
                </div>

                <span
                  className={`text-sm ${
                    role.active ? "text-green-600 font-medium" : "text-gray-500"
                  }`}
                >
                  {role.label}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address/Username
              </label>
              <input
                type="text"
                placeholder="Ation26@yahoo.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  placeholder="****************"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-20 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500"
                >
                  Show
                </button>
              </div>

              {/* ✅ UPDATED PART */}
              <div className="text-right mt-1">
                <Link
                  to="/forgot-password"
                  className="text-xs text-red-500 hover:underline"
                >
                  Forgot password
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Panel Image */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 p-8">
          <div className="w-full h-full max-h-130 rounded-2xl overflow-hidden shadow-md">
            <img
              src="/login-image.png"
              alt="Students using laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
