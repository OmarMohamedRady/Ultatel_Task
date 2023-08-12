const Ajv = require("ajv");
const ajv = new Ajv();

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
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
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
