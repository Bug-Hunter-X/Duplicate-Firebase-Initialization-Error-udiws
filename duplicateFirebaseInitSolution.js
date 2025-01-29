const firebaseConfig = {
  // ... your Firebase configuration
};

let app;

function initializeFirebase() {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
}

const firebaseApp = initializeFirebase();
// Use firebaseApp here