import emailjs from "@emailjs/browser";

const handleSendEmail = async (Email: string) => {

  if (!Email) {
    alert("Please enter a valid email.");
    return;
  }

  const templateParams = {
    user_email: Email,

    signup_url:
      `http://localhost:5173/signup?email=${encodeURIComponent(Email)}`,
  };

  try {

    const response = await emailjs.send(
      "service_7osq0k9",
      "template_ws7ciyb",
      templateParams,
      "apLAsqHVndwA4W1O-"
    );

    console.log(response);

    alert("Email sent successfully!");

  } catch (error) {

    console.error(error);

    alert("Failed to send email.");
  }
};

export default handleSendEmail;