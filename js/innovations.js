$(document).ready(function() {
  console.log("Innovations page loaded!");

  // Handle message form submission
  $("#messageForm").on("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = $("#username").val();
    let msg = $("#message").val();

    // Append to list
    $("#messageList ul").append(
      `<li class="list-group-item"><strong>${name}:</strong> ${msg}</li>`
    );

    // Clear form
    $("#username").val("");
    $("#message").val("");
  });
});
