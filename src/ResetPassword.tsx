import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

type CodeArray = [string, string, string, string, string];

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const emailFromState = (location.state as { email?: string })?.email;
  const email = emailFromState || "Edmund23@gmail.com";

  const [code, setCode] = useState<CodeArray>(["", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (value && !/^\d$/.test(value)) return; // only digits

    const newCode = [...code] as CodeArray;
    newCode[index] = value;
    setCode(newCode);

    // Auto move to next input
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim();

    if (!/^\d{1,5}$/.test(pasted)) return;

    const digits = pasted.split("").slice(0, 5);
    const newCode = [...code] as CodeArray;

    digits.forEach((digit, i) => {
      if (index + i < 5) {
        newCode[index + i] = digit;
      }
    });

    setCode(newCode);

    // Focus the last filled or the last input
    const nextFocus = Math.min(index + digits.length, 4);
    inputRefs.current[nextFocus]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");

    if (fullCode.length !== 5) {
      alert("Please enter a complete 5-digit code");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Code verified successfully!");
      navigate("/set-new-password");
    }, 1400);
  };

  const handleResend = () => {
    alert("A new code has been sent to your email.");
    setCode(["", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-10">
              <span className="text-4xl font-bold text-green-600">
                LUNAR SMS
              </span>
            </div>

            <a href="#" className="text-sm text-green-600 hover:underline">
              Create account
            </a>

            <div className="mt-8 mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-4xl">✉️</span>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-gray-900">
              Password Reset
            </h1>
            <p className="mt-3 text-gray-600">
              We sent a code to{" "}
              <span className="font-medium text-gray-900">{email}</span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Code inputs */}
            <div className="flex justify-center gap-3 sm:gap-4">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={(e) => handlePaste(e, index)}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  className="w-14 h-14 text-center text-2xl font-semibold border border-gray-300 rounded-lg bg-white text-gray-900 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                />
              ))}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || code.join("").length !== 5}
              className="w-full py-3.5 px-4 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-medium rounded-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {isSubmitting ? "Verifying..." : "Continue"}
            </button>
          </form>

          {/* Resend & Back */}
          <div className="text-center space-y-4 text-sm">
            <p className="text-gray-600">
              Didn't receive the email?{" "}
              <button
                type="button"
                onClick={handleResend}
                className="text-green-600 hover:underline font-medium"
              >
                Click to resend
              </button>
            </p>

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

      {/* Right - Illustration */}
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
