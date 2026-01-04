const Step2 = ({ formData, setFormData, errors }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>

      <div className="flex gap-4 flex-col">
        <div>
          <input
            className="border p-2 w-full rounded"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName: e.target.value.replace(/[^a-zA-Z ]/g, ""),
              })
            }
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName}</span>
          )}
        </div>

        <div>
          <input
            className="border p-2 w-full rounded"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName: e.target.value.replace(/[^a-zA-Z ]/g, ""),
              })
            }
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName}</span>
          )}
        </div>

        <div>
          <input
            type="date"
            className="border p-2 w-full rounded"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
          {errors.dob && <span className="text-red-500">{errors.dob}</span>}
        </div>
      </div>
    </>
  );
};

export default Step2;
