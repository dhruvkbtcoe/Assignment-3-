let highestPercentage = 0;

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    let name = document.getElementById('studentName').value;
    let rollNo = document.getElementById('rollNo').value;
    
    let math = parseFloat(document.getElementById('mathMarks').value);
    let science = parseFloat(document.getElementById('scienceMarks').value);
    let english = parseFloat(document.getElementById('englishMarks').value);

   
    
    let nameChecker = /^[a-zA-Z\s]+$/; 
    
   
    if (!nameChecker.test(name)) {
        alert("Invalid Name! Please do not use numbers or special characters.");
        return; 
    }

    if (rollNo <= 0) {
        alert("Roll Number must be greater than zero.");
        return; 
    }
   
    let totalMarks = math + science + english;
    let percentage = (totalMarks / 300) * 100;
    percentage = percentage.toFixed(2); 

   
    let tableBody = document.getElementById('tableBody');
    let newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${rollNo}</td>
        <td>${name}</td>
        <td>${math}</td>
        <td>${science}</td>
        <td>${english}</td>
        <td>${totalMarks}</td>
        <td>${percentage}%</td>
    `;

    tableBody.appendChild(newRow);

   
    if (percentage > highestPercentage) {
        highestPercentage = percentage; 
        
        document.getElementById('topperName').innerText = name;
        document.getElementById('topperScore').innerText = percentage;
    }

    
    document.getElementById('studentForm').reset();
});