"use client";

import { useState, useEffect } from "react";
import { api } from "@/utils/auth/authorApi";
import { useRouter } from "next/navigation";

export default function WalletPage() {
  const [banks, setBanks] = useState([]);
  const [bankCode, setBankCode] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [verifiedAccountName, setVerifiedAccountName] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const [loadingBanks, setLoadingBanks] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchBanks = async () => {
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
  }, []);

  useEffect(() => {
    const verifyBankDetails = async () => {
      if (!bankCode || accountNumber.length !== 10) {
        setVerifiedAccountName("");
        setVerificationError("");
        return;
      }

      setVerifying(true);
      setVerificationError("");
      setVerifiedAccountName("");

      try {
        const res = await api.post(
          // "/author/banking_details/verify",
          "/author/banking_details/verify_account_preview",
          {
            bank_code: bankCode,
            account_number: accountNumber,
          },
          { "Content-Type": "application/json" }
        );
        console.log("bank verification: ", res?.data);
        if (res.data?.success) {
          setVerifiedAccountName(res.data.account_name);
          setAccountName(res.data.account_name);
          setMessage("Account Name verified successfully!");
        } else {
          setVerificationError(
            res.data?.message || "Account verification failed."
          );
          setMessage("");
        }
      } catch (err) {
        setVerificationError(
          err.response?.data?.message || "Network error during verification."
        );
        setMessage("");
      } finally {
        setVerifying(false);
      }
    };

    const timeoutId = setTimeout(verifyBankDetails, 700);
    return () => clearTimeout(timeoutId);
  }, [bankCode, accountNumber]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setMessage("");

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
      !verifiedAccountName ||
      verifiedAccountName.toLowerCase() !== accountName.toLowerCase()
    ) {
      setError("Account name does not match verified name.");
      setSubmitting(false);
      return;
    }

    try {
      // Find the selected bank object by bankCode
      const selectedBank = banks.find((b) => b.code === bankCode);

      const res = await api.put(
        "/author/banking_details",
        {
          banking_detail: {
            bank_code: bankCode,
            bank_name: selectedBank?.name || "",
            // currency: selectedBank?.currency || "",
            account_number: accountNumber,
            account_name: accountName,
          },
        },
        { "Content-Type": "application/json" }
      );

      if (res.data?.success) {
        setMessage(res.data.message || "Banking details saved successfully!");
        await api.patch("/authors/kyc/update-step", {
          author: { kyc_step: 2 },
        });

        const { data: author } = await api.get("/authors/profile");
        console.log("Author Info after update: ", author.data);

        // Redirect after short delay
        setTimeout(() => {
          router.push(
            `/author/${author.data?.id}/kyc/step-${author.data?.kyc_step + 1}`
          );
        }, 300);
      } else {
        setError(
          res.data?.message || "Something went wrong during final save."
        );
      }
    } catch (err) {
      setError(err.response?.data?.message || "Network error during save.");
      setMessage("");
    } finally {
      setSubmitting(false);
    }
  };

  const disableSubmit =
    submitting ||
    verifying ||
    !!verificationError ||
    accountNumber.length !== 10 ||
    !verifiedAccountName ||
    verifiedAccountName.toLowerCase() !== accountName.toLowerCase();

  return (
    <main className="relative mt-12 flex min-h-screen flex-col items-center justify-start bg-white px-4 py-10">
      {loadingBanks ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />
          <p className="mt-3 text-sm text-gray-600">Loading banks...</p>
        </div>
      ) : (
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xl font-extrabold text-red-600">ITAN</span>
            <p className="text-sm font-semibold text-gray-700">2/3</p>
          </div>

          {/* Title */}
          <h2 className="mb-1 text-center text-lg font-semibold text-gray-800">
            Update Account Details
          </h2>
          <p className="mb-6 text-center text-sm text-gray-500">
            Add an account to receive your revenue streams
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Bank Name */}
            <div>
              <label
                htmlFor="bankName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Bank Name
              </label>
              <select
                id="bankName"
                value={bankCode}
                onChange={(e) => {
                  setBankCode(e.target.value);
                  setVerifiedAccountName("");
                  setVerificationError("");
                  setAccountName("");
                  setMessage("");
                  setError("");
                }}
                required
                className="w-full rounded-md border border-red-600 bg-gray-100 px-4 py-2 text-sm text-gray-800 focus:outline-none"
              >
                <option value="" disabled>
                  Enter bank name… e.g GTBank, Zenith Bank, etc.
                </option>
                {banks.map((bank) => (
                  <option key={bank.name} value={bank.code}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Account Number */}
            <div>
              <label
                htmlFor="accountNumber"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Account Number
              </label>
              <input
                id="accountNumber"
                type="tel"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setAccountNumber(value.slice(0, 10));
                  setVerifiedAccountName("");
                  setVerificationError("");
                  setMessage("");
                  setError("");
                }}
                maxLength={10}
                required
                className="w-full rounded-md border border-red-600 bg-gray-100 px-4 py-2 text-sm text-gray-800 placeholder:text-gray-500 focus:outline-none"
              />
              {accountNumber.length > 0 && accountNumber.length < 10 && (
                <p className="mt-1 text-sm text-gray-500">
                  Account number must be 10 digits.
                </p>
              )}
              {verifying && (
                <p className="mt-1 text-sm text-blue-600">
                  Verifying account name...
                </p>
              )}
              {verificationError && (
                <p className="mt-1 text-sm text-red-600">{verificationError}</p>
              )}
              {/* {verifiedAccountName && !verificationError && (
                <p className="mt-1 text-sm text-green-600">
                  Verified Name:{" "}
                  <span className="font-semibold">{verifiedAccountName}</span>
                </p>
              )} */}
            </div>

            {/* Full Name */}
            {verifiedAccountName && !verificationError && ( <div>
              <label
                htmlFor="accountName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                readOnly
                id="accountName"
                type="text"
                placeholder="Name appears as on the bank account name"
                value={accountName}
                onChange={(e) => {
                  setAccountName(e.target.value);
                  setMessage("");
                  setError("");
                }}
                required
                className="w-full rounded-md border text-green-600 font-bold border-red-600 bg-gray-100 px-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            )}

            {/* Feedback */}
            {error && <p className="text-sm text-red-600">{error}</p>}
            {!error && message && (
              <p className="text-sm text-green-600">{message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={disableSubmit}
              className={`w-full rounded-md py-3 text-center font-medium text-white ${
                disableSubmit
                  ? "bg-gray-400 cursor-not-allowed opacity-70"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {submitting ? "Saving…" : verifying ? "Verifying…" : "Next"}
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
