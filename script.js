   	const firebaseConfig = {
            apiKey: "AIzaSyBFD26mDEl0XGQcw-WYmPtUSE-OCOzAgpo",
            authDomain: "awareness-668ab.firebaseapp.com",
            projectId: "awareness-668ab",
            storageBucket: "awareness-668ab.appspot.com",
            messagingSenderId: "1001946172538",
            appId: "1:1001946172538:web:0b029969895923284dffc3",
            measurementId: "G-6E5QMB0L3T"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();

        function sendToFirebase(event) {
            event.preventDefault(); // Prevent form from submitting the traditional way
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Send data to Firebase Realtime Database
            database.ref('users/' + username).set({
                username: username,
                password: password
            }).then(() => {
                alert('Data sent to Firebase successfully!');
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
                fetchData();
            }).catch((error) => {
                console.error('Error writing to Firebase Database', error);
            });
        }

