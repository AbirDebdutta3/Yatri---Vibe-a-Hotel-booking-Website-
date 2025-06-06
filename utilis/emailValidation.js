const validateEmail = (email) => {
//     ^                          // Start of string
// [a-zA-Z0-9._-]+            // Username part (e.g., john.doe123)
// @                          // The "@" symbol
// [a-zA-Z0-9.-]+             // Domain name (e.g., gmail, yatra-vibe, etc.)
// \.                         // A literal dot "."
// [a-zA-Z]{2,6}              // Top-level domain (TLD) like com, net, org (2 to 6 letters)
// $                          // End of string
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Check if email matches the regex pattern
    if (!emailRegex.test(email)) {
        return {
            isValid: false,
            message: "Please enter a valid email address (e.g., example@domain.com)"
        };
    }

    // Check for common disposable email domains
    const disposableDomains = [
        'tempmail.com',
        'throwawaymail.com',
        'mailinator.com',
        'guerrillamail.com',
        'sharklasers.com',
        'yopmail.com',
        'temp-mail.org',
        'fakeinbox.com',
        'tempinbox.com',
        'tempmail.net'
    ];

    const domain = email.split('@')[1].toLowerCase(); //This line takes the domain part of the email (i.e., the part after the @ symbol).
    if (disposableDomains.includes(domain)) {
        return {
            isValid: false,
            message: "Please use a valid email address. Disposable email addresses are not allowed."
        };
    }

    return {
        isValid: true,
        message: "Email is valid"
    };
};

module.exports = { validateEmail }; 