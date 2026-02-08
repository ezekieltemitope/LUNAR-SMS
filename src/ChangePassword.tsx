import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Password changed:", newPassword);

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* LEFT SECTION */}
      <div className="flex-1 flex flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-green-600">LUNAR SMS</h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <Link
            to="/signup"
            className="text-sm text-green-600 hover:underline mb-8"
          >
            Create account
          </Link>

          {/* Icon */}
          <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center mb-6 bg-white">
            <span className="text-2xl">🔐</span>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-1">
            Password Reset
          </h2>

          <p className="text-gray-500 text-sm mb-8 text-center">
            We sent a code to Edmund23@gmail.com
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
            {/* New Password */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                New Password
              </label>

              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-12 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showNew ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-12 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirm ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Reset Password
            </button>
          </form>

          <Link
            to="/login"
            className="flex items-center gap-2 text-sm text-gray-600 mt-6 hover:text-green-600"
          >
            ← Back to login
          </Link>

          {/* Progress bar */}
          <div className="flex gap-3 mt-10">
            <span className="w-10 h-1 bg-gray-300 rounded-full"></span>
            <span className="w-10 h-1 bg-gray-300 rounded-full"></span>
            <span className="w-10 h-1 bg-green-600 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 p-8">
        <div className="w-[65%] max-w-md rounded-2xl overflow-hidden shadow-md">
          <img
            src="/forgot_password_img.png"
            alt="Change password illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
