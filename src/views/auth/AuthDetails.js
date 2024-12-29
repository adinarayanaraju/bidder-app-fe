import React from "react";

export default function AuthDetails({ formType }) {
  const signUpText = `Create an account to dive into the world of auctions and unveil hidden
          treasures. As a member of Bidbuyy, you'll gain exclusive access to bid
          on unique, one-of-a-kind items, from vintage gems to intriguing
          antiques. Don't miss out on the excitement – sign up now and embark on
          a journey where every bid is a step closer to uncovering extraordinary
          finds! Join the auction adventure today!`;
  const signInText = `
          "Welcome back! We're thrilled to see you again. Log in to Bidbuyy and resume your journey into the world of exclusive auctions. Your next winning bid could be just a click away. Happy bidding!"
          `;
  return (
    <div className="auth-detail-wrapper">
      <div className="heading">
        {formType === "signin" ? "Welcome back!" : "Create Account"}
      </div>
      <div className="content">
        <p>{formType === "signin" ? signInText : signUpText}</p>
      </div>
      <div className="link">
        {formType === "signin" ? (
          <>
            <p>Don't have an account?</p>
            <a href="">Signup here</a>
          </>
        ) : (
          <>
            <p>Already have an account?</p>
            <a href="">Signin here</a>
          </>
        )}
      </div>
    </div>
  );
}
