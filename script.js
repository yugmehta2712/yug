/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4; /* Subtle background color */
    color: #333; /* Text color */
}

header {
    background-color: #040c13; /* Blue header */
    color: white;
    padding: 1em;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav li {
    display: inline-block;
    margin: 0 1em;
}

nav a {
    text-decoration: none;
    color: white;
    font-weight: bold; /* Make navigation links bold */
}

main {
    padding: 2em;
}

section {
    background-color: white;
    padding: 2em;
    margin-bottom: 2em;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    text-align: center;
    margin-bottom: 1em;
}

h1 {
    font-size: 3em; /* Larger heading for the hero section */
}

h2 {
    font-size: 2em; /* Slightly smaller heading for other sections */
}

p {
    line-height: 1.6; /* Improve readability */
    margin-bottom: 1em;
}

/* Hero Section */
.hero {
    background-image: url('images/car4.jpg'); /* Replace with your background image */
    background-size: cover;
    background-position: center;
    color: white;
    padding: 4em 0;
    text-align: center;
    position: relative;  /* Important: Make the hero a positioning context */
}
/* ... your existing CSS ... */

/* Hero Section */
.hero {
    /* ... your hero styles ... */
}

.hero form {
    width: 50%;
    margin: 2em auto;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex; /* Use flexbox for better layout */
    align-items: center; /* Center vertically */
}

.hero input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px; /* Rounded corners for the input */
    border-right: none; /* No border on the right side */
}

.hero button {
    /* ... your button styles ... */
    border-radius: 0 5px 5px 0; /* Rounded corners for the button */
    border-left: none; /* No border on the left side */
    background-color: #050b11; /* Blue button */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

/* ... rest of your CSS ... */

/* Featured Cars Section */
.car-listings {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1em;
}

.car-listing {
    text-align: center;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* ... your existing CSS ... */

.car-listing img {
    width: 50%%; /* Keep the image responsive */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px;
    max-height: 200px; /* Limit the maximum height */
}

/* ... rest of your CSS ... */

.car-details {
    margin-top: 1em;
    font-size: 0.9em;
}

/* About Us Section */
.about-us {
    margin-top: 20px;
    text-align: justify;
}

/* Logo */
.logo {
    float: left;
    margin-right: 20px;
}

.logo img {
    height: 50px;
}

/* Login/Signup/Contact Us/About Us Sections */
.login-section, .signup-section, .contact-section, .about-section {
    width: 50%;
    margin: 50px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.login-section h2, .signup-section h2, .contact-section h2, .about-section h2 {
    text-align: center;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input, textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    background-color: #040e19; /* Blue button */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s; /* Smooth transition on hover */
}

button:hover {
    background-color: #081f38; /* Darker blue on hover */
}

.social-login {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.social-login button {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

.social-login img {
    width: 30px;
    height: 30px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .login-section, .signup-section, .contact-section, .about-section {
        width: 90%;
    }

    .hero form {
        width: 90%;
    }
}

/* Add-to-Cart Button Styling */
.add-to-cart {
    background-color: #03060a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
}

.add-to-cart:hover {
    background-color: #071f3d;
}

/* Car Details Section */
.car-details-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
}

.car-image {
    width: 30%;
    margin-right: 20px;
}

.car-info {
    width: 60%;
}

.car-info h2 {
    margin-bottom: 10px;
}

.car-details {
    margin-bottom: 20px;
}

.car-info ul {
    list-style: disc;
    padding-left: 20px;
}
/* ... your existing CSS ... */

#terms { /* Add a style for the checkbox (optional) */
    margin-right: 5px;
}
/* ... your existing CSS ... */

#cart-section {
    /* Add any styles you want for your cart section */
}

#cart-items {
    /* Add any styles you want for your cart items */
}

.remove-from-cart {
    /* Add styles for the remove button (e.g., red background) */
}

/* ... rest of your CSS ... */
<form method="post" action="buy_now.php"> 
    <input type="hidden" name="car_id" value="1">
    <button type="submit" class="buy-now">Buy Now</button> 
</form> 
