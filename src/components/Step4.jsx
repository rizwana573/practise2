const Step4 = ({ formData, setFormData, errors }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Fund Your Account</h2>

      <input
        type="number"
        min="1"
        className="border p-2 w-full rounded"
        placeholder="Enter amount"
        value={formData.amount}
        onChange={e =>
          setFormData({
            ...formData,
            amount: e.target.value
          })
        }
      />

      {errors.amount && (
        <p className="text-red-500 mt-2">{errors.amount}</p>
      )}
    </>
  );
};

export default Step4;
