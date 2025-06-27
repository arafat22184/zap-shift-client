import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaSpinner } from "react-icons/fa";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { isPending, data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <FaSpinner className="animate-spin text-primary text-3xl" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-2 sm:px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
          💳 Payment History
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="table table-zebra w-full min-w-[650px] text-xs sm:text-sm whitespace-nowrap">
            <thead className="bg-base-200 text-[11px] sm:text-xs uppercase font-semibold text-base-content">
              <tr>
                <th>#</th>
                <th>Parcel ID</th>
                <th>Transaction ID</th>
                <th>৳ Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Paid At</th>
              </tr>
            </thead>
            <tbody>
              {payments.length > 0 ? (
                payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <td>{index + 1}</td>
                    <td
                      className="truncate max-w-[100px]"
                      title={payment.parcelId}
                    >
                      {payment.parcelId}
                    </td>
                    <td className="text-[10px] text-blue-500 font-mono break-all">
                      {payment.transactionId}
                    </td>
                    <td>৳{payment.amount}</td>
                    <td>{payment.paymentMethod}</td>
                    <td>
                      <span
                        className={`badge badge-sm text-white ${
                          payment.status === "success"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="text-[10px] text-gray-600">
                      {new Date(payment.paid_at).toLocaleString("en-BD", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No payment history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
