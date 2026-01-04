const Step3 = ({ formData, setFormData, errors }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Signature</h2>

      <textarea
        className="border p-2 w-full rounded"
        placeholder="Type your full name as signature"
        value={formData.signature}
        onChange={e =>
          setFormData({ ...formData, signature: e.target.value.trim() })
        }
      />

      {errors.signature && (
        <span className="text-red-500">{errors.signature}</span>
      )}
    </>
  );
};

export default Step3;
