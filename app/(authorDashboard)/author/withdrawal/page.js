"use client";

import { useState, useEffect } from "react";
import { Plus, Wallet, Banknote } from "lucide-react"; // Added Banknote icon
import { api } from "@/utils/auth/authorApi";
import { getPaymentSummary } from "@/utils/payment";

// Define the shape of the banking details object for clarity
const emptyBankingDetails = {
  bank_name: "",
  bank_code: "",
  account_number: "",
  account_name: "",
  currency: "",
  verified_at: null,
};

export default function WalletPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentBankingDetails, setCurrentBankingDetails] =
    useState(emptyBankingDetails);
  const [loadingCurrentDetails, setLoadingCurrentDetails] = useState(true);

  const [banks, setBanks] = useState([]);
  const [balance, setBalance] = useState(0);

  /** FORM DATA */
  const [bankCode, setBankCode] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  /** VERIFICATION DATA */
  const [verifiedAccountName, setVerifiedAccountName] = useState("");
  const [verificationError, setVerificationError] = useState("");

  /** UX FLAGS */
  const [loadingBanks, setLoadingBanks] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  /* ── Initial Data Fetching on Component Load ────────────────── */
  useEffect(() => {
    // Function to fetch the user's current banking details
    const fetchCurrentBankingDetails = async () => {
      setLoadingCurrentDetails(true);
      try {
        const res = await api.get(
          "/author/banking_details",
        );

        setCurrentBankingDetails(res.data);
      } catch (err) {
    
      } finally {
        setLoadingCurrentDetails(false);
      }
    };

    // Function to fetch the user's balance summary
    const fetchBalance = async () => {
      try {
        const data = await getPaymentSummary();
        setBalance(data?.earnings_summary || 0);
      } catch (err) {
       
      }
    };

    fetchCurrentBankingDetails();
    fetchBalance();
  }, []); // Empty dependency array means this runs once on mount

  /* ── Fetch banks when modal is opened ───────────────────────── */
  useEffect(() => {
    if (!showModal) return;

    const fetchBanks = async () => {
      setLoadingBanks(true);
      setError("");
      try {
        const res = await api.get("/author/banking_details/banks");
        setBanks(res.data.banks || []);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Unable to load banks; please try again."
        );
      } finally {
        setLoadingBanks(false);
      }
    };

    fetchBanks();
  }, [showModal]);

  /* ── Handle bank details verification ─────────────────────────────── */
  useEffect(() => {
    const verifyBankDetails = async () => {
      // Only proceed if bankCode is selected and accountNumber is exactly 10 digits
      if (!bankCode || accountNumber.length !== 10) {
        setVerifiedAccountName("");
        setVerificationError("");
        return;
      }

      setVerifying(true);
      setVerificationError("");
      setVerifiedAccountName(""); // Clear previous verification

      try {
        const res = await api.post(
          "/author/banking_details/verify_account_preview",
          {
            bank_code: bankCode,
            account_number: accountNumber,
          },
          { "Content-Type": "application/json" }
        );

        if (res.data?.success) {
          setVerifiedAccountName(res.data.account_name);
          setAccountName(res.data.account_name);
        } else {
          setVerificationError(
            res.data?.message || "Account verification failed."
          );
        }
      } catch (err) {
        setVerificationError(
          err.response?.data?.message || "Network error during verification."
        );
      } finally {
        setVerifying(false);
      }
    };

    const timeoutId = setTimeout(verifyBankDetails, 700); // Debounce verification for 700ms
    return () => clearTimeout(timeoutId);
  }, [bankCode, accountNumber]); // Rerun when bankCode or accountNumber changes

  /* ── Handle form submit ───────────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setMessage("");

    // Prevent submission if verification is pending or failed
    if (verifying) {
      setError("Please wait for account verification to complete.");
      setSubmitting(false);
      return;
    }

    if (verificationError) {
      setError("Cannot save. Please correct the banking details.");
      setSubmitting(false);
      return;
    }

    if (
      verifiedAccountName &&
      verifiedAccountName.toLowerCase() !== accountName.toLowerCase()
    ) {
      setError(
        "Account name does not match verified name. Please ensure they are identical or accept the auto-filled name."
      );
      setSubmitting(false);
      return;
    }

    try {
      const selectedBank = banks.find((b) => b.code === bankCode);

      const res = await api.put(
        "/author/banking_details",
        {
          banking_detail: {
            bank_code: bankCode,
            bank_name: selectedBank?.name || "",
            currency: selectedBank?.currency || "",
            account_number: accountNumber,
            account_name: accountName,
          },
        },
        { "Content-Type": "application/json" }
      );

      if (res.data?.success) {
        setMessage(res.data.message || "Banking details updated!");
        setShowModal(false);
        // On successful update, re-fetch the current details to refresh the UI
        setCurrentBankingDetails(res.data.banking_detail);
      } else {
       
        setError("Something went wrong.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Network error.");
    } finally {
      setSubmitting(false);
    }
  };

  // Helper function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return "Not Verified";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <main className="relative mt-12 flex min-h-screen flex-col items-center justify-start bg-white px-4 py-10">
      {/* Balance Card */}
      <div className="w-full max-w-md rounded-xl border-4 border-orange-600 bg-gradient-to-r from-orange-300 to-orange-500 p-6 text-black shadow-md">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-lg font-semibold">Available Balance</p>
          </div>
          <div className="flex flex-col relative">
            <p className="text-sm">Pending Balance</p>
            <p className="text-sm absolute right-0 top-8">
              ${balance.pending_earnings}
            </p>
          </div>
        </div>

        <p className="mb-8 text-4xl font-bold">${balance.approved_earnings}</p>

        <div className="flex items-center justify-between text-sm text-black/80 border-0 border-b-2 border-gray-600">
          <p>Total wallet balance</p>
          <p>${balance.total}</p>
        </div>
      </div>

      {/* Current Banking Details Card */}
      <div className="w-full max-w-md mt-10 rounded-xl bg-white shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Banknote className="h-6 w-6 text-orange-600" />
            Current Banking Details
          </h2>
          {currentBankingDetails.verified_at && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <svg
                className="-ml-1 mr-1.5 h-3 w-3 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Verified
            </span>
          )}
        </div>
        {loadingCurrentDetails ? (
          <div className="text-center text-gray-500 py-8">
            Loading details...
          </div>
        ) : currentBankingDetails.account_number ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded-lg col-span-2">
              <p className="text-sm font-medium text-gray-500">Account Name</p>
              <p className="mt-1 text-lg font-semibold">
                {currentBankingDetails.account_name}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">Bank Name</p>
              <p className="mt-1 text-lg font-semibold">
                {currentBankingDetails.bank_name}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-500">
                Account Number
              </p>
              <p className="mt-1 text-lg font-semibold tracking-wide">
                {currentBankingDetails.account_number}
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p>
              No banking details found. Please add your account information
              below.
            </p>
          </div>
        )}
      </div>

      {/* Add New Details Trigger */}
      <div
        className="mt-10 w-full max-w-md cursor-pointer rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-gray-400"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6">
          <Plus className="mb-2 h-6 w-6 text-red-600" />
          <p className="text-gray-600">Update Account Details</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="relative mx-2 w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-red-500"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Logo */}
            <div className="mb-6">
              <img src="/images/logo.png" alt="itan" className="h-6 w-12" />
            </div>

            <h2 className="mb-6 text-center text-xl font-bold">
              Update Banking Details
            </h2>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Bank Name */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Bank Name
                </label>
                {loadingBanks ? (
                  <p className="py-2 text-sm text-gray-500">Loading banks…</p>
                ) : (
                  <select
                    key={bankCode}
                    required
                    value={bankCode}
                    onChange={(e) => {
                      setBankCode(e.target.value);
                      setVerifiedAccountName("");
                      setVerificationError("");
                      setAccountName("");
                    }}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="" disabled>
                      Select Bank
                    </option>
                    {banks.map((b) => (
                      <option key={b.name} value={b.code}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Account Number */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Account Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Account Number (10 digits)"
                  value={accountNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setAccountNumber(value.slice(0, 10));
                    setVerifiedAccountName("");
                    setVerificationError("");
                  }}
                  maxLength={10}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {accountNumber.length > 0 && accountNumber.length < 10 && (
                  <p className="mt-1 text-sm text-gray-500">
                    Account number must be 10 digits.
                  </p>
                )}
                {verifying && (
                  <p className="mt-1 text-sm text-gray-500">
                    Verifying account...
                  </p>
                )}
                {verificationError && (
                  <p className="mt-1 text-sm text-red-600">
                    {verificationError}
                  </p>
                )}
                {verifiedAccountName && !verificationError && (
                  <p className="mt-1 text-sm text-green-600">
                    Verified Name:{" "}
                    <span className="font-semibold">{verifiedAccountName}</span>
                  </p>
                )}
              </div>

              {/* Account Name */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Account Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {verifiedAccountName &&
                  accountName &&
                  verifiedAccountName.toLowerCase() !==
                    accountName.toLowerCase() && (
                    <p className="mt-1 text-sm text-orange-600">
                      Warning: The entered name differs from the verified name.
                      Please correct it.
                    </p>
                  )}
              </div>

              {/* FEEDBACK */}
              {error && <p className="text-sm text-red-600">{error}</p>}
              {message && <p className="text-sm text-green-600">{message}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  submitting ||
                  verifying ||
                  verificationError ||
                  accountNumber.length !== 10 ||
                  !verifiedAccountName ||
                  (verifiedAccountName &&
                    accountName.toLowerCase() !==
                      verifiedAccountName.toLowerCase())
                }
                className={`mt-2 w-full rounded-md bg-red-600 py-3 font-semibold text-white hover:bg-red-700 ${
                  submitting ||
                  verifying ||
                  verificationError ||
                  accountNumber.length !== 10 ||
                  !verifiedAccountName ||
                  (verifiedAccountName &&
                    accountName.toLowerCase() !==
                      verifiedAccountName.toLowerCase())
                    ? "cursor-not-allowed opacity-60"
                    : ""
                }`}
              >
                {submitting
                  ? "Saving…"
                  : verifying
                    ? "Verifying..."
                    : "Add Details"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
