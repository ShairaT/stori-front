export const showAlert = (message, type) => {
    const alertElement = document.createElement("div");
    alertElement.textContent = message;
    
    if (type === "success") {
      alertElement.classList.add("success-alert");
    } else if (type === "error") {
      alertElement.classList.add("error-alert");
    }
}