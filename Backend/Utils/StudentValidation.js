const Ajv = require("ajv");
const ajv = new Ajv();

ajv.addFormat("date", {
  type: "string",
  validate: function (data) {
    // Custom date format validation logic
    return /\d{4}-\d{2}-\d{2}/.test(data);
  },
});
ajv.addFormat("timestamp", /^[1-9]\d*$/);

const StudentSchema = {
  type: "object",
  properties: {
    FirstName: {
      type: "string",
      minLength: 3,
      maxLength: 20,
      pattern: "^[a-zA-Z]+$",
    },
    LastName: {
      type: "string",
      minLength: 3,
      maxLength: 20,
      pattern: "^[a-zA-Z]+$",
    },
    Email: {
      type: "string",
      pattern: "^[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+(.com){1}$",
      //   pattern: "^[w-]+(.[w-]+)*@([w-]+.)+[a-zA-Z]{2,7}$",
      //   format: "email",
    },
    BirthDate: {
      type: "object",
      properties: {
        year: { type: "number" },
        month: { type: "number" },
        day: { type: "number" },
      },
    },
    Gender: { type: "string", enum: ["male", "female"] },
    Country: { type: "string" },
  },
  required: [
    "FirstName",
    "LastName",
    "Email",
    "BirthDate",
    "Gender",
    "Country",
  ],
  additionalProperties: false,
};
module.exports = ajv.compile(StudentSchema);
