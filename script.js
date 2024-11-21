const mailto = "./mail.php";

export const fetchToMail = async (e, form) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch(mailto, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      form.reset();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Ошибка:", error);
    return false;
  }
};

export const handleSubmit = async (e, form, setSubmitBtn, setFetchModal) => {
  const formData = fetchToMail(e, form);
  if (formData) {
    setSubmitBtn(true);
    setFetchModal("success");
    setTimeout(() => {
      setSubmitBtn(false);
      setFetchModal("move close");
    }, 4500);
  } else {
    setFetchModal("error");
    setTimeout(() => {
      setFetchModal("move close");
    }, 4500);
  }
};
