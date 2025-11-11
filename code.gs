function filterFYPEmails() {
  // Create or get the label
  var labelName = "FYP Surveys";
  var label = GmailApp.getUserLabelByName(labelName);
  if (!label) {
    label = GmailApp.createLabel(labelName);
  }
  
  // Comprehensive search for survey-related emails from students
  var searchQueries = [
    'from:@iit.ac.lk (survey OR "your feedback" OR "your input" OR "help us" OR "research project" OR "final year" OR "participation" OR "quick survey" OR "take a few minutes" OR "fill it out" OR "help shape" OR "spare a minute" OR "would appreciate" OR "your responses" OR "complete the survey" OR "usability study" OR "academic survey" OR "research survey" OR "invitation to" OR "request for participation" OR "opinion matters" OR "make a difference" OR "your valuable" OR "short survey" OR "brief survey")'
  ];
  
  searchQueries.forEach(function(query) {
    var threads = GmailApp.search('in:inbox ' + query, 0, 50);
    
    threads.forEach(function(thread) {
      var messages = thread.getMessages();
      var isFromStudent = false;
      var senderEmail = '';
      
      // Check if sender is a student (has 8-digit ID starting with 20)
      messages.forEach(function(message) {
        senderEmail = message.getFrom().toLowerCase();
        // Regex: matches emails like firstname.20234069@iit.ac.lk (exactly 8 digits starting with 20)
        // Will NOT match staff emails like john.d@iit.ac.lk
        if (senderEmail.match(/\.20\d{6}@iit\.ac\.lk/)) {
          isFromStudent = true;
        }
      });
      
      // Only move if it's from a student
      if (isFromStudent) {
        thread.addLabel(label);
        thread.markRead(); 
        thread.moveToArchive();
        Logger.log('✓ Moved (student survey): ' + thread.getFirstMessageSubject());
      } else {
        Logger.log('✗ Skipped (staff/other): ' + thread.getFirstMessageSubject() + ' from ' + senderEmail);
      }
    });
  });
}