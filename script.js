document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dobInput = document.getElementById("dob").value;
  const resultDiv = document.getElementById("result");

  if (!dobInput) {
    resultDiv.textContent = "Please enter a valid date.";
    return;
  }

  const birthDate = new Date(dobInput);
  const today = new Date();

  if (birthDate > today) {
    resultDiv.textContent = "Date of Birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});
