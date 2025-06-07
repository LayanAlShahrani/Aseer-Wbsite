<?php
// Database configuration
$serverName = "LAPTOP-KPOA2L4A"; // Replace with your server name
$database = "AsirWebsite";       // Replace with your database name

try {
    // Create a PDO connection
    $dsn = "sqlsrv:Server=$serverName;Database=$database";
    $pdo = new PDO($dsn);

    // Set error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Check if the form is submitted via POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];

        // SQL query to insert data
        $sql = "INSERT INTO Messages (name, email, subject, message) VALUES (:name, :email, :subject, :message)";
        $stmt = $pdo->prepare($sql);

        // Bind parameters to prevent SQL injection
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':subject', $subject);
        $stmt->bindParam(':message', $message);

        // Execute the statement
        $stmt->execute();

        echo "Your message has been submitted successfully!";
    }
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// Close the connection
$pdo = null;
?>
