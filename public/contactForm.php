<?php	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$heardFrom = $_POST['heard'];
$subject = $_POST['subject'];

// Create the email and send the message
header("Location:http://mfey.ml/");
$to = 'mastaneh.f@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "You have email from MFey.ml website:  $name";
$email_body = "You have received a new message from your website contact form.
\n\n"."Here are the details:
\n\nName: $name
\n\nEmail: $email_address
\n\nSubject: $subject
\n\nHeard From: $heardFrom
\n\nMessage:\n$message";

$headers = "From: $email_address \n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;			
?>