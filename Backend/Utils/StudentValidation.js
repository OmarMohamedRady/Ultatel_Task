const Ajv = require("ajv");
const ajv = new Ajv();

ajv.addFormat("date", {
  type: "string",
  validate: function (data) {
    // Custom date format validation logic
    return /\d{4}-\d{2}-\d{2}/.test(data);
  },
});

const StudentSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 3,
      maxLength: 20,
      pattern: "^[a-zA-Z]+$",
    },
    lastName: {
      type: "string",
      minLength: 3,
      maxLength: 20,
      pattern: "^[a-zA-Z]+$",
    },
    email: {
      type: "string",
      pattern: "^[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+(.com){1}$",
      //   pattern: "^[w-]+(.[w-]+)*@([w-]+.)+[a-zA-Z]{2,7}$",
      //   format: "email",
    },
    birthDate: { type: "string", format: "date" },
    gender: { type: "string", enum: ["male", "female"] },
    country: { type: "string" },
  },
  required: [
    "firstName",
    "lastName",
    "email",
    "birthDate",
    "gender",
    "country",
  ],
  additionalProperties: false,
};
module.exports = ajv.compile(StudentSchema);
