import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim() || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setMessage("If this email exists, a reset instruction has been sent.");

      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 1800);
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-10">
              <span className="text-4xl font-bold text-green-600">
                LUNAR SMS
              </span>
            </div>

            <a href="#" className="text-sm text-green-600 hover:underline">
              Create account
            </a>

            <div className="mt-10 mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2m4 0c0 1.1.9 2 2 2s2-.9 2-2m-4 0v6m4-6v6m-6 4H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-2"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-gray-900">
              Forgot Password?
            </h1>
            <p className="mt-3 text-gray-600">
              A reset instruction will be sent to you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Success / Error message */}
            {message && (
              <div
                className={`text-center text-sm ${message.includes("sent") ? "text-green-600" : "text-red-600"}`}
              >
                {message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-medium rounded-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {isLoading ? "Sending..." : "Reset Password"}
              </button>
            </div>
          </form>

          <div className="text-center text-sm space-y-3">
            <p>
              <a
                href="/login"
                className="text-green-600 hover:underline inline-flex items-center"
              >
                ← Back to login
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50 p-8">
        <div className="w-full h-full max-h-150 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/forgot_password_img.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
