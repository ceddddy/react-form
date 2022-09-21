import React from "react";

const Panic = () => {
  return (
    <div className="container">
      <h2>Panic Details</h2>
      <form action="/action_page.php">
        <div class="mb-3 mt-3">
          <label for="email" class="form-label">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="mb-3">
          <label for="pwd" class="form-label">
            Password:
          </label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Send Panic
        </button>
      </form>
    </div>
  );
};

export default Panic;
