document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cv = document.getElementById('cv').value;
    const skills = document.getElementById('skills').value;

    const userData = {
        name,
        email,
        phone,
        cv,
        skills
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Data saved successfully!');
    document.getElementById('userForm').reset();
});

document.getElementById('loadData').addEventListener('click', function () {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    
    if (savedData) {
        document.getElementById('result').innerHTML = `
            <h2>Saved Data</h2>
            <p><strong>Name:</strong> ${savedData.name}</p>
            <p><strong>Email:</strong> ${savedData.email}</p>
            <p><strong>Phone:</strong> ${savedData.phone}</p>
            <p><strong>CV Link:</strong> <a href="${savedData.cv}" target="_blank">${savedData.cv}</a></p>
            <p><strong>Skills:</strong> ${savedData.skills}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p>No saved data found.</p>';
    }
});
