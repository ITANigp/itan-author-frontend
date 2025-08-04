const BankingDetailsCard = ({ bankingDetails }) => {
  const {
    bank_name,
    account_name,
    account_number,
    resolved_account_name,
    currency,
    verified_at,
  } = bankingDetails;

  // Function to format the date
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
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-3xl">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Account Information
          </h2>
          {verified_at && (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-500">Bank Name</p>
            <p className="mt-1 text-lg font-semibold">{bank_name}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-500">Account Name</p>
            <p className="mt-1 text-lg font-semibold">{account_name}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-500">Account Number</p>
            <p className="mt-1 text-lg font-semibold tracking-wide">
              {account_number}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-500">Currency</p>
            <p className="mt-1 text-lg font-semibold">{currency}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
            <p className="text-sm font-medium text-gray-500">
              Verification Status
            </p>
            <p className="mt-1 text-lg font-semibold">
              Verified on {formatDate(verified_at)}
            </p>
          </div>
        </div>

        {/* Optional: Add a note or footer */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500 text-center">
          <p>
            This information is used for processing payments to your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankingDetailsCard;
