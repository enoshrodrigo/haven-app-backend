
const mongoose = require("mongoose");
const crypto = require("crypto");

// Define schema
const chatSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  encryptedHistory: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

// Encryption key from environment
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const IV_LENGTH = 16; // AES block size

// Encryption function
function encrypt(text) {
const iv = crypto.randomBytes(IV_LENGTH);
const cipher = crypto.createCipheriv(
  "aes-256-cbc",
  Buffer.from(ENCRYPTION_KEY),
  iv
);
let encrypted = cipher.update(text);
encrypted = Buffer.concat([encrypted, cipher.final()]);
return iv.toString("hex") + ":" + encrypted.toString("hex");
}

// Decryption function
function decrypt(text) {
const parts = text.split(":");
const iv = Buffer.from(parts.shift(), "hex");
const encryptedText = Buffer.from(parts.join(":"), "hex");
const decipher = crypto.createDecipheriv(
  "aes-256-cbc",
  Buffer.from(ENCRYPTION_KEY),
  iv
);
let decrypted = decipher.update(encryptedText);
decrypted = Buffer.concat([decrypted, decipher.final()]);
return decrypted.toString();
}

// Attach encryption methods
chatSchema.methods.encryptChat = encrypt;
chatSchema.methods.decryptChat = decrypt;

module.exports = mongoose.model("ChatHistory", chatSchema);
