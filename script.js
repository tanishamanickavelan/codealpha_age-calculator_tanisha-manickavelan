document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const result = calculateAge(dob);
    document.getElementById('result').innerText = `Your age is ${result} years.`;
});

function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}
