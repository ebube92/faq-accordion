const buttons = document.querySelectorAll('button[id^="question-"]');

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answerId = btn.id.replace("question", "answer");
    const answer = document.getElementById(answerId).querySelector("p");
    const isClosed = answer.classList.contains("hidden");

    const iconMinus = btn.querySelectorAll("#icon-minus");
    const iconPlus = btn.querySelectorAll("#icon-plus");

    console.log("Button clicked:", btn.id);
    console.log("Answer ID:", answerId);
    console.log("Is answer closed?", isClosed);

    if (isClosed) {
      answer.classList.remove("hidden");
      answer.classList.add("block");
      answer.classList.replace("opacity-0", "opacity-100", 600);
      iconMinus.forEach((icon) => icon.classList.remove("hidden"));
      iconPlus.forEach((icon) => icon.classList.add("hidden"));
    } else {
      answer.classList.add("hidden");
      answer.classList.remove("block");
      answer.classList.replace("opacity-100", "opacity-0", 600);
      iconMinus.forEach((icon) => icon.classList.add("hidden"));
      iconPlus.forEach((icon) => icon.classList.remove("hidden"));
    }
  });
});
