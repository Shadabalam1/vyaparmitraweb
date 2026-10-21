/**
 * Form submission handler supporting Web3Forms with graceful Netlify fallback.
 * 
 * To receive form submissions straight into your Gmail:
 * 1. Go to https://web3forms.com
 * 2. Enter your email (vyaparmitraapp@gmail.com)
 * 3. Copy the access key and paste it into .env as:
 *    VITE_WEB3FORMS_ACCESS_KEY=your_key_here
 */

export async function submitContactForm(formData) {
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // 1. If Web3Forms Access Key is provided in .env, send via Web3Forms API
  if (web3Key && web3Key.trim() !== "") {
    const payload = {
      access_key: web3Key.trim(),
      subject: `New Enquiry from ${formData.name || "Vyapar Mitra Visitor"}`,
      from_name: "Vyapar Mitra Website",
      name: formData.name,
      contact_info: formData.contactInfo,
      business_type: formData.businessType,
      message: formData.message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (!result.success) {
      throw new Error(result.message || "Failed to submit to Web3Forms");
    }
    return result;
  }

  // 2. Netlify Forms fallback if .env key is not set yet
  const encode = (data) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...formData }),
  });

  return res;
}

export async function submitLaunchNotify(notifyInput) {
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (web3Key && web3Key.trim() !== "") {
    const payload = {
      access_key: web3Key.trim(),
      subject: "New Google Play Launch Alert Subscriber - Vyapar Mitra",
      from_name: "Vyapar Mitra Website",
      subscriber: notifyInput,
      message: `User ${notifyInput} requested notification when Vyapar Mitra launches on Google Play.`,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    return result;
  }

  const encode = (data) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "launch-notify", notifyInput }),
  });
}
