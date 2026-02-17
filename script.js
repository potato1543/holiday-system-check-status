const statuses = [
  "🟢 OFFLINE — PTO approved. Enjoy your peace.",
  "🟡 ON CALL — Monitoring emails emotionally.",
  "🔴 ONLINE — Tickets already open. Send help.",
  "⚠️ CRITICAL ALERT — Production issue at 9:02am."
];

function runCheck() {
  const holiday = document.getElementById("holidaySelect").value;
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  document.getElementById("holidayTitle").textContent =
    holiday + " System Check";

  document.getElementById("output").textContent = randomStatus;
}
