function toggleFAQ(element) {
    const section = element.closest('.faq-section');
    const answer = section.querySelector('.faq-answer');
    const iconPlus = section.querySelector('.icon-plus');
    const iconMinus = section.querySelector('.icon-minus');

    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        iconPlus.style.display = "none";
        iconMinus.style.display = "inline";
    } else {
        answer.style.display = "none";
        iconPlus.style.display = "inline";
        iconMinus.style.display = "none";
    }
}
