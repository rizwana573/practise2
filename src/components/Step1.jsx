const Step1 = ({ formData, setFormData, errors }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Account Application</h2>

      <div className="flex gap-4 flex-col">
        <div>
          <input
            className="border p-2 w-full rounded"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        <div>
          <select
            className="border p-2 w-full rounded"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          >
            <option value="">Select country</option>
            <option value="IN">India</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && (
            <span className="text-red-500">{errors.country}</span>
          )}
        </div>

        <div>
          <input
            className="border p-2 w-full rounded"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, phone: digits });
            }}
          />
          {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        </div>

        <div>
          <input
            className="border p-2 w-full rounded"
            placeholder="Confirm phone number"
            value={formData.confirmNumber}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, confirmNumber: digits });
            }}
          />
          {errors.confirmNumber && (
            <span className="text-red-500">{errors.confirmNumber}</span>
          )}
        </div>

        <div>
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={formData.acceptLegal}
              onChange={(e) =>
                setFormData({ ...formData, acceptLegal: e.target.checked })
              }
            />
            Accept legal agreement
          </label>
          {errors.acceptLegal && (
            <span className="text-red-500">{errors.acceptLegal}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Step1;
