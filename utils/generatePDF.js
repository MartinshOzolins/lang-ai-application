// PDF generator
import jsPDF from "jspdf";

export function generatePDF(shouldIncludeAnswers, tasks) {
  const pdf = new jsPDF({ orientation: "p", format: "a4", unit: "mm" });
  pdf.setFontSize(11);

  // 1st page with sentences
  let pageOneY = 20;
  tasks.forEach((task, index) => {
    pdf.text(`${index + 1}. ${task.sentence}`, 5, pageOneY);
    pageOneY += 20;
  });

  // if clicked "download with answers" includes second page as well
  if (shouldIncludeAnswers === true) {
    // 2nd page with answers
    pdf.addPage({ format: "a4", orientation: "p", unit: "mm" });
    let pageTwoY = 20;
    tasks.forEach((task, index) => {
      pdf.text(`${index + 1}. ${task.answer}`, 5, pageTwoY);
      pageTwoY += 20;
    });
  }

  pdf.save("tasks");
}
