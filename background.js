chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed or reloaded.");

  // Define rules to block third-party resources
  try {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: 1001,  // Unique ID for this rule
          action: { type: 'block' },
          condition: {
            urlFilter: "*://*/*",  // Apply to all URLs
            resourceTypes: ["script", "image", "sub_frame", "font"]  // Block script, image, subframe, and font
          }
        },
        {
          id: 1002,  // Another unique ID for the next rule (if needed)
          action: { type: 'block' },
          condition: {
            urlFilter: "*://*/*",  // Apply to all URLs
            resourceTypes: ["xmlhttprequest"]  // Block XMLHttpRequests (optional)
          }
        }
      ],
      removeRuleIds: []  // You can specify rule IDs to remove (if needed)
    });
    console.log("Declarative rules set to block third-party resources.");
  } catch (err) {
    console.error("Error setting declarative rules:", err);
  }
});
