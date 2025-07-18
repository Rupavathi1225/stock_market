/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const axios = require("axios");

setGlobalOptions({ maxInstances: 10 });

/**
 * HTTP Test Function (optional)
 */
// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

/**
 * Firestore Trigger: Send Webhook to Make.com when new document is created
 */
exports.notifyMakeWebhook = onDocumentCreated("formSubmissions/{docId}", async (event) => {
  const data = event.data.data(); // The new Firestore document data

  const webhookUrl = "https://hook.us2.make.com/4yuw95631dmaf0ls5tnbafo12jwqmq7w"; // 🔁 Replace with your actual Make webhook URL

  try {
    await axios.post(webhookUrl, {
      name: data.name,
      email: data.email,
      message: data.message
    });

    console.log("✅ Webhook sent successfully to Make");
  } catch (error) {
    console.error("❌ Failed to send webhook:", error.message);
  }
});
