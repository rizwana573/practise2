const Step5 = ({ formData, setFormData }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">
        Online Banking Enrollment
      </h2>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={formData.enrollOnline}
          onChange={e =>
            setFormData({
              ...formData,
              enrollOnline: e.target.checked
            })
          }
        />
        <span>Enroll me in online banking</span>
      </label>

      <p className="text-sm text-gray-500 mt-4">
        You can enroll later as well.
      </p>
    </>
  );
};

export default Step5;
