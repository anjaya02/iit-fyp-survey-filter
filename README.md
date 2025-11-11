# IIT FYP Survey Email Filter 📧🔧

Automatically filter Final Year Project survey emails from IIT students, keeping your inbox clean and organized!

## 🎯 What It Does

This Google Apps Script automatically:

- ✅ Detects survey emails from IIT students (emails like `firstname.20######@iit.ac.lk`)
- ✅ Moves them to a dedicated "FYP Surveys" label
- ✅ Archives them from your inbox
- ❌ Ignores emails from lecturers and staff
- ❌ Ignores coursework, lectures, and official communications

## 🚀 Quick Start

### Prerequisites

- A Google account with IIT email access
- 5 minutes of setup time

### Installation

1. **Go to Google Apps Script**

   - Visit [script.google.com](https://script.google.com)
   - Click "New Project"

2. **Copy the Code**

   - Delete any placeholder code
   - Copy the entire content from [`code.gs`](./code.gs) in this repo
   - Paste it into the script editor

3. **Save the Project**

   - Click "Untitled project" at the top
   - Name it: `IIT FYP Filter`
   - Press `Ctrl + S` (or `Cmd + S` on Mac)

4. **Test the Script**

   - Select `filterFYPEmails` from the dropdown
   - Click the Run button (▶️)
   - **First run only:** Authorize the script
     - Click "Review Permissions"
     - Select your IIT account
     - Click "Advanced" → "Go to IIT FYP Filter (unsafe)" → "Allow"
   - Check Gmail - survey emails should be in "FYP Surveys" label!

5. **Set Up Automatic Running**
   - Click the clock icon (⏰) "Triggers" in the left sidebar
   - Click "+ Add Trigger"
   - Configure:
     - **Function:** `filterFYPEmails`
     - **Event source:** `Time-driven`
     - **Type:** `Minutes timer`
     - **Interval:** `Every 5 minutes` (recommended) or `Every hour`
   - Click "Save"

**Done!** 🎉 The script will now run automatically and keep filtering survey emails!

---

## 📋 What Gets Filtered

### ✅ Captured (moved to "FYP Surveys" label):

- Survey emails from students (`firstname.20######@iit.ac.lk`)
- Research project participation requests
- FYP questionnaires and feedback forms
- Academic research surveys

### ❌ Ignored (stays in inbox):

- Emails from lecturers/staff (`firstname.x@iit.ac.lk`)
- Course materials and lectures
- Submissions and coursework
- Official academic communications
- Administrative emails

---

## 🔍 How It Works

The script uses two filtering methods:

### 1. Keyword Detection

Searches for common survey-related phrases:

- "survey", "your feedback", "research project"
- "participation", "help us", "your input"
- "quick survey", "take a few minutes", "fill it out"
- "help shape", "spare a minute", "would appreciate"
- "your responses", "complete the survey", "usability study"
- "academic survey", "research survey", "invitation to"
- "request for participation", "opinion matters", "make a difference"
- "your valuable", "short survey", "brief survey"

### 2. Sender Verification

Uses regex pattern matching to identify student emails:

- **Pattern:** `\.20\d{6}@iit\.ac\.lk`
- **Matches:** `alex.20210279@iit.ac.lk` ✅
- **Ignores:** `john.d@iit.ac.lk` ❌

**Only emails matching BOTH criteria get filtered.**

---

## 🛠️ Customization

### Change the Label Name

Edit line 13 in `Code.gs`:

```javascript
var labelName = "FYP Surveys"; // Change to whatever you want
```

### Add More Keywords

Edit the `searchQueries` array (line 19) to add more detection patterns:

```javascript
'from:@iit.ac.lk (survey OR "your new keyword" OR "another phrase")';
```

### Change Run Frequency

In the Triggers settings, adjust the timer interval:

- **Every 5 minutes** (most responsive)
- **Every 10 minutes** (balanced)
- **Every hour** (lightest on resources)

---

## 🔒 Privacy & Security

- ✅ **No data collection**: Script runs entirely in your Google account
- ✅ **Open source**: All code is visible and auditable
- ✅ **No external servers**: No data leaves Google's infrastructure
- ✅ **Reversible**: Emails are archived, not deleted - easily recoverable
- ✅ **Revocable**: Remove permissions anytime from Google Account settings

### Permissions Required:

- **Gmail access**: To read email metadata and apply labels
- **Trigger management**: To run automatically on schedule

---

## 🐛 Troubleshooting

### Script not filtering emails?

1. Check if the trigger is active (clock icon in Apps Script)
2. View execution logs: Click "Executions" in the left sidebar
3. Verify your test email matches the student pattern (`firstname.20######@iit.ac.lk`)

### Getting authorization errors?

1. Go to [myaccount.google.com/permissions](https://myaccount.google.com/permissions)
2. Remove "IIT FYP Filter"
3. Re-run the script and re-authorize

### Want to stop filtering?

1. Go to Apps Script → Triggers (clock icon)
2. Click the three dots next to your trigger
3. Select "Delete trigger"

### Emails still coming to inbox?

- The script checks every 5 minutes (or your chosen interval)
- It only processes up to 50 emails per run
- If you have a backlog, it may take a few runs to catch up

---

## 📂 Repository Structure

```
iit-fyp-survey-filter/
├── Code.gs          # Main script file
└── README.md        # This file
```

---

---

## 🤝 Contributing

Contributions welcome! If you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions:

- Add support for other universities
- Create a web interface for configuration
- Add email templates for common survey responses
- Improve regex patterns for better accuracy

---

---

## 📧 Contact & Support

- **Issues**: Open an issue on GitHub
- **Questions**: Start a discussion in the Discussions tab

---

## 🙏 Acknowledgments

- Thanks to all IIT students who unknowingly inspired this project by flooding our inboxes! 😄

---

**Note:** This is an unofficial tool created by students for students. Not affiliated with IIT or University of Westminster.

**Disclaimer:** Use at your own discretion. While this script is designed to be safe and reversible, always review filtered emails periodically to ensure no important messages are missed.
