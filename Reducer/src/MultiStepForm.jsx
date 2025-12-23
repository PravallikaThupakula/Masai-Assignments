import React, { useReducer } from "react";

/* ---------- Initial State ---------- */
const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  isSubmitted: false,
};

/* ---------- Reducer ---------- */
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

/* ---------- Component ---------- */
const MultiStepForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { step, formData, isSubmitted } = state;

  /* ---------- Step UI ---------- */
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h3>Step 1: Personal Details</h3>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "name",
                  value: e.target.value,
                })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "email",
                  value: e.target.value,
                })
              }
            />
            <button
              disabled={!formData.name || !formData.email}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </>
        );

      case 2:
        return (
          <>
            <h3>Step 2: Account Details</h3>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "username",
                  value: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "password",
                  value: e.target.value,
                })
              }
            />
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button
              disabled={!formData.username || !formData.password}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </>
        );

      case 3:
        return (
          <>
            <h3>Step 3: Review & Submit</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Username:</strong> {formData.username}</p>

            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
              Submit
            </button>
          </>
        );

      default:
        return null;
    }
  };

  /* ---------- Submission UI ---------- */
  if (isSubmitted) {
    return (
      <div>
        <h2>✅ Registration Successful!</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Register Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>Multi-Step Registration</h2>
      <p>Step {step} of 3</p>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
